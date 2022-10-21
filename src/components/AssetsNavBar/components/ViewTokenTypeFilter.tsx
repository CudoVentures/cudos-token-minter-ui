import { FormControl, Select, MenuItem, SelectChangeEvent, Box } from "@mui/material"
import { TOKEN_TYPE } from "components/TokenDetails/helpers"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store"
import { updateAssetsNavigation } from "store/assetsNavigation"
import { COLORS_DARK_THEME } from "theme/colors"
import { styles } from "../styles"

import { ReactComponent as AllTypesIcon } from 'assets/vectors/tokenTypeIcons/all-types-icon.svg'
import { ReactComponent as StandardTypeIcon } from 'assets/vectors/tokenTypeIcons/standard-type-icon.svg'
import { ReactComponent as BurnableTypeIcon } from 'assets/vectors/tokenTypeIcons/burnable-type-icon.svg'
import { ReactComponent as MintableTypeIcon } from 'assets/vectors/tokenTypeIcons/mintable-type-icon.svg'
import { ReactComponent as UnlimitedTypeIcon } from 'assets/vectors/tokenTypeIcons/unlimited-type-icon.svg'

export const TOKEN_ICON_TYPE_MAPPER = {
    [TOKEN_TYPE.All]: <AllTypesIcon />,
    [TOKEN_TYPE.Standard]: <StandardTypeIcon />,
    [TOKEN_TYPE.Burnable]: < BurnableTypeIcon />,
    [TOKEN_TYPE.Mintable]: <MintableTypeIcon />,
    [TOKEN_TYPE.Unlimited]: <UnlimitedTypeIcon />
}
const AVAILABLE_TOKENS: TOKEN_TYPE[] = [
    TOKEN_TYPE.All,
    TOKEN_TYPE.Standard,
    TOKEN_TYPE.Burnable,
    TOKEN_TYPE.Mintable,
    TOKEN_TYPE.Unlimited,
]

export const getTokenTypeWithlogo = (tokenType: TOKEN_TYPE, color?: string): JSX.Element => {
    return (
        <Box marginTop={0.6} display={'flex'} gap={1}>
            <Box color={color}>
                {TOKEN_ICON_TYPE_MAPPER[tokenType]}
            </Box>
            <Box color={color === COLORS_DARK_THEME.SECONDARY_TEXT ? color : 'inherit'}>
                {tokenType}
            </Box>
        </Box>
    )
}

const ViewTokenTypeFilter = () => {

    const { tokenTypeView } = useSelector((state: RootState) => state.assetsNavState)
    const dispatch = useDispatch()

    const handleChange = (event: SelectChangeEvent<string>) => {
        const value = event.target.value as TOKEN_TYPE
        dispatch(updateAssetsNavigation({
            tokenTypeView: value
        }))
    }

    return (
        <Box gap={2} display={'flex'} alignItems={'center'}>
            <FormControl fullWidth style={styles.formControl}>
                <Select
                    displayEmpty
                    sx={styles.select}
                    MenuProps={styles.menuProps}
                    variant='standard'
                    disableUnderline
                    value={""}
                    renderValue={() => getTokenTypeWithlogo(tokenTypeView!, COLORS_DARK_THEME.PRIMARY_BLUE)}
                    onChange={handleChange}
                >
                    {AVAILABLE_TOKENS.map((TOKEN, idx) => {
                        return TOKEN !== tokenTypeView ?
                            <MenuItem key={idx} value={TOKEN}
                                sx={{
                                    color: COLORS_DARK_THEME.SECONDARY_TEXT,
                                    "&:hover": {
                                        color: COLORS_DARK_THEME.PRIMARY_TEXT
                                    }
                                }}
                            >
                                {getTokenTypeWithlogo(TOKEN)}
                            </MenuItem> : null
                    })}
                </Select>
            </FormControl>
        </Box>
    )
}

export default ViewTokenTypeFilter
