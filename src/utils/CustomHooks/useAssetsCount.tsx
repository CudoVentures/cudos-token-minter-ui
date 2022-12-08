import { useCallback, useMemo } from "react"
import { useSelector } from "react-redux"
import { RootState } from "store"
import { AssetsView } from "store/assetsNavigation"

const useAssetsCount = () => {

    const { myAssets, allAssets } = useSelector((state: RootState) => state.assetsState)

    const ASSETS_MAPPER: Record<AssetsView, number> = useMemo(() => {
        return {
            [AssetsView.AllAssets]: allAssets?.length!,
            [AssetsView.MyAssets]: myAssets?.haveBalanceFrom?.length! + myAssets?.owned?.length!,
            [AssetsView.Owned]: myAssets?.owned?.length!,
            [AssetsView.Others]: myAssets?.haveBalanceFrom?.length!
        }

    }, [myAssets, allAssets])

    const getAssetCount = useCallback((asset: AssetsView) => {
        return ASSETS_MAPPER[asset]

    }, [ASSETS_MAPPER])

    return getAssetCount
}

export default useAssetsCount
