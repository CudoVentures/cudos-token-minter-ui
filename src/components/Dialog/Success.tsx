import { RootState } from 'store'
import { Box, Typography } from '@mui/material'
import { Dialog as MuiDialog } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import SuccessIcon from 'assets/vectors/success.svg'
import { useNavigate } from 'react-router-dom'
import { CancelRoundedIcon, ModalContainer, styles } from './styles'
import { initialState as initialModalState, updateModalState } from 'store/modals'
import { NAVIGATION_PATH, TYPE_URLS } from 'utils/constants'
import InstantiateSuccess from './SuccessTypes/InstantiateSuccess'

const Success = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    success,
    msgType,
    dataObject
  } = useSelector((state: RootState) => state.modalState)

  const contentComponentHandler = (msgType: string): JSX.Element => {

    let contentComponent: JSX.Element = (<div></div>)

    switch (msgType) {

      case TYPE_URLS.MsgInstantiateContract:
        return <InstantiateSuccess data={dataObject!} />

      default:
        return contentComponent
    }

  }

  const handleModalClose = () => {
    dispatch(updateModalState({ ...initialModalState }))
    navigate(NAVIGATION_PATH.Home)
  }

  const closeModal = (event: {}, reason: string) => {
    if (reason !== 'backdropClick') {
      handleModalClose()
    }
  }

  return (
    <MuiDialog
      BackdropProps={styles.defaultBackDrop}
      open={success!}
      onClose={closeModal}
      PaperProps={styles.defaultPaperProps}
    >
      <ModalContainer sx={{ padding: '4rem 2rem 1rem 2rem' }}>
        <img src={SuccessIcon} alt="success-icon" />
        <CancelRoundedIcon onClick={handleModalClose} />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={1}
        >
          <Typography
            variant="h4"
            fontWeight={900}
            letterSpacing={2}
          >
            Success!
          </Typography>
        </Box>
        {contentComponentHandler(msgType!)}
      </ModalContainer>
    </MuiDialog>
  )
}

export default Success
