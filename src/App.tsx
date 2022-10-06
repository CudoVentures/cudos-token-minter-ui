import theme from 'theme'
import { RootState } from 'store'
import Layout from 'components/Layout'
import { ThemeProvider } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { CssBaseline, Container } from '@mui/material'
import { useCallback, useEffect } from 'react'
import { updateUser } from 'store/user'
import { connectUser } from 'utils/config'
import { updateModalState } from 'store/modals'
import { LEDGERS } from 'utils/constants'
import { initialState as initialModalState } from 'store/modals'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import MintTokens from 'containers/MintTokens'
import MainPage from 'containers/MainPage'

import '@fontsource/poppins'

const App = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const themeColor = useSelector((state: RootState) => state.settings.theme)
  const { chosenNetwork, connectedLedger } = useSelector((state: RootState) => state.userState)

  const connectAccount = useCallback(async (chosenNetwork: string, ledgerType: string) => {

    try {
      dispatch(updateModalState({
        loading: true,
        loadingType: true
      }))

      const connectedUser = await connectUser(chosenNetwork, ledgerType)
      dispatch(updateUser(connectedUser))

    } catch (error) {
      console.error((error as Error).message)

    } finally {
      dispatch(updateModalState({
        loading: false,
        loadingType: false
      }))
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {

    if (connectedLedger) {
      connectAccount(chosenNetwork!, connectedLedger)
    }

    //eslint-disable-next-line
  }, [chosenNetwork])

  useEffect(() => {

    if (window.keplr) {
      window.addEventListener("keplr_keystorechange",
        async () => {
          await connectAccount(chosenNetwork!, LEDGERS.KEPLR)
          return
        });
    }

    if (window.cosmostation) {
      window.cosmostation.cosmos.on("accountChanged",
        async () => {
          await connectAccount(chosenNetwork!, LEDGERS.COSMOSTATION)
          return
        });
    }

    //eslint-disable-next-line
  }, [connectAccount])

  useEffect(() => {
    dispatch(updateModalState(initialModalState))

    //eslint-disable-next-line
  }, [])

  return (
    <Container maxWidth='xl' style={{ display: 'contents', height: '100vh', width: '100vw', overflow: 'auto' }}>
      <ThemeProvider theme={theme![themeColor!]}>
        <CssBaseline />
        {location.pathname !== '/' ? null : (
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        )}
        {location.pathname === '/' ? null : (
          <Layout>
            <Routes>
              {/* <Route element={<RequireLedger />}> */}
              <Route path="mint-tokens" element={<MintTokens />} />
              {/* </Route> */}
              <Route path="*" element={<Navigate to="/" state={{ from: location }} />} />
            </Routes>
          </Layout>
        )}
      </ThemeProvider>
    </Container>
  )
}

export default App
