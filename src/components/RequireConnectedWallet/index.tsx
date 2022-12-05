import { Navigate, useLocation, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { isValidCudosAddress } from 'utils/validation'
import { LEDGERS, NAVIGATION_PATH } from 'utils/constants'

const RequireConnectedWallet = () => {
  const { address, connectedLedger } = useSelector((state: RootState) => state.userState)
  const validLedgers = [LEDGERS.KEPLR, LEDGERS.COSMOSTATION]
  const location = useLocation()

  return location.pathname === NAVIGATION_PATH.AllAssets || (isValidCudosAddress(address!) && validLedgers.includes(connectedLedger!)) ? (
    <Outlet />
  ) : (
    <Navigate to={NAVIGATION_PATH.AllAssets} state={{ from: location }} replace />
  )
}

export default RequireConnectedWallet
