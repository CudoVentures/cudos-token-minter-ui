import { styled, Box } from '@mui/material'
import theme from 'theme'
import { COLORS_DARK_THEME } from 'theme/colors'

export const styles = {
  formControl: {
    backgroundColor: COLORS_DARK_THEME.LIGHT_BACKGROUND,
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '55px',
    justifyContent: 'space-between',
    width: '100%',
    padding: '20px'
  },
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
    maxWidth: '100%',
    minWidth: 'max-content',
    width: '100%',
    maxHeight: '48px'
  },
  userInnerContainer: {
    fontSize: '14px',
    fontWeight: '500',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'space-between'
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
    width: '100%',
    fontWeight: '500',
    borderRadius: '0px 0px 20px 20px',
    display: 'flex',
    marginTop: '3px',
    justifyContent: 'center',
    padding: '10px'
  },
  networkSelectionMenuContainer: {
    background: theme.dark.custom.backgrounds.light,
    minWidth: '180px',
    fontSize: '14px',
    fontWeight: '500',
    display: 'flex',
    paddingLeft: '20px',
    marginTop: '3px',
    borderRadius: '0px 0px 20px 20px',
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
    width: '100%',
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
  layoutholder: {
    height: '100vh',
    width: '100vw',
    display: 'grid',
    alignContent: 'space-between'
  },
  childrenHolder: {
    overflow: 'auto',
    padding: '0 1rem',
    display: 'flex',

    flexDirection: 'column'
  },
  commonMenuStyles: {
    marginLeft: '20px',
    display: 'flex',
    alignItems: 'center',
    fontSize: "1rem",
    fontWeight: '500',
    cursor: 'pointer'
  },
  disabledMenuItemHolder: {
    color: "text.secondary",
  },
  selectedMenuItemHolder: {
    color: COLORS_DARK_THEME.PRIMARY_BLUE,
  },
} as const

export const StyledNetwork = styled(Box)(({ theme }) => ({
  maxWidth: '100%',
  width: '100%',
  maxHeight: '48px',
  borderRadius: '25px',
  height: '35px',
  marginRight: '20px',
  backgroundColor: theme.custom.backgrounds.primary,
  zIndex: '10'
}))

export const StyledUser = styled(Box)(({ theme }) => ({
  minWidth: 'max-content',
  maxHeight: '48px',
  borderRadius: '25px',
  height: '35px',
  background: theme.custom.backgrounds.primary,
  zIndex: '10',
  cursor: 'default'
}))
