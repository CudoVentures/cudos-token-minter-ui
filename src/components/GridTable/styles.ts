export const styles = {
    supplyHolder: {
        justifyContent: 'space-between',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'flex-end'
    },
    typeHolder: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center'
    },
    nameSymbolHolder: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center'
    },
    contentHolder: {
        transition: 'opacity .3s ease-in-out',
        opacity: '1',
        display: 'grid',
        justifyItems: 'center',
        alignContent: 'space-between',
        maxWidth: '1300px',
        maxHeight: '1700px',

    },
    gridHolder: {
        alignItems: 'center',
        width: '100%',
        height: "100%"
    },
    tokenCard: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '20px',
        width: '285px',
        height: '305px',
        "&:hover": {
            backgroundColor: 'rgba(82, 166, 248, 0.1)'
        }
    },
    pagination: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    img: {
        width: '95px',
        height: '95px',
        borderRadius: '50%'
    }
} as const
