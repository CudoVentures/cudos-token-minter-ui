import { Box, CircularProgress } from '@mui/material'
import NoAssetsView from 'components/NoAssetsView'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { AssetsView, initialState, updateAssetsNavigation } from 'store/assetsNavigation'
import { styles } from './styles'
import Dialog from 'components/Dialog'
import { DEFAULT_TOKEN_IMG_URL, DEFAULT_TOTAL_SUPPLY_VALUE, emptyTokenObject, TOKEN_TYPE } from 'components/TokenDetails/helpers'
import GridTable from 'components/GridTable'
import { updateAssets } from 'store/assets'
import { CW20 } from 'types/CW20'
import { sanitizeString } from 'utils/helpers'
import { useTestGraphqlSubscription } from 'graphql/types'
import { updateModalState } from 'store/modals'
import { MODAL_MSGS } from 'utils/constants'

// DUMMY DATA
const myData: CW20.TokenObject[] = Array(3).fill(
    {
        name: 'Dummy Name',
        symbol: 'DMY',
        decimalPrecision: 18,
        initialSupply: '100',
        totalSupply: '100',
        logoUrl: DEFAULT_TOKEN_IMG_URL,
        tokenType: TOKEN_TYPE.Standard,
        contractAddress: 'cudos196mtnay5xar0ruaxm46x4nec373mz0ccl43r84dfprd3hyxy9erq27d8zq',
        owner: 'cudos182gkp7lt5kvahat6dt7yj2n6mfku753y2lac0p'
    }
)

// DUMMY DATA
const allData: CW20.TokenObject[] = Array(29).fill(
    {
        name: 'Token Name Two And Two Thirds',
        symbol: 'WWWWW',
        decimalPrecision: 18,
        initialSupply: '123456789',
        totalSupply: sanitizeString(DEFAULT_TOTAL_SUPPLY_VALUE),
        logoUrl: DEFAULT_TOKEN_IMG_URL,
        tokenType: TOKEN_TYPE.Standard,
        contractAddress: 'cudos1pryug3pp92fhn5qavdt2uxu32j3gv0v7vueuzs3ep8xelqd6exlsdgndla',
        owner: 'cudos1knf0flyucc2ut40cg8tn48sp70p2e65wse7qec'
    }
)

const Assets = () => {

    const dispatch = useDispatch()
    const [displayData, setDisplayData] = useState<CW20.TokenObject[]>([])
    const { data, loading, error } = useTestGraphqlSubscription()

    const {
        allAssets,
        myAssets,
    } = useSelector((state: RootState) => state.assetsState)

    const {
        currentAssetsView,
    } = useSelector((state: RootState) => state.assetsNavState)

    useEffect(() => {

        const lastView = currentAssetsView
        dispatch(updateAssetsNavigation({
            ...initialState,
            currentAssetsView: lastView
        }))

        dispatch(updateAssets({
            allAssets: allData,
            myAssets: myData,
            selectedAsset: emptyTokenObject
        }))

        //eslint-disable-next-line
    }, [])

    useEffect(() => {

        if (currentAssetsView === AssetsView.MyAssets) {
            setDisplayData(myAssets!)
            return
        }

        if (currentAssetsView === AssetsView.AllAssets) {
            setDisplayData(allAssets!)
        }

        //eslint-disable-next-line
    }, [currentAssetsView])

    useEffect(() => {

        if (error) {
            dispatch(updateModalState({
                failure: true,
                msgType: MODAL_MSGS.ERRORS.TYPE.FETCH,
                title: MODAL_MSGS.ERRORS.TITLES.DEFAULT,
                message: MODAL_MSGS.ERRORS.MESSAGES.DEFAULT
            }))
            console.error(error.message)
        }

        //eslint-disable-next-line
    }, [error])

    return (
        <Box style={styles.contentHolder}>
            <Dialog />
            {!error ?
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100px' }} display={'flex'} gap={2} flexDirection={'column'}>
                    {loading ? <CircularProgress /> :
                        displayData.length > 0 ? <GridTable displayData={displayData} /> :
                            <NoAssetsView />
                    }
                </Box> :
                null
            }
        </Box>
    )
}

export default Assets
