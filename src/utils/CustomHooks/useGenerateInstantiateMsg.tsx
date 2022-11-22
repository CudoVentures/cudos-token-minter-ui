import { TOKEN_TYPE } from "components/TokenDetails/helpers"
import { ContractMsgInstantiate } from "cudosjs/build/cosmwasm-stargate/modules/cw20/contract-messages"
import { useCallback } from "react"
import { useSelector } from "react-redux"
import { RootState } from "store"
import { CW20 } from "types/CW20"

interface BasicMsg {
    msg: Omit<ContractMsgInstantiate, 'token_type'>,
    extendedWith: (chosenType: Record<string, unknown>) => void
}

const useGenerateInstantiateMsg = () => {

    const { address } = useSelector((state: RootState) => state.userState)

    const generateInstantiateMsg = useCallback((
        tokenType: TOKEN_TYPE,
        tokenObject: CW20.TokenObject
    ): ContractMsgInstantiate | void => {

        const basicMsg: BasicMsg = {
            msg: {
                name: tokenObject.name!,
                symbol: tokenObject.symbol!,
                decimals: tokenObject.decimalPrecision!,
                initial_balances: [{
                    address: address!,
                    amount: tokenObject.initialSupply!
                }],
                marketing: {
                    logo: {
                        url: tokenObject.logoUrl!
                    }
                },
            },
            extendedWith(chosenType: Record<string, unknown>) {
                return {
                    ...this.msg,
                    token_type: chosenType
                }
            }
        }

        if (tokenType === TOKEN_TYPE.Standard) {
            return basicMsg.extendedWith({ standard: {} })
        }

        if (tokenType === TOKEN_TYPE.Burnable) {
            return basicMsg.extendedWith({ burnable: {} })
        }

        if (tokenType === TOKEN_TYPE.Mintable) {
            return basicMsg.extendedWith({
                mintable: {
                    minter: address!,
                    cap: tokenObject.totalSupply!
                }
            })
        }

        if (tokenType === TOKEN_TYPE.Unlimited) {
            return basicMsg.extendedWith({
                unlimited: {
                    minter: address!
                }
            })
        }

        return undefined

        //eslint-disable-next-line
    }, [])

    return generateInstantiateMsg
}

export default useGenerateInstantiateMsg
