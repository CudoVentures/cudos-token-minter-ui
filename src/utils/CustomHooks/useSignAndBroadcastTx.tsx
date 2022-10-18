import { assertIsDeliverTxSuccess, StdFee } from "cudosjs"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store"
import { initialState, SuccessModalDataObject, updateModalState } from "store/modals"
import { CW20 } from "types/CW20"
import { MODAL_MSGS } from "utils/constants"
import { executeMsgs, getDisplayWorthyFee } from "utils/helpers"

const useSignAndBroadcast = () => {

    const {
        address,
        connectedLedger,
        chosenNetwork
    } = useSelector((state: RootState) => state.userState)

    const dispatch = useDispatch()

    const signAndBroadcast = useCallback(async (data: CW20.SignAndBroadcastMsgData) => {

        try {
            dispatch(updateModalState({
                loading: true,
                message: MODAL_MSGS.LOADING.MESSAGES.DEFAULT
            }))

            const result = await executeMsgs(address!, data.msgs, data.fees, connectedLedger!, chosenNetwork!)
            assertIsDeliverTxSuccess(result)

            const usedGas: StdFee = { amount: [], gas: result.gasUsed.toString() }
            const displayWorthyFee = getDisplayWorthyFee(usedGas, 5)

            const successModalDataObject:
                SuccessModalDataObject = {
                result: result,
                txFee: displayWorthyFee,
                msgTypeSpecificData: data.msgTypeSpecificData
            }

            dispatch(updateModalState({
                ...initialState,
                success: true,
                msgType: data.msgType,
                dataObject: successModalDataObject,
            }))

        } catch (error) {
            dispatch(updateModalState({
                loading: false,
                failure: true,
                title: MODAL_MSGS.ERRORS.TITLES.DEFAULT,
                message: MODAL_MSGS.ERRORS.MESSAGES.DEFAULT
            }))
            console.error((error as Error).message)
        }

        //eslint-disable-next-line
    }, [])

    return signAndBroadcast
}

export default useSignAndBroadcast
