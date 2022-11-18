import { EncodeObject } from "cudosjs"
import { useSelector } from "react-redux"
import { RootState } from "store"
import { getSigningCosmWasmClient } from "utils/config"
import { useCallback } from "react"
import { emptyEncodeObject, TOKEN_ACTION, TOKEN_TYPE } from "components/TokenDetails/helpers"
import { ContractMsgUploadLogo } from "cudosjs/build/cosmwasm-stargate/modules/cw20/contract-messages"
import { CW20 } from "types/CW20"
import { getInstantiateCodeId, getSanitizedTokenObject } from "utils/helpers"
import useGenerateInstantiateMsg from "./useGenerateInstantiateMsg"

const useGenerateMsgHandler = () => {

    const generateInstantiateMsg = useGenerateInstantiateMsg()
    const { selectedAsset } = useSelector((state: RootState) => state.assetsState)
    const { address, connectedLedger, chosenNetwork } = useSelector((state: RootState) => state.userState)

    const generateMsgHandler = useCallback(async (
        type: TOKEN_ACTION,
        handlerSpecificData?: any
    ): Promise<EncodeObject> => {

        const client = await getSigningCosmWasmClient(connectedLedger!, chosenNetwork!)
        let tempMsg: EncodeObject = emptyEncodeObject

        // INSTANIATE
        if (type === TOKEN_ACTION.Instantiate) {

            const tokenType = handlerSpecificData.tokenType as TOKEN_TYPE
            const tokenObject = getSanitizedTokenObject(handlerSpecificData.tokenObject as CW20.TokenObject)
            const instantiateMsg = generateInstantiateMsg(tokenType, tokenObject)
            const contractCodeId = getInstantiateCodeId(chosenNetwork!)

            tempMsg = client.Cw20Module.msgInstantiate(
                address!,
                contractCodeId,
                instantiateMsg!
            )
        }

        // EDIT LOGO
        if (type === TOKEN_ACTION.EditLogo) {
            tempMsg = client.Cw20Module.msgUploadLogo(
                address!,
                selectedAsset?.contractAddress!,
                handlerSpecificData as ContractMsgUploadLogo
            )
        }

        // TRANSFER
        if (type === TOKEN_ACTION.Transfer) {
            tempMsg = client.Cw20Module.msgTransfer(
                address!,
                selectedAsset?.contractAddress!,
                {
                    transfer: {
                        recipient: handlerSpecificData.recipient!,
                        amount: handlerSpecificData.value!
                    }
                }
            )
        }

        // INCREASE ALLOWANCE
        if (type === TOKEN_ACTION.IncreaseAllowance) {
            tempMsg = client.Cw20Module.msgIncreaseAllowance(
                address!,
                selectedAsset?.contractAddress!,
                {
                    increase_allowance: {
                        spender: handlerSpecificData.recipient!,
                        amount: handlerSpecificData.value!,
                        expires: undefined
                    }
                }
            )
        }

        // DECREASE ALLOWANCE
        if (type === TOKEN_ACTION.DecreaseAllowance) {
            tempMsg = client.Cw20Module.msgDecreaseAllowance(
                address!,
                selectedAsset?.contractAddress!,
                {
                    decrease_allowance: {
                        spender: handlerSpecificData.recipient!,
                        amount: handlerSpecificData.value!,
                        expires: undefined
                    }
                }
            )
        }

        // MINT
        if (type === TOKEN_ACTION.Mint) {
            tempMsg = client.Cw20Module.msgMint(
                address!,
                selectedAsset?.contractAddress!,
                {
                    mint: {
                        recipient: address!,
                        amount: handlerSpecificData.value!
                    }
                }
            )
        }

        // BURN
        if (type === TOKEN_ACTION.Burn) {
            tempMsg = client.Cw20Module.msgBurn(
                address!,
                selectedAsset?.contractAddress!,
                {
                    burn: {
                        amount: handlerSpecificData.value!
                    }
                }
            )
        }

        return tempMsg

        //eslint-disable-next-line
    }, [])

    return generateMsgHandler
}

export default useGenerateMsgHandler
