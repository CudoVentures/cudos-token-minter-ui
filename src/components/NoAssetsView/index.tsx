import { Box, Typography } from '@mui/material'
import { styles } from './styles'
import { ReactComponent as EmptyBoxLogo } from 'assets/vectors/empty-box-logo.svg'
import NavigateToBtn from 'components/Dialog/ModalComponents/NavigateToBtn'
import { NAVIGATION_PATH } from 'utils/constants'
import { RootState } from 'store'
import { useSelector } from 'react-redux'
import { AssetsView } from 'store/assetsNavigation'

const NoAssetsView = ({ failedSearch }: { failedSearch?: boolean }) => {

    const { currentAssetsView } = useSelector((state: RootState) => state.assetsNavState)

    const handleTextToDisplay = (view: AssetsView): string => {
        let concatText = view === AssetsView.AllAssets ?
            'there are no' : 'you don’t have any'

        return `Seems like ${concatText} minted tokens yet`
    }

    return (
        <Box gap={4} style={styles.contentHolder}>
            <EmptyBoxLogo />
            <Typography
                fontWeight={700}
                variant='h5'
            >
                {failedSearch ?
                    'No results' :
                    handleTextToDisplay(currentAssetsView!)}
            </Typography>
            {failedSearch ? null :
                <NavigateToBtn
                    btnText={'Mint your token'}
                    route={NAVIGATION_PATH.MintTokens}
                    size={'200px'}
                    type={'primary'}
                />
            }
        </Box>
    )
}

export default NoAssetsView
