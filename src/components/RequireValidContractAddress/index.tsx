import { Navigate, useLocation, Outlet, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { NAVIGATION_PATH } from 'utils/constants'

const RequireValidContractAddress = () => {
    const { selectedAsset } = useSelector((state: RootState) => state.assetsState)
    const { contractAddress } = useParams()
    const location = useLocation()

    return selectedAsset?.contractAddress === contractAddress ? (
        <Outlet />
    ) : (
        <Navigate to={NAVIGATION_PATH.Home} state={{ from: location }} replace />
    )
}

export default RequireValidContractAddress
