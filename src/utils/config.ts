import { OfflineSigner, StargateClient, SigningCosmWasmClient } from "cudosjs"
import { connectCosmostationLedger } from "ledgers/CosmostationLedger"
import { getOfflineSigner as cosmostationSigner } from "@cosmostation/cosmos-client"
import { connectKeplrLedger } from "ledgers/KeplrLedger"
import { userState } from "store/user"
import { CHAIN_DETAILS, LEDGERS } from "./constants"
import { CW20Token } from "@cosmostation/extension-client/types/message"
import { cosmos } from "@cosmostation/extension-client"

import {
    checkForAdminToken,
    getAccountBalances,
    getConnectedUserAddressAndName,
    getNativeBalance
} from "./helpers"

export const getOfflineSignerByType = async (ledgerType: string, chosenNetwork: string): Promise<OfflineSigner | undefined> => {

    if (ledgerType === LEDGERS.KEPLR) {
        return window.keplr?.getOfflineSigner(CHAIN_DETAILS.CHAIN_ID[chosenNetwork])
    }

    if (ledgerType === LEDGERS.COSMOSTATION) {
        return cosmostationSigner(CHAIN_DETAILS.CHAIN_ID[chosenNetwork])
    }

    return undefined
}

//TODO: To be tested against actual CW20 deployed contract addresses for both wallets
export const addTokenByLedgerType = async (addToWalletObject: CW20.AddToWalletObject) => {

    if (addToWalletObject.connectedLedger === LEDGERS.KEPLR) {

        window.keplr?.suggestToken(
            addToWalletObject.chainId,
            addToWalletObject.contractAddress
        )
        return
    }

    if (addToWalletObject.connectedLedger === LEDGERS.COSMOSTATION) {

        const tokenToAdd: CW20Token[] = [{
            contractAddress: addToWalletObject.contractAddress,
            imageURL: addToWalletObject.tokenobject.logoUrl
        }]

        const provider = await cosmos()
        await provider.addCW20Tokens(addToWalletObject.chainName, tokenToAdd)
    }
}

export const getSigningCosmWasmClient = async (ledgerType: string, chosenNetwork: string): Promise<SigningCosmWasmClient> => {

    const offlineSigner = await getOfflineSignerByType(ledgerType, chosenNetwork)

    if (window.keplr) {
        window.keplr.defaultOptions = {
            sign: {
                preferNoSetFee: true,
            },
        }
    }

    if (!offlineSigner) {
        throw new Error("Invalid signing client");
    }

    return SigningCosmWasmClient.connectWithSigner(CHAIN_DETAILS.RPC_ADDRESS[chosenNetwork!], offlineSigner)
}

export const getQueryClient = async (chosenNetwork: string): Promise<StargateClient> => {
    const client = await StargateClient.connect(CHAIN_DETAILS.RPC_ADDRESS[chosenNetwork!])
    return client
}

export const connectUser = async (chosenNetwork: string, ledgerType: string): Promise<userState> => {

    const { address, accountName } = await getConnectedUserAddressAndName(chosenNetwork, ledgerType)
    const currentBalances = await getAccountBalances(chosenNetwork, address)
    const isAdmin = checkForAdminToken(currentBalances)
    const userNativeBalance = getNativeBalance(currentBalances)

    const connectedUser: userState = {
        accountName: accountName,
        address: address,
        isAdmin: isAdmin,
        balances: currentBalances,
        nativeBalance: userNativeBalance,
        connectedLedger: ledgerType,
        chosenNetwork: chosenNetwork,
        chosenBalance: { denom: CHAIN_DETAILS.NATIVE_TOKEN_DENOM, amount: userNativeBalance }
    }

    return connectedUser
}

export const connectLedgerByType = async (chosenNetwork: string, ledgerType: string) => {

    if (ledgerType === LEDGERS.KEPLR) {
        return connectKeplrLedger(chosenNetwork)
    }

    if (ledgerType === LEDGERS.COSMOSTATION) {
        return connectCosmostationLedger(chosenNetwork)
    }

    return { address: '', accountName: '' }
}
