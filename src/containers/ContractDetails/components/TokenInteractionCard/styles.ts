import { COLORS_DARK_THEME } from "theme/colors";

export const styles = {
    textInput: { 
        width: '100%', 
        height: '50px' 
    },
    amountInput: { 
        fontSize: '20px', 
        width: '100%', 
        height: '80px' 
    },
    input: {
        display: 'flex',
        width: '100%',
        backgroundColor: COLORS_DARK_THEME.LIGHT_BACKGROUND,
        fontSize: '90%',
        padding: '0px 20px',
        borderRadius: '5px',
        alignItems: 'center'
    },
    inputHolder: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    contentCard: {
        padding: '20px',
        width: '100%',
        display: 'flex',
        maxWidth: '1100px',
    },
    boxHolder: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        minWidth: 'max-content',
        display: 'flex',
    },
} as const
