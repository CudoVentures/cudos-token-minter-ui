import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { StyledUser, styles } from './styles'
import WalletIcon from 'assets/vectors/wallet-icon.svg'
import KeplrLogo from 'assets/vectors/keplr-logo.svg'
import CosmostationLogo from 'assets/vectors/cosmostation-logo.svg'
import { ReactComponent as ArrowIcon } from 'assets/vectors/arrow-down.svg'
// import AccountBalance from 'components/AccountBalance'
import { updateUser } from 'store/user'
import { initialState as initialUserState } from 'store/user'
import { initialState as initialModalState, updateModalState } from 'store/modals'
import { CopyAndFollowComponent } from 'components/helpers'
import { LEDGERS, NAVIGATION_PATH } from 'utils/constants'
import { formatAddress } from 'utils/helpers'
import { initialState as initialAssetsState, updateAssets } from 'store/assets'
import { initialState as initialAssetsNavigation } from 'store/assetsNavigation'
import { updateAssetsNavigation } from 'store/assetsNavigation'
import Card from 'components/Card/Card'

import {
  Typography,
  Avatar,
  Box,
  Collapse,
  Button,
} from '@mui/material'

const UserInfo = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { address, accountName, connectedLedger, isAdmin } = useSelector((state: RootState) => state.userState)

  const [open, setOpen] = useState(false)

  const handleDisconnect = () => {
    sessionStorage.clear()
    localStorage.clear()
    dispatch(updateUser(initialUserState))
    dispatch(updateModalState(initialModalState))
    dispatch(updateAssets(initialAssetsState))
    dispatch(updateAssetsNavigation(initialAssetsNavigation))
    navigate(NAVIGATION_PATH.Home)
  }

  return (
    <StyledUser>
      <Box borderRadius={5} style={styles.userContainer} sx={{ cursor: 'pointer' }}>
        <Box
          style={styles.userInnerContainer}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {/* <AccountBalance />
          <hr style={styles.fancyLine}></hr> */}
          <Box sx={{ marginRight: '10px' }}>
            <Avatar
              style={styles.avatarStyling}
              src={
                connectedLedger === LEDGERS.KEPLR ? KeplrLogo :
                  connectedLedger === LEDGERS.COSMOSTATION ? CosmostationLogo :
                    WalletIcon
              }
              alt="Wallet Logo"
            />
          </Box>
          <Typography>
            {`Hi, ${accountName}`}
          </Typography>
          <Box style={{ marginLeft: '15px' }}>
            <ArrowIcon style={{ transform: open ? 'rotate(180deg)' : 'rotate(360deg)' }} />
          </Box>
        </Box>
      </Box>
      <Collapse
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        style={{ marginTop: '-28px', zIndex: '-1' }}
        in={open}
      >
        <Card elevation={3} style={styles.dropdownMenuContainer} sx={{ height: isAdmin ? '250px' : '220px' }}>
          <Box style={{ marginTop: '40px' }}>
            <Box sx={styles.userAddressHolder}>
              {isAdmin ?
                <Typography
                  sx={{ color: 'chocolate', fontSize: '12px', marginBottom: '10px' }}
                >
                  CUDOS NETWORK ADMIN
                </Typography>
                : null}
              <Typography marginBottom={2} color="text.secondary" fontSize={13}>
                {formatAddress(address!, 20)}
              </Typography>
            </Box>
            <CopyAndFollowComponent address={address!} />
            <Box marginBottom={10} style={styles.disconnectBtnHolder}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleDisconnect()}>Disconnect</Button>
            </Box>
          </Box>
        </Card>
      </Collapse>
    </StyledUser>
  )
}

export default UserInfo
