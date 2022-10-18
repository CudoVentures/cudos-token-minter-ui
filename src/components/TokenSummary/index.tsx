import { Box, Input } from "@mui/material"
import Card from "components/Card/Card"
import { TitleWithTooltip } from "components/helpers"
import { StdFee } from "cudosjs"
import { useSelector } from "react-redux"
import { RootState } from "store"
import { CHAIN_DETAILS } from "utils/constants"
import { chainIDToAlias, getDisplayWorthyFee } from "utils/helpers"
import { styles } from "./styles"
import { BoxWrapper, SubTitle, Title } from "components/Dialog/ModalComponents/helpers"
import { DEFAULT_TOKEN_IMG_URL, TEXT, TOKEN_TYPE, TOOLTIPS, TOKEN_DESCRIPTION } from "components/TokenDetails/helpers"
import { CW20 } from "types/CW20"

const TokenSummary = ({ tokenObject, tokenType, estimatedFee }: {
    tokenObject: CW20.TokenObject
    tokenType: TOKEN_TYPE,
    estimatedFee: StdFee
}) => {

    const { chosenNetwork } = useSelector((state: RootState) => state.userState)
    const aliasChainName: string = chainIDToAlias(CHAIN_DETAILS.CHAIN_ID[chosenNetwork!])
    const displayWorthyFee: string = getDisplayWorthyFee(estimatedFee, 5)

    return (
        <Box sx={styles.detailsHolder}>
            <Box>
                <Title text={TEXT.Summary} />
                <Card style={styles.cardHolder}>
                    <BoxWrapper>
                        <SubTitle text={TEXT.TokenType} />
                        <SubTitle text={TEXT.DeploymentNetwork} />
                    </BoxWrapper>
                    <BoxWrapper>
                        <TitleWithTooltip text={tokenType} tooltipText={TOKEN_DESCRIPTION[tokenType]} />
                        <TitleWithTooltip text={aliasChainName} tooltipText={TOOLTIPS.DeploymentNetwork} />
                    </BoxWrapper>
                </Card>
                <Card style={styles.lowerCardHolder}>
                    <Box style={styles.boxHolder}>
                        <BoxWrapper>
                            <SubTitle text={TEXT.TokenName} />
                            <SubTitle text={TEXT.TokenSymbol} />
                            <SubTitle text={TEXT.DecimalPrecision} />
                            <SubTitle text={TEXT.InitialSupply} />
                            {
                                tokenType === TOKEN_TYPE.Unlimited ? null :
                                    <SubTitle text={TEXT.TotalSupply} />
                            }
                        </BoxWrapper>
                        <BoxWrapper>
                            <Title text={tokenObject.name!} />
                            <Title text={tokenObject.symbol!} />
                            <Title text={tokenObject.decimalPrecision?.toString()!} />
                            <TitleWithTooltip
                                text={tokenObject.initialSupply!}
                                tooltipText={TOOLTIPS.InitialSupply}
                                precision={tokenObject.decimalPrecision}
                            />
                            {
                                tokenType === TOKEN_TYPE.Unlimited ? null :
                                    <TitleWithTooltip
                                        text={tokenObject.totalSupply!}
                                        tooltipText={TOOLTIPS.TotalSupply}
                                        precision={tokenObject.decimalPrecision}
                                    />
                            }
                        </BoxWrapper>
                    </Box>
                    <Box style={{ margin: '20px 0px 10px 0px' }}>
                        <BoxWrapper>
                            <SubTitle text={TEXT.Logo} />
                        </BoxWrapper>
                    </Box>
                    <Box style={styles.input}>
                        {<img
                            style={styles.img}
                            src={tokenObject.logoUrl ? tokenObject.logoUrl : DEFAULT_TOKEN_IMG_URL}
                            alt="Token Logo"
                        />}
                        <Input
                            disabled={true}
                            sx={{ width: '100%' }}
                            value={tokenObject.logoUrl ? tokenObject.logoUrl : 'Default Logo'}
                        />
                    </Box>
                </Card>
                <Title text={TEXT.TransactionDetails} />
                <Card style={styles.cardHolder} sx={{ borderRadius: '5px' }}>
                    <BoxWrapper>
                        <SubTitle text={TEXT.GasFeeEstimate} />
                    </BoxWrapper>
                    <BoxWrapper>
                        <Title text={displayWorthyFee} />
                    </BoxWrapper>
                </Card>
            </Box>
        </Box>
    )
}

export default TokenSummary
