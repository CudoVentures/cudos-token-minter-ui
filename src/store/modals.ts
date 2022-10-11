import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DeliverTxResponse } from 'cudosjs'

export interface SuccessModalDataObject {
  result: DeliverTxResponse;
  txFee: string;
  msgTypeSpecificData?: Record<string, unknown>
}

export interface modalState {
  title?: string
  message?: string
  msgType?: string
  loading?: boolean
  loadingType?: boolean
  success?: boolean
  failure?: boolean
  changeChosenBalance?: boolean
  selectWallet?: boolean
  dataObject?: SuccessModalDataObject
}

export const initialState: modalState = {
  title: '',
  message: '',
  msgType: '',
  loading: false,
  success: false,
  loadingType: false,
  failure: false,
  changeChosenBalance: false,
  selectWallet: false,
  dataObject: { 
    result: { height: 0, code: 0, transactionHash: '', gasUsed: 0, gasWanted: 0 }, 
    txFee: '' 
  }
}

export const modalStateSlice = createSlice({
  name: 'modalState',
  initialState,
  reducers: {
    updateModalState: (state, action: PayloadAction<modalState>) => {
      return { ...state, ...action.payload }
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateModalState } = modalStateSlice.actions

export default modalStateSlice.reducer
