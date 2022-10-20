import { Box } from "@mui/material"
import Dialog from "components/Dialog"
import HolderView from "./components/HolderView"
import OwnerView from "./components/OwnerView"
import PublicView from "./components/PublicView"
import TopOverview from "./components/TopOverview"

import { styles } from "./styles"

const ContractDetails = () => {

    const isOwner = true
    const isHolder = false

    return (
        <Box>
            <Dialog />
            <Box gap={2} style={styles.contentHolder}>
                <TopOverview />
                {isOwner ? <OwnerView /> :
                    !isOwner && isHolder ? <HolderView /> :
                        <PublicView />}
            </Box>
        </Box>
    )
}

export default ContractDetails
