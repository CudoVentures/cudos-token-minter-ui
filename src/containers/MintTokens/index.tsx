import { Box, Button, Typography } from '@mui/material'
import Dialog from 'components/Dialog'
import Stepper from 'components/Stepper'
import TokenDetails from 'components/TokenDetails'
import { emptyTokenObject, TOKEN_NAME } from 'components/TokenDetails/helpers'
import TokenSelector from 'components/TokenSelector'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { updateModalState } from 'store/modals'
import { useLowResCheck } from 'utils/CustomHooks/screenChecks'
import { styles } from './styles'

const MintTokens = () => {

  const dispatch = useDispatch()
  const parentHolder = useRef<HTMLDivElement>(null)
  const isLowRes = useLowResCheck()
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [tokenType, setTokenType] = useState<TOKEN_NAME>(TOKEN_NAME.Standart)
  const [tokenObject, setTokenObject] = useState<TokenObject>(emptyTokenObject)
  const { address } = useSelector((state: RootState) => state.userState)

  const CONTENT_PAGES = {
    1: <TokenSelector
      tokenType={tokenType}
      setTokenType={setTokenType}
    />,
    2: <TokenDetails
      tokenType={tokenType}
      setTokenObject={setTokenObject}
      tokenObject={tokenObject}
    />,
    3: <Box>
      {/* {JSON.stringify(tokenObject)} */}
    </Box>
  }

  const handleNavigation = (step: number) => {

    parentHolder!.current!.style.opacity! = '0'

    if (step === 1) {
      setTokenObject(emptyTokenObject)
    }

    setTimeout(() => {
      parentHolder!.current!.style.opacity! = '1'
      setCurrentStep(step)
      parentHolder.current?.scrollIntoView()
    }, 200)
  }

  const handleMint = () => {
    //TODO:
  }

  const handleNextBtnClick = () => {

    if (!address) {
      dispatch(updateModalState({ selectWallet: true }))
      return
    }

    if (currentStep === 3) {
      handleMint()
      return
    }

    handleNavigation(currentStep + 1)
  }

  const handleNextBtnText = (): string => {

    if (!address) {
      return 'Connect Wallet to Mint'
    }

    if (currentStep === 2) {
      return 'Preview'
    }

    if (currentStep === 3) {
      return 'Mint'
    }

    return 'Next'
  }

  return (
    <Box style={styles.contentHolder}>
      <Dialog />
      <Box ref={parentHolder} style={{ opacity: '1', transition: 'opacity .2s ease-in-out', height: '100%', width: isLowRes ? '70%' : '800px' }}>
        <Typography variant='h4' fontWeight={700}>Mint Tokens</Typography>
        <Stepper step={currentStep} />
        {
          CONTENT_PAGES[currentStep]
        }
        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            style={{
              visibility: currentStep < 2 || currentStep > 3 ? 'hidden' : 'visible',
              float: 'left'
            }}
            variant="contained"
            color="secondary"
            sx={styles.controlBtn}
            onClick={() => handleNavigation(currentStep - 1)}
          >
            Back
          </Button>
          <Button
            style={{ float: 'right' }}
            disabled={false}
            variant="contained"
            color="primary"
            sx={!address ? styles.logInControlBtn : styles.controlBtn}
            onClick={handleNextBtnClick}
          >
            {handleNextBtnText()}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default MintTokens
