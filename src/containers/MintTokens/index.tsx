import { Box, Button, Tooltip, Typography } from '@mui/material'
import Dialog from 'components/Dialog'
import Stepper from 'components/Stepper'
import TokenDetails from 'components/TokenDetails'
import TokenSelector from 'components/TokenSelector'
import TokenSummary from 'components/TokenSummary'
import { EncodeObject, StdFee } from 'cudosjs'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { updateModalState } from 'store/modals'
import { TYPE_URLS } from 'utils/constants'
import { useLowResCheck } from 'utils/CustomHooks/screenChecks'
import useSignAndBroadcast from 'utils/CustomHooks/useSignAndBroadcastTx'
import useSimulateTx from 'utils/CustomHooks/useSimulateTx'
import { getInstantiateContractMsg } from 'utils/MsgGenerators/getInstantiateContractMsg'
import { isValidTokenObject } from 'utils/validation'
import { styles } from './styles'

import {
  CODE_IDS,
  emptyEncodeObject,
  emptyFeesObject,
  emptyTokenObject,
  TOKEN_TYPE,
} from 'components/TokenDetails/helpers'

const MintTokens = () => {

  const dispatch = useDispatch()
  const simulateTx = useSimulateTx()
  const signAndBroadcast = useSignAndBroadcast()
  const parentHolder = useRef<HTMLDivElement>(null)
  const isLowRes = useLowResCheck()
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [tokenType, setTokenType] = useState<TOKEN_TYPE>(TOKEN_TYPE.Standard)
  const [tokenObject, setTokenObject] = useState<CW20.TokenObject>(emptyTokenObject)
  const [nextBtnTooltip, setNextBtnTooltip] = useState<string>('')
  const [validatedData, setValidatedData] = useState<boolean>(false)
  const [simulatedFee, setSimulatedFee] = useState<StdFee>(emptyFeesObject)
  const [initMsg, setInitMsg] = useState<EncodeObject>(emptyEncodeObject)
  const { address, chosenNetwork } = useSelector((state: RootState) => state.userState)

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
    3: <TokenSummary
      tokenType={tokenType}
      tokenObject={tokenObject}
      estimatedFee={simulatedFee}
    />
  }

  const handleNavigation = (step: number) => {

    if (step < 3) {
      setSimulatedFee(emptyFeesObject)
    }

    if (step === 1) {
      setTokenObject(emptyTokenObject)
    }

    parentHolder!.current!.style.opacity! = '0'

    setTimeout(() => {
      parentHolder!.current!.style.opacity! = '1'
      setCurrentStep(step)
      parentHolder.current?.scrollIntoView()
    }, 200)
  }

  const handleMint = async () => {

    const signAndBroadcastData:
      CW20.SignAndBroadcastMsgData = {
      msgType: TYPE_URLS.MsgInstantiateContract,
      msgs: [initMsg!],
      fees: simulatedFee,
      msgTypeSpecificData: {
        tokenObject: tokenObject
      }
    }

    await signAndBroadcast(signAndBroadcastData)
  }

  const handleInstantiateTxSimulation = async (instantiateMsgData: CW20.InstantiateMsgData) => {

    const instantiateMsg = getInstantiateContractMsg(instantiateMsgData)
    const fee = await simulateTx([instantiateMsg])

    if (fee?.gas) {
      setSimulatedFee(fee!)
      setInitMsg(instantiateMsg)
      handleNavigation(3)
    }
  }

  const handleNextBtnClick = async () => {

    if (!address) {
      dispatch(updateModalState({ selectWallet: true }))
      return
    }

    if (currentStep === 2) {

      const instantiateMsgData: CW20.InstantiateMsgData = {
        tokenObject: tokenObject,
        tokenType: tokenType,
        codeId: CODE_IDS.NETWORK[chosenNetwork!][tokenType],
        sender: address || ''
      }

      await handleInstantiateTxSimulation(instantiateMsgData)
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

  const validateData = useCallback(async () => {

    if (currentStep === 1) {
      setValidatedData(true)
    }

    if (currentStep === 2) {

      const [valid, error] = await isValidTokenObject(tokenObject, tokenType)

      setNextBtnTooltip(error)
      setValidatedData(valid)
    }

    //eslint-disable-next-line
  }, [currentStep, tokenObject])

  useEffect(() => {

    validateData()

  }, [validateData])

  return (
    <Box style={styles.contentHolder}>
      <Dialog />
      <Box ref={parentHolder} width={isLowRes ? '70%' : '820px'} style={styles.parentHolder}>
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
          <Tooltip title={nextBtnTooltip}>
            <Box>
              <Button
                style={{ float: 'right' }}
                disabled={!validatedData}
                variant="contained"
                color="primary"
                sx={!address ? styles.logInControlBtn : styles.controlBtn}
                onClick={() => handleNextBtnClick()}
              >
                {handleNextBtnText()}
              </Button>
            </Box>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}

export default MintTokens
