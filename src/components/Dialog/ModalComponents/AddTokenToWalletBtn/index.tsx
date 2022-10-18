import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { initialState, updateModalState } from "store/modals"
import { CW20 } from "types/CW20"
import { addTokenByLedgerType } from "utils/config"
import { NAVIGATION_PATH } from "utils/constants"

const AddTokenToWalletBtn = ({ addToWalletObject }: { addToWalletObject: CW20.AddToWalletObject }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddToken = async () => {

        dispatch(updateModalState(initialState))
        dispatch(updateModalState({
            loading: true,
        }))
        await addTokenByLedgerType(addToWalletObject)
        navigate(NAVIGATION_PATH.Assets)
        setTimeout(() => {
            dispatch(updateModalState({
                loading: false,
            }))
        }, 200)
    }

    return (
        <Button
            variant="contained"
            color="primary"
            sx={() => ({
                width: '100%',
                fontWeight: 700
            })}
            onClick={handleAddToken}
        >
            {`Add token to ${addToWalletObject.connectedLedger}`}
        </Button>
    )
}

export default AddTokenToWalletBtn
