import { Box, Typography } from "@mui/material"
import { SubTitle } from "components/Dialog/ModalComponents/helpers"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "store"
import { AssetsView } from "store/assetsNavigation"
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

export const getConcatenatedText = (text: string): string => {
    return `${text} ${"Tokens"}`
}

export const DetailedViewNav = () => {

    const { currentAssetsView } = useSelector((state: RootState) => state.assetsNavState)
    const { selectedAsset } = useSelector((state: RootState) => state.assetsState)
    const navigateToRoute = useNavigateToRoute()

    return (
        <Box sx={styles.headerContainer}>
            <Box gap={0.3} display={'flex'} alignItems={'center'}>
                <Box sx={{ cursor: 'pointer' }} onClick={() => navigateToRoute(NAVIGATION_PATH.Assets)}>
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
        <Box sx={isMidLowRes ? styles.smallerScreenHeaderContainer : styles.headerContainer}>
            <Box id='left-menu' gap={4} display={'flex'} alignItems={'center'}>
                <Typography variant="h4" fontWeight={700}>
                    Assets
                </Typography>
                <ViewAssets assetsView={AssetsView.AllAssets} assetsCount={allAssets!.length} />
                {
                    address && connectedLedger ?
                        <ViewAssets assetsView={AssetsView.MyAssets} assetsCount={myAssets!.length} /> :
                        null
                }
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
