import { Typography, Box } from "@mui/material"
import { ReactNode } from "react"

export const SubTitle = ({ text }: { text: string }): JSX.Element => {
    return <Typography
        variant="subtitle1"
        color='text.secondary'
    >
        {text}
    </Typography>
}

export const Title = ({ text }: { text: string }): JSX.Element => {
    return <Typography
        fontWeight={700}
        variant="subtitle1"
    >
        {text}
    </Typography>
}

export const BoxWrapper = ({ children }: { children: ReactNode }): JSX.Element => {
    return (
        <Box justifyContent={'space-between'} minWidth={'max-content'} marginRight={6} display={'flex'} gap={1} flexDirection={'column'}>
            {children}
        </Box>
    )
}
