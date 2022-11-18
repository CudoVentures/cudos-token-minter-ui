import { COLORS_DARK_THEME } from "theme/colors";

export const styles = {
    detailsHolder: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px'
    },
    cardHolder: {
        display: 'flex',
        margin: '10px 0px 15px 0px'
    },
    lowerCardHolder: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px 0px 15px 0px'
    },
    boxHolder: {
        display: 'flex',
    },
    input: {
        display: 'flex',
        width: '100%',
        backgroundColor: COLORS_DARK_THEME.LIGHT_BACKGROUND,
        fontSize: '90%',
        padding: '0px 20px',
        borderRadius: '10px',
        alignItems: 'center'
    }
} as const
