import { Tooltip } from '@mui/material'
import { RootState } from 'store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { updateUser } from 'store/user'
import { getAccountBalances, getNativeBalance } from 'utils/helpers'
import { cutFractions, separateFractions, separateDecimals } from 'utils/regexFormatting'
import { CURRENCY_DISPLAY_NAME } from 'utils/constants'

const AccountBalance = (): JSX.Element => {

  const { address, nativeBalance } = useSelector((state: RootState) => state.userState)
  const fullBalance = separateDecimals(separateFractions(nativeBalance ? nativeBalance : '0'))
  const displayBalance = cutFractions(fullBalance)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentBalances = await getAccountBalances(address!)
        const userNativeBalance = getNativeBalance(currentBalances)

        dispatch(updateUser({
          balances: currentBalances,
          nativeBalance: userNativeBalance,
        }))

      } catch (error) {
        console.error((error as Error).message)
      }
    }
    const timer = setInterval(async () => {
      await fetchData()
    }, 15000)

    return () => {
      clearInterval(timer)
    }
  }, [nativeBalance])

  return (
    <Tooltip title={`${fullBalance} ${CURRENCY_DISPLAY_NAME}`}>
      <div>
        <span style={{ margin: '0 5px 0 10px' }}>{displayBalance}</span>
        <span>{CURRENCY_DISPLAY_NAME}</span>
      </div>
    </Tooltip>
  )
}

export default AccountBalance
