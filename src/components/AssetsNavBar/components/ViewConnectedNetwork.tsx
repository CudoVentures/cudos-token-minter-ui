import { Typography, Box } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "store"
import { CHAIN_DETAILS } from "utils/constants"
import { styles } from "../styles"
import { getConcatenatedText } from ".."

const ViewConnectedNetwork = () => {

    const { chosenNetwork } = useSelector((state: RootState) => state.userState)
    const aliasName = CHAIN_DETAILS[chosenNetwork!].ALIAS_NAME

    return (
        <Box gap={2} display={'flex'} alignItems={'center'}>
            <Typography>
                Viewing:
            </Typography>

            <Box sx={styles.connectedBox}>
                {getConcatenatedText(aliasName)}
            </Box>

        </Box>

    )
}

export default ViewConnectedNetwork
