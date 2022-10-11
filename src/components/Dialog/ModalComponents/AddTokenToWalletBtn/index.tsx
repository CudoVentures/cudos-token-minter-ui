import { Button } from "@mui/material"
import { addTokenByLedgerType } from "utils/config"

const AddTokenToWalletBtn = ({addToWalletObject}:{addToWalletObject: CW20.AddToWalletObject}) => {

    const handleAddToken = async () => {
        await addTokenByLedgerType(addToWalletObject)
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
