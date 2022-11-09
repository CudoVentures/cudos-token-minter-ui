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
import { getTokenTypeFromCodeId } from 'utils/helpers'

const RequireValidContractAddress = () => {
    const dispatch = useDispatch()
    const { chosenNetwork } = useSelector((state: RootState) => state.userState)
    const { contractAddress } = useParams()
    const [processingData, setProcessingData] = useState<boolean>(false)

    const { data, loading, error } = useGetTokenDetailsQuery({
        variables: { address: contractAddress }
    })

    useEffect(() => {

        if (error) {
            console.error(error?.message)
            return
        }

        if (data?.cw20token_info_by_pk) {

            setProcessingData(true)

            const fetchedItem: CW20.TokenObject = {
                logoUrl: JSON.parse(data.cw20token_info_by_pk?.logo!).url!,
                decimalPrecision: data.cw20token_info_by_pk?.decimals,
                circulatingSupply: data.cw20token_info_by_pk?.circulating_supply,
                name: data.cw20token_info_by_pk?.name,
                symbol: data.cw20token_info_by_pk?.symbol,
                tokenType: getTokenTypeFromCodeId(chosenNetwork!, data.cw20token_info_by_pk?.code_id!),
                totalSupply: data.cw20token_info_by_pk?.max_supply,
                contractAddress: data.cw20token_info_by_pk?.address!,
                owner: data.cw20token_info_by_pk?.minter!,
            }

            dispatch(updateAssets({
                selectedAsset: fetchedItem
            }))

            setProcessingData(false)
        }

        //eslint-disable-next-line
    }, [data?.cw20token_info_by_pk, error])

    return loading || processingData ? <Box style={styles.spinnerHolder}><CircularProgress /></Box> :
        data?.cw20token_info_by_pk && !error ? (
            <Outlet />
        ) : (
            <NoResult queryParam={contractAddress!} />
        )
}

export default RequireValidContractAddress
