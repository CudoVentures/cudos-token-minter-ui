import { Box, Input, InputAdornment, Tooltip } from "@mui/material"
import Card from "components/Card/Card"
import { Title } from "components/Dialog/ModalComponents/helpers"
import { TitleWithTooltip } from "components/helpers"
import { PLACEHOLDERS, TEXT, TOKEN_ACTION } from "components/TokenDetails/helpers"
import { useState } from "react"
import { MODAL_MSGS } from "utils/constants"
import { isValidCudosAddress } from "utils/validation"
import { SubmitBtn, isAddressRequired } from "../helpers"
import { styles } from "./styles"

const TokenInteractionCard = ({ type, tooltipText, btnText }: {
    type: TOKEN_ACTION,
    tooltipText: string,
    btnText: string
}) => {

    //TODO: Implement token balance check
    const senderTokenBalance = 10
    const [value, setValue] = useState<string>('')
    const [recipient, setRecipient] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        if (event.target.name === TEXT.ReceiverAddress) {
            setRecipient(event.target.value as string)
            return
        }

        setValue(event.target.value as string)
    }

    const validInput = () => {

        const amount = parseFloat(value)

        if (!amount || amount <= 0) {
            return false
        }

        if (type === TOKEN_ACTION.SendTransfer && amount > senderTokenBalance) {
            return false
        }

        if (isAddressRequired(type) && !isValidCudosAddress(recipient)) {
            return false
        }

        return true
    }


    //TODO: Implement
    const handleClick = () => {

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
    }

    return (
        <Card style={styles.contentCard} sx={{ minWidth: 'max-content' }}>
            <Box gap={2} style={styles.boxHolder}>
                <TitleWithTooltip
                    text={type.toUpperCase()}
                    tooltipText={tooltipText}
                    color={'text.secondary'}
                    variant={'subtitle2'}
                    weight={600}
                />
                {isAddressRequired(type) ?
                    <Box gap={1} style={styles.inputHolder}>
                        <Title text={TEXT.ReceiverAddress} />
                        <Box style={styles.input}>
                            <Input
                                name={TEXT.ReceiverAddress}
                                disableUnderline
                                sx={styles.textInput}
                                type={TEXT.Text}
                                placeholder={PLACEHOLDERS.CudosAddress}
                                onChange={handleChange}
                                value={recipient}
                            />
                        </Box>
                    </Box>
                    : null
                }
                <Box gap={1} style={styles.inputHolder}>
                    <Title text={TEXT.Amount} />
                    <Box style={styles.input}>
                        <Input
                            endAdornment={
                                <InputAdornment position="end">
                                    <Tooltip title={!validInput() ? MODAL_MSGS.PROMPTS.VALID_DATA : ''}>
                                        <Box>
                                            <SubmitBtn
                                                btnText={btnText}
                                                handleSend={handleClick}
                                                validInput={validInput()}
                                            />
                                        </Box>
                                    </Tooltip>
                                </InputAdornment>
                            }
                            name={TEXT.Amount}
                            disableUnderline
                            sx={styles.amountInput}
                            type={TEXT.Number}
                            placeholder={PLACEHOLDERS.DecimalZeroes}
                            onChange={handleChange}
                            value={value}
                        />
                    </Box>
                </Box>
            </Box>
        </Card>
    )
}

export default TokenInteractionCard
