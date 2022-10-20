import { Box } from "@mui/material"
import { Fragment } from "react"
import { styles } from "../../styles"
import { TokenActionMapper } from "../helpers"

const OwnerView = () => {

    return (
        <Box gap={2} sx={styles.viewHolder}>
            {TokenActionMapper.map((ACTION, idx) => (
                ACTION.owner ?
                    <Fragment key={idx}>
                        {ACTION.component}
                    </Fragment> : null
            ))}
        </Box>
    )
}

export default OwnerView
