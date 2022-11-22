import { Box, Grid, Pagination, PaginationItem, Typography } from '@mui/material'
import Card from 'components/Card/Card'
import { useCallback, useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import { RootState } from 'store'
import { useSelector } from 'react-redux'
import { getTokenTypeWithlogo } from 'components/AssetsNavBar/components/ViewTokenTypeFilter'
import { CW20 } from 'types/CW20'
import { COLORS_DARK_THEME } from 'theme/colors'
import { ImgComponent, TruncatedTextWithTooltip } from 'components/helpers'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import NoAssetsView from 'components/NoAssetsView'
import { TOKEN_TYPE } from 'components/TokenDetails/helpers'
import useNavigateToRoute from 'utils/CustomHooks/useNavigateToRoute'
import { NAVIGATION_PATH } from 'utils/constants'
import { displayTokenValueWithPrecisionTooltip } from 'containers/ContractDetails/components/helpers'

const GridTable = ({ displayData }: { displayData: any[] }) => {

    const navigateToRoute = useNavigateToRoute()
    const [page, setPage] = useState<number>(0)
    const contentHolder = useRef<HTMLDivElement>(null)
    const maxItemPerRow: number = 4
    const maxItemPerColumn: number = 5
    const maximumTokenNameLength: number = 15
    const maximumTokenSymbolLength: number = 5
    const maxItemsPerPage: number = maxItemPerRow * maxItemPerColumn

    const {
        address,
        connectedLedger
    } = useSelector((state: RootState) => state.userState)

    const {
        currentAssetsView,
        searchTerms,
        tokenTypeView
    } = useSelector((state: RootState) => state.assetsNavState)

    const filterBySearchTerms = (token: CW20.TokenObject): boolean => {
        if (token.name!.toLowerCase().includes(searchTerms!.toLowerCase())) {
            if (tokenTypeView === TOKEN_TYPE.All || token.tokenType === tokenTypeView) {
                return true
            }
        }
        return false
    }

    const filteredData = displayData
        .slice(page * maxItemsPerPage, page * maxItemsPerPage + maxItemsPerPage)
        .filter(filterBySearchTerms)

    const dataLength: number = filteredData.length

    const handleClick = (token: CW20.TokenObject) => {
        const subPath = `/${token.contractAddress}`
        navigateToRoute(NAVIGATION_PATH.Assets + subPath)
    }

    const connectedUser = address && connectedLedger

    const TokenCard = useCallback(({ token }: { token: CW20.TokenObject }) => {

        return (
            <Card
                onClick={connectedUser ? () => handleClick(token) : undefined}
                sx={connectedUser ? styles.connectedUserCard : styles.tokenCard}
            >
                <ImgComponent
                    UID={token.contractAddress!}
                    size={80}
                    src={token.logoUrl!}
                />
                <Box gap={2} style={styles.typeHolder}>
                    <Box gap={1} style={styles.nameSymbolHolder}>
                        <TruncatedTextWithTooltip
                            text={token.name!}
                            maxAllowed={maximumTokenNameLength}
                            variant={'h6'}
                            weight={700}
                        />
                        <TruncatedTextWithTooltip
                            text={token.symbol!}
                            maxAllowed={maximumTokenSymbolLength}
                            variant={'subtitle1'}
                            weight={400}
                            symbol={true}
                        />
                    </Box>
                    {getTokenTypeWithlogo(token.tokenType!, COLORS_DARK_THEME.SECONDARY_TEXT)}
                </Box>
                <Box gap={1} style={styles.supplyHolder}>
                    <Typography variant='subtitle2' color='text.secondary'>
                        Max Supply:
                    </Typography>
                    {
                        token.tokenType === TOKEN_TYPE.Unlimited ? 'No Limit' :
                            displayTokenValueWithPrecisionTooltip(
                                token?.totalSupply!,
                                token?.decimalPrecision!,
                                2,
                                400
                            )
                    }
                </Box>

            </Card >
        )

        //eslint-disable-next-line
    }, [address])

    const transitionTo = (pageNumber: number) => {
        contentHolder!.current!.style.opacity! = '0'
        setTimeout(() => {
            contentHolder!.current!.style.opacity! = '1'
            setPage(pageNumber)
            contentHolder.current?.scrollIntoView()
        }, 300)
    }

    const handlePageChange = (event: React.BaseSyntheticEvent, pageNumber: number) => {
        transitionTo(pageNumber - 1)
    }

    useEffect(() => {
        if (page !== 0) {
            transitionTo(0)
        }

        //eslint-disable-next-line
    }, [currentAssetsView])

    return (filteredData.length < 1 ? <NoAssetsView failedSearch={true} /> :
        <Box ref={contentHolder} gap={2} sx={styles.contentHolder} >
            <Grid container
                style={styles.gridHolder}
                spacing={{ xs: 2 }}
                columns={{
                    lg: dataLength < maxItemPerRow ? dataLength : maxItemPerRow,
                    md: dataLength < 3 ? dataLength : 3,
                    sm: 2,
                    xs: 2
                }}
            >
                {filteredData.map((TOKEN, idx) => {
                    return (
                        <Grid item
                            key={idx}
                            lg={1}
                            xs={1}
                            style={{ textAlign: "center" }}
                        >
                            <TokenCard token={TOKEN} />
                        </Grid>
                    )
                })}
            </Grid>
            {dataLength > maxItemsPerPage ?
                <Box style={styles.pagination}>
                    <Pagination
                        color='primary'
                        shape={'rounded'}
                        onChange={handlePageChange}
                        count={Math.ceil(dataLength / maxItemsPerPage)}
                        renderItem={(item) => (
                            <PaginationItem
                                components={{
                                    previous: KeyboardArrowLeftIcon,
                                    next: KeyboardArrowRightIcon
                                }}
                                {...item}
                            />
                        )}
                    />
                </Box> : null
            }
        </Box>
    )
}

export default GridTable
