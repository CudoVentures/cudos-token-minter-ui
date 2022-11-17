import { Box, Button, CircularProgress, Typography } from "@mui/material"
import BigNumber from "bignumber.js"
import { SubTitle } from "components/Dialog/ModalComponents/helpers"
import { AdvancedTooltip, TitleWithTooltip } from "components/helpers"
import { TEXT, TOOLTIPS, TOKEN_ACTION } from "components/TokenDetails/helpers"
import { convertFullTokenBalanceToPrecision, convertPreciseTokenBalanceToFull } from "utils/regexFormatting"
import { isValidCudosAddress } from "utils/validation"
import TokenInteractionCard from "./TokenInteractionCard"

export const TokenActionMapper = [
    {
        public: false,
        owner: false,
        holder: true,
        component: <TokenInteractionCard
            tokenAction={TOKEN_ACTION.Transfer}
            tooltipText={TOOLTIPS.Transfer}
            btnText={TEXT.Send}
        />
    },
    {
        public: false,
        owner: false,
        holder: true,
        component: <TokenInteractionCard
            tokenAction={TOKEN_ACTION.Burn}
            tooltipText={TOOLTIPS.Burn}
            btnText={TEXT.Burn}
        />
    },
    {
        public: false,
        owner: true,
        holder: false,
        component: <TokenInteractionCard
            tokenAction={TOKEN_ACTION.Mint}
            tooltipText={TOOLTIPS.Mint}
            btnText={TEXT.Mint}
        />
    },
    {
        public: false,
        owner: false,
        holder: true,
        component: <TokenInteractionCard
            tokenAction={TOKEN_ACTION.IncreaseAllowance}
            tooltipText={TOOLTIPS.IncreaseAllowance}
            btnText={TEXT.Increase}
        />
    },
    {
        public: false,
        owner: false,
        holder: true,
        component: <TokenInteractionCard
            tokenAction={TOKEN_ACTION.DecreaseAllowance}
            tooltipText={TOOLTIPS.DecreaseAllowance}
            btnText={TEXT.Decrease}
        />
    }
]

export const SubmitBtn = ({ btnText, handleSend, validInput }: {
    btnText: string,
    handleSend: () => void,
    validInput: boolean
}) => {

    return (
        <Button
            disabled={!validInput}
            variant="contained"
            color="secondary"
            sx={() => ({
                width: '120px',
            })}
            onClick={handleSend}
        >
            {btnText}
        </Button>
    )
}

export const isAddressRequired = (typeToCheck: TOKEN_ACTION): boolean => {
    return typeToCheck === TOKEN_ACTION.Transfer ||
        typeToCheck === TOKEN_ACTION.IncreaseAllowance ||
        typeToCheck === TOKEN_ACTION.DecreaseAllowance
}

export const FeeDisplayer = ({ fee, loading }: {
    fee: string,
    loading: boolean
}): JSX.Element => {

    return (
        <Box gap={0.5} sx={{ height: '15px', display: 'flex', alignItems: 'center' }}>
            <TitleWithTooltip tooltipText="" text={"Fee Estimate:"} variant={'subtitle2'} color={'text.secondary'} weight={400} />
            <TitleWithTooltip tooltipText="" text={fee} variant={'subtitle2'} weight={400} />
            <Box sx={{ width: '5px' }}>
                {loading ? <CircularProgress sx={{ marginBottom: '2px' }} size={12} color={'inherit'} /> : null}
            </Box>
        </Box>
    )
}

export const validInput = (
    type: TOKEN_ACTION,
    value: string,
    recipient: string,
    senderTokenBalance: string,
    precision: number
): [boolean, string] => {

    const amount = parseFloat(value)

    if (!amount || amount <= 0) {
        return [false, '']
    }

    if (isAddressRequired(type) && !isValidCudosAddress(recipient)) {
        return [false, TEXT.InvalidAddress]
    }

    if (type === TOKEN_ACTION.Transfer || type === TOKEN_ACTION.Burn) {

        const amountToUse = new BigNumber(convertPreciseTokenBalanceToFull(amount.toString(), precision))
        const balanceValue = new BigNumber(senderTokenBalance.toString())

        if (amountToUse.isGreaterThan(balanceValue)) {
            return [false, TEXT.InsufficientBalance]
        }
    }

    return [true, '']
}

export const displayTokenValueWithPrecisionTooltip = (
    tokenFullBalance: string,
    tokenPrecision: number,
    displayPrecision: number,
    weight: number
) => {

    const preciseValue = convertFullTokenBalanceToPrecision(tokenFullBalance || '0', tokenPrecision, displayPrecision)
    const shortValue = tokenFullBalance?.toString().slice(0, -tokenPrecision) || '0'
    let trailValue = tokenFullBalance?.toString().slice(-tokenPrecision) || '0'

    if (trailValue.length < tokenPrecision) {
        const zero = "0";
        const zeroTimes = tokenPrecision - trailValue.length;
        trailValue = zero.repeat(zeroTimes) + trailValue;
    }

    return (
        <AdvancedTooltip
            tooltipComponent={
                <Box style={{ display: 'flex' }}>
                    <Typography
                        color={'black'}
                        variant={"subtitle2"}
                        fontWeight={700}
                    >
                        {Number(shortValue).toLocaleString()}.
                    </Typography>
                    <Typography
                        variant={"subtitle2"}
                        color={'text.secondary'}
                        fontWeight={700}
                    >
                        {trailValue}
                    </Typography>
                </Box>
            }
            children={
                <Box gap={0.01} style={{ alignItems: 'center', display: 'flex' }}>
                    <Typography display='flex'>
                        <SubTitle
                            text={Number(preciseValue).toLocaleString()}
                            color={'text.primary'}
                            weight={weight}
                        />
                    </Typography>
                </Box>
            }
        />
    )
}

export const errorHandler = (rawError: Error): string => {

    let humanReadableError = ''

    if (rawError.message.includes('AllowanceResponse not found')) {
        humanReadableError = 'Address have no allowance'
    }

    if (rawError.message.includes('Cannot set to own account')) {
        humanReadableError = 'Cannot set to own account'
    }

    if (rawError.message.includes('Minting cannot exceed the cap')) {
        humanReadableError = 'Minting cannot exceed the cap'
    }

    return humanReadableError
}
