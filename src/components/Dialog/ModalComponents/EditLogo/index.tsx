import { Box, Button, Dialog as MuiDialog, Tooltip, Typography } from '@mui/material'
import { CancelRoundedIcon, ModalContainer } from 'components/Dialog/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { initialState, updateModalState } from 'store/modals'
import { styles } from './styles'
import { CW20 } from "types/CW20"
import { styles as defaultStyles } from 'components/Dialog/styles'
import { FieldHandler } from 'components/InputComponents'
import { useCallback, useEffect, useState } from 'react'
import { isValidImgRes, isValidImgUrl } from 'utils/validation'
import { MODAL_MSGS, RESOLUTIONS } from 'utils/constants'
import { FeeDisplayer } from 'containers/ContractDetails/components/helpers'
import { EncodeObject, StdFee } from 'cudosjs'
import useSignAndBroadcast from 'utils/CustomHooks/useSignAndBroadcastTx'
import useGenerateMsgHandler from 'utils/CustomHooks/useGenerateMsgHandler'
import { ContractMsgUploadLogo } from 'cudosjs/build/cosmwasm-stargate/modules/cw20/contract-messages'
import useSimulateTx from 'utils/CustomHooks/useSimulateTx'
import { getDisplayWorthyFee } from 'utils/helpers'

import {
    DEFAULT_TOKEN_IMG_URL,
    emptyEncodeObject,
    emptyFeesObject,
    PLACEHOLDERS,
    TEXT,
    TOKEN_ACTION,
    TOOLTIPS
} from 'components/TokenDetails/helpers'

const EditLogo = () => {

    const dispatch = useDispatch()
    const signAndBroadcast = useSignAndBroadcast()
    const generateMsgHandler = useGenerateMsgHandler()
    const simulateTx = useSimulateTx()
    const { openEditLogo } = useSelector((state: RootState) => state.modalState)
    const { selectedAsset } = useSelector((state: RootState) => state.assetsState)
    const [newTokenObject, setNewTokenObject] = useState<CW20.TokenObject>(selectedAsset!)
    const [validatedLogo, setValidatedLogo] = useState<boolean>(false)
    const [msg, setMsg] = useState<EncodeObject>(emptyEncodeObject)
    const [fee, setFee] = useState<StdFee>(emptyFeesObject)
    const [loading, setLoading] = useState<boolean>(false)
    const [validatedBroadcastData, setValidatedBroadcastData] = useState<boolean>(false)

    const broadcast = async () => {

        const signAndBroadcastData:
            CW20.SignAndBroadcastMsgData = {
            msgType: TOKEN_ACTION.EditLogo,
            msgs: [msg],
            fees: fee,
            msgTypeSpecificData: {
                operationType: TOKEN_ACTION.EditLogo
            }
        }

        await signAndBroadcast(signAndBroadcastData)
    }

    const validNewLogo = async (newUrl: string) => {

        if (
            newUrl === selectedAsset?.logoUrl ||
            !isValidImgUrl(newUrl)
        ) {
            return false
        }

        const validRes = await isValidImgRes(
            newUrl,
            {
                width: RESOLUTIONS.MAX_IMG.width,
                height: RESOLUTIONS.MAX_IMG.height
            }
        )

        if (!validRes) {
            return false
        }

        return true
    }

    const validateData = useCallback(async (newUrl: string) => {

        const validLogo = await validNewLogo(newUrl)
        setValidatedLogo(validLogo)
        setMsg(emptyEncodeObject)

        //eslint-disable-next-line
    }, [newTokenObject.logoUrl])

    useEffect(() => {

        validateData(newTokenObject.logoUrl!)

        //eslint-disable-next-line
    }, [validateData])

    useEffect(() => {

        if (msg.typeUrl && fee.gas !== emptyFeesObject.gas) {
            setValidatedBroadcastData(true)
            return
        }

        setValidatedBroadcastData(false)

        //eslint-disable-next-line
    }, [msg, fee])

    const handleData = async () => {

        try {
            setLoading(true)

            const handlerSpecificData: ContractMsgUploadLogo = {
                upload_logo: {
                    url: newTokenObject.logoUrl!
                }
            }

            const newMsg = await generateMsgHandler(TOKEN_ACTION.EditLogo, handlerSpecificData)
            const newFee = await simulateTx([newMsg])

            setMsg(newMsg)
            setFee(newFee ?? emptyFeesObject)

        } catch (e) {

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        if (validatedLogo) {
            handleData()
        }

        //eslint-disable-next-line
    }, [validatedLogo])

    const handleModalClose = () => {
        dispatch(updateModalState(initialState))
    }

    const urlInput: CW20.INPUT_FIELD = {
        name: TEXT.LogoUrl,
        value: newTokenObject!.logoUrl === DEFAULT_TOKEN_IMG_URL ? '' : newTokenObject!.logoUrl || '',
        placeholder: PLACEHOLDERS.LogoUrl,
        tooltip: TOOLTIPS.LogoUrl,
        inputType: TEXT.Text,
        oldState: newTokenObject!,
        isDisabled: false
    }

    return (
        <MuiDialog
            BackdropProps={defaultStyles.defaultBackDrop}
            open={openEditLogo!}
            onClose={handleModalClose}
            PaperProps={styles.localPaperProps}
        >
            <ModalContainer sx={{ padding: '25px 25px 20px 30px' }}>
                <CancelRoundedIcon onClick={handleModalClose} />
                <Box gap={3} sx={styles.contentHolder}>
                    <Box>
                        <Typography
                            variant="h4"
                            fontWeight={900}
                            letterSpacing={2}
                        >
                            Edit Logo
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Enter the new logo URL and update it.
                        </Typography>
                    </Box>
                    <Box gap={6} sx={styles.inputHolder}>
                        <Box sx={{ width: '100%' }}>
                            <FieldHandler
                                fieldObject={urlInput}
                                setValue={setNewTokenObject}
                            />
                            <Box sx={styles.estimatorHolder}>
                                {validatedLogo ?
                                    <FeeDisplayer
                                        fee={getDisplayWorthyFee(fee, 4)}
                                        loading={loading}
                                    /> : null
                                }
                            </Box>
                        </Box>
                        <Tooltip
                            title={!validatedLogo ? `${TEXT.InvalidImgSource} or ${TEXT.ResolutionExceedsLimit}` :
                                !validatedBroadcastData ? MODAL_MSGS.ERRORS.TYPE.CONNECTION : ''}>
                            <Box>
                                <Button
                                    disabled={!validatedLogo || !validatedBroadcastData}
                                    variant="contained"
                                    color="primary"
                                    sx={{ width: '250px' }}
                                    onClick={broadcast}
                                >
                                    Submit Change
                                </Button>
                            </Box>
                        </Tooltip>
                    </Box>
                </Box>
            </ModalContainer>
        </MuiDialog >
    )
}

export default EditLogo
