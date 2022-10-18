import { Box, Typography } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store"
import { AssetsView, updateAssetsNavigation } from "store/assetsNavigation"
import { COLORS_DARK_THEME } from "theme/colors"

const ViewAssets = ({ assetsView, assetsCount }: { assetsView: AssetsView, assetsCount: number }) => {

    const dispatch = useDispatch()
    const [hovered, setHovered] = useState<boolean>(false)
    const { currentAssetsView } = useSelector((state: RootState) => state.assetsNavState)

    const handleClick = () => {
        if (currentAssetsView !== assetsView) {
            dispatch(updateAssetsNavigation({
                currentAssetsView: assetsView
            }))
        }
    }

    const selected = currentAssetsView === assetsView

    return (
        <Box
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            onClick={() => handleClick()}
            sx={{ cursor: 'pointer' }}
            gap={1}
            display={'flex'}
            color={
                hovered ? COLORS_DARK_THEME.PRIMARY_BLUE :
                    COLORS_DARK_THEME.SECONDARY_TEXT
            }
        >
            <Typography
                fontWeight={700}
                variant="subtitle1"
                color={selected ? 'white' : 'inherit'}
            >
                {assetsView.toUpperCase()}
            </Typography>
            <Typography
                fontWeight={700}
                variant="subtitle1"
                color={selected ? COLORS_DARK_THEME.PRIMARY_BLUE : 'inherit'}
            >
                {assetsCount}
            </Typography>
        </Box>
    )
}

export default ViewAssets
