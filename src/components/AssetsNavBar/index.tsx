import { Box, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "store"
import { AssetsView } from "store/assetsNavigation"
import { useMidlowResCheck } from "utils/CustomHooks/screenChecks"
import SearchBar from "./components/SearchBar"
import ViewAssets from "./components/ViewAssets"
import ViewNetworkFilter from "./components/ViewNetworkFilter"
import ViewTokenTypeFilter from "./components/ViewTokenTypeFilter"
import { styles } from "./styles"

const AssetsNavBar = () => {

    const removableContent = useRef<HTMLDivElement>()
    const isMidLowRes = useMidlowResCheck()
    const { activeSearch } = useSelector((state: RootState) => state.assetsNavState)
    const { allAssets, myAssets } = useSelector((state: RootState) => state.assetsState)
    const { address, connectedLedger } = useSelector((state: RootState) => state.userState)
    const [removedContent, setRemovedContent] = useState<boolean>(false)

    useEffect(() => {
        if (activeSearch) {
            setRemovedContent(true)
            return
        }

        setTimeout(() => {
            setRemovedContent(false)
        }, 300)
    }, [activeSearch])

    return (
        <Box sx={isMidLowRes ? styles.smallerScreenHeaderContainer : styles.headerContainer}>
            <Box id='left-menu' gap={4} display={'flex'} alignItems={'center'}>
                <Typography variant="h4" fontWeight={700}>
                    Assets
                </Typography>
                <ViewAssets assetsView={AssetsView.AllAssets} assetsCount={allAssets.length} />
                {
                    address && connectedLedger ?
                        <ViewAssets assetsView={AssetsView.MyAssets} assetsCount={myAssets.length} /> :
                        null
                }
            </Box>
            <Box id='right-menu' gap={2} display={'flex'} alignItems={'center'}>
                {
                    removedContent ? null :
                        <Box ref={removableContent}
                            gap={2}
                            style={styles.removableContentHolder}
                        >
                            <ViewNetworkFilter />
                            <ViewTokenTypeFilter />
                        </Box>
                }
                <SearchBar />
            </Box>
        </Box>
    )
}
export default AssetsNavBar
