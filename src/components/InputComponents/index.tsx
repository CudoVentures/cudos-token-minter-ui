import { Box, Input, InputAdornment } from "@mui/material"
import { ReactComponent as ImgLogo } from 'assets/vectors/img-drag-drop-icon.svg'
import { styles } from "./styles"
import { TitleWithTooltip } from "components/helpers"
import { FORBIDDEN_SYMBOLS, TEXT } from "components/TokenDetails/helpers"
import { sanitizeString } from "utils/helpers"
import { isOnlyLetters } from "utils/validation"
import { CW20 } from "types/CW20"

export const FieldHandler = ({ fieldObject, setValue, }: {
    fieldObject: CW20.INPUT_FIELD,
    setValue: React.Dispatch<React.SetStateAction<CW20.TokenObject>>,
}) => {

    const handleFieldChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        //LogoUrl
        if (fieldObject.name === TEXT.LogoUrl) {
            setValue({ ...fieldObject.oldState, logoUrl: event.target.value })
            return
        }

        //TokenName
        if (fieldObject.name === TEXT.TokenName) {
            setValue({
                ...fieldObject.oldState,
                name: event.target.value
            })
            return
        }

        //TokenSymbol
        if (fieldObject.name === TEXT.TokenSymbol) {
            if (event.target.value.length > 5) {
                event!.preventDefault()
                return
            }
            setValue({ ...fieldObject.oldState, symbol: sanitizeString(event.target.value.toUpperCase()) })
            return
        }

        //DecimalPrecision
        if (fieldObject.name === TEXT.DecimalPrecision) {

            const maximumDecimals = 18
            if (Number(event.target.value) > maximumDecimals) {
                setValue({ ...fieldObject.oldState, decimalPrecision: maximumDecimals })
                return
            }
            setValue({ ...fieldObject.oldState, decimalPrecision: parseInt(event.target.value) })
            return
        }

        //InitialSupply && TotalSupply
        if (fieldObject.name === TEXT.InitialSupply || fieldObject.name === TEXT.TotalSupply) {

            const validNumber = Number(sanitizeString(event.target.value))

            if ((!validNumber && validNumber !== 0) || event.target.value.length > 15) {
                event!.preventDefault()
                return
            }

            const updatedKey = fieldObject.name === TEXT.InitialSupply ? 'initialSupply' : 'totalSupply'

            setValue({
                ...fieldObject.oldState,
                [updatedKey]:
                    validNumber ? validNumber.toLocaleString() : ''
            })
            return
        }
    }

    const preventForbiddenKeys = (
        event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {

        if (fieldObject.name === TEXT.DecimalPrecision) {
            if (FORBIDDEN_SYMBOLS.Precision.includes(event.key)) {
                event.preventDefault()
                return
            }
        }

        if (fieldObject.name === TEXT.TokenSymbol) {
            if (!isOnlyLetters(event.key)) {
                event.preventDefault()
                return
            }
        }

        if (fieldObject.name === TEXT.TokenName) {
            const maximumNameLength = 128 // To comply with network max-label limits.
            if ((fieldObject.value as string).length + 1 > maximumNameLength) {
                event.preventDefault()
                return
            }
        }
    }

    const isImgUrlInput = fieldObject.name === TEXT.LogoUrl

    return (
        <Box>
            <TitleWithTooltip text={fieldObject.name} tooltipText={fieldObject.tooltip} />
            <Box style={styles.input}>
                {isImgUrlInput ? <ImgLogo style={{ margin: '20px 20px 20px 0' }} /> : null}
                <Input
                    endAdornment={fieldObject.isDisabled ?
                        <InputAdornment position="end">
                            {'Cannot be modified due to Token Type'}
                        </InputAdornment> : null
                    }
                    disabled={fieldObject.isDisabled}
                    disableUnderline={isImgUrlInput ? false : true}
                    sx={{ width: '100%', height: '50px' }}
                    type={fieldObject.inputType}
                    placeholder={fieldObject.placeholder}
                    onKeyDown={preventForbiddenKeys}
                    onPaste={e => isImgUrlInput ? null : e.preventDefault()}
                    onChange={handleFieldChange}
                    value={fieldObject.value ? fieldObject.value : ''}
                />
            </Box>
        </Box>
    )
}
