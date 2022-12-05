import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CW20 } from 'types/CW20'

export interface assetsState {
  allAssets?: CW20.TokenObject[];
  myAssets?: CW20.MyTokensData;
  selectedAsset?: CW20.TokenObject;
}

export const initialState: assetsState = {
  allAssets: [],
  myAssets: {
    owned: [],
    haveBalanceFrom: []
  },
  selectedAsset: {}
}

export const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    updateAssets: (state, action: PayloadAction<assetsState>) => {
      return { ...state, ...action.payload }
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateAssets } = assetsSlice.actions

export default assetsSlice.reducer
