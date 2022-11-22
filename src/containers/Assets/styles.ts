export const styles = {
    contentHolder: {
        display: 'grid',
        width: '100%',
        height: '100%',
        justifyItems: 'center',
        transition: 'opacity .3s ease-in-out',
        opacity: '1'
    },
    innerComponentHolder: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100px'
    }
} as const
