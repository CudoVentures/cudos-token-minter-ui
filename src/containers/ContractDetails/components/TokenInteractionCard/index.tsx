import { Box, Input, InputAdornment, Tooltip } from "@mui/material"
import Card from "components/Card/Card"
import { Title } from "components/Dialog/ModalComponents/helpers"
import { TitleWithTooltip } from "components/helpers"
import { emptyEncodeObject, emptyFeesObject, PLACEHOLDERS, TEXT, TOKEN_ACTION } from "components/TokenDetails/helpers"
import { EncodeObject, StdFee } from "cudosjs"
import { useEffect, useState } from "react"
import { CW20 } from "types/CW20"
import { MODAL_MSGS } from "utils/constants"
import useSignAndBroadcast from "utils/CustomHooks/useSignAndBroadcastTx"
import { SubmitBtn, isAddressRequired, FeeEstimator, validInput, generateMsgHandler } from "../helpers"
import { styles } from "./styles"

const TokenInteractionCard = ({ type, tooltipText, btnText }: {
    type: TOKEN_ACTION,
    tooltipText: string,
    btnText: string
}) => {

    //TODO: Implement token balance check
    const senderTokenBalance = 1000
    const signAndBroadcast = useSignAndBroadcast()
    const [value, setValue] = useState<string>('')
    const [recipient, setRecipient] = useState<string>('')
    const [msg, setMsg] = useState<EncodeObject>(emptyEncodeObject)
    const [fee, setFee] = useState<StdFee>(emptyFeesObject)
    const [validatedInput, setValidatedInput] = useState<boolean>(false)
    const [validatedBroadcastData, setValidatedBroadcastData] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const handleData = async () => {

        setMsg(emptyEncodeObject)
        setFee(emptyFeesObject)

        const [validatedInput, error] = validInput(type, value, recipient, senderTokenBalance)

        if (validatedInput) {
            const newMsg = await generateMsgHandler(type)
            setMsg(newMsg)
        }

        setError(error)
        setValidatedInput(validatedInput)
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        if (event.target.name === TEXT.ReceiverAddress) {
            setRecipient(event.target.value as string)
            return
        }

        setValue(event.target.value as string)
    }

    useEffect(() => {

        if (msg.typeUrl && fee.gas) {
            setValidatedBroadcastData(true)
            return
        }

        setValidatedBroadcastData(false)
    }, [msg, fee])

    useEffect(() => {

        handleData()

        //eslint-disable-next-line
    }, [recipient, value])

    const broadcast = async () => {

        const signAndBroadcastData:
            CW20.SignAndBroadcastMsgData = {
            msgType: type,
            msgs: [msg],
            fees: fee,
            msgTypeSpecificData: {
                operationType: type
            }
        }

        await signAndBroadcast(signAndBroadcastData)
    }

    const EndAdornment = () => {

        let preAdornment = <div></div>

        if (error) {
            preAdornment = <TitleWithTooltip
                text={error}
                tooltipText={''}
                color={'text.secondary'}
                variant={'subtitle2'}
                weight={400}
            />
        }

        if (validatedInput) {
            preAdornment = <FeeEstimator
                msg={msg}
                setFee={setFee}
            />
        }

        return (
            <Box gap={2} sx={{ display: 'flex', alignItems: 'center' }}>
                {preAdornment}
                <Tooltip
                    title={!validatedInput ? MODAL_MSGS.PROMPTS.VALID_DATA :
                        !validatedBroadcastData ? MODAL_MSGS.ERRORS.TYPE.CONNECTION : ''}>
                    <Box>
                        <SubmitBtn
                            btnText={btnText}
                            handleSend={broadcast}
                            validInput={validatedInput && validatedBroadcastData}
                        />
                    </Box>
                </Tooltip>
            </Box>
        )
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
                                    <EndAdornment />
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
