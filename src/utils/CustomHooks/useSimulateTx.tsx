import { EncodeObject, GasPrice, StdFee } from "cudosjs"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store"
import { getSigningCosmWasmClient } from "utils/config"
import { estimateFee } from "cudosjs"
import { DEFAULT_GAS_MULTIPLIER } from "cudosjs"
import { CHAIN_DETAILS, MODAL_MSGS, TYPE_URLS } from "utils/constants"
import { useCallback } from "react"
import { updateModalState } from "store/modals"

const useSimulateTx = () => {

    const {
        address,
        connectedLedger,
        chosenNetwork
    } = useSelector((state: RootState) => state.userState)

    const dispatch = useDispatch()

    const gasPrice = GasPrice.fromString(CHAIN_DETAILS.GAS_PRICE + CHAIN_DETAILS.NATIVE_TOKEN_DENOM)
    const memo = CHAIN_DETAILS.DEFAULT_MEMO

    const simulateTx = useCallback(async (msgs: EncodeObject[]): Promise<StdFee | undefined> => {

        try {
            if (msgs[0]?.typeUrl === TYPE_URLS.MsgInstantiateContract) {
                dispatch(updateModalState({
                    loading: true,
                    loadingType: true
                }))
            }

            const client = await getSigningCosmWasmClient(connectedLedger!, chosenNetwork!)
            const fee = await estimateFee(
                client,
                address!,
                msgs,
                gasPrice,
                DEFAULT_GAS_MULTIPLIER,
                memo
            )

            dispatch(updateModalState({
                loading: false,
                loadingType: false
            }))

            if (!fee.gas) {
                throw new Error("Failed to simulate Tx");
            }

            return fee

        } catch (error) {
            if (msgs[0]?.typeUrl === TYPE_URLS.MsgInstantiateContract) {
                dispatch(updateModalState({
                    loading: false,
                    loadingType: false,
                    failure: true,
                    title: MODAL_MSGS.ERRORS.TITLES.DEFAULT,
                    message: MODAL_MSGS.ERRORS.MESSAGES.DEFAULT
                }))
                console.error((error as Error).message)
                return
            }

          throw error
        }

        //eslint-disable-next-line
    }, [])

    return simulateTx
}

export default useSimulateTx
