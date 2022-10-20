import { Box, Tooltip, Typography, TooltipProps, tooltipClasses } from "@mui/material"
import { Fragment, useState } from "react"
import { EXPLORER_ADDRESS_DETAILS } from "api/endpoints"
import copy from "copy-to-clipboard"
import LinkIcon from 'assets/vectors/link-icon.svg'
import CopyIcon from 'assets/vectors/copy-icon.svg'
import { formatAddress } from "utils/helpers"
import { styles } from "./styles"
import { useSelector } from "react-redux"
import { RootState } from "store"
import { ReactComponent as TooltipIcon } from 'assets/vectors/tooltip.svg'
import { Variant } from "@mui/material/styles/createTypography"
import styled from "@emotion/styled"

export const AddressWithCopyAndFollowComponent = ({ address }: { address: string }): JSX.Element => {
    return (
        <Box style={styles.centerFlexLinear}>
            <Typography
                fontWeight={600}
                variant='subtitle1'
                color='text.primary'
            >
                {formatAddress(address, 25)}
            </Typography>
            <CopyAndFollowComponent address={address} />
        </Box>
    )
}

export const CopyAndFollowComponent = ({ address }: { address: string }): JSX.Element => {

    const { chosenNetwork } = useSelector((state: RootState) => state.userState)
    const [copied, setCopied] = useState<boolean>(false)

    const handleCopy = (value: string) => {
        copy(value)
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }

    return (
        <Box style={styles.centerFlexLinear}>
            <Tooltip
                onClick={() => handleCopy(address)}
                title={copied ? 'Copied' : 'Copy to clipboard'}
            >
                <img
                    style={styles.icons}
                    src={CopyIcon}
                    alt="Copy"
                />
            </Tooltip>
            <Tooltip title="Check address on explorer">
                <a href={EXPLORER_ADDRESS_DETAILS(chosenNetwork!, address)} rel="noreferrer" target='_blank'>
                    <img
                        style={{ paddingTop: '5px', ...styles.icons }}
                        src={LinkIcon}
                        alt="Link"
                    />
                </a>
            </Tooltip>
        </Box>
    )
}

export const TitleWithTooltip = ({ text, tooltipText, precision, variant, color, weight }: {
    text: string,
    tooltipText: string,
    variant?: Variant | 'inherit',
    precision?: number,
    color?: 'text.primary' | 'text.secondary' | 'inherit',
    weight?: number
}): JSX.Element => {

    return (
        <Box style={{ display: 'flex' }}>
            <Typography
                color={color ? color : 'inherit'}
                variant={variant ? variant : "inherit"}
                fontWeight={weight ? weight : 700}
                marginRight={precision ? 0.2 : 0.5}
            >
                {text}
            </Typography>
            {
                precision ?
                    <Typography
                        variant={variant ? variant : "inherit"}
                        color='text.secondary'
                    >
                        {`.${'0'.repeat(precision!)}`}
                    </Typography> : null
            }
            {
                tooltipText ?
                    <Tooltip placement={'right'} followCursor={true} arrow={true} title={tooltipText}>
                        <Box marginTop={0} marginLeft={precision ? '5px' : '0px'}> <TooltipIcon /></Box>
                    </Tooltip> : null
            }
        </Box>
    )
}

export const TruncatedTextWithTooltip = ({ text, maxAllowed, variant, weight, symbol }: {
    text: string,
    maxAllowed: number,
    variant?: Variant | 'inherit',
    weight?: number
    symbol?: boolean
}): JSX.Element => {

    let tempText = text
    let tooltipText = ''

    if (text.length > maxAllowed) {
        tempText = symbol ?
            `(${text.slice(0, maxAllowed)}...)` :
            `${text.slice(0, maxAllowed)}...`
        tooltipText = text
    }

    if (symbol && !tooltipText) {
        tempText = `(${tempText})`
    }

    return (tooltipText ?
        <AdvancedTooltip
            tooltipComponent={
                <TitleWithTooltip
                    text={tooltipText}
                    tooltipText={''}
                    variant={'subtitle2'}
                />}
            children={
                <Typography variant={variant ? variant! : 'inherit'} fontWeight={weight ? weight : 400}>
                    {tempText}
                </Typography>
            }
        /> :
        <TitleWithTooltip
            text={tempText}
            tooltipText={''}
            variant={variant}
        />
    )
}

export const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#F6F6F6',
        color: 'black',
        maxWidth: 'max-content',
    },
}))

export const AdvancedTooltip = ({ tooltipComponent, children }: {
    tooltipComponent: JSX.Element,
    children: JSX.Element
}) => {

    return (
        <HtmlTooltip title={
            <Fragment>
                {tooltipComponent}
            </Fragment>}
        >
            {children}
        </HtmlTooltip>
    )
}
