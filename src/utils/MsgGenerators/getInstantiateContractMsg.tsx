import { EncodeObject, toAscii } from "cudosjs"
import { MsgInstantiateContractEncodeObject } from '@cosmjs/cosmwasm-stargate'
import { MsgInstantiateContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx'
import Long from "long"
import { getSanitizedTokenObject } from "utils/helpers"

export const getInstantiateContractMsg = (msgData: msgs.InstantiateMsgData): EncodeObject => {

  const tokenObject: CW20.TokenObject = getSanitizedTokenObject(msgData.tokenObject)

  const initialBalances: CW20.CW20Coin[] = [{
    address: msgData.sender,
    amount: Number(tokenObject.initialSupply!)
  }]

  const initMsg: CW20.InstantiateMsg = {
    name: tokenObject.name!,
    symbol: tokenObject.symbol!,
    decimals: tokenObject.decimalPrecision!,
    initial_balances: initialBalances,
    mint: {
      minter: msgData.sender,
      cap: Number(tokenObject.totalSupply),
    },
    marketing: {
      logo: {
        Url: tokenObject.logoUrl!,
      },
    },
  }

  const msg: MsgInstantiateContractEncodeObject = {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
    value: MsgInstantiateContract.fromPartial({
      sender: msgData.sender,
      codeId: Long.fromNumber(msgData.codeId),
      label: 'TEST LABEL',
      msg: toAscii(JSON.stringify(initMsg)),
      funds: []
    })
  }

  return msg
}
