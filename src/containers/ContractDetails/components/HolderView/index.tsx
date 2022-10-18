import { Box } from "@mui/material"
import { styles } from "../../styles"
import { Fragment } from "react"
import { TokenActionMapper } from "../helpers"

const HolderView = () => {

    return (
        <Box gap={2} sx={styles.viewHolder}>
            {TokenActionMapper.map((ACTION, idx) => (
                ACTION.holder ?
                    <Fragment key={idx}>
                        {ACTION.component}
                    </Fragment> : null
            ))}
        </Box>
    )
}

export default HolderView
