import { StargateClient } from "cudosjs"
import { connectCosmostationLedger } from "ledgers/CosmostationLedger"
import { connectKeplrLedger } from "ledgers/KeplrLedger"
import { userState } from "store/user"
import { LEDGERS, RPC_ADDRESS } from "./constants"
import { getAccountBalances, getConnectedUserAddressAndName, getNativeBalance } from "./helpers"

export const queryClient = (async (): Promise<StargateClient> => {
    const client = await StargateClient.connect(RPC_ADDRESS)
    return client
})()

export const connectUser = async (ledgerType: string): Promise<userState> => {

    const { address, accountName } = await getConnectedUserAddressAndName(ledgerType)
    const currentBalances = await getAccountBalances(address)
    const userBalance = getNativeBalance(currentBalances)

    const connectedUser: userState = {
        accountName: accountName,
        address: address,
        balances: currentBalances,
        nativeBalance: userBalance,
        connectedLedger: ledgerType,
    }

    return connectedUser
}

export const connectLedgerByType = async (ledgerType: string) => {

    if (ledgerType === LEDGERS.KEPLR) {
        return connectKeplrLedger()
    }

    if (ledgerType === LEDGERS.COSMOSTATION) {
        return connectCosmostationLedger()
    }

    return { address: '', accountName: '' }
}
