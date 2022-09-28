import moment from "moment"
import cudosLogo from 'assets/vectors/cudos-logo.svg'
import cudosAdminLogo from 'assets/vectors/cudos-admin-logo.svg'

// CONFIGURATIONS
export const CHAIN_DETAILS = {
    ADMIN_TOKEN_DENOM: 'cudosAdmin',
    NATIVE_TOKEN_DENOM: 'acudos',
    CURRENCY_DISPLAY_NAME: 'CUDOS',
    DEFAULT_NETWORK: import.meta.env.VITE_APP_DEFAULT_NETWORK || process.env.VITE_APP_DEFAULT_NETWORK || "",
    GAS_PRICE: import.meta.env.VITE_APP_GAS_PRICE || process.env.VITE_APP_GAS_PRICE || "",
    RPC_ADDRESS: {
        LOCAL: import.meta.env.VITE_APP_LOCAL_RPC || process.env.VITE_APP_LOCAL_RPC || "",
        PRIVATE: import.meta.env.VITE_APP_PRIVATE_RPC || process.env.VITE_APP_PRIVATE_RPC || "",
        PUBLIC: import.meta.env.VITE_APP_PUBLIC_RPC || process.env.VITE_APP_PUBLIC_RPC || "",
        MAINNET: import.meta.env.VITE_APP_MAINNET_RPC || process.env.VITE_APP_MAINNET_RPC || ""
    },
    API_ADDRESS: {
        LOCAL: import.meta.env.VITE_APP_LOCAL_API || process.env.VITE_APP_LOCAL_API || "",
        PRIVATE: import.meta.env.VITE_APP_PRIVATE_API || process.env.VITE_APP_PRIVATE_API || "",
        PUBLIC: import.meta.env.VITE_APP_PUBLIC_API || process.env.VITE_APP_PUBLIC_API || "",
        MAINNET: import.meta.env.VITE_APP_MAINNET_API || process.env.VITE_APP_MAINNET_API || ""
    },
    STAKING_URL: {
        LOCAL: import.meta.env.VITE_APP_LOCAL_STAKING_URL || process.env.VITE_APP_LOCAL_STAKING_URL || "",
        PRIVATE: import.meta.env.VITE_APP_PRIVATE_STAKING_URL || process.env.VITE_APP_PRIVATE_STAKING_URL || "",
        PUBLIC: import.meta.env.VITE_APP_PUBLIC_STAKING_URL || process.env.VITE_APP_PUBLIC_STAKING_URL || "",
        MAINNET: import.meta.env.VITE_APP_MAINNET_STAKING_URL || process.env.VITE_APP_MAINNET_STAKING_URL || ""
    },
    EXPLORER_URL: {
        LOCAL: import.meta.env.VITE_APP_LOCAL_EXPLORER_URL || process.env.VITE_APP_LOCAL_EXPLORER_URL || "",
        PRIVATE: import.meta.env.VITE_APP_PRIVATE_EXPLORER_URL || process.env.VITE_APP_PRIVATE_EXPLORER_URL || "",
        PUBLIC: import.meta.env.VITE_APP_PUBLIC_EXPLORER_URL || process.env.VITE_APP_PUBLIC_EXPLORER_URL || "",
        MAINNET: import.meta.env.VITE_APP_MAINNET_EXPLORER_URL || process.env.VITE_APP_MAINNET_EXPLORER_URL || ""
    },
    CHAIN_NAME: {
        LOCAL: import.meta.env.VITE_APP_LOCAL_CHAIN_NAME || process.env.VITE_APP_LOCAL_CHAIN_NAME || "",
        PRIVATE: import.meta.env.VITE_APP_PRIVATE_CHAIN_NAME || process.env.VITE_APP_PRIVATE_CHAIN_NAME || "",
        PUBLIC: import.meta.env.VITE_APP_PUBLIC_CHAIN_NAME || process.env.VITE_APP_PUBLIC_CHAIN_NAME || "",
        MAINNET: import.meta.env.VITE_APP_MAINNET_CHAIN_NAME || process.env.VITE_APP_MAINNET_CHAIN_NAME || ""
    },
    CHAIN_ID: {
        LOCAL: import.meta.env.VITE_APP_LOCAL_CHAIN_ID || process.env.VITE_APP_LOCAL_CHAIN_ID || "",
        PRIVATE: import.meta.env.VITE_APP_PRIVATE_CHAIN_ID || process.env.VITE_APP_PRIVATE_CHAIN_ID || "",
        PUBLIC: import.meta.env.VITE_APP_PUBLIC_CHAIN_ID || process.env.VITE_APP_PUBLIC_CHAIN_ID || "",
        MAINNET: import.meta.env.VITE_APP_MAINNET_CHAIN_ID || process.env.VITE_APP_MAINNET_CHAIN_ID || ""
    },
    LOCAL: {
        ALIAS_NAME: 'CUDOS Local Testnet',
        SHORT_NAMES: ['local']
    },
    PRIVATE: {
        ALIAS_NAME: 'CUDOS Private Testnet',
        SHORT_NAMES: ['private']
    },
    PUBLIC: {
        ALIAS_NAME: 'CUDOS Public Testnet',
        SHORT_NAMES: ['public']
    },
    MAINNET: {
        ALIAS_NAME: 'CUDOS Main Network',
        SHORT_NAMES: ['mainnet', 'cudos-1']
    }
}

export const DENOM_TO_ICON = {
    'acudos': cudosLogo,
    'cudos': cudosLogo,
    'cudosAdmin': cudosAdminLogo
}

export const DENOM_TO_ALIAS = {
    'acudos': "CUDOS",
    'cudosAdmin': 'ADMIN TOKENS'
}

export const LEDGERS = {
    KEPLR: 'Keplr',
    COSMOSTATION: 'Cosmostation'
}

export const FOOTER_LINKS = [
    { text: `All rights reserved ${moment().year()}`, url: 'https://www.cudos.org/' },
    { text: 'cudos.org', url: 'https://www.cudos.org/' },
    { text: 'v1.0.0', url: 'https://github.com/CudoVentures/token-minter-ui' },
]

// MODAL MSGS
export const MODAL_MSGS = {
    ERRORS: {
        TITLES: {
            LOGIN_FAIL: 'Login Failed'
        },
        MESSAGES: {
            LOGIN_FAIL: 'Seems like something went wrong. Please try again later'
        }
    }
}