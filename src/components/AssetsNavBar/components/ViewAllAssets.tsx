import { Box, Typography } from "@mui/material"
import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store"
import { AssetsView, updateAssetsNavigation } from "store/assetsNavigation"
import { COLORS_DARK_THEME } from "theme/colors"
import { NAVIGATION_PATH } from "utils/constants"
import useNavigateToRoute from "utils/CustomHooks/useNavigateToRoute"

const ViewAllAssets = () => {

    const dispatch = useDispatch()
    const navigateToRoute = useNavigateToRoute()
    const [hovered, setHovered] = useState<boolean>(false)
    const { currentAssetsView } = useSelector((state: RootState) => state.assetsNavState)
    const { allAssets } = useSelector((state: RootState) => state.assetsState)

    const handleClick = () => {

        if (AssetsView.AllAssets !== currentAssetsView) {
            dispatch(updateAssetsNavigation({
                currentAssetsView: AssetsView.AllAssets
            }))
            navigateToRoute(NAVIGATION_PATH.AllAssets)
        }
    }

    const isSelected = useCallback((): boolean => {
        if (currentAssetsView === AssetsView.AllAssets) {
            return true
        }

        return false
    }, [currentAssetsView])

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
                fontWeight={900}
                variant="subtitle1"
                color={hovered ? COLORS_DARK_THEME.PRIMARY_BLUE : isSelected() ?
                    'white' : 'inherit'
                }
            >
                {AssetsView.AllAssets.toUpperCase()}
            </Typography>
            <Typography
                fontWeight={900}
                variant="subtitle1"
                color={hovered ? COLORS_DARK_THEME.PRIMARY_BLUE : isSelected() ?
                    COLORS_DARK_THEME.PRIMARY_BLUE : 'inherit'
                }
            >
                {allAssets?.length}
            </Typography>
        </Box >
    )
}

export default ViewAllAssets
