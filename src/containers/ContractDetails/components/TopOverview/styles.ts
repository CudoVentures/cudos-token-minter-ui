export const styles = {
    contentCard: {
        padding: '32px 32px 32px 56px',
        width: '100%',
        display: 'flex',
        maxWidth: '1100px',
    },
    boxHolder: {
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        minWidth: 'max-content',
        display: 'flex',
        alignItems: 'center'
    },
    leftContentHolder: {
        minWidth: 'max-content',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        marginRight: '20px'
    },
    rightContentHolder: {
        minWidth: 'min-content',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: '10px',
        rowGap: '10px'
    },
    imgHolder: {
        position: 'relative',
        width: '160px',
        height: '160px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: '160px',
        height: '160px',
        borderRadius: '50%',
    },
    smallerIgm: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
    },
    editIconHolder: {
        transition: 'opacity .3s ease-in-out',
        opacity: '0',
        visibility: 'hidden',
    },
    smallerEdit: {
        cursor: 'pointer',
        position: "absolute",
        right: "30px",
        top: "100px",
        height: '25px'
    },
    edit: {
        cursor: 'pointer',
        position: "absolute",
        right: "0",
        top: "120px"
    }
} as const
