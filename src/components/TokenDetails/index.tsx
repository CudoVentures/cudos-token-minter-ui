import { Box } from "@mui/material"
import { FieldHandler } from "components/InputComponents"
import { styles } from "./styles"
import { useCallback } from "react"
import { CW20 } from "types/CW20"

import {
    DEFAULT_TOTAL_SUPPLY_VALUE,
    PLACEHOLDERS,
    TEXT,
    TOKEN_TYPE,
    TOOLTIPS
} from "./helpers"

const TokenDetails = ({
    tokenObject,
    tokenType,
    setTokenObject
}: {
    tokenObject: CW20.TokenObject
    tokenType: TOKEN_TYPE,
    setTokenObject: React.Dispatch<React.SetStateAction<CW20.TokenObject>>
}) => {

    let localObject = tokenObject

    const isDisabledTotalSupply = (useCallback(() => {
        return tokenType === TOKEN_TYPE.Burnable || tokenType === TOKEN_TYPE.Standard

        //eslint-disable-next-line
    }, [localObject]))()

    if (isDisabledTotalSupply && !localObject.totalSupply) {
        localObject = {
            ...localObject,
            totalSupply: DEFAULT_TOTAL_SUPPLY_VALUE
        }
    }

    const INPUT_FIELDS: CW20.INPUT_FIELD[] = [
        {
            //TokenName
            name: TEXT.TokenName,
            value: localObject.name || '',
            placeholder: PLACEHOLDERS.TokenName,
            tooltip: TOOLTIPS.TokenName,
            inputType: TEXT.Text,
            oldState: localObject,
            isDisabled: false
        },
        {
            //TokenSymbol
            name: TEXT.TokenSymbol,
            value: localObject.symbol || '',
            placeholder: PLACEHOLDERS.TokenSymbol,
            tooltip: TOOLTIPS.TokenSymbol,
            inputType: TEXT.Text,
            oldState: localObject,
            isDisabled: false
        },
        {
            //DecimalPrecision
            name: TEXT.DecimalPrecision,
            value: localObject.decimalPrecision || 0,
            placeholder: PLACEHOLDERS.DecimalPrecision,
            tooltip: TOOLTIPS.DecimalPrecision,
            inputType: TEXT.Number,
            oldState: localObject,
            isDisabled: false
        },
        {
            //InitialSupply
            name: TEXT.InitialSupply,
            value: localObject.initialSupply || '',
            placeholder: PLACEHOLDERS.InitialSupply,
            tooltip: TOOLTIPS.InitialSupply,
            inputType: TEXT.Text,
            oldState: localObject,
            isDisabled: false
        },
        {
            //TotalSupply
            name: TEXT.TotalSupply,
            value: localObject.totalSupply || '',
            placeholder: PLACEHOLDERS.TotalSupply,
            tooltip: TOOLTIPS.TotalSupply,
            inputType: TEXT.Text,
            oldState: localObject,
            isDisabled: isDisabledTotalSupply
        },
        {
            //LogoUrl
            name: TEXT.LogoUrl,
            value: localObject.logoUrl || '',
            placeholder: PLACEHOLDERS.LogoUrl,
            tooltip: TOOLTIPS.LogoUrl,
            inputType: TEXT.Text,
            oldState: localObject,
            isDisabled: false
        },
    ]

    return (
        <Box sx={styles.detailsHolder}>
            {INPUT_FIELDS.map((field, idx) => {

                const skipField = tokenType === TOKEN_TYPE.Unlimited &&
                    field.name === TEXT.TotalSupply

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
