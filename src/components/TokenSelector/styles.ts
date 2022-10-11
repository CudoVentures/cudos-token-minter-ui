import { COLORS_DARK_THEME } from "theme/colors";

export const styles = {
    attributeHandler: {
        padding: '15px 0px 5px 15px', 
        borderRadius: '12px', 
        border: `1px solid ${COLORS_DARK_THEME.LIGHT_BACKGROUND}`
    },
    rowHolder: {
        marginBottom: '15px',
        alignItems: 'flex-start',
        display: 'flex',
        padding: '20px',
        borderRadius: '5px',
        "&:hover": {
            cursor: 'pointer',
            backgroundColor: 'rgba(82, 166, 248, 0.1)'
        },
        height: 'max-content', width: '100%'
    },
    cardHolder: {
        paddingBottom: '10px',
        margin: '5px 0px 10px 0px'
    },
    radioBtn: { margin: '4px 5px 0px 0px' },
} as const