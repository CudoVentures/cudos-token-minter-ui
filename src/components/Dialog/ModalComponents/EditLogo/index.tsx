import { Box, Button, Dialog as MuiDialog, Input, Tooltip, Typography } from '@mui/material'
import { CancelRoundedIcon, ModalContainer } from 'components/Dialog/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { initialState, updateModalState } from 'store/modals'
import { styles } from './styles'
import { CW20 } from "types/CW20"
import { styles as defaultStyles } from 'components/Dialog/styles'
import { useCallback, useEffect, useState } from 'react'
import { isValidLogo } from 'utils/validation'
import { MODAL_MSGS } from 'utils/constants'
import { FeeDisplayer } from 'containers/ContractDetails/components/helpers'
import { EncodeObject, StdFee } from 'cudosjs'
import useSignAndBroadcast from 'utils/CustomHooks/useSignAndBroadcastTx'
import useGenerateMsgHandler from 'utils/CustomHooks/useGenerateMsgHandler'
import { ContractMsgUploadLogo } from 'cudosjs/build/cosmwasm-stargate/modules/cw20/contract-messages'
import useSimulateTx from 'utils/CustomHooks/useSimulateTx'
import { getDisplayWorthyFee } from 'utils/helpers'
import { ImgComponent, TitleWithTooltip } from 'components/helpers'

import {
    emptyEncodeObject,
    emptyFeesObject,
    emptyTokenObject,
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
    const [newTokenObject, setNewTokenObject] = useState<CW20.TokenObject>(emptyTokenObject!)
    const [validatedLogo, setValidatedLogo] = useState<boolean>(false)
    const [msg, setMsg] = useState<EncodeObject>(emptyEncodeObject)
    const [fee, setFee] = useState<StdFee>(emptyFeesObject)
    const [loading, setLoading] = useState<boolean>(false)
    const [validatedBroadcastData, setValidatedBroadcastData] = useState<boolean>(false)
    const [fieldError, setFieldError] = useState<string>('')

    const handleFieldChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNewTokenObject({ ...newTokenObject, logoUrl: event.target.value })
    }

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

        if (newUrl === selectedAsset?.logoUrl) {
            return false
        }

        const { valid, error } = await isValidLogo(newUrl)

        setFieldError(error)
        return valid
    }

    const validateData = useCallback(async (newUrl: string) => {

        setMsg(emptyEncodeObject)

        if (!newTokenObject.logoUrl) {
            setFieldError('')
            return
        }

        const validLogo = await validNewLogo(newUrl)
        setValidatedLogo(validLogo)

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
                            <Box>
                                <TitleWithTooltip text={TEXT.LogoUrl} tooltipText={TOOLTIPS.LogoUrl} />
                                <Box style={styles.input}>
                                    <Box sx={{ margin: '20px 20px 20px 0' }}>
                                        <ImgComponent
                                            UID={selectedAsset?.contractAddress || TEXT.DefaultLogo}
                                            size={80}
                                            src={(newTokenObject.logoUrl && validatedLogo && !fieldError) ? newTokenObject.logoUrl : selectedAsset?.logoUrl || ''}
                                        />
                                    </Box>
                                    <Input
                                        sx={{ width: '100%', height: '50px' }}
                                        type={TEXT.Text}
                                        placeholder={selectedAsset?.logoUrl || PLACEHOLDERS.LogoUrl}
                                        onChange={handleFieldChange}
                                        value={newTokenObject.logoUrl}
                                    />
                                </Box>
                            </Box>
                            <Box sx={styles.estimatorHolder}>
                                {validatedLogo ?
                                    <FeeDisplayer
                                        fee={getDisplayWorthyFee(fee, 4)}
                                        loading={loading}
                                    /> : fieldError ? <Typography
                                        variant='subtitle2'
                                        color='text.secondary'>
                                        {fieldError}
                                    </Typography> : null
                                }
                            </Box>
                        </Box>
                        <Tooltip
                            title={!validatedLogo ? fieldError :
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
