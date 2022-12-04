import { Box, Typography } from "@mui/material"
import { SubTitle } from "components/Dialog/ModalComponents/helpers"
import { Fragment, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store"
import { AssetsView, updateAssetsNavigation } from "store/assetsNavigation"
import { NAVIGATION_PATH } from "utils/constants"
import { useMidlowResCheck } from "utils/CustomHooks/screenChecks"
import useNavigateToRoute from "utils/CustomHooks/useNavigateToRoute"
import SearchBar from "./components/SearchBar"
import ViewAssets from "./components/ViewAssets"
import ViewNetworkFilter from "./components/ViewNetworkFilter"
import ViewTokenTypeFilter from "./components/ViewTokenTypeFilter"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { styles } from "./styles"
import { COLORS_DARK_THEME } from "theme/colors"
import ViewConnectedNetwork from "./components/ViewConnectedNetwork"
import { CollapsableSubMenu } from "./helpers"

export const getConcatenatedText = (text: string): string => {
    return `${text} ${"Tokens"}`
}

export const DetailedViewNav = () => {

    const dispatch = useDispatch()
    const { currentAssetsView } = useSelector((state: RootState) => state.assetsNavState)
    const { selectedAsset } = useSelector((state: RootState) => state.assetsState)
    const navigateToRoute = useNavigateToRoute()

    const isSubMenu = currentAssetsView === AssetsView.Others ||
        currentAssetsView === AssetsView.Owned

    const handleClick = (setView: AssetsView) => {

        if (setView !== currentAssetsView) {
            setTimeout(() => {
                dispatch(updateAssetsNavigation({
                    currentAssetsView: setView
                }))
            }, 300)
        }

        if (setView === AssetsView.AllAssets) {
            navigateToRoute(NAVIGATION_PATH.AllAssets)
            return
        }

        navigateToRoute(NAVIGATION_PATH.MyAssets)
    }

    return (
        <Box sx={styles.headerContainer}>
            <Box gap={0.3} display={'flex'} alignItems={'center'}>
                {isSubMenu ? <Fragment>
                    <Box sx={{ cursor: 'pointer' }} onClick={() => handleClick(AssetsView.MyAssets!)}>
                        <SubTitle text={AssetsView.MyAssets!} />
                    </Box>
                    <KeyboardArrowRightIcon sx={{ color: COLORS_DARK_THEME.PRIMARY_BLUE }} />
                </Fragment>
                    : null}
                <Box sx={{ cursor: 'pointer' }} onClick={() => handleClick(currentAssetsView!)}>
                    <SubTitle text={currentAssetsView!} />
                </Box>
                <KeyboardArrowRightIcon sx={{ color: COLORS_DARK_THEME.PRIMARY_BLUE }} />
                <SubTitle text={selectedAsset?.name!} color={'text.primary'} />
            </Box>
        </Box>
    )
}

const AssetsNavBar = () => {

    const removableContent = useRef<HTMLDivElement>()
    const isMidLowRes = useMidlowResCheck()
    const { activeSearch } = useSelector((state: RootState) => state.assetsNavState)
    const { allAssets, myAssets } = useSelector((state: RootState) => state.assetsState)
    const { address, connectedLedger } = useSelector((state: RootState) => state.userState)
    const [removedContent, setRemovedContent] = useState<boolean>(false)
    const connectedUser = address && connectedLedger

    useEffect(() => {
        if (activeSearch) {
            setRemovedContent(true)
            return
        }

        setTimeout(() => {
            setRemovedContent(false)
        }, 300)
    }, [activeSearch])

    return (
        <Box
            gap={isMidLowRes ? 2.2 : 0}
            sx={isMidLowRes ?
                styles.smallerScreenHeaderContainer :
                styles.headerContainer
            }
        >
            <Box id='left-menu' gap={3} display={'flex'} alignItems={'center'}>
                <Typography variant="h4" fontWeight={700}>
                    Assets
                </Typography>
                <Box gap={4} display={'flex'} alignItems={'center'}>
                    <ViewAssets assetsView={AssetsView.AllAssets} assetsCount={allAssets!.length} />
                    {address && connectedLedger ?
                        <ViewAssets
                            assetsView={AssetsView.MyAssets}
                            assetsCount={
                                myAssets?.owned?.length! + myAssets?.haveBalanceFrom?.length!
                            }
                        /> : null}
                </Box>
                <CollapsableSubMenu />
            </Box>
            <Box id='right-menu' gap={2} display={'flex'} alignItems={'center'}>
                {
                    removedContent ? null :
                        <Box ref={removableContent}
                            gap={2}
                            style={styles.removableContentHolder}
                        >
                            {connectedUser ? <ViewConnectedNetwork /> : <ViewNetworkFilter />}
                            <ViewTokenTypeFilter />
                        </Box>
                }
                <SearchBar />
            </Box>
        </Box>
    )
}
export default AssetsNavBar
