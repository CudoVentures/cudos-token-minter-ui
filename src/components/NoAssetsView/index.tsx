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

        let concatText = 'there are no'

        if (view === AssetsView.MyAssets ||
            view === AssetsView.Owned
        ) {
            concatText = 'you don’t have any'
        }

        if (view === AssetsView.Others) {
            return 'You hold no balances'
        }


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
