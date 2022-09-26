// ENV
export const RPC_ADDRESS = import.meta.env.VITE_APP_RPC || process.env.VITE_APP_RPC || ""
export const API_ADDRESS = import.meta.env.VITE_APP_API || process.env.VITE_APP_API || ""
export const STAKING_URL = import.meta.env.VITE_APP_STAKING_URL || process.env.VITE_APP_STAKING_URL || ""
export const EXPLORER_PUBLIC_ADDRESS = import.meta.env.VITE_APP_EXPLORER_PUBLIC_ADDRESS || process.env.VITE_APP_EXPLORER_PUBLIC_ADDRESS || ""
export const CHAIN_NAME = import.meta.env.VITE_APP_CHAIN_NAME || process.env.VITE_APP_CHAIN_NAME || ""
export const CHAIN_ID = import.meta.env.VITE_APP_CHAIN_ID || process.env.VITE_APP_CHAIN_ID || ""
export const GAS_PRICE = import.meta.env.VITE_APP_GAS_PRICE || process.env.VITE_APP_GAS_PRICE || ""

// CONFIGURATIONS
export const NATIVE_TOKEN_DENOM = 'acudos'
export const CURRENCY_DISPLAY_NAME = 'CUDOS'

export const LEDGERS = {
    KEPLR: 'Keplr',
    COSMOSTATION: 'Cosmostation'
}

export const FOOTER_LINKS = [
    { text: 'All rights reserved 2022', url: 'https://www.cudos.org/' },
    { text: 'cudos.org', url: 'https://www.cudos.org/' },
    { text: 'v1.0.0', url: 'https://github.com/CudoVentures/token-minter-ui' },
]

export const CHAIN_DETAILS = {
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
        SHORT_NAMES: ['public'],
        LINK: 'http://multisig.testnet.cudos.org'
    },
    MAINNET: {
        ALIAS_NAME: 'CUDOS Main Network',
        SHORT_NAMES: ['cudos-1', 'mainnet'],
        LINK: 'http://multisig.cudos.org'
    }
}

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