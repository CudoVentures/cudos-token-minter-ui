import { Window as KeplrWindow } from "@keplr-wallet/types"

export { }

declare global {

    type Override<T1, T2> = Omit<T1, keyof T2> & T2

    type ComponentDefault = {
        className?: string
    }

    interface Window extends KeplrWindow {
        cosmostation: any
    }
}

declare module '@mui/material/styles' {

    interface Theme {
        custom: {
            backgrounds: {
                light: string
                primary: string
                dark: string
            }
        }
    }

    interface ThemeOptions {
        custom?: {
            backgrounds?: {
                light?: string
                primary?: string
                dark?: string
            }
        }
    }
}
