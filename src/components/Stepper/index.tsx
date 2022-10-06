import { ReactComponent as StepOne } from './stepOne.svg'
import { ReactComponent as StepTwo } from './stepTwo.svg'
import { ReactComponent as StepThree } from './stepThree.svg'
import { Box, Typography } from '@mui/material'

const titleHandler = (text: string): JSX.Element => {
    return (
        <Typography
            marginTop={3}
            marginBottom={1}
            fontWeight={700}
            variant='h6'
        >
            {text}
        </Typography>
    )
}

const subtitleHandler = (text: string, visibility: "visible" | "hidden"): JSX.Element => {

    return (
        <Typography
            visibility={visibility}
            fontWeight={400}
            variant='subtitle1'
            color='text.secondary'
        >
            {text}
        </Typography>
    )
}

const stepsMapper = {
    1: {
        image: <StepOne />,
        title: titleHandler('Step 1. Select your Token Type'),
        subtitle: subtitleHandler('none', 'hidden')
    },
    2: {
        image: <StepTwo />,
        title: titleHandler('Step 2. Fill out your Token Details'),
        subtitle: subtitleHandler('You can name your token and structure the token economy.', 'visible')
    },
    3: {
        image: <StepThree />,
        title: titleHandler('Step 3. Review and Mint'),
        subtitle: subtitleHandler('Review your choices and complete the mint.', 'visible')
    }
}

const Stepper = ({ step }: { step: number }) => {

    return (
        <Box style={{ marginTop: '40px' }}>
            {stepsMapper[step].image}
            {stepsMapper[step].title}
            {stepsMapper[step].subtitle}
        </Box>
    )
}

export default Stepper
