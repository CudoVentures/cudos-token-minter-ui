import { Box, Tooltip, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { APP_MENU } from 'utils/constants'
import { useLowerResCheck } from 'utils/CustomHooks/screenChecks'
import useNavigateToRoute from 'utils/CustomHooks/useNavigateToRoute'
import { styles } from './styles'

const Menu = () => {

    const location = useLocation()
    const isLowerRes = useLowerResCheck()
    const navigateToRoute = useNavigateToRoute()

    return (
        <Box
            sx={styles.appMenuContainer}
            gap={6}
        >
            <Box display="flex">
                {APP_MENU.ITEMS.map((item, idx) => (
                    <Tooltip key={idx} title={item.disabled ? 'Coming soon' : ''}>
                        <Box
                            sx={
                                item.disabled ? styles.disabledMenuItemHolder :
                                    !item.disabled && location.pathname === item.route ? styles.selectedMenuItemHolder :
                                        styles.menuItemHolder
                            }
                            onClick={() => item.disabled ? () => ({}) : navigateToRoute(item.route)}
                        >
                            {item.icon}
                            <Typography fontSize={isLowerRes ? '10px' : 'inherit'} marginLeft={1}>
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
