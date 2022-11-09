import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { NAVIGATION_PATH } from "utils/constants"
import useNavigateToRoute from "utils/CustomHooks/useNavigateToRoute"
import {ReactComponent as QuestionMarkIcon} from 'assets/vectors/questionmark-icon.svg'

const NoResult = ({ queryParam }: { queryParam: string }) => {

    const navigateToRoute = useNavigateToRoute()
    const [timer, setTimer] = useState<number>(3)

    useEffect(() => {

        if (timer > 0) {
            setTimeout(() => { setTimer(timer - 1) }, 1000)
            return
        }

        navigateToRoute(NAVIGATION_PATH.Home)

        //eslint-disable-next-line
    }, [timer])

    return (
        <Box gap={2} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <QuestionMarkIcon />
            <Typography variant="h5">No Result for {queryParam}</Typography>
            <Box gap={1} style={{display: 'flex', alignItems: 'center'}}>
                <Typography variant="subtitle1" color='text.secondary'>Redirecting in</Typography>
                <Typography variant="h6">{timer}</Typography>
            </Box>
        </Box>
    )
}

export default NoResult
