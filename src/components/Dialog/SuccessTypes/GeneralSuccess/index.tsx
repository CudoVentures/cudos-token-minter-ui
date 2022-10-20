import { Box, Button, Typography } from "@mui/material"
import FollowTxHashToExplorer from "components/Dialog/ModalComponents/FollowTxHashToExplorer"
import { useDispatch } from "react-redux"
import { initialState, SuccessModalDataObject, updateModalState } from "store/modals"
import { styles } from "./styles"

const GeneralSuccess = ({ data }: { data: SuccessModalDataObject }) => {

    const dispatch = useDispatch()
    const operation: string = data.msgTypeSpecificData?.operationType as string

    const handleClose = () => {
        dispatch(updateModalState(initialState))
    }
    return (
        <Box gap={2} margin={'0px 50px'} alignItems={'center'} style={styles.holder}>
            <Typography textAlign={'center'} variant="subtitle1" color='text.secondary'>
                {`You have successfully executed ${operation.toUpperCase()} operation`}
            </Typography>
            <FollowTxHashToExplorer txHash={data.result.transactionHash} />
            <Button
                variant="text"
                color="primary"
                onClick={handleClose}
            >
                Close
            </Button>
        </Box>
    )
}

export default GeneralSuccess
