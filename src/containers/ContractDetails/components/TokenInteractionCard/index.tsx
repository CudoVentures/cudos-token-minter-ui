import { Box, Input, InputAdornment, Tooltip } from "@mui/material"
import Card from "components/Card/Card"
import { SubTitle, Title } from "components/Dialog/ModalComponents/helpers"
import { TitleWithTooltip } from "components/helpers"
import { EncodeObject, StdFee } from "cudosjs"
import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "store"
import { CW20 } from "types/CW20"
import { MODAL_MSGS } from "utils/constants"
import useGenerateMsgHandler from "utils/CustomHooks/useGenerateMsgHandler"
import useSignAndBroadcast from "utils/CustomHooks/useSignAndBroadcastTx"
import useSimulateTx from "utils/CustomHooks/useSimulateTx"
import { getDisplayWorthyFee } from "utils/helpers"
import { SubmitBtn, isAddressRequired, FeeDisplayer, validInput, errorHandler } from "../helpers"
import { convertPreciseTokenBalanceToFull } from "utils/regexFormatting"
import { styles } from "./styles"

import {
    emptyEncodeObject,
    emptyFeesObject,
    PLACEHOLDERS,
    TEXT,
    TOKEN_ACTION,
    TOKEN_TYPE
} from "components/TokenDetails/helpers"


const disabledActions = {
    [TOKEN_TYPE.Standard]: [TOKEN_ACTION.Burn, TOKEN_ACTION.Mint],
    [TOKEN_TYPE.Burnable]: [TOKEN_ACTION.Mint],
    [TOKEN_TYPE.Mintable]: [TOKEN_ACTION.Burn],
    [TOKEN_TYPE.Unlimited]: []
}

const TokenInteractionCard = ({ tokenAction, tooltipText, btnText }: {
    tokenAction: TOKEN_ACTION,
    tooltipText: string,
    btnText: string
}) => {

    const signAndBroadcast = useSignAndBroadcast()
    const generateMsgHandler = useGenerateMsgHandler()
    const simulateTx = useSimulateTx()
    const { selectedAsset } = useSelector((state: RootState) => state.assetsState)
    const { assets } = useSelector((state: RootState) => state.userState)
    const [value, setValue] = useState<string>('')
    const [recipient, setRecipient] = useState<string>('')
    const [msg, setMsg] = useState<EncodeObject>(emptyEncodeObject)
    const [fee, setFee] = useState<StdFee>(emptyFeesObject)
    const [validatedInput, setValidatedInput] = useState<boolean>(false)
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const cleanState = () => {
        setMsg(emptyEncodeObject)
        setFee(emptyFeesObject)
        setValue('')
        setRecipient('')
    }

    const handleData = async () => {

        try {
            setLoading(true)
            setMsg(emptyEncodeObject)
            setFee(emptyFeesObject)

            const [validatedInput, error] = validInput(
                tokenAction,
                value,
                recipient,
                assets![selectedAsset?.contractAddress!],
                selectedAsset?.decimalPrecision!
            )

            setValidatedInput(validatedInput)
            setError(error)

            if (validatedInput) {

                const handlerSpecificData = {
                    value: convertPreciseTokenBalanceToFull(value, selectedAsset?.decimalPrecision!),
                    recipient: recipient
                }

                const newMsg = await generateMsgHandler(tokenAction, handlerSpecificData)
                setMsg(newMsg)

                const newFee = await simulateTx([newMsg])
                setFee(newFee!)
            }

        } catch (error: any) {
            setError(errorHandler(error as Error))
            console.error((error as Error).stack)

        } finally {
            setLoading(false)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        setLoading(false)

        if (event.target.name === TEXT.ReceiverAddress) {
            setRecipient(event.target.value as string)
            return
        }

        setValue(event.target.value as string)
    }

    useEffect(() => {

        setIsDisabled(
            disabledActions[selectedAsset?.tokenType!]?.includes(tokenAction)
        )

        //eslint-disable-next-line
    }, [])

    useEffect(() => {

        handleData()

        //eslint-disable-next-line
    }, [recipient, value])

    const broadcast = async () => {

        const signAndBroadcastData:
            CW20.SignAndBroadcastMsgData = {
            msgType: tokenAction,
            msgs: [msg],
            fees: fee,
            msgTypeSpecificData: {
                operationType: tokenAction
            }
        }
        cleanState()
        await signAndBroadcast(signAndBroadcastData)
    }

    const handleBtnTooltip = (): string => {

        if (isDisabled || error) {
            return ''
        }

        if (!validatedInput) {
            return MODAL_MSGS.PROMPTS.VALID_DATA
        }

        if (fee.gas === emptyFeesObject.gas) {
            return MODAL_MSGS.ERRORS.TYPE.CONNECTION
        }

        return ''
    }

    const EndAdornment = useCallback(() => {

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

        if (validatedInput && !error) {
            preAdornment = <FeeDisplayer
                fee={getDisplayWorthyFee(fee, 4)}
                loading={loading}
            />
        }

        if (isDisabled) {
            preAdornment = <SubTitle text={'Cannot be used due to Token Type'} />
        }

        return (
            <Box gap={2} sx={{ display: 'flex', alignItems: 'center' }}>
                {preAdornment}
                <Tooltip
                    title={handleBtnTooltip()}>
                    <Box>
                        <SubmitBtn
                            btnText={btnText}
                            handleSend={broadcast}
                            validInput={
                                validatedInput &&
                                msg.typeUrl !== '' &&
                                fee.gas !== emptyFeesObject.gas &&
                                !loading &&
                                !error
                            }
                        />
                    </Box>
                </Tooltip>
            </Box>
        )

        //eslint-disable-next-line
    }, [error, validatedInput, isDisabled, msg, fee])

    return (
        <Card style={styles.contentCard} sx={{ minWidth: 'max-content' }}>
            <Box gap={2} style={styles.boxHolder}>
                <TitleWithTooltip
                    text={tokenAction.toUpperCase()}
                    tooltipText={tooltipText}
                    color={'text.secondary'}
                    variant={'subtitle2'}
                    weight={600}
                />
                {isAddressRequired(tokenAction) ?
                    <Box gap={1} style={styles.inputHolder}>
                        <Title text={TEXT.ReceiverAddress} />
                        <Box style={styles.input}>
                            <Input
                                disabled={isDisabled}
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
                            disabled={isDisabled}
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
