import { Typography, Box } from "@mui/material"
import { Variant } from "@mui/material/styles/createTypography"
import { ReactNode } from "react"

export const SubTitle = ({ text, color, weight }: {
    text: string,
    color?: 'text.secondary' | 'text.primary',
    weight?: number
}): JSX.Element => {
    return <Typography
        variant="subtitle1"
        color={color ? color : 'text.secondary'}
        fontWeight={weight ? weight! : 400}
    >
        {text}
    </Typography>
}

export const Title = ({ text, variant }: { text: string, variant?: Variant }): JSX.Element => {
    return <Typography
        fontWeight={700}
        variant={variant ? variant : "subtitle1"}
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
