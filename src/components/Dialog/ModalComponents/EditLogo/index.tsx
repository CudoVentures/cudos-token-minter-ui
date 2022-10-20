import { Box, Button, Dialog as MuiDialog, Tooltip, Typography } from '@mui/material'
import { CancelRoundedIcon, ModalContainer } from 'components/Dialog/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { initialState, updateModalState } from 'store/modals'
import { styles } from './styles'
import { CW20 } from "types/CW20"
import { styles as defaultStyles } from 'components/Dialog/styles'
import { FieldHandler } from 'components/InputComponents'
import { DEFAULT_TOKEN_IMG_URL, PLACEHOLDERS, TEXT, TOOLTIPS } from 'components/TokenDetails/helpers'
import { useCallback, useEffect, useState } from 'react'
import { isValidImgRes, isValidImgUrl } from 'utils/validation'
import { RESOLUTIONS } from 'utils/constants'

const EditLogo = () => {

    const dispatch = useDispatch()
    const { openEditLogo } = useSelector((state: RootState) => state.modalState)
    const { selectedAsset } = useSelector((state: RootState) => state.assetsState)
    const [newTokenObject, setNewTokenObject] = useState<CW20.TokenObject>(selectedAsset!)
    const [validatedLogo, setValidatedLogo] = useState<boolean>(false)

    const handleClick = () => {
        // const newLogo = newTokenObject.logoUrl
        //TODO: Implement Edit Logo
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

        //eslint-disable-next-line
    }, [newTokenObject.logoUrl])

    useEffect(() => {

        validateData(newTokenObject.logoUrl!)

        //eslint-disable-next-line
    }, [validateData])

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
                    <Box gap={6} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
                        <Box sx={{ width: '100%' }}>
                            <FieldHandler
                                fieldObject={urlInput}
                                setValue={setNewTokenObject}
                            />
                        </Box>
                        <Tooltip title={!validatedLogo ? `${TEXT.InvalidImgSource} or ${TEXT.ResolutionExceedsLimit}` : ''}>
                            <Box>
                                <Button
                                    disabled={!validatedLogo}
                                    variant="contained"
                                    color="primary"
                                    sx={{ width: '250px' }}
                                    onClick={() => handleClick()}
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
