import { Box, Typography } from '@mui/material'
import { Dialog as MuiDialog } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { updateModalState } from 'store/modals'
import { initialState as initialModalState } from 'store/modals'
import { CancelRoundedIcon, ModalContainer, styles as defaultStyles } from 'components/Dialog/styles'
import { updateUser } from 'store/user'
import { styles } from './styles'
import InfoIcon from 'assets/vectors/info-icon.svg'
import KeplrLogo from 'assets/vectors/keplr-logo.svg'
import CosmostationLogo from 'assets/vectors/cosmostation-logo.svg'
import { LEDGERS, MODAL_MSGS } from 'utils/constants'
import { useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { connectUser } from 'utils/config'

const WalletSelector = () => {

  const { selectWallet } = useSelector((state: RootState) => state.modalState)
  const { chosenNetwork } = useSelector((state: RootState) => state.userState)
  const [loading, setLoading] = useState(new Map())
  const dispatch = useDispatch()

  const connect = async (chosenNetwork: string, ledgerType: string) => {

    try {
      setLoading(new Map(loading.set(ledgerType, true)))
      dispatch(updateModalState({
        selectWallet: false,
        loading: true,
        loadingType: true
      }))
      const connectedUser = await connectUser(chosenNetwork, ledgerType)
      dispatch(updateUser(connectedUser))
      handleModalClose()

    } catch (error) {
      dispatch(updateModalState({
        failure: true,
        title: MODAL_MSGS.ERRORS.TITLES.LOGIN_FAIL,
        message: MODAL_MSGS.ERRORS.MESSAGES.LOGIN_FAIL
      }))
      console.error((error as Error).message)

    } finally {
      setLoading(new Map())
    }
  }

  const handleModalClose = () => {
    dispatch(updateModalState({ ...initialModalState }))
  }

  return (
    <MuiDialog
      BackdropProps={defaultStyles.defaultBackDrop}
      open={selectWallet!}
      onClose={handleModalClose}
      PaperProps={defaultStyles.defaultPaperProps}
    >
      <ModalContainer sx={{ padding: '25px 25px 20px 30px' }}>
        <CancelRoundedIcon onClick={handleModalClose} />
        <Box sx={styles.contentHolder}>
          <Typography
            style={{ margin: '20px 0 20px 0' }}
            variant="h4"
            fontWeight={900}
            letterSpacing={2}
          >
            Connect Wallet
          </Typography>
          <Typography marginBottom={3} variant="subtitle1" color="text.secondary">
            Connect you wallet and start minting your own Tokens on the CUDOS Network - Codelessly
          </Typography>
          <Box gap={3} style={styles.btnsHolder}>
            <LoadingButton
              disabled={!window.keplr || loading.get(LEDGERS.COSMOSTATION)}
              loading={loading.get(LEDGERS.KEPLR)}
              variant="contained"
              color="primary"
              onClick={() => connect(chosenNetwork!, LEDGERS.KEPLR)}
              sx={styles.connectButton}
            >
              <img
                hidden={loading.get(LEDGERS.KEPLR)}
                style={styles.keplrLogo}
                src={KeplrLogo}
                alt={`${LEDGERS.KEPLR} logo`}
              />
              {`Connect ${LEDGERS.KEPLR.toUpperCase()}`}
            </LoadingButton>
            <LoadingButton
              disabled={!window.cosmostation || loading.get(LEDGERS.KEPLR)}
              loading={loading.get(LEDGERS.COSMOSTATION)}
              variant="contained"
              color="primary"
              onClick={() => connect(chosenNetwork!, LEDGERS.COSMOSTATION)}
              sx={styles.connectButton}
            >
              <img
                hidden={loading.get(LEDGERS.COSMOSTATION)}
                style={styles.cosmostationLogo}
                src={CosmostationLogo}
                alt={`${LEDGERS.COSMOSTATION} logo`}
              />
              {`Connect ${LEDGERS.COSMOSTATION.toUpperCase()}`}
            </LoadingButton>
            <Box sx={styles.pluginWarning} color="primary.main">
              <img style={styles.infoIcon} src={InfoIcon} alt="Info" />
              Make sure you have Keplr and/or Cosmostation plugins installed.
            </Box>
          </Box>
        </Box>
      </ModalContainer>
    </MuiDialog>
  )
}

export default WalletSelector
