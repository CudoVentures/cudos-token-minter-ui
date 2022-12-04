import { Box, Tooltip, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { RootState } from 'store'
import { AssetsView, updateAssetsNavigation } from 'store/assetsNavigation'
import { APP_MENU, NAVIGATION_PATH } from 'utils/constants'
import useNavigateToRoute from 'utils/CustomHooks/useNavigateToRoute'
import { styles } from './styles'

const Menu = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigateToRoute = useNavigateToRoute()
    const { currentAssetsView } = useSelector((state: RootState) => state.assetsNavState)

    const handleMenuClick = (route: NAVIGATION_PATH) => {
        dispatch(updateAssetsNavigation({
            currentAssetsView: AssetsView.AllAssets
        }))
        navigateToRoute(route)
    }

    const isCurrentlySelected = (route: NAVIGATION_PATH): boolean => {

        if (location.pathname === NAVIGATION_PATH.Home) {
            return false
        }

        if (currentAssetsView === AssetsView.MyAssets && route === NAVIGATION_PATH.AllAssets) {
            return true
        }
        if (location.pathname.includes(route)) {
            return true
        }

        return false
    }

    return (
        <Box
            sx={styles.appMenuContainer}
            gap={6}
        >
            <Box style={{ display: "flex" }}>
                {APP_MENU.ITEMS.map((item, idx) => (
                    <Tooltip key={idx} title={item.disabled ? 'Coming soon' : ''}>
                        <Box
                            sx={
                                item.disabled ? styles.disabledMenuItemHolder :
                                    !item.disabled && isCurrentlySelected(item.route) ? styles.selectedMenuItemHolder :
                                        styles.menuItemHolder
                            }
                            style={styles.commonMenuStyles}
                            onClick={() => item.disabled ? () => ({}) : handleMenuClick(item.route)}
                        >
                            {item.icon}
                            <Typography color={!item.disabled && isCurrentlySelected(item.route) ? 'white' : 'inherit'} marginLeft={1}>
                                {item.text}
                            </Typography>
                        </Box>
                    </Tooltip>
                ))}
            </Box>
        </Box>
    )
}

export default Menu
