import theme from 'theme'
import { RootState } from 'store'
import Layout from 'components/Layout'
import { ThemeProvider } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { CssBaseline, Container } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { updateUser } from 'store/user'
import { connectUser } from 'utils/config'
import { updateModalState } from 'store/modals'
import { CHAIN_DETAILS, LEDGERS, NAVIGATION_PATH } from 'utils/constants'
import { initialState as initialModalState } from 'store/modals'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import MintTokens from 'containers/MintTokens'
import MainPage from 'containers/MainPage'
import Assets from 'containers/Assets'
import ContractDetails from 'containers/ContractDetails'
import RequireValidContractAddress from 'components/RequireValidContractAddress'
import { ApolloProvider, NormalizedCacheObject, ApolloClient } from '@apollo/client'
import { useApollo } from './graphql/client'
import { ApolloLinks, defaultApolloLinks } from 'graphql/helpers'
import RequireConnectedWallet from 'components/RequireConnectedWallet'

import '@fontsource/poppins'

const App = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const newApolloClient = useApollo(null)
  const themeColor = useSelector((state: RootState) => state.settings.theme)
  const { chosenNetwork, connectedLedger } = useSelector((state: RootState) => state.userState)
  const [currentApolloClient, setCurrentApolloClient] = useState<ApolloClient<NormalizedCacheObject>>(
    newApolloClient(defaultApolloLinks)
  )

  const connectAccount = useCallback(async (chosenNetwork: string, ledgerType: string) => {

    try {
      dispatch(updateModalState({
        loading: true,
        loadingType: true,
        changingNetwork: true,
      }))

      const connectedUser = await connectUser(chosenNetwork, ledgerType)
      dispatch(updateUser(connectedUser))

    } catch (error) {
      console.error((error as Error).message)

    } finally {
      dispatch(updateModalState({
        loading: false,
        loadingType: false,
        changingNetwork: false,
      }))
    }

    //eslint-disable-next-line
  }, []);

  useEffect(() => {

    const newApolloLinks: ApolloLinks = {
      uri: CHAIN_DETAILS.GRAPHQL_URL[chosenNetwork!],
      url: CHAIN_DETAILS.GRAPHQL_WS[chosenNetwork!]
    }

    setCurrentApolloClient(newApolloClient(newApolloLinks))

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
      <ApolloProvider client={currentApolloClient!}>
        <ThemeProvider theme={theme![themeColor!]}>
          <CssBaseline />
          {location.pathname !== NAVIGATION_PATH.Home ? null : (
            <Routes>
              <Route path={NAVIGATION_PATH.Home} element={<MainPage />} />
            </Routes>
          )}
          {location.pathname === NAVIGATION_PATH.Home ? null : (
            <Layout>
              <Routes>
                <Route path="mint-tokens" element={<MintTokens />} />
                <Route path="assets">
                  <Route index element={<Assets />} />
                  <Route element={<RequireConnectedWallet />}>
                    <Route element={<RequireValidContractAddress />}>
                      <Route path=":contractAddress" element={<ContractDetails />} />
                    </Route>
                  </Route>
                </Route>
                <Route path="*" element={<Navigate to={NAVIGATION_PATH.Home} state={{ from: location }} />} />
              </Routes>
            </Layout>
          )}
        </ThemeProvider>
      </ApolloProvider>
    </Container>
  )
}

export default App
