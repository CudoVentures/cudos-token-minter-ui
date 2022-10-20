import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TOKEN_TYPE } from 'components/TokenDetails/helpers'
import { CHAIN_DETAILS } from 'utils/constants'

export enum AssetsView {
  AllAssets = 'All Assets',
  MyAssets = 'My Assets'
}

export interface assetsNavigationState {
  currentAssetsView?: AssetsView;
  networkView?: string;
  tokenTypeView?: TOKEN_TYPE;
  searchTerms?: string;
  activeSearch?: boolean;
}

export const initialState: assetsNavigationState = {
  currentAssetsView: AssetsView.AllAssets,
  networkView: CHAIN_DETAILS.DEFAULT_NETWORK,
  tokenTypeView: TOKEN_TYPE.All,
  searchTerms: '',
  activeSearch: false
}

export const assetsNavigationSlice = createSlice({
  name: 'assetsNavigation',
  initialState,
  reducers: {
    updateAssetsNavigation: (state, action: PayloadAction<assetsNavigationState>) => {
      return { ...state, ...action.payload }
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateAssetsNavigation } = assetsNavigationSlice.actions

export default assetsNavigationSlice.reducer
