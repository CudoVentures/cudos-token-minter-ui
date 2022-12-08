import { FormControl, Select, MenuItem, SelectChangeEvent, Box, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store"
import { AssetsView, updateAssetsNavigation } from "store/assetsNavigation"
import { COLORS_DARK_THEME } from "theme/colors"
import { styles } from "../styles"
import { NAVIGATION_PATH } from "utils/constants"
import useAssetsCount from "utils/CustomHooks/useAssetsCount"
import useNavigateToRoute from "utils/CustomHooks/useNavigateToRoute"
import { useState } from "react"
import { isViewingMyAssets } from "utils/helpers"

export const StyledMyAssetsView = ({ count }: { count: number }): JSX.Element => {

    const [hovered, setHovered] = useState<boolean>(false)
    const { currentAssetsView } = useSelector((state: RootState) => state.assetsNavState)

    return (
        <Box
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            display={'flex'}
            alignItems={'center'}
            gap={1}
        >
            <Typography
                fontWeight={900} color={
                    hovered ? COLORS_DARK_THEME.PRIMARY_BLUE :
                        isViewingMyAssets(currentAssetsView!) ?
                            'white' : COLORS_DARK_THEME.SECONDARY_TEXT
                }
            >
                {AssetsView.MyAssets.toUpperCase()}
            </Typography>
            <Typography fontWeight={900} color={
                hovered ? COLORS_DARK_THEME.PRIMARY_BLUE :
                    isViewingMyAssets(currentAssetsView!) ?
                        COLORS_DARK_THEME.PRIMARY_BLUE :
                        COLORS_DARK_THEME.SECONDARY_TEXT
            }
            >
                {count}
            </Typography>
        </Box>
    )
}

const ViewMyAssetsFilter = () => {

    const dispatch = useDispatch()
    const getAssetCount = useAssetsCount()
    const navigateToRoute = useNavigateToRoute()
    const { currentAssetsView } = useSelector((state: RootState) => state.assetsNavState)

    const handleChange = (event: SelectChangeEvent<string>) => {
        const assetsView = event.target.value as AssetsView

        if (assetsView !== currentAssetsView) {
            dispatch(updateAssetsNavigation({
                currentAssetsView: assetsView
            }))
            navigateToRoute(NAVIGATION_PATH.MyAssets)
        }
    }

    return (
        <Box
            gap={2}
            display={'flex'}
            alignItems={'center'}
        >
            <FormControl fullWidth>
                <Select
                    displayEmpty
                    MenuProps={styles.myAssets}
                    variant='standard'
                    disableUnderline
                    value={""}
                    renderValue={
                        () => <StyledMyAssetsView count={getAssetCount(AssetsView.MyAssets)} />
                    }
                    onChange={handleChange}
                >
                    {[AssetsView.Owned, AssetsView.Others].map((VIEW, idx) => {
                        return <MenuItem key={idx} value={VIEW}
                            sx={{
                                color: COLORS_DARK_THEME.SECONDARY_TEXT,
                                "&:hover": {
                                    color: COLORS_DARK_THEME.PRIMARY_TEXT
                                }
                            }}
                        >
                            {`${VIEW} (${getAssetCount(VIEW)})`}
                        </MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box >
    )
}

export default ViewMyAssetsFilter
