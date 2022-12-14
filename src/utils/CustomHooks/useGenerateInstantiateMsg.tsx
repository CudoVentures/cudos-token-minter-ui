import { TOKEN_TYPE } from "components/TokenDetails/helpers"
import { ContractMsgInstantiate } from "cudosjs/build/cosmwasm-stargate/modules/cw20/contract-messages"
import { useCallback } from "react"
import { useSelector } from "react-redux"
import { RootState } from "store"
import { CW20 } from "types/CW20"

interface BasicMsg {
    msg: Omit<ContractMsgInstantiate, 'token_type'>,
    addTokenType: (chosenType: Record<string, unknown>) => void
    handleLogo: (logoUrl: string | undefined) => void
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
            },
            addTokenType(chosenType: Record<string, unknown>) {
                return {
                    ...this.msg,
                    token_type: chosenType
                }
            },
            handleLogo(logoUrl: string | undefined) {
                Object.assign(this.msg, {
                    marketing: logoUrl ? {
                        logo: {
                            url: logoUrl
                        }
                    } : {}
                })
            }
        }

        basicMsg.handleLogo(tokenObject.logoUrl)

        if (tokenType === TOKEN_TYPE.Standard) {
            return basicMsg.addTokenType({ standard: {} })
        }

        if (tokenType === TOKEN_TYPE.Burnable) {
            return basicMsg.addTokenType({ burnable: {} })
        }

        if (tokenType === TOKEN_TYPE.Mintable) {
            return basicMsg.addTokenType({
                mintable: {
                    minter: address!,
                    cap: tokenObject.totalSupply!
                }
            })
        }

        if (tokenType === TOKEN_TYPE.Unlimited) {
            return basicMsg.addTokenType({
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
