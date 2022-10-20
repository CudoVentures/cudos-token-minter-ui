import { Box } from "@mui/material"
import { styles } from "../../styles"
import { Fragment } from "react"
import { TokenActionMapper } from "../helpers"

const PublicView = () => {

    return (
        <Box gap={2} sx={styles.viewHolder}>
            {TokenActionMapper.map((ACTION, idx) => (
                ACTION.public ?
                    <Fragment key={idx}>
                        {ACTION.component}
                    </Fragment> : null
            ))}
        </Box>
    )
}

export default PublicView
