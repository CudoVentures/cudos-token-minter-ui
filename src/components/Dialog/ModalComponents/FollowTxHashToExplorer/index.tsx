import { Box, Stack, Typography } from "@mui/material"
import { OpenInNewRounded as OpenInNewRoundedIcon } from '@mui/icons-material'
import { TX_HASH_DETAILS } from "api/endpoints"
import { useSelector } from "react-redux"
import { RootState } from "store"

const FollowTxHashToExplorer = ({ txHash }: { txHash: string }) => {

    const {
        chosenNetwork
    } = useSelector((state: RootState) => state.userState)

    return (
        <Box marginTop={2}>
            <a href={TX_HASH_DETAILS(chosenNetwork!, txHash)} rel="noreferrer" target='_blank'>
                <Stack
                    marginBottom='20px'
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ cursor: 'pointer' }}
                >
                    <Typography
                        variant="body2"
                        fontWeight={700}
                        color="primary.main"
                        sx={{ textDecoration: 'underline' }}
                    >
                        View in Explorer
                    </Typography>
                    <OpenInNewRoundedIcon
                        fontSize="small"
                        sx={(theme) => ({
                            color: theme.palette.primary.main
                        })}
                    />
                </Stack>
            </a>
        </Box>
    )
}

export default FollowTxHashToExplorer
