import { TOKEN_TYPE } from "components/TokenDetails/helpers"
import { ContractMsgInstantiate } from "cudosjs/build/cosmwasm-stargate/modules/cw20/contract-messages"
import { useCallback } from "react"
import { useSelector } from "react-redux"
import { RootState } from "store"
import { CW20 } from "types/CW20"

const useGenerateInstantiateMsg = () => {

    const { address } = useSelector((state: RootState) => state.userState)

    const generateInstantiateMsg = useCallback((
        tokenType: TOKEN_TYPE,
        tokenObject: CW20.TokenObject
    ): ContractMsgInstantiate => {

        // default msg complying with Standard and Burnable types
        let msg: ContractMsgInstantiate = {
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
            }
        }

        // Amend msg if Mintable type
        if (tokenType === TOKEN_TYPE.Mintable) {
            return {
                ...msg,
                mint: {
                    minter: address!,
                    cap: tokenObject.totalSupply!
                }
            }
        }

        // Amend msg if Unlimited type
        if (tokenType === TOKEN_TYPE.Unlimited) {
            return {
                ...msg,
                mint: {
                    minter: address!
                }
            }
        }

        return msg

        //eslint-disable-next-line
    }, [])

    return generateInstantiateMsg
}

export default useGenerateInstantiateMsg
