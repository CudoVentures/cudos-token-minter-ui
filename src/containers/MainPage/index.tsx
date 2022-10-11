import { Box, Button, Typography } from '@mui/material'
import BackgroundImage from 'assets/vectors/background.svg'
import { styles } from './styles'
import Dialog from 'components/Dialog'
import Header from 'components/Layout/Header'
import Footer from 'components/Layout/Footer'
import { useLowResCheck, useMidLowestHeight } from 'utils/CustomHooks/screenChecks'
import useNavigateToRoute from 'utils/CustomHooks/useNavigateToRoute'
import { NAVIGATION_PATH } from 'utils/constants'

const MainPage = () => {

  const isLowRes = useLowResCheck()
  const isMidLowestHeight = useMidLowestHeight()
  const navigateToRoute = useNavigateToRoute()

  return (
    // Inline styles required to fix building issues with imported styles for background.
    <Box style={{
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '115% 115%',
      backgroundPositionX: '-100%',
      backgroundPositionY: '20%',
      backgroundImage: 'url(' + BackgroundImage + ')'
    }}>
      <Dialog />
      <Header />
      <Box sx={styles.connectContainer} height={isLowRes ? '50%' : '55%'}>
        <Typography
          width={'55%'}
          variant={isLowRes || isMidLowestHeight ? "h6" : "h4"}
          textAlign={'left'}
        >
          Mint your own Tokens on the CUDOS Network -
          <span
            style={{
              ...styles.codelesslyHolder,
              fontSize: isLowRes || isMidLowestHeight ? 'inherit' : '40px'
            }}
          >
            Codelessly
          </span>.
        </Typography>
        <Typography
          margin={`20px 0px ${isLowRes || isMidLowestHeight ? "25px" : "70px"} 0px`}
          width={'55%'}
          variant={isLowRes || isMidLowestHeight ? "subtitle2" : "subtitle1"}
          color="text.secondary"
        >
          The CUDOS Token Minter is the easiest way to deploy CW20 tokens on the CUDOS Network.
          No code required. Just set your parameters and get minting.
        </Typography>
        <Box style={{ width: '55%' }}>
          <Button
            variant={isMidLowestHeight ? "outlined" : "contained"}
            color="primary"
            sx={styles.startMintingBtn}
            onClick={() => navigateToRoute(NAVIGATION_PATH.MintTokens)}
          >
            Start Minting
          </Button>
        </Box>
      </Box>
      <Box style={styles.footerHolder}>
        <Footer />
      </Box>
    </Box>
  )
}

export default MainPage
