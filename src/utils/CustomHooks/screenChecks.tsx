import { useMediaQuery } from 'react-responsive'
import { RESOLUTIONS } from "utils/constants"

//WIDTH
export const useMidlowResCheck = () => {
    return useMediaQuery({ query: `(max-width: ${RESOLUTIONS.MID_LOW}px)` })
}

export const useLowResCheck = () => {
    return useMediaQuery({ query: `(max-width: ${RESOLUTIONS.LOW}px)` })
}

export const useMidLowerResCheck = () => {
    return useMediaQuery({ query: `(max-width: ${RESOLUTIONS.MID_LOWER}px)` })
}

export const useLowerResCheck = () => {
    return useMediaQuery({ query: `(max-width: ${RESOLUTIONS.LOWER}px)` })
}

export const useMidLowestResCheck = () => {
    return useMediaQuery({ query: `(max-width: ${RESOLUTIONS.MID_LOWEST}px)` })
}

export const useLowestResCheck = () => {
    return useMediaQuery({ query: `(max-width: ${RESOLUTIONS.LOWEST}px)` })
}


//HEIGHT
export const useMidLowestHeight = () => {
    return useMediaQuery({ query: `(max-height: ${RESOLUTIONS.MID_LOWEST}px)` })
}
