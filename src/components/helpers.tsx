import { Box, Tooltip, Typography } from "@mui/material"
import { useState } from "react"
import { EXPLORER_ADDRESS_DETAILS } from "api/endpoints"
import copy from "copy-to-clipboard"
import LinkIcon from 'assets/vectors/link-icon.svg'
import CopyIcon from 'assets/vectors/copy-icon.svg'
import { formatAddress } from "utils/helpers"
import { styles } from "./styles"
import { useSelector } from "react-redux"
import { RootState } from "store"
import { ReactComponent as TooltipIcon } from 'assets/vectors/tooltip.svg'
import { SubTitle } from "./Dialog/ModalComponents/helpers"

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

export const TitleWithTooltip = ({ text, tooltipText, precision }: {
    text: string,
    tooltipText: string,
    precision?: number
}): JSX.Element => {

    return (
        <Box style={{ display: 'flex' }}>
            <Typography
                variant="subtitle1"
                fontWeight={700}
                marginRight={precision ? 0.2 : 1}
            >
                {text}
            </Typography>
            {
                precision ?
                    <SubTitle text={`.${'0'.repeat(precision!)}`} /> : null
            }
            {
                tooltipText ?
                    <Tooltip placement={'right'} followCursor={true} arrow={true} title={tooltipText}>
                        <Box marginTop={0.3} marginLeft={precision ? '5px' : '0px'}> <TooltipIcon /></Box>
                    </Tooltip> : null
            }
        </Box>
    )
}
