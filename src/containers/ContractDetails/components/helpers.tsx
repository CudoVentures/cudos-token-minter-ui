import { Box, Button, CircularProgress } from "@mui/material"
import { TitleWithTooltip } from "components/helpers"
import { TEXT, TOOLTIPS, TOKEN_ACTION, emptyEncodeObject, emptyFeesObject } from "components/TokenDetails/helpers"
import { EncodeObject, StdFee } from "cudosjs"
import { useEffect, useState } from "react"
import useSimulateTx from "utils/CustomHooks/useSimulateTx"
import { getDisplayWorthyFee } from "utils/helpers"
import { isValidCudosAddress } from "utils/validation"
import TokenInteractionCard from "./TokenInteractionCard"

export const TokenActionMapper = [
    {
        public: false,
        owner: true,
        holder: true,
        component: <TokenInteractionCard
            type={TOKEN_ACTION.SendTransfer}
            tooltipText={TOOLTIPS.SendTransfer}
            btnText={TEXT.Send}
        />
    },
    {
        public: false,
        owner: true,
        holder: false,
        component: <TokenInteractionCard
            type={TOKEN_ACTION.Burn}
            tooltipText={TOOLTIPS.Burn}
            btnText={TEXT.Burn}
        />
    },
    {
        public: false,
        owner: true,
        holder: false,
        component: <TokenInteractionCard
            type={TOKEN_ACTION.Mint}
            tooltipText={TOOLTIPS.Mint}
            btnText={TEXT.Mint}
        />
    },
    {
        public: false,
        owner: true,
        holder: true,
        component: <TokenInteractionCard
            type={TOKEN_ACTION.IncreaseAllowance}
            tooltipText={TOOLTIPS.IncreaseAllowance}
            btnText={TEXT.Increase}
        />
    },
    {
        public: false,
        owner: true,
        holder: true,
        component: <TokenInteractionCard
            type={TOKEN_ACTION.DecreaseAllowance}
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
    return typeToCheck === TOKEN_ACTION.SendTransfer ||
        typeToCheck === TOKEN_ACTION.IncreaseAllowance ||
        typeToCheck === TOKEN_ACTION.DecreaseAllowance
}

export const FeeEstimator = ({ msg, setFee }: {
    msg: EncodeObject,
    setFee: React.Dispatch<React.SetStateAction<StdFee>>
}): JSX.Element => {

    const simulateTx = useSimulateTx()
    const [loading, setLoading] = useState<boolean>(false)
    const [estimatedFee, setEstimatedFee] = useState<string>(
        getDisplayWorthyFee(emptyFeesObject!, 4)
    )

    const estimateFee = async () => {
        try {
            setLoading(true)
            const newFee = await simulateTx([msg])
            const displayWorthyFee: string = getDisplayWorthyFee(newFee!, 4)
            setFee(newFee!)
            setEstimatedFee(displayWorthyFee)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (msg.typeUrl) {
            estimateFee()
        }

        //eslint-disable-next-line
    }, [msg])

    return (
        <Box gap={0.5} sx={{ height: '15px', display: 'flex', alignItems: 'center' }}>
            <TitleWithTooltip tooltipText="" text={"Fee Estimate:"} variant={'subtitle2'} color={'text.secondary'} weight={400} />
            <TitleWithTooltip tooltipText="" text={estimatedFee} variant={'subtitle2'} weight={400} />
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
    senderTokenBalance: number
): [boolean, string] => {

    const amount = parseFloat(value)

    if (!amount || amount <= 0) {
        return [false, '']
    }

    if (isAddressRequired(type) && !isValidCudosAddress(recipient)) {
        return [false, TEXT.InvalidAddress]
    }

    if (type === TOKEN_ACTION.SendTransfer && amount > senderTokenBalance) {
        return [false, TEXT.InsufficientBalance]
    }

    return [true, '']
}

export //TODO: Waiting on CudosJS CW20 helpers
    const generateMsgHandler = async (type: TOKEN_ACTION): Promise<EncodeObject> => {
        let tempMsg: EncodeObject = emptyEncodeObject

        if (type === TOKEN_ACTION.EditLogo) {

        }

        if (type === TOKEN_ACTION.SendTransfer) {

        }

        if (type === TOKEN_ACTION.IncreaseAllowance) {

        }

        if (type === TOKEN_ACTION.DecreaseAllowance) {

        }

        if (type === TOKEN_ACTION.Mint) {

        }

        if (type === TOKEN_ACTION.Burn) {

        }

        return tempMsg
    }
