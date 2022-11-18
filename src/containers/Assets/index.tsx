import { Box, CircularProgress } from '@mui/material'
import NoAssetsView from 'components/NoAssetsView'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { AssetsView } from 'store/assetsNavigation'
import { styles } from './styles'
import Dialog from 'components/Dialog'
import { emptyTokenObject } from 'components/TokenDetails/helpers'
import GridTable from 'components/GridTable'
import { updateAssets } from 'store/assets'
import { CW20 } from 'types/CW20'
import { getTokenTypeFromCodeId } from 'utils/helpers'
import { useGetAllPreapprovedNetworkTokensQuery } from 'graphql/types'
import { updateModalState } from 'store/modals'
import { MODAL_MSGS, PREAPPROVED_CODE_IDS } from 'utils/constants'

const Assets = () => {

    const dispatch = useDispatch()
    const [displayData, setDisplayData] = useState<CW20.TokenObject[]>([])
    const [dataProcessing, setDataProcessing] = useState<boolean>(false)
    const { currentAssetsView } = useSelector((state: RootState) => state.assetsNavState)
    const { allAssets, myAssets } = useSelector((state: RootState) => state.assetsState)
    const { address: loggedInUser, chosenNetwork } = useSelector((state: RootState) => state.userState)

    const preapprovedCodeIds = PREAPPROVED_CODE_IDS.NETWORK[chosenNetwork!] as number[]
    const { data, loading, error } = useGetAllPreapprovedNetworkTokensQuery({
        variables: { codeIds: preapprovedCodeIds }
    })

    useEffect(() => {

        if (data) {
            setDataProcessing(true)
            const allData: CW20.TokenObject[] = []
            const myData: CW20.TokenObject[] = []
            data.cw20token_info.forEach((item) => {
                const fetchedItem: CW20.TokenObject = {
                    logoUrl: JSON.parse(item.logo!).url!,
                    decimalPrecision: item.decimals,
                    circulatingSupply: item.circulating_supply,
                    name: item.name,
                    symbol: item.symbol,
                    tokenType: getTokenTypeFromCodeId(chosenNetwork!, item.code_id),
                    totalSupply: item.max_supply || '0',
                    contractAddress: item.address,
                    owner: item.marketing_admin!,
                }
                allData.push(fetchedItem)
                if (fetchedItem.owner === loggedInUser) {
                    myData.push(fetchedItem)
                }
            })

            dispatch(updateAssets({
                allAssets: allData,
                myAssets: myData,
                selectedAsset: emptyTokenObject
            }))

            setDataProcessing(false)
        }

        //eslint-disable-next-line
    }, [data, loggedInUser])

    useEffect(() => {

        if (currentAssetsView === AssetsView.MyAssets) {
            setDisplayData(myAssets!)
            return
        }

        if (currentAssetsView === AssetsView.AllAssets) {
            setDisplayData(allAssets!)
        }

        //eslint-disable-next-line
    }, [currentAssetsView, allAssets, myAssets])

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
                <Box
                    sx={styles.innerComponentHolder}
                    gap={2}>
                    {loading || dataProcessing ? <CircularProgress /> :
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
