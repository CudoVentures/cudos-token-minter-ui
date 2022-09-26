import { BigNumber } from "bignumber.js"
import { Coin } from "cudosjs"
import { connectLedgerByType, queryClient } from "./config"
import { CHAIN_DETAILS, NATIVE_TOKEN_DENOM } from "./constants"
import { isValidCudosAddress } from "./validation"

export const getConnectedUserAddressAndName = async (ledgerType: string): Promise<{ address: string; accountName: string; }> => {

    const { address, accountName } = await connectLedgerByType(ledgerType)

    if (!isValidCudosAddress(address)) {
        throw new Error("Invalid ledger");
    }

    return { address: address, accountName: accountName }
}

export const getNativeBalance = (balances: readonly Coin[]): string => {
    let nativeBalance = '0'
    balances.map((balance) => {
        if (balance.denom === NATIVE_TOKEN_DENOM && new BigNumber(balance.amount).gt(0)) {
            nativeBalance = balance.amount
        }
    })
    return nativeBalance
}

export const getAccountBalances = async (accountAddress: string): Promise<readonly Coin[]> => {
    return (await queryClient).getAllBalances(accountAddress)
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

    const ID = chainID.toLowerCase()
  
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
