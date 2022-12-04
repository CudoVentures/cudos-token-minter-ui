import { Box, Divider, Tooltip, Typography } from "@mui/material"
import AddTokenToWalletBtn from "components/Dialog/ModalComponents/AddTokenToWalletBtn"
import FollowTxHashToExplorer from "components/Dialog/ModalComponents/FollowTxHashToExplorer"
import { BoxWrapper, SubTitle, Title } from "components/Dialog/ModalComponents/helpers"
import { SuccessModalDataObject } from "store/modals"
import { formatAddress } from "utils/helpers"
import { styles } from "./styles"
import NavigateToBtn from "components/Dialog/ModalComponents/NavigateToBtn"
import { CHAIN_DETAILS, NAVIGATION_PATH } from "utils/constants"
import { RootState } from "store"
import { useSelector } from "react-redux"
import { CW20 } from "types/CW20"

const InstantiateSuccess = ({ data }: { data: SuccessModalDataObject }) => {

    const { chosenNetwork, connectedLedger } = useSelector((state: RootState) => state.userState)

    const contractAddress = JSON.parse(data.result?.rawLog!)[0]
        .events.find(event => event.type === 'instantiate')
        .attributes[0].value.replaceAll('"', '') || ''

    const tokenObject: CW20.TokenObject = data.msgTypeSpecificData?.tokenObject as CW20.TokenObject

    const AddToWalletObject: CW20.AddToWalletObject = {
        tokenobject: tokenObject,
        contractAddress: contractAddress,
        chainId: CHAIN_DETAILS.CHAIN_ID[chosenNetwork!],
        chainName: CHAIN_DETAILS.CHAIN_NAME[chosenNetwork!],
        connectedLedger: connectedLedger!
    }

    return (
        <Box style={styles.holder}>
            <Box alignItems={'center'} style={styles.holder}>
                <Typography textAlign={'center'} variant="subtitle1" color='text.secondary'>
                    {"You have successfully finished minting your new token."} <br />
                    {"You can view detailed information in Explorer."}
                </Typography>
                <FollowTxHashToExplorer txHash={data.result.transactionHash} />
            </Box>
            <Divider />
            <Box style={{ display: 'flex', margin: '15px 0px' }}>
                <BoxWrapper>
                    <SubTitle text={"Contract Address"} />
                    <SubTitle text={"Token Name"} />
                    <SubTitle text={"Gas Fee"} />
                </BoxWrapper>
                <BoxWrapper>
                    <Tooltip title={contractAddress}>
                        <Box>
                            <Title text={formatAddress(contractAddress, 20)} />
                        </Box>
                    </Tooltip>
                    <Title text={tokenObject.symbol!} />
                    <Title text={data.txFee} />
                </BoxWrapper>
            </Box>
            <Divider />
            <Box margin={2} gap={2} display={'flex'} flexDirection={'column'}>
                <AddTokenToWalletBtn addToWalletObject={AddToWalletObject} />
                <NavigateToBtn
                    btnText={"Mint another token"}
                    route={NAVIGATION_PATH.MintTokens}
                    type={"secondary"}
                />
                <NavigateToBtn
                    btnText={"Go to My Assets"}
                    route={NAVIGATION_PATH.MyAssets}
                    type={"secondary"}
                />
            </Box>
        </Box>
    )
}

export default InstantiateSuccess
