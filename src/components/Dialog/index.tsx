import Failure from './Failure'
import Loading from './Loading'
import Success from './Success'
import { RootState } from 'store'
import { useSelector } from 'react-redux'
import BalanceSelector from './ModalComponents/BalanceSelector'
import WalletSelector from './ModalComponents/WalletSelector'

const Dialog = () => {

    const {
        success,
        loading,
        failure,
        changeChosenBalance,
        selectWallet
    } = useSelector((state: RootState) => state.modalState)

    switch (true) {
        case failure:
            return <Failure />
        case loading:
            return <Loading />
        case success:
            return <Success />
        case changeChosenBalance:
            return <BalanceSelector />
        case selectWallet:
            return <WalletSelector />
        default:
            return <div></div>
    }
}

export default Dialog
