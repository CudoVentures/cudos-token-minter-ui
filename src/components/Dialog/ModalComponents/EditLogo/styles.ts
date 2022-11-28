import { COLORS_DARK_THEME } from "theme/colors";

export const styles = {
    contentHolder: {
        margin: '20px',
        width: '100%',
        minHeight: '200px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
    },
    localPaperProps: {
        sx: {
            width: '100%',
            background: 'transparent',
            height: 'min-content',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '25px'
        }
    },
    estimatorHolder: {
        marginTop: '5px',
        height: '15px',
        float: 'right'
    },
    inputHolder: { 
        display: 'flex', 
        alignItems: 'center', 
        flexDirection: 'column', 
        width: '100%' 
    },
    input: {
        display: 'flex',
        width: '100%',
        backgroundColor: COLORS_DARK_THEME.LIGHT_BACKGROUND,
        fontSize: '90%',
        padding: '0px 20px',
        borderRadius: '5px',
        alignItems: 'center'
    }
} as const