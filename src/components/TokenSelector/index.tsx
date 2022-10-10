import { Box, Typography } from "@mui/material"
import { ReactComponent as SelectedRadioBtn } from './selectedRadio.svg'
import { ReactComponent as RadioBtn } from './emptyRadio.svg'
import Card from "components/Card/Card"
import { COLORS_DARK_THEME } from "theme/colors"
import { styles } from "./styles"
import { TOKEN_NAME, TOKEN_TYPES } from "components/TokenDetails/helpers"
import { TitleWithTooltip } from "components/helpers"
import NetworkInfo from "components/Layout/Networkinfo"

const AttributeHandler = ({ tokenType }: { tokenType: TOKEN_NAME }): JSX.Element => {

    return TOKEN_TYPES[tokenType].attributes ? (
        <Box style={{ padding: '15px 0px 5px 15px', borderRadius: '12px', border: `1px solid ${COLORS_DARK_THEME.LIGHT_BACKGROUND}` }}>
            <Typography marginBottom={1} fontWeight={700}>Based on your token type selection your token will be:</Typography>
            {TOKEN_TYPES[tokenType].attributes.map((attribute, idx: number) => (
                <Box key={idx} marginBottom={1} display={'flex'}>
                    <Typography marginRight={3} variant="subtitle2" color={'text.secondary'}>{attribute.type}</Typography>
                    <Typography variant="subtitle2">{attribute.option}</Typography>
                </Box>))}
        </Box>
    ) : <div></div>
}

const TokenSelector = ({ tokenType, setTokenType }: { tokenType: TOKEN_NAME, setTokenType: React.Dispatch<React.SetStateAction<TOKEN_NAME>> }) => {

    const availableTokens = [
        TOKEN_TYPES[TOKEN_NAME.Standart],
        TOKEN_TYPES[TOKEN_NAME.Burnable],
        TOKEN_TYPES[TOKEN_NAME.Mintable],
        TOKEN_TYPES[TOKEN_NAME.Unlimited]
    ]

    return (
        <Box>
            <TitleWithTooltip title={"Token Type"} tooltipText={""} />
            <Card style={styles.cardHolder}>
                {availableTokens.map((token, idx) => (
                    <Box
                        key={idx}
                        onClick={() => setTokenType(token.name)}
                        bgcolor={
                            token.name === tokenType ? 'rgba(82, 166, 248, 0.1)' :
                                COLORS_DARK_THEME.LIGHT_BACKGROUND
                        }
                        sx={styles.rowHolder}
                    >
                        {token.name === tokenType ?
                            <SelectedRadioBtn style={styles.radioBtn} /> :
                            <RadioBtn style={styles.radioBtn} />}
                        <Box>
                            <Typography fontWeight={700} variant="subtitle1">
                                {token.name}
                            </Typography>
                            <Typography variant="subtitle2" color={'text.secondary'}>
                                {token.description}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Card>
            <AttributeHandler tokenType={tokenType} />
            <Box margin={'20px 0px 50px 0px'}>
                <TitleWithTooltip
                    title={'Deployment Network'}
                    tooltipText={'The network where your token will be deployed'}
                />
                <Box margin={'10px 0px'}>
                    <NetworkInfo componentStyle={"menu"} />
                </Box>
            </Box>
        </Box>
    )
}

export default TokenSelector
