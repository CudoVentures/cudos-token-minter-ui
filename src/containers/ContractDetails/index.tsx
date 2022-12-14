import Dialog from "components/Dialog"
import HolderView from "./components/HolderView"
import OwnerView from "./components/OwnerView"
import PublicView from "./components/PublicView"
import { styles } from "./styles"
import { Box, CircularProgress, Divider, Typography } from "@mui/material"
import { getTokenTypeWithlogo } from "components/AssetsNavBar/components/ViewTokenTypeFilter"
import Card from "components/Card/Card"
import { SubTitle, Title } from "components/Dialog/ModalComponents/helpers"
import { AdvancedTooltip, ClickAndCopyToClipboard, ImgComponent, TruncatedTextWithTooltip } from "components/helpers"
import { TEXT, TOKEN_TYPE } from "components/TokenDetails/helpers"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store"
import { CHAIN_DETAILS, LEDGERS, MODAL_MSGS } from "utils/constants"
import { useLowResCheck, useMidlowResCheck } from "utils/CustomHooks/screenChecks"
import { ReactComponent as EditIcon } from 'assets/vectors/edit-icon.svg'
import { initialState, updateModalState } from "store/modals"
import { displayTokenValueWithPrecisionTooltip } from "./components/helpers"
import { BigNumber } from "bignumber.js"
import { useGetContractDetailsSubscription, useGetUserBalancesSubscription } from "graphql/types"
import { updateUser } from "store/user"
import { updateAssets } from "store/assets"
import { formatAddress } from "utils/helpers"
import { ReactComponent as AddIcon } from 'assets/vectors/add-icon.svg'

const ContractDetails = () => {

    const dispatch = useDispatch()
    const isMidLowRes = useMidlowResCheck()
    const isLowRes = useLowResCheck()
    const editIcon = useRef<HTMLDivElement>()
    const addToWalletIcon = useRef<HTMLDivElement>()
    const [displayEditIcon, setDisplayEditIcon] = useState<boolean>(false)
    const [displayAddToWalletIcon, setDisplayAddToWalletIcon] = useState<boolean>(false)
    const { selectedAsset } = useSelector((state: RootState) => state.assetsState)
    const { networkView } = useSelector((state: RootState) => state.assetsNavState)
    const { address: loggedInUser, assets, connectedLedger, chosenNetwork } = useSelector((state: RootState) => state.userState)
    const [isOwner, setIsOwner] = useState<boolean>(false)
    const [isKeplr, setIsKeplr] = useState<boolean>(false)
    const [isHolder, setIsHolder] = useState<boolean>(false)
    const [userBalance, setUserBalance] = useState<string>('0')
    const [dataProcessing, setDataProcessing] = useState<boolean>(true)

    const {
        data: fetchedUserData,
        error: userFetchError
    } = useGetUserBalancesSubscription({
        variables: { address: loggedInUser, token: selectedAsset?.contractAddress }
    })

    const {
        data: fetchedContractData,
        error: contractFetchError
    } = useGetContractDetailsSubscription({
        variables: { token: selectedAsset?.contractAddress }
    })

    // FUNCTIONS
    const handleMouseOver = () => {

        if (isOwner) {
            setDisplayEditIcon(true)
        }

        if (isKeplr) {
            setDisplayAddToWalletIcon(true)
        }
    }

    const handleMouseOut = () => {

        setDisplayEditIcon(false)
        setDisplayAddToWalletIcon(false)
    }

    const handleAddToken = async (tokenAddress: string) => {

        dispatch(updateModalState({
            loading: true,
        }))

        try {
            await window.keplr?.suggestToken(
                CHAIN_DETAILS.CHAIN_ID[chosenNetwork!],
                tokenAddress,
            )

        } catch (error) {
            console.error((error as Error).message)

        } finally {
            setTimeout(() => {
                dispatch(updateModalState({
                    loading: false,
                }))
            }, 200)
        }
    }

    const handleEditLogo = () => {
        dispatch(updateModalState({ openEditLogo: true }))
    }

    // EFFECTS
    useEffect(() => {

        if (connectedLedger === LEDGERS.KEPLR) {
            setIsKeplr(true)
            return
        }
        setIsKeplr(false)

        //eslint-disable-next-line
    }, [connectedLedger])

    useEffect(() => {
        if (displayEditIcon) {
            editIcon.current!.style.visibility = 'visible'
            editIcon.current!.style.opacity = '1'
            return
        }

        if (editIcon.current) {
            editIcon.current!.style.opacity = '0'
        }

        //eslint-disable-next-line
    }, [displayEditIcon])

    useEffect(() => {

        if (displayAddToWalletIcon) {
            addToWalletIcon.current!.style.visibility = 'visible'
            addToWalletIcon.current!.style.opacity = '1'
            return
        }

        if (addToWalletIcon.current) {
            addToWalletIcon.current!.style.opacity = '0'
        }

        //eslint-disable-next-line
    }, [displayAddToWalletIcon])

    useEffect(() => {
        if (fetchedUserData) {
            setUserBalance(fetchedUserData.cw20token_balance_by_pk?.balance || '0')
            dispatch(updateUser({
                assets: {
                    ...assets,
                    [selectedAsset?.contractAddress!]: fetchedUserData.cw20token_balance_by_pk?.balance || '0'
                }
            }))

            setIsOwner(selectedAsset?.owner === loggedInUser)
        }

        if (fetchedContractData) {
            dispatch(updateAssets({
                selectedAsset: {
                    ...selectedAsset,
                    totalSupply: fetchedContractData.cw20token_info_by_pk?.max_supply || undefined,
                    circulatingSupply: fetchedContractData.cw20token_info_by_pk?.circulating_supply,
                    logoUrl: JSON.parse(fetchedContractData.cw20token_info_by_pk?.logo!)?.url || ''
                }
            }))
        }

        if (fetchedContractData && fetchedUserData) {
            setTimeout(() => { setDataProcessing(false) }, 200)
        }

        //eslint-disable-next-line
    }, [fetchedUserData, fetchedContractData])

    useEffect(() => {
        setIsHolder(new BigNumber(userBalance).isGreaterThan(0))

        //eslint-disable-next-line
    }, [userBalance])

    useEffect(() => {
        if (contractFetchError || userFetchError) {
            dispatch(updateModalState({
                ...initialState,
                failure: true,
                msgType: MODAL_MSGS.ERRORS.TYPE.FETCH,
                title: MODAL_MSGS.ERRORS.TITLES.DEFAULT,
                message: MODAL_MSGS.ERRORS.MESSAGES.DEFAULT
            }))
            console.error(
                contractFetchError ?
                    contractFetchError.message :
                    userFetchError?.message
            )
        }

        //eslint-disable-next-line
    }, [contractFetchError, userFetchError])

    return (
        dataProcessing ? <Box style={styles.spinnerHolder}><CircularProgress /></Box> :
            <Box marginTop={2}>
                <Dialog />
                <Box gap={2} style={styles.contentHolder}>

                    <Card style={styles.contentCard} sx={{ minWidth: 'max-content' }}>
                        <Box
                            gap={isLowRes ? 1 : 3}
                            style={styles.boxHolder}
                            flexDirection={isMidLowRes ? 'column' : 'row'}
                        >
                            <Box
                                id="left-content"
                                gap={isLowRes ? 0 : 3}
                                style={styles.leftContentHolder}
                            >
                                <Box style={styles.imgHolder}>
                                    <Box
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                    >
                                        <ImgComponent
                                            UID={selectedAsset!.contractAddress!}
                                            size={isLowRes ? 100 : 165}
                                            src={selectedAsset!.logoUrl!}
                                        />
                                    </Box>
                                    {isKeplr ?
                                        <AdvancedTooltip
                                            tooltipComponent={
                                                <Typography
                                                    variant="subtitle2"
                                                    fontWeight={900}>{TEXT.AddToKeplr}
                                                </Typography>
                                            }
                                            children={<Box
                                                style={styles.addToWalletIconHolder}
                                                ref={addToWalletIcon}
                                            >
                                                <AddIcon
                                                    style={isLowRes ? styles.smallerAdd : styles.add}
                                                    onClick={() => handleAddToken(selectedAsset?.contractAddress!)}
                                                    onMouseOver={() => setDisplayAddToWalletIcon(true)}
                                                    onMouseOut={() => setDisplayAddToWalletIcon(false)}
                                                />
                                            </Box>} />
                                        : null}
                                    {isOwner ?
                                        <AdvancedTooltip
                                            tooltipComponent={
                                                <Typography
                                                    variant="subtitle2"
                                                    fontWeight={900}>{TEXT.EditLogo}
                                                </Typography>
                                            }
                                            children={<Box
                                                style={styles.editIconHolder}
                                                ref={editIcon}
                                            >
                                                <EditIcon
                                                    style={isLowRes ? styles.smallerEdit : styles.edit}
                                                    onClick={() => handleEditLogo()}
                                                    onMouseOver={() => setDisplayEditIcon(true)}
                                                    onMouseOut={() => setDisplayEditIcon(false)}
                                                />
                                            </Box>} />
                                        : null}
                                </Box>
                                <Box gap={1.5} display={'flex'} flexDirection={'column'}>
                                    <TruncatedTextWithTooltip
                                        text={selectedAsset?.name! || ''}
                                        maxAllowed={20}
                                        variant={isLowRes ? 'h5' : 'h4'}
                                        weight={700}
                                    />
                                    <Title text={`(${selectedAsset?.symbol!})`} variant={isLowRes ? 'subtitle1' : 'h5'} />
                                    <Box gap={3} display={'flex'} alignItems='center'>
                                        <Box height={'25px'}>
                                            <SubTitle text={TEXT.TokenType} />
                                        </Box>
                                        {getTokenTypeWithlogo(selectedAsset?.tokenType!)}

                                    </Box>
                                    <Box gap={3} display={'flex'} alignItems='center'>
                                        <Box>
                                            <SubTitle text={TEXT.Address} />
                                        </Box>
                                        <ClickAndCopyToClipboard
                                            children={<SubTitle color='text.primary'
                                                text={formatAddress(selectedAsset?.contractAddress || '', 15)} />}
                                            textToCopy={selectedAsset?.contractAddress || ''}
                                        />
                                    </Box>
                                </Box>


                            </Box>
                            <Box
                                id='right-content'
                                style={styles.rightContentHolder}
                            >
                                <SubTitle text={TEXT.DeploymentNetwork} />
                                <SubTitle text={CHAIN_DETAILS[networkView!].ALIAS_NAME} color={'text.primary'} />

                                <SubTitle text={TEXT.DecimalPrecision} />
                                <SubTitle text={selectedAsset?.decimalPrecision?.toString()!} color={'text.primary'} />

                                <SubTitle text={TEXT.InitialSupply} />
                                {displayTokenValueWithPrecisionTooltip(
                                    selectedAsset?.initialSupply!,
                                    selectedAsset?.decimalPrecision!,
                                    2,
                                    400
                                )}

                                <SubTitle text={TEXT.TotalSupply} />
                                {selectedAsset?.tokenType === TOKEN_TYPE.Unlimited ? 'Not Limited' :
                                    displayTokenValueWithPrecisionTooltip(
                                        selectedAsset?.totalSupply!,
                                        selectedAsset?.decimalPrecision!,
                                        2,
                                        400
                                    )}

                                <SubTitle text={TEXT.CurrentSupply} />
                                {displayTokenValueWithPrecisionTooltip(
                                    selectedAsset?.circulatingSupply!,
                                    selectedAsset?.decimalPrecision!,
                                    2,
                                    400
                                )}

                                <Divider sx={{ gridColumn: '1/3' }} />

                                <SubTitle text={TEXT.YourBalance} weight={700} />
                                {displayTokenValueWithPrecisionTooltip(
                                    userBalance,
                                    selectedAsset?.decimalPrecision!,
                                    2,
                                    700
                                )}
                            </Box>
                        </Box>
                    </Card>
                    {isOwner ? <OwnerView /> : null}
                    {isHolder ? <HolderView /> : null}
                    <PublicView />
                </Box>
            </Box>
    )
}

export default ContractDetails
