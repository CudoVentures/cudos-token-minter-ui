import { Box, CircularProgress } from '@mui/material'
import NoAssetsView from 'components/NoAssetsView'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { AssetsView, initialState, updateAssetsNavigation } from 'store/assetsNavigation'
import { styles } from './styles'
import Dialog from 'components/Dialog'
import { DEFAULT_TOKEN_IMG_URL, DEFAULT_TOTAL_SUPPLY_VALUE, TOKEN_TYPE } from 'components/TokenDetails/helpers'
import GridTable from 'components/GridTable'
import { updateAssets } from 'store/assets'
import { CW20 } from 'types/CW20'
import { sanitizeString } from 'utils/helpers'

// DUMMY DATA
const myData: CW20.TokenObject[] = Array(3).fill(
    {
        name: 'Dummy Name',
        symbol: 'DMY',
        decimalPrecision: 18,
        initialSupply: '123456789',
        totalSupply: sanitizeString(DEFAULT_TOTAL_SUPPLY_VALUE),
        logoUrl: DEFAULT_TOKEN_IMG_URL,
        tokenType: TOKEN_TYPE.Burnable,
        contractAddress: 'cudos1xhcxq4fvxth2hn3msmkpftkfpw73um7s4et3lh4r8cfmumk3qsmspz6p4p'
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
        tokenType: TOKEN_TYPE.Mintable,
        contractAddress: 'cudos1xhcxq4fvxth2hn3msmkpftkfpw73um7s4et3lh4r8cfmumk3qsmspz6p4p'
    }
)

const Assets = () => {

    const dispatch = useDispatch()
    const [displayData, setDisplayData] = useState<CW20.TokenObject[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const {
        allAssets,
        myAssets
    } = useSelector((state: RootState) => state.assetsState)

    const {
        currentAssetsView,
    } = useSelector((state: RootState) => state.assetsNavState)

    useEffect(() => {
        dispatch(updateAssetsNavigation(initialState))
        dispatch(updateAssets({
            allAssets: allData,
            myAssets: myData
        }))

        //Fake loading until fetch functions are implemented.
        setTimeout(() => {
            setLoading(false)
        }, 400)

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

    return (
        <Box style={styles.contentHolder}>
            <Dialog />
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100px' }} display={'flex'} gap={2} flexDirection={'column'}>
                {loading ? <CircularProgress /> :
                    displayData.length > 0 ? <GridTable displayData={displayData} /> :
                        <NoAssetsView />
                }
            </Box>
        </Box>
    )
}

export default Assets
