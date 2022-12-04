import { Box, Button, Typography } from '@mui/material'
import LogoHeader from 'assets/vectors/logo-header.svg'
import UserInfo from './Userinfo'
import NetworkInfo from './Networkinfo'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { styles } from './styles'
import { ReactComponent as WalletIcon } from 'assets/vectors/wallet-icon.svg'
import Menu from './Menu'
import { updateModalState } from 'store/modals'
import { useCallback } from 'react'
import { useLowResCheck, useMidlowResCheck } from 'utils/CustomHooks/screenChecks'
import useNavigateToRoute from 'utils/CustomHooks/useNavigateToRoute'
import { CHAIN_DETAILS, NAVIGATION_PATH } from 'utils/constants'
import AssetsNavBar, { DetailedViewNav } from 'components/AssetsNavBar'
import { useLocation, matchPath } from 'react-router-dom'

const Header = () => {

  const location = useLocation()
  const dispatch = useDispatch()
  const navigateToRoute = useNavigateToRoute()
  const isLowRes = useLowResCheck()
  const isMidLowRes = useMidlowResCheck()
  const isDetailedViewPath = matchPath(`${NAVIGATION_PATH.AllAssets}/*`, location.pathname) || matchPath(`${NAVIGATION_PATH.MyAssets}/*`, location.pathname)
  const { changingNetwork } = useSelector((state: RootState) => state.modalState)
  const {
    address,
    accountName,
    connectedLedger,
    chosenNetwork
  } = useSelector((state: RootState) => state.userState)

  const handleLogIn = () => {
    dispatch(updateModalState({
      selectWallet: true
    }))
  }

  const isMainnetInstance = (): boolean => {
    return CHAIN_DETAILS.CHAIN_ID[chosenNetwork!] === CHAIN_DETAILS.CHAIN_ID.MAINNET
  }

  const isUserLoggedIn = (): boolean => {
    if (address! && accountName! && connectedLedger!) {
      return true
    }
    return false
  }

  const ConnectWalletBtn = useCallback((): JSX.Element => {
    return (
      <Box>
        <Button
          variant="contained"
          color="primary"
          sx={styles.logInBtn}
          onClick={handleLogIn}
        >
          <WalletIcon /> Connect Wallet
        </Button>
      </Box>
    )

    //eslint-disable-next-line
  }, [address])

  const isSmallerScreen = () => {
    return isLowRes || (isUserLoggedIn() && isMidLowRes)
  }

  const LoggedInUserNavBar = useCallback((): JSX.Element => {
    return (
      <Box style={{ display: 'flex', marginBottom: '10px' }}>
        <NetworkInfo componentStyle={'nav'} />
        <UserInfo />
      </Box>
    )

    //eslint-disable-next-line
  }, [address])

  return (
    <Box>
      <Box sx={isSmallerScreen() ? styles.smallerScreenHeaderContainer : styles.headerContainer}>
        <Box onClick={() => navigateToRoute(NAVIGATION_PATH.Home)} style={styles.logoHolder}>
          <img src={LogoHeader} alt="logo" />
          <Typography fontWeight={900} marginLeft={1} variant="h6" color="text.primary">
            | Token Minter
            {isUserLoggedIn() && !isMainnetInstance() && !changingNetwork ?
              <Typography
                marginLeft={1}
                color='#E89518'
                fontWeight={300}
                component="span"
                fontSize={18}
              >
                Testnet
              </Typography> :
              null}
          </Typography>
        </Box>
        <Box
          display={'flex'}
          flexDirection={isSmallerScreen() ? 'column' : 'row'}
          alignItems={'center'}
        >
          <div style={{ margin: isSmallerScreen() ? '10px 0px' : '0px' }}>
            <Menu />
          </div>
          {isSmallerScreen() ? null : <hr style={styles.fancyWhiteLine}></hr>}
          <div style={{ margin: isSmallerScreen() ? '10px' : '' }}>
            {isUserLoggedIn() ? <LoggedInUserNavBar /> : <ConnectWalletBtn />}
          </div>
        </Box>
      </Box>
      {
        location.pathname === NAVIGATION_PATH.AllAssets ||
          location.pathname === NAVIGATION_PATH.MyAssets
          ? <AssetsNavBar /> :
          isDetailedViewPath ? <DetailedViewNav /> : null
      }
    </Box>
  )
}

export default Header
