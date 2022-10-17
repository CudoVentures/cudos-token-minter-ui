import { TOKEN_TYPE } from "components/TokenDetails/helpers";

declare module CW20 {

    interface CW20Coin {
        address: string;
        amount: number;
    }

    interface MinterResponse {
        minter: string;
        cap?: number;
    }

    interface InstantiateMarketingInfo {
        logo: Logo;
        project?: string;
        description?: string;
        marketing?: string;
    }

    interface Logo {
        Url: string
        Embedded?: EmbeddedLogo
    }

    interface EmbeddedLogo {
        Svg?: number,
        Png?: number
    }

    interface InstantiateMsg {
        name: string;
        symbol: string;
        decimals: number;
        initial_balances: CW20Coin[];
        mint: MinterResponse;
        marketing: InstantiateMarketingInfo;
    }

    interface InstantiateMsgData {
        tokenObject: TokenObject;
        tokenType: string;
        codeId: number;
        sender: string;
    }

    interface TokenObject {
        name?: string;
        symbol?: string;
        decimalPrecision?: number;
        initialSupply?: string;
        totalSupply?: string;
        logoUrl?: string;
        tokenType?: TOKEN_TYPE
    }

    interface AddToWalletObject {
        tokenobject: TokenObject;
        contractAddress: string;
        chainId: string;
        chainName: string;
        connectedLedger: string;
    }

    interface SignAndBroadcastMsgData {
        msgType: string;
        msgs: EncodeObject[];
        fees: StdFee;
        msgTypeSpecificData?: Record<string, unknown>;
    }

    interface INPUT_FIELD {
        name: string;
        value: string | number;
        placeholder: string;
        tooltip: string;
        inputType: string;
        oldState: TokenObject;
        isDisabled: boolean;
    }

    export {
        CW20Coin,
        InstantiateMsg,
        InstantiateMsgData,
        TokenObject,
        AddToWalletObject,
        SignAndBroadcastMsgData,
        INPUT_FIELD
    }
}
