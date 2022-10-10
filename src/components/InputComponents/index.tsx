import { Box, Input, InputAdornment } from "@mui/material"
import { ReactComponent as ImgLogo } from 'assets/vectors/img-drag-drop-icon.svg'
import { styles } from "./styles"
import { TitleWithTooltip } from "components/helpers"
import { INPUT_FIELD, INPUT_NAMES, FORBIDDEN_SYMBOLS } from "components/TokenDetails/helpers"
import { isValidLetter } from "utils/helpers"

export const FieldHandler = ({ fieldObject, setValue, }: {
    fieldObject: INPUT_FIELD,
    setValue: React.Dispatch<React.SetStateAction<TokenObject>>,
}) => {

    const handleFieldChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        //LogoUrl
        if (fieldObject.name === INPUT_NAMES.LogoUrl) {
            setValue({ ...fieldObject.oldState, logoUrl: event.target.value })
            return
        }

        //TokenName
        if (fieldObject.name === INPUT_NAMES.TokenName) {
            setValue({ ...fieldObject.oldState, name: event.target.value })
            return
        }

        //TokenSymbol
        if (fieldObject.name === INPUT_NAMES.TokenSymbol) {
            if (event.target.value.length > 5) {
                event!.preventDefault()
                return
            }
            setValue({ ...fieldObject.oldState, symbol: event.target.value.toUpperCase() })
            return
        }

        //DecimalPrecision
        if (fieldObject.name === INPUT_NAMES.DecimalPrecision) {

            if (Number(event.target.value) > 18) {
                event!.preventDefault()
                return
            }
            setValue({ ...fieldObject.oldState, decimalPrecision: parseInt(event.target.value) })
            return
        }

        //InitialSupply && TotalSupply
        if (fieldObject.name === INPUT_NAMES.InitialSupply || fieldObject.name === INPUT_NAMES.TotalSupply) {

            const validNumber = Number(event.target.value.replaceAll(',', ''))

            if ((!validNumber && validNumber !== 0) || event.target.value.length > 19) {
                event!.preventDefault()
                return
            }

            const updatedKey = fieldObject.name === INPUT_NAMES.InitialSupply ? 'initialSupply' : 'totalSupply'

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

        if (fieldObject.name === INPUT_NAMES.DecimalPrecision) {
            if (FORBIDDEN_SYMBOLS.Precision.includes(event.key)) {
                event.preventDefault()
                return
            }
        }

        if (fieldObject.name === INPUT_NAMES.TokenSymbol ||
            fieldObject.name === INPUT_NAMES.TokenName) {
            if (!isValidLetter(event.key)) {
                event.preventDefault()
                return
            }
        }
    }

    const isImgUrlInput = fieldObject.name === INPUT_NAMES.LogoUrl

    return (
        <Box>
            <TitleWithTooltip title={fieldObject.name} tooltipText={fieldObject.tooltip} />
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
