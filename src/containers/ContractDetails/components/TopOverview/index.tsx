import { Box, Divider, Typography } from "@mui/material"
import { getTokenTypeWithlogo } from "components/AssetsNavBar/components/ViewTokenTypeFilter"
import Card from "components/Card/Card"
import { SubTitle, Title } from "components/Dialog/ModalComponents/helpers"
import { AdvancedTooltip, TitleWithTooltip, TruncatedTextWithTooltip } from "components/helpers"
import { TEXT } from "components/TokenDetails/helpers"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store"
import { CHAIN_DETAILS } from "utils/constants"
import { useLowResCheck, useMidlowResCheck } from "utils/CustomHooks/screenChecks"
import { ReactComponent as EditIcon } from 'assets/vectors/edit-icon.svg'
import { styles } from "./styles"
import { updateModalState } from "store/modals"
import Dialog from "components/Dialog"

const TopOverview = () => {

    const dispatch = useDispatch()
    const isMidLowRes = useMidlowResCheck()
    const isLowRes = useLowResCheck()
    const editIcon = useRef<HTMLDivElement>()
    const [displayEditIcon, setDisplayEditIcon] = useState<boolean>(false)
    const { selectedAsset } = useSelector((state: RootState) => state.assetsState)
    const { networkView } = useSelector((state: RootState) => state.assetsNavState)

    const isOwner = true

    useEffect(() => {
        if (displayEditIcon) {
            editIcon.current!.style.visibility = 'visible'
            editIcon.current!.style.opacity = '1'
            return
        }

        editIcon.current!.style.opacity = '0'

        //eslint-disable-next-line
    }, [displayEditIcon])

    const handleEditLogo = () => {
        dispatch(updateModalState({ openEditLogo: true }))
    }

    const displayTooltipedValue = (value: string, weight?: number): JSX.Element => {

        return (
            <AdvancedTooltip
                tooltipComponent={
                    <TitleWithTooltip
                        text={Number(value).toLocaleString()}
                        tooltipText={''}
                        variant={'subtitle2'}
                        precision={selectedAsset!.decimalPrecision!}
                    />}
                children={
                    <Typography>
                        <SubTitle
                            text={Number(value).toLocaleString()}
                            color={'text.primary'}
                            weight={weight}
                        />
                    </Typography>
                }
            />
        )
    }

    return (
        <Card style={styles.contentCard} sx={{ minWidth: 'max-content' }}>
            <Dialog />
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
                        <img
                            onMouseOver={() => isOwner ? setDisplayEditIcon(true) : null}
                            onMouseOut={() => displayEditIcon ? setDisplayEditIcon(false) : null}
                            style={isLowRes ? styles.smallerIgm : styles.img}
                            src={selectedAsset!.logoUrl}
                            alt="Token Logo"
                        />
                        {isOwner ?
                            <Box
                                style={styles.editIconHolder}
                                ref={editIcon}
                            >
                                <EditIcon
                                    style={isLowRes ? styles.smallerEdit : styles.edit}
                                    onClick={() => handleEditLogo()}
                                    onMouseOver={() => setDisplayEditIcon(true)}
                                    onMouseOut={() => setDisplayEditIcon(false)}
                                />
                            </Box> : null}
                    </Box>
                    <Box gap={2} display={'flex'} flexDirection={'column'}>
                        <TruncatedTextWithTooltip
                            text={selectedAsset?.name!}
                            maxAllowed={20}
                            variant={isLowRes ? 'h5' : 'h4'}
                            weight={700}
                        />
                        <Title text={`(${selectedAsset?.symbol!})`} variant={isLowRes ? 'subtitle1' : 'h5'} />
                        <Box gap={3} display={'flex'}>
                            <SubTitle text={TEXT.TokenType} />
                            {getTokenTypeWithlogo(selectedAsset?.tokenType!)}
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
                    {displayTooltipedValue(selectedAsset?.initialSupply!)}

                    <SubTitle text={TEXT.TotalSupply} />
                    {displayTooltipedValue(selectedAsset?.totalSupply!)}

                    <SubTitle text={TEXT.CurrentSupply} />
                    {displayTooltipedValue('000000')}

                    <Divider sx={{ gridColumn: '1/3' }} />

                    <SubTitle text={TEXT.YourBalance} weight={700} />
                    {displayTooltipedValue('000000', 700)}
                </Box>
            </Box>
        </Card>
    )
}

export default TopOverview
