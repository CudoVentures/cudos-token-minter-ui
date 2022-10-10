import { Box } from "@mui/material"
import { FieldHandler } from "components/InputComponents"
import { styles } from "./styles"

import {
    DEFAULT_TOTAL_SUPPLY_VALUE,
    INPUT_FIELD,
    INPUT_NAMES,
    INPUT_TYPES,
    PLACEHOLDERS,
    TOKEN_NAME,
    TOOLTIPS
} from "./helpers"

const TokenDetails = ({
    tokenObject,
    tokenType,
    setTokenObject
}: {
    tokenObject: TokenObject
    tokenType: TOKEN_NAME,
    setTokenObject: React.Dispatch<React.SetStateAction<TokenObject>>
}) => {

    const localObject = tokenObject
    const isMintableToken = tokenType === TOKEN_NAME.Mintable

    const INPUT_FIELDS: INPUT_FIELD[] = [
        {
            //TokenName
            name: INPUT_NAMES.TokenName,
            value: localObject.name || '',
            placeholder: PLACEHOLDERS.TokenName,
            tooltip: TOOLTIPS.TokenName,
            inputType: INPUT_TYPES.Text,
            oldState: localObject,
            isDisabled: false
        },
        {
            //TokenSymbol
            name: INPUT_NAMES.TokenSymbol,
            value: localObject.symbol || '',
            placeholder: PLACEHOLDERS.TokenSymbol,
            tooltip: TOOLTIPS.TokenSymbol,
            inputType: INPUT_TYPES.Text,
            oldState: localObject,
            isDisabled: false
        },
        {
            //DecimalPrecision
            name: INPUT_NAMES.DecimalPrecision,
            value: localObject.decimalPrecision || 0,
            placeholder: PLACEHOLDERS.DecimalPrecision,
            tooltip: TOOLTIPS.DecimalPrecision,
            inputType: INPUT_TYPES.Number,
            oldState: localObject,
            isDisabled: false
        },
        {
            //InitialSupply
            name: INPUT_NAMES.InitialSupply,
            value: localObject.initialSupply || '',
            placeholder: PLACEHOLDERS.InitialSupply,
            tooltip: TOOLTIPS.InitialSupply,
            inputType: INPUT_TYPES.Text,
            oldState: localObject,
            isDisabled: false
        },
        {
            //TotalSupply
            name: INPUT_NAMES.TotalSupply,
            value: isMintableToken ? DEFAULT_TOTAL_SUPPLY_VALUE : localObject.totalSupply || '',
            placeholder: PLACEHOLDERS.TotalSupply,
            tooltip: TOOLTIPS.TotalSupply,
            inputType: INPUT_TYPES.Text,
            oldState: localObject,
            isDisabled: tokenType === TOKEN_NAME.Mintable
        },
        {
            //LogoUrl
            name: INPUT_NAMES.LogoUrl,
            value: localObject.logoUrl || '',
            placeholder: PLACEHOLDERS.LogoUrl,
            tooltip: TOOLTIPS.LogoUrl,
            inputType: INPUT_TYPES.Text,
            oldState: localObject,
            isDisabled: false
        },
    ]

    return (
        <Box sx={styles.detailsHolder}>
            {INPUT_FIELDS.map((field, idx) => {

                const skipField = tokenType === TOKEN_NAME.Unlimited &&
                    field.name === INPUT_NAMES.TotalSupply

                return skipField ? null :
                    <FieldHandler
                        key={idx}
                        fieldObject={field}
                        setValue={setTokenObject}
                    />
            })}
        </Box>
    )
}

export default TokenDetails
