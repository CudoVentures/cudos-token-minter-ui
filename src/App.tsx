import { ThemeProvider } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { CssBaseline, Container } from '@mui/material'
import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom'
import Layout from 'components/Layout'
import RequireLedger from 'components/RequireLedger'
import ConnectWallet from 'containers/ConnectWallet'
import theme from 'theme'
import { RootState } from 'store'
import { useCallback, useEffect } from 'react'
import { updateUser } from 'store/user'
import { connectUser } from 'utils/config'
import { initialState as initialUserState } from 'store/user'
import { updateModalState } from 'store/modals'
import Welcome from 'containers/Welcome'
import { LEDGERS } from 'utils/constants'

import '@fontsource/poppins'

const App = () => {
  const location = useLocation()
  const themeColor = useSelector((state: RootState) => state.settings.theme)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const connectAccount = useCallback(async (ledgerType: string) => {

    try {
      dispatch(updateModalState({
        loading: true,
        loadingType: true
      }))

      const connectedUser = await connectUser(ledgerType)

      dispatch(updateUser({
        ...initialUserState,
        ...connectedUser
      }))

    } catch (error) {
      console.error((error as Error).message)

    } finally {
      dispatch(updateModalState({
        loading: false,
        loadingType: false
      }))
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keplr_keystorechange",
      async () => {
        await connectAccount(LEDGERS.KEPLR)
        return
      });

    window.cosmostation.cosmos.on("accountChanged",
      async () => {
        await connectAccount(LEDGERS.COSMOSTATION)
        return
      });

  }, [connectAccount])

  return (
    <Container maxWidth='xl' style={{ display: 'contents', height: '100vh', width: '100vw', overflow: 'auto' }}>
      <ThemeProvider theme={theme[themeColor]}>
        <CssBaseline />
        {location.pathname !== '/' ? null : (
          <Routes>
            <Route path="/" element={<ConnectWallet />} />
          </Routes>
        )}
        {location.pathname === '/' ? null : (
          <Layout>
            <Routes>
              <Route element={<RequireLedger />}>
                <Route path="welcome" element={<Welcome />} />
              </Route>
              <Route path="*" element={<Navigate to="/" state={{ from: location }} />} />
            </Routes>
          </Layout>
        )}
      </ThemeProvider>
    </Container>
  )
}

export default App
