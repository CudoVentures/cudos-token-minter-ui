import { Box, Collapse } from "@mui/material"
import { AssetsView } from "store/assetsNavigation"
import { COLORS_DARK_THEME } from "theme/colors"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import ViewAssets from "./components/ViewAssets"
import { styles } from "./styles"
import { useEffect, useState } from "react"
import { RootState } from "store"
import { useSelector } from "react-redux"

export const CollapsableSubMenu = () => {

    const { currentAssetsView } = useSelector((state: RootState) => state.assetsNavState)
    const [openSubMenu, setOpenSubMenu] = useState<boolean>(true)

    useEffect(() => {
        if (
            currentAssetsView === AssetsView.MyAssets ||
            currentAssetsView === AssetsView.Owned ||
            currentAssetsView === AssetsView.Others
        ) {

            setOpenSubMenu(true)
            return
        }

        setOpenSubMenu(false)
    }, [currentAssetsView])

    return (
        <Collapse
            style={{
                visibility: currentAssetsView === AssetsView.AllAssets ? 'hidden' : 'visible',
                marginLeft: '-15px',
                width: '200px'
            }}
            orientation="horizontal"
            in={openSubMenu}
        >
            <Box gap={2} sx={styles.subMenuHolder}>
                <SubMenuArrows view={currentAssetsView!} />
                <SubMenuItems />
            </Box>
        </Collapse>
    )
}

export const SubMenuItems = () => {

    const { myAssets } = useSelector((state: RootState) => state.assetsState)

    return (
        <Box gap={1} sx={{ display: 'flex', justifyContent: "flex-end", flexDirection: 'column' }}>
            <ViewAssets
                assetsView={AssetsView.Owned}
                assetsCount={myAssets?.owned?.length!}
                submenu={true}
            />
            <ViewAssets
                assetsView={AssetsView.Others}
                assetsCount={myAssets?.haveBalanceFrom?.length!}
                submenu={true}
            />
        </Box>
    )
}

export const SubMenuArrows = ({ view }: { view: AssetsView }) => {

    return (
        <Box sx={{ position: 'relative', display: 'flex' }}>
            <HorizontalRuleIcon
                style={{
                    opacity: view === AssetsView.Others ? '0' : '0.6',
                    fontSize: '20px',
                    position: 'absolute',
                    left: '-15px',
                    top: '-13px',
                    color: view === AssetsView.Owned ? 'white' : COLORS_DARK_THEME.SECONDARY_TEXT,
                    transform: 'rotate(150deg)'
                }}
            />
            <HorizontalRuleIcon
                style={{
                    opacity: view === AssetsView.Owned ? '0' : '0.6',
                    fontSize: '20px',
                    position: 'absolute',
                    left: '-15px',
                    top: '-7px',
                    color: view === AssetsView.Others ? 'white' : COLORS_DARK_THEME.SECONDARY_TEXT,
                    transform: 'rotate(-150deg)'
                }}
            />
        </Box>
    )
}
