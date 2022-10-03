import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { updateModalState } from "store/modals"

const useNavigateToRoute = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    return useCallback((route?: string) => {
        if (location.pathname !== route) {
            dispatch(updateModalState({
                loading: true,
                loadingType: true
            }))

            setTimeout(() => {
                dispatch(updateModalState({
                    loading: false,
                    loadingType: false
                }))
                navigate(route!)
            }, 300)
        }

        //eslint-disable-next-line
    }, [location])

}

export default useNavigateToRoute
