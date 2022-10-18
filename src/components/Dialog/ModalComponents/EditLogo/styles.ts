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
} as const