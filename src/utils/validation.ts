import { bech32 } from "bech32"
import { getExtension, getSanitizedTokenObject } from "./helpers"
import reactImageSize from 'react-image-size'
import { TEXT, TOKEN_TYPE } from "components/TokenDetails/helpers"
import { CHAIN_DETAILS, RESOLUTIONS } from "./constants"
import { CW20 } from "types/CW20"
import BigNumber from "bignumber.js"

export const isValidCudosAddress = (addr: string) => {
  if (addr === '' || addr === undefined) return false
  try {
    const { prefix: decodedPrefix } = bech32.decode(addr)
    return decodedPrefix.toLowerCase() === CHAIN_DETAILS.CURRENCY_DISPLAY_NAME.toLowerCase()

  } catch {
    // invalid checksum
    return false
  }
}

export const isValidAmount = (amount: string) => {
  if (amount === '' || amount === undefined) return false
  const tempAmount = amount.replace(',', '.')
  const amountCheck = tempAmount.replace(/^(0|[1-9]\d*)(\.\d+)?(e-?(0|[1-9]\d*))?$/i, TEXT.OK)
  return amountCheck === TEXT.OK
}

export const isValidImgUrl = (url: string): boolean => {
  const SUPPORTED_FORMATS = ["png", "svg"]
  const extension = getExtension(url)
  const validExtension = SUPPORTED_FORMATS.some(e => e === extension)

  if (!validExtension || !url.toLowerCase().startsWith(TEXT.HTTPS_Prefix)) {
    return false
  }

  return true
}

export const isValidImgRes = async (url: string, maxResolution: MaxImgResolution): Promise<boolean> => {

  try {
    const { width, height } = await reactImageSize(url);

    if (width > maxResolution.width || height > maxResolution.height) {
      return false
    }

    return true

  } catch (error) {
    return false
  }
}


export const isOnlyLetters = (string: string): boolean => {
  return /^[A-Za-z\s]*$/.test(string)
}

export const isValidTokenObject = async (tokenObject: CW20.TokenObject, tokenType: string): Promise<[boolean, string]> => {

  let informativeError = ''
  let result = true
  const sanitizedTokenObject = getSanitizedTokenObject(tokenObject)

  for (const key in sanitizedTokenObject) {

    // totalSupply should not be checked for Unlimited token type
    if (tokenType === TOKEN_TYPE.Unlimited && key === 'totalSupply') {
      continue
    }

    // User should be able to use 0 as valid decimal precision
    if (key === 'decimalPrecision' && sanitizedTokenObject[key]! === 0) {
      continue
    }

    if (key === 'initialSupply') {

      if (new BigNumber(sanitizedTokenObject[key]!).isLessThanOrEqualTo(0)) {
        informativeError = `${key} should be positive number`
        result = false
        break
      }

    }

    if (key === 'logoUrl') {

      //Having an image URL is optional field
      if (!sanitizedTokenObject[key]) {
        continue
      }

      //But if URL is provided, it should be validated
      const { valid, error } = await isValidLogo(sanitizedTokenObject[key]!)
      informativeError = error
      result = valid
      break
    }

    // A mandatory field is missing
    if (!sanitizedTokenObject[key]) {
      informativeError = `${key} is missing`
      result = false
      break
    }

    // Only accept symbol between 3 and 5 chars
    if (key === 'symbol') {
      if (!isValidSymbol(sanitizedTokenObject[key]!)) {
        informativeError = `Symbol should be between 3 and 5 characters`
        result = false
        break
      }
    }

    // Only accept name between 3 and 50 chars
    if (key === 'name') {
      if (sanitizedTokenObject[key]!.length < 3 || sanitizedTokenObject[key]!.length > 50) {
        informativeError = `Name should be between 3 and 50 characters`
        result = false
        break
      }
    }

    if (tokenType === TOKEN_TYPE.Mintable) {
      if (new BigNumber(sanitizedTokenObject.initialSupply!)
        .isGreaterThan(
          new BigNumber(sanitizedTokenObject.totalSupply!))
      ) {
        informativeError = `Initial supply cannot be greater than total supply`
        result = false
        break
      }
    }

  }

  return [result, informativeError]
}

export const isValidSymbol = (value: string) => {
  if (value.length < 3 || value.length > 5) {
    return false
  }
  return true
}

export const isValidLogo = async (url: string): Promise<{ valid: boolean, error: string }> => {

  if (!isValidImgUrl(url)) {
    return { valid: false, error: TEXT.InvalidImgUrl }
  }

  const validRes = await isValidImgRes(
    url,
    {
      width: RESOLUTIONS.MAX_IMG.width,
      height: RESOLUTIONS.MAX_IMG.height
    }
  )

  if (!validRes) {
    return { valid: false, error: `${TEXT.InvalidImgSource} or ${TEXT.ResolutionExceedsLimit}` }
  }

  return { valid: true, error: '' }
}
