import { BigNumber } from "bignumber.js"
import { Coin, DeliverTxResponse, EncodeObject, StdFee } from "cudosjs"
import { connectLedgerByType, getQueryClient, getSigningCosmWasmClient } from "./config"
import { CHAIN_DETAILS } from "./constants"
import { isValidCudosAddress } from "./validation"
import { DEFAULT_TOKEN_IMG_URL } from "components/TokenDetails/helpers"
import { separateDecimals, separateFractions, setDecimalPrecisionTo } from "./regexFormatting"
import { CW20 } from "types/CW20"

export const executeMsgs = async (
  signer: string,
  msgs: EncodeObject[],
  fee: StdFee,
  connectedLedger: string,
  chosenNetwork: string
):
  Promise<DeliverTxResponse> => {

  const client = await getSigningCosmWasmClient(connectedLedger, chosenNetwork)
  return client.signAndBroadcast(
    signer,
    msgs,
    fee,
    CHAIN_DETAILS.DEFAULT_MEMO
  )
}

export const getDisplayWorthyFee = (fees: StdFee, precision: number): string => {
  const feesAmount = fees.gas ? calculateFeeFromGas(fees.gas) : '0'
  const tempAmount = separateDecimals(separateFractions(feesAmount))
  const formatedAmount = setDecimalPrecisionTo(tempAmount, precision)
  return `${formatedAmount} ${CHAIN_DETAILS.CURRENCY_DISPLAY_NAME}`
}

export const calculateFeeFromGas = (gasAmount: number | string): string => {
  return new BigNumber(CHAIN_DETAILS.GAS_PRICE).multipliedBy(new BigNumber(gasAmount)).valueOf()
}

export const addPrecision = (amount: string, precision: number): string => {
  return `${amount}${"0".repeat(precision)}`
}

export const getSanitizedTokenObject = (oldObject: CW20.TokenObject): CW20.TokenObject => {

  return {
    ...oldObject,
    logoUrl: oldObject.logoUrl ? oldObject.logoUrl : DEFAULT_TOKEN_IMG_URL,
    initialSupply: addPrecision(sanitizeString(oldObject.initialSupply!), oldObject.decimalPrecision!),
    totalSupply: addPrecision(sanitizeString(oldObject.totalSupply!), oldObject.decimalPrecision!)
  }
}

export const sanitizeString = (string: string): string => {
  const sanitizedString = string
    .replaceAll(' ', '')
    .replaceAll('.', '')
    .replaceAll(',', '')

  return sanitizedString
}

export const getExtension = (filename: string): string => {
  return filename.substring(filename.lastIndexOf(".") + 1)
}

export const getConnectedUserAddressAndName = async (chosenNetwork: string, ledgerType: string): Promise<{ address: string; accountName: string; }> => {

  const { address, accountName } = await connectLedgerByType(chosenNetwork, ledgerType)

  if (!isValidCudosAddress(address)) {
    throw new Error("Invalid ledger");
  }

  return { address: address, accountName: accountName }
}

export const updateChosenBalance = (balances: readonly Coin[], chosenBalance: Coin): Coin => {
  let updatedBalance: Coin = { denom: '', amount: '0' }

  balances.forEach((newBalance) => {
    if (newBalance.denom === chosenBalance.denom) {
      updatedBalance = newBalance
    }
  })

  if (!updatedBalance.denom) {
    updatedBalance = {
      denom: CHAIN_DETAILS.NATIVE_TOKEN_DENOM,
      amount: getNativeBalance(balances)
    }
  }

  return updatedBalance
}

export const checkForAdminToken = (balances: readonly Coin[]): boolean => {
  let isAdmin: boolean = false
  balances.forEach((balance) => {
    if (balance.denom === CHAIN_DETAILS.ADMIN_TOKEN_DENOM && parseInt(balance.amount) > 0) {
      isAdmin = true
    }
  })
  return isAdmin
}

export const getNativeBalance = (balances: readonly Coin[]): string => {
  let nativeBalance = '0'
  balances.forEach((balance) => {
    if (balance.denom === CHAIN_DETAILS.NATIVE_TOKEN_DENOM && new BigNumber(balance.amount).gt(0)) {
      nativeBalance = balance.amount
    }
  })
  return nativeBalance
}

export const getAccountBalances = async (chosenNetwork: string, accountAddress: string): Promise<readonly Coin[]> => {
  const queryClient = await getQueryClient(chosenNetwork)
  return queryClient.getAllBalances(accountAddress)
}

export const formatAddress = (text: string, sliceIndex: number): string => {
  if (!text) { return '' }
  const len = text.length
  if (text === null || text.length < 10) {
    return text
  }
  return `${text.slice(0, sliceIndex)}...${text.slice(len - 4, len)}`
}

export const chainIDToAlias = (chainID: string): string => {

  const ID = chainID ? chainID.toLowerCase() : ''

  if (CHAIN_DETAILS.LOCAL.SHORT_NAMES.some(shortName => ID.includes(shortName))) {
    return CHAIN_DETAILS.LOCAL.ALIAS_NAME
  }

  if (CHAIN_DETAILS.PRIVATE.SHORT_NAMES.some(shortName => ID.includes(shortName))) {
    return CHAIN_DETAILS.PRIVATE.ALIAS_NAME
  }

  if (CHAIN_DETAILS.PUBLIC.SHORT_NAMES.some(shortName => ID.includes(shortName))) {
    return CHAIN_DETAILS.PUBLIC.ALIAS_NAME
  }

  if (CHAIN_DETAILS.MAINNET.SHORT_NAMES.some(shortName => ID.includes(shortName))) {
    return CHAIN_DETAILS.MAINNET.ALIAS_NAME
  }

  return "Unidentified Network"
}

export const handleAvailableNetworks = (defaultNetwork: string): networkToDisplay[] => {

  if (CHAIN_DETAILS.LOCAL.SHORT_NAMES.includes(defaultNetwork.toLowerCase())) {
    return [CHAIN_DETAILS.LOCAL]
  }

  if (CHAIN_DETAILS.PRIVATE.SHORT_NAMES.includes(defaultNetwork.toLowerCase())) {
    return [CHAIN_DETAILS.PRIVATE]
  }

  return [CHAIN_DETAILS.PUBLIC, CHAIN_DETAILS.MAINNET]
}
