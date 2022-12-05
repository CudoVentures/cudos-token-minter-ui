import { Box, Tooltip, Typography, TooltipProps, tooltipClasses } from "@mui/material"
import { Fragment, ReactNode, useState } from "react"
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
import SVG from 'react-inlinesvg'
import { toSvg } from "jdenticon"
import { JD_CONFIG } from "utils/constants"
import { TEXT } from "./TokenDetails/helpers"
import { COLORS_DARK_THEME } from "theme/colors"

export const ImgComponent = ({
    UID,
    size,
    src
}: {
    UID: string,
    size: number,
    src: string
}): JSX.Element => {

    return (
        <Box sx={{
            ...styles.imgHolder,
            bgcolor: src ? 'none' : COLORS_DARK_THEME.DARK_BACKGROUND,
            padding: src ? '0px' : '15px',
            width: `${size}px`,
            height: `${size}px`,
        }}
        >
            {src ?
                <img
                    style={{
                        objectFit: 'cover',
                        height: '100%',
                        width: '100%'
                    }}
                    src={src}
                    alt={TEXT.TokenLogo}
                />
                :
                <SVG
                    title={TEXT.TokenLogo}
                    src={toSvg(UID || TEXT.DefaultLogo, size, JD_CONFIG)}
                />}
        </Box>
    )
}

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

export const ClickAndCopyToClipboard = ({ children, textToCopy }: { children: ReactNode, textToCopy: string }) => {

    const [copied, setCopied] = useState<boolean>(false)

    const handleCopy = (value: string) => {
        copy(value)
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 1000)
    }

    return (
        <Tooltip
        onClick={() => handleCopy(textToCopy)}
        title={copied ? 'Copied' : 'Copy to clipboard'}
    >
        <Box sx={{cursor: 'pointer'}}>
            {children}
        </Box>
    </Tooltip>
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
                    <AdvancedTooltip tooltipComponent={
                        <Box style={{ maxWidth: '500px' }}>
                            <Typography
                                textAlign={'justify'}
                                color={'black'}
                                variant={"subtitle2"}
                                fontWeight={700}
                            >
                                {tooltipText}
                            </Typography>
                        </Box>
                    } children={
                        <Box sx={{ cursor: 'pointer' }} marginTop={0} marginLeft={precision ? '5px' : '0px'}> <TooltipIcon /></Box>
                    } /> : null
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
    [`& .${tooltipClasses.arrow}`]: {
        color: 'white',
        "&::before": {
            backgroundColor: 'white',
            border: "1px solid #999"
        }
    },
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
        <HtmlTooltip
            placement="right"
            followCursor={true}
            arrow={true}
            title={
                <Fragment>
                    {tooltipComponent}
                </Fragment>}
        >
            {children}
        </HtmlTooltip>
    )
}
