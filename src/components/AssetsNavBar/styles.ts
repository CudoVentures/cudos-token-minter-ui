import { COLORS_DARK_THEME } from "theme/colors";

export const styles = {
    cancelIcon: {
        marginTop: '5px',
        cursor: 'pointer',
        height: '20px', color: COLORS_DARK_THEME.SECONDARY_TEXT
    },
    squareBox: {
         cursor: 'pointer', 
         display: 'flex', 
         borderRadius: '5px', 
         padding: '10px', 
         backgroundColor: COLORS_DARK_THEME.PRIMARY_BACKGROUND, 
         transition: 'width .4s ease-in-out',
        },
    searchBar: {
        width: '100%',
        height: '100%'
    },
    fancyLine: {
        border: "none",
        borderLeft: `2px solid ${COLORS_DARK_THEME.PRIMARY_BLUE_DISABLED}`,
        height: "30px"
      },
    removableContentHolder: {
        display: 'flex',
        alignItems: 'center',
        transition: 'opacity .4s ease-in-out',
        opacity: '1'
    },
    headerContainer: {
        borderTop: "1px solid rgba(65, 73, 99, 0.3)",
        padding: '0.8rem 1rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        flex: '1'
    },
    smallerScreenHeaderContainer: {
        borderTop: "1px solid rgba(65, 73, 99, 0.3)",
        padding: '0.8rem 1rem',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        flex: '1'
    },
    select: {
        fontWeight: '400',
        width: '220px',
        height: '50px',
        paddingLeft: '20px',
    },
    connectedBox: {
        color: COLORS_DARK_THEME.SECONDARY_TEXT,
        display: 'flex',
        alignItems: 'center',
        fontWeight: '400',
        width: 'max-content',
        height: '50px',
        paddingLeft: '20px',
        paddingRight: '20px',
        borderRadius: '10px',
        border: `1px solid rgba(65, 73, 99, 0.3)`
    },
    formControl: {
        paddingRight: '20px',
        borderRadius: '10px',
        backgroundColor: COLORS_DARK_THEME.PRIMARY_BACKGROUND
    },
    menuProps: {
        PaperProps: {
            sx: {
                width: '220px',
                marginTop: '15px',
                borderRadius: '10px',
                background: COLORS_DARK_THEME.LIGHT_BACKGROUND,
                '& .MuiMenuItem-root': {
                    background: COLORS_DARK_THEME.LIGHT_BACKGROUND,
                    borderRadius: '10px',
                    "&:hover": {
                        cursor: 'pointer',
                        background: 'rgba(99, 109, 143, 0.2)'
                    },
                    "&:focus": {
                        background: COLORS_DARK_THEME.LIGHT_BACKGROUND
                    },
                    "&:focus:hover": {
                        background: "rgba(99, 109, 143, 0.2)"
                    },
                    padding: '12px',
                    margin: 0.5
                },
            },
        },
    }

} as const
