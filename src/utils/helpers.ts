import { BigNumber } from "bignumber.js"
import { Coin, DeliverTxResponse, EncodeObject, StdFee } from "cudosjs"
import { connectLedgerByType, getQueryClient, getSigningCosmWasmClient } from "./config"
import { CHAIN_DETAILS, PREAPPROVED_CODE_IDS } from "./constants"
import { isValidCudosAddress } from "./validation"
import { TOKEN_TYPE } from "components/TokenDetails/helpers"
import { separateDecimals, separateFractions, setDecimalPrecisionTo } from "./regexFormatting"
import { CW20 } from "types/CW20"
import { AssetsView } from "store/assetsNavigation"

export const isViewingMyAssets = (view: AssetsView) => {
  return view === AssetsView.MyAssets ||
    view === AssetsView.Others ||
    view === AssetsView.Owned
}

//Imporving UX at certain screen transitions
export const delay = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const getInstantiateCodeId = (chosenNetwork: string,): number => {
  return PREAPPROVED_CODE_IDS.NETWORK[chosenNetwork].at(-1) || 0
}

export const getSanitizedTokenType = (fetchedType: string): TOKEN_TYPE => {

  for (const [predefinedType] of Object.entries(TOKEN_TYPE)) {
    if ((predefinedType.toLowerCase() as string) === fetchedType.toLowerCase()) {
      return TOKEN_TYPE[predefinedType]
    }
  }

  return TOKEN_TYPE.Undefined
}

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

  const precision = oldObject.decimalPrecision || 0

  return {
    ...oldObject,
    name: oldObject.name?.trim(),
    initialSupply: addPrecision(sanitizeString(oldObject.initialSupply!), precision),
    totalSupply: addPrecision(sanitizeString(oldObject.totalSupply!), precision)
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

export const handleAvailableNetworks = (defaultNetwork: string): networkToDisplay[] => {

  if (
    CHAIN_DETAILS[defaultNetwork].ALIAS_NAME ===
    CHAIN_DETAILS.LOCAL.ALIAS_NAME
  ) {
    return [CHAIN_DETAILS.LOCAL]
  }

  if (
    CHAIN_DETAILS[defaultNetwork].ALIAS_NAME ===
    CHAIN_DETAILS.PRIVATE.ALIAS_NAME
  ) {
    return [CHAIN_DETAILS.PRIVATE]
  }

  return [CHAIN_DETAILS.PUBLIC, CHAIN_DETAILS.MAINNET]
}

export const isKeplrInstalled = () => {
  return window.keplr?.enable?.length! > 0
}

export const isCosmostationInstalled = () => {
  if (window.cosmostation) {
    return true
  }

  return false
}
