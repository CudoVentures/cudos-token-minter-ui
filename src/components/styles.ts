import { COLORS_DARK_THEME } from "theme/colors";

export const styles = {
    centerFlexLinear: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    icons: {
        marginLeft: '10px',
        cursor: 'pointer'
    },
    spinnerHolder: {
        width: '100%',
        display: 'flex',
        height: "50px",
        justifyContent: 'center'
    },
    imgHolder: {
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        bgcolor: COLORS_DARK_THEME.DARK_BACKGROUND,
        borderRadius: '50%'
    }
}