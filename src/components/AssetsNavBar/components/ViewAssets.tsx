import { Box, Typography } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store"
import { AssetsView, updateAssetsNavigation } from "store/assetsNavigation"
import { COLORS_DARK_THEME } from "theme/colors"
import { NAVIGATION_PATH } from "utils/constants"
import useNavigateToRoute from "utils/CustomHooks/useNavigateToRoute"

const ViewAssets = ({
    assetsView,
    assetsCount,
    submenu
}: {
    assetsView: AssetsView,
    assetsCount: number,
    submenu?: boolean
}) => {

    const dispatch = useDispatch()
    const navigateToRoute = useNavigateToRoute()
    const [hovered, setHovered] = useState<boolean>(false)
    const { currentAssetsView } = useSelector((state: RootState) => state.assetsNavState)

    const handleClick = () => {

        if (assetsView === AssetsView.AllAssets) {
            navigateToRoute(NAVIGATION_PATH.AllAssets)
        }

        if (assetsView === AssetsView.MyAssets) {
            navigateToRoute(NAVIGATION_PATH.MyAssets)
        }

        if (assetsView !== currentAssetsView) {
            dispatch(updateAssetsNavigation({
                currentAssetsView: assetsView
            }))
        }
    }

    const isSubMenuOpen = (): boolean => {
        return assetsView === AssetsView.MyAssets &&
            (
                currentAssetsView === AssetsView.Others ||
                currentAssetsView === AssetsView.Owned
            )
    }

    const isSelected = (): boolean => {
        if (currentAssetsView === assetsView ||
            isSubMenuOpen()
        ) {
            return true
        }

        return false
    }

    return (
        <Box
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            onClick={() => handleClick()}
            sx={{ cursor: 'pointer' }}
            gap={1}
            display={'flex'}
            color={
                hovered ? COLORS_DARK_THEME.PRIMARY_BLUE :
                    COLORS_DARK_THEME.SECONDARY_TEXT
            }
        >
            <Typography
                fontSize={submenu ? '12px' : 'inherit'}
                fontWeight={700}
                variant={submenu ? 'inherit' : "subtitle1"}
                color={
                    isSubMenuOpen() ?
                        hovered ?
                            COLORS_DARK_THEME.PRIMARY_BLUE : 'white' :
                        isSelected() ?
                            'white' : 'inherit'
                }
            >
                {assetsView.toUpperCase()}
            </Typography>
            <Typography
                fontSize={submenu ? '12px' : 'inherit'}
                fontWeight={700}
                variant={submenu ? 'inherit' : "subtitle1"}
                color={
                    isSubMenuOpen() ?
                        hovered ?
                            COLORS_DARK_THEME.PRIMARY_BLUE : 'white' :
                        isSelected() ?
                            COLORS_DARK_THEME.PRIMARY_BLUE : 'inherit'
                }
            >
                {assetsCount}
            </Typography>
        </Box>
    )
}

export default ViewAssets
