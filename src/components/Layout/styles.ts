import { styled, Box } from '@mui/material'
import theme from 'theme'
import { COLORS_DARK_THEME } from 'theme/colors'

export const styles = {
  logoHolder: {
    cursor: 'pointer',
    display: 'flex',
    textDecoration: 'none'
  },
  logInBtn: {
    width: '190px',
    fontWeight: 700,
    display: 'flex',
    justifyContent: "space-evenly"
  },
  disconnectBtnHolder: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px'
  },
  userAddressHolder: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    flexDirection: 'column'
  },
  anchorStyle: {
    alignItems: 'center',
    textDecoration: 'none',
    display: 'flex'
  },
  networkInfoHolder: {
    width: 'max-content',
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center'
  },
  avatarStyling: {
    borderRadius: "0px",
    width: '18px',
    height: '18px'
  },
  menuContainer: {
    background: theme.dark.custom.backgrounds.primary,
    width: '88px',
    borderRadius: '1.3rem',
    height: '100%',
    padding: '20px',
    flexShrink: 0
  },
  userContainer: {
    padding: '12px 20px',
    position: 'relative',
    background: theme.dark.custom.backgrounds.primary,
    borderRadius: '35px',
    maxWidth: '100%',
    maxHeight: '48px'
  },
  userInnerContainer: {
    fontSize: '14px',
    fontWeight: '500',
    display: 'flex',
    alignItems: "center"
  },
  fancyLine: {
    border: "none",
    borderLeft: "2px solid #414963",
    height: "20px",
    margin: "0 15px 0 15px"
  },
  fancyWhiteLine: {
    border: "none",
    borderLeft: "1px solid white",
    height: "30px",
    margin: "0 15px 0 15px"
  },
  dropdownMenuContainer: {
    background: theme.dark.custom.backgrounds.light,
    float: 'right',
    fontSize: '14px',
    height: '250px',
    minWidth: '224px',
    fontWeight: '500',
    display: 'flex',
    borderRadius: '0px 0px 20px 20px',
    marginTop: '3px',
    justifyContent: 'center'
  },
  networkSelectionMenuContainer: {
    background: theme.dark.custom.backgrounds.light,
    minWidth: '180px',
    fontSize: '14px',
    fontWeight: '500',
    display: 'flex',
    borderRadius: '0px 0px 20px 20px',
    paddingLeft: '20px',
    marginTop: '3px',
    padding: '40px 0px 20px 20px',
    flexDirection: 'column'
  },
  headerContainer: {
    padding: '0.5rem 1rem 1rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flex: '1'
  },
  smallerScreenHeaderContainer: {
    padding: '0.5rem 1rem 1rem',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    flex: '1'
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    right: 0,
    left: 0,
    width: 'inherit',
    padding: '1rem 1rem 0.5rem'
  },
  appMenuContainer: {
    height: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  menuItemHolder: {
    "&:hover": {
      color: COLORS_DARK_THEME.PRIMARY_BLUE
    },
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginLeft: '30px',
    color: "text.secondary",
    fontSize: "1rem",
    fontWeight: '500'
  },
  disabledMenuItemHolder: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px',
    color: "text.secondary",
    fontSize: "1rem",
    fontWeight: '500',
    cursor: 'pointer'
  },
  selectedMenuItemHolder: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px',
    color: COLORS_DARK_THEME.PRIMARY_BLUE,
    fontSize: "1rem",
    fontWeight: '500',
    cursor: 'pointer'
  }
} as const

export const StyledNetwork = styled(Box)(({ theme }) => ({
  maxWidth: '100%',
  maxHeight: '48px',
  borderRadius: '55px',
  height: '35px',
  marginRight: '20px',
  backgroundColor: theme.custom.backgrounds.primary,
  zIndex: '10'
}))

export const StyledUser = styled(Box)(({ theme }) => ({
  minWidth: 'max-content',
  maxHeight: '48px',
  borderRadius: '55px',
  height: '35px',
  background: theme.custom.backgrounds.primary,
  zIndex: '10',
  cursor: 'default'
}))
