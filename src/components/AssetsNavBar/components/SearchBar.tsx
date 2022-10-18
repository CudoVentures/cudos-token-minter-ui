import { Box, Input } from "@mui/material"
import { CancelRounded } from '@mui/icons-material'
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store"
import { updateAssetsNavigation } from "store/assetsNavigation"
import { styles } from "../styles"
import { ReactComponent as SearchIcon } from 'assets/vectors/search-icon.svg'
import { TOKEN_TYPE } from "components/TokenDetails/helpers"

const SearchBar = () => {

    const dispatch = useDispatch()
    const searchBar = useRef<HTMLInputElement>()
    const { activeSearch, searchTerms, currentAssetsView } = useSelector((state: RootState) => state.assetsNavState)
    const [showCloseIcon, setShowCloseIcon] = useState<boolean>(false)

    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            handleShrink()
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        dispatch(updateAssetsNavigation({
            searchTerms: event.target.value as string
        }))
    }

    const handleExpand = () => {
        dispatch(updateAssetsNavigation({
            activeSearch: true
        }))
    }

    const handleShrink = () => {
        if (activeSearch) {
            dispatch(updateAssetsNavigation({
                activeSearch: false,
            }))
            setShowCloseIcon(false)
        }
    }

    const handleTransitionEnd = () => {
        if (activeSearch) {
            searchBar.current?.click()
            setShowCloseIcon(true)
            return
        }
    }

    //Handling a stupid bug with passing handleShrink function directly to endAdornment
    useEffect(() => {
        if (!showCloseIcon) {
            handleShrink()
        }

        //eslint-disable-next-line
    }, [showCloseIcon])

    useEffect(() => {

        handleShrink()
        dispatch(updateAssetsNavigation({
            searchTerms: '',
            tokenTypeView: TOKEN_TYPE.All
        }))

        //eslint-disable-next-line
    }, [currentAssetsView])

    return (
        <Box
            onTransitionEnd={handleTransitionEnd}
            gap={2}
            display={'flex'}
            alignItems={'center'}
            onClick={handleExpand}
            style={styles.squareBox}
            sx={{ height: '50px', width: activeSearch ? "500px" : '50px' }}
        >
            <Box marginTop={1} marginLeft={0.7}>
                <SearchIcon />
            </Box>
            <Input
                style={{ display: 'flex' }}
                ref={searchBar}
                disableUnderline
                placeholder="Search by name..."
                sx={styles.searchBar}
                type="text"
                onKeyDown={(e) => handleEnter(e)}
                onChange={handleChange}
                value={searchTerms}
                endAdornment={showCloseIcon ?
                    <Box onClick={() => setShowCloseIcon(false)}>
                        <CancelRounded sx={styles.cancelIcon} />
                    </Box>
                    : null}
            />
        </Box>
    )
}

export default SearchBar
