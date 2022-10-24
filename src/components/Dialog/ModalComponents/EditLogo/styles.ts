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
    }
} as const