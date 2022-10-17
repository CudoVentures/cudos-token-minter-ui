import { EncodeObject, toAscii } from "cudosjs"
import { MsgInstantiateContractEncodeObject } from '@cosmjs/cosmwasm-stargate'
import { MsgInstantiateContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx'
import Long from "long"
import { getSanitizedTokenObject } from "utils/helpers"
import { CW20 } from "types/CW20"

export const getInstantiateContractMsg = (msgData: CW20.InstantiateMsgData): EncodeObject => {

  const tokenObject: CW20.TokenObject = getSanitizedTokenObject(msgData.tokenObject)

  const initialBalances = [{
    address: msgData.sender,
    amount: tokenObject.initialSupply!
  }]

  const initMsg = {
    name: tokenObject.name!,
    symbol: tokenObject.symbol!,
    decimals: tokenObject.decimalPrecision!,
    initial_balances: initialBalances,
    mint: {
      minter: msgData.sender,
      cap: tokenObject.totalSupply,
    },
    marketing: {
      logo: {
        url: tokenObject.logoUrl!,
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
