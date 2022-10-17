import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { initialState, updateModalState } from "store/modals"

const NavigateToBtn = ({ btnText, route, size, type }: {
  btnText: string,
  route: string,
  size?: string,
  type?: 'secondary' | 'primary'
}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    try {
      dispatch(updateModalState({
        loading: true,
        loadingType: true
      }))

      if (location.pathname === route) {
        window.location.reload()
        return
      }

    } finally {
      setTimeout(() => {
        dispatch(updateModalState(initialState))
        navigate(route)
      }, 400)
    }
  }

  return (
    <Button
      variant="contained"
      color={type ? type : 'primary'}
      sx={() => ({
        width: size ? size : '100%',
        fontWeight: 700
      })}
      onClick={() => handleClick()}
    >
      {btnText}
    </Button>
  )
}

export default NavigateToBtn
