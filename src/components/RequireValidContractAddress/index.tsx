import { Outlet, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import NoResult from 'containers/ContractDetails/components/NoResult'
import { useEffect, useState } from 'react'
import { updateAssets } from 'store/assets'
import { useGetTokenDetailsQuery } from 'graphql/types'
import { Box, CircularProgress } from '@mui/material'
import { styles } from 'components/styles'
import { CW20 } from 'types/CW20'
import { getSanitizedTokenType } from 'utils/helpers'
import { PREAPPROVED_CODE_IDS } from 'utils/constants'

const RequireValidContractAddress = () => {
    const dispatch = useDispatch()
    const { chosenNetwork } = useSelector((state: RootState) => state.userState)
    const { contractAddress } = useParams()
    const [processingData, setProcessingData] = useState<boolean>(false)
    const preapprovedCodeIds = PREAPPROVED_CODE_IDS.NETWORK[chosenNetwork!] as number[]

    const { data, loading, error } = useGetTokenDetailsQuery({
        variables: {
            codeIds: preapprovedCodeIds,
            address: contractAddress
        }
    })

    useEffect(() => {

        if (error) {
            console.error(error?.message)
            return
        }

        if (data?.cw20token_info.length) {

            setProcessingData(true)

            const itemData = data.cw20token_info[0]

            const fetchedItem: CW20.TokenObject = {
                logoUrl: JSON.parse(itemData.logo!)?.url || '',
                decimalPrecision: itemData.decimals,
                circulatingSupply: itemData.circulating_supply,
                name: itemData.name,
                symbol: itemData.symbol,
                tokenType: getSanitizedTokenType(itemData.type!),
                initialSupply: itemData.initial_supply!,
                totalSupply: itemData.max_supply || undefined,
                contractAddress: itemData.address!,
                owner: itemData.creator!,
            }

            dispatch(updateAssets({
                selectedAsset: fetchedItem
            }))

            setProcessingData(false)
        }

        //eslint-disable-next-line
    }, [data?.cw20token_info, error])

    return loading || processingData ? <Box style={styles.spinnerHolder}><CircularProgress /></Box> :
        data?.cw20token_info.length && !error ? (
            <Outlet />
        ) : (
            <NoResult infoMsg={`No result for ${contractAddress!}`} />
        )
}

export default RequireValidContractAddress
