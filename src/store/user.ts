import { Coin } from 'cudosjs'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface userState {
    address?: string
    accountName?: string
    nativeBalance?: string
    balances?: readonly Coin[]
    chosenBalance?: Coin
    connectedLedger?: string
}

export const initialState: userState = {
    address: '',
    accountName: '',
    nativeBalance: '',
    balances: [],
    chosenBalance: { denom: '', amount: '' },
    connectedLedger: ''
}

export const userStateSlice = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<userState>) => {
            return { ...state, ...action.payload }
        }
    }
})

// Action creators are generated for each case reducer function
export const { updateUser } = userStateSlice.actions

export default userStateSlice.reducer
