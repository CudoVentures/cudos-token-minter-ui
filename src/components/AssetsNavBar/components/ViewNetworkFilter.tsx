import { FormControl, Select, MenuItem, SelectChangeEvent, Typography, Box } from "@mui/material"
import { networksToDisplayInMenu } from "components/Layout/Networkinfo"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store"
import { COLORS_DARK_THEME } from "theme/colors"
import { CHAIN_DETAILS } from "utils/constants"
import { chainIDToAlias } from "utils/helpers"
import { styles } from "../styles"
import { ReactComponent as ArrowIcon } from 'assets/vectors/arrow-down.svg'
import { updateUser } from "store/user"

const ViewNetworkFilter = () => {

    const { chosenNetwork } = useSelector((state: RootState) => state.userState)
    const aliasName = chainIDToAlias(CHAIN_DETAILS.CHAIN_ID[chosenNetwork!])
    const dispatch = useDispatch()

    const handleChange = (event: SelectChangeEvent<string>) => {
        const value = event.target.value
        dispatch(updateUser({
            chosenNetwork: value
        }))
    }

    const getConcatenatedText = (text: string): string => {
        return `${text} ${"Tokens"}`
    }

    const nonDropDown = networksToDisplayInMenu.length < 2

    return (
        <Box gap={2} display={'flex'} alignItems={'center'}>
            <Typography>
                Viewing:
            </Typography>
            <FormControl
                fullWidth
                style={styles.formControl}
                sx={{ paddingRight: nonDropDown ? '0px!important' : 'inherit' }}
            >
                <Select
                    style={{ pointerEvents: nonDropDown ? 'none' : 'auto' }}
                    displayEmpty
                    sx={styles.select}
                    MenuProps={styles.menuProps}
                    IconComponent={nonDropDown ? () => null : () => <ArrowIcon />}
                    variant='standard'
                    disableUnderline
                    value={''}
                    renderValue={() => getConcatenatedText(aliasName)}
                    onChange={handleChange}
                >
                    {
                        networksToDisplayInMenu.map((NETWORK, idx) => {
                            return aliasName !== NETWORK.ALIAS_NAME ?
                                <MenuItem key={idx} value={NETWORK.SHORT_NAMES[0].toUpperCase()}
                                    sx={{
                                        color: COLORS_DARK_THEME.SECONDARY_TEXT,
                                        "&:hover": {
                                            color: COLORS_DARK_THEME.PRIMARY_TEXT
                                        }
                                    }}
                                >
                                    {getConcatenatedText(NETWORK.ALIAS_NAME)}
                                </MenuItem> : null
                        })
                    }
                </Select>
            </FormControl>
        </Box>

    )
}

export default ViewNetworkFilter
