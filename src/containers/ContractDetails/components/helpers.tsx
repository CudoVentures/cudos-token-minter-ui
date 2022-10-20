import { Button } from "@mui/material"
import { TEXT, TOOLTIPS, TOKEN_ACTION } from "components/TokenDetails/helpers"
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
