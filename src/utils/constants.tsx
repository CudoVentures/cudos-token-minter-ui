import moment from "moment"
import cudosLogo from 'assets/vectors/cudos-logo.svg'
import cudosAdminLogo from 'assets/vectors/cudos-admin-logo.svg'
import { ReactComponent as TwitterIcon } from 'assets/vectors/twitter.svg'
import { ReactComponent as TelegramIcon } from 'assets/vectors/telegram.svg'
import { ReactComponent as DiscordIcon } from 'assets/vectors/discord.svg'
import { ReactComponent as LinkedInIcon } from 'assets/vectors/linkedin.svg'
import { ReactComponent as MediumIcon } from 'assets/vectors/medium.svg'
import { ReactComponent as YouTubeIcon } from 'assets/vectors/youtube.svg'
import { ReactComponent as FacebookIcon } from 'assets/vectors/facebook.svg'
import { ReactComponent as SpotifyIcon } from 'assets/vectors/spotify.svg'
import { ReactComponent as PlusIcon } from 'assets/vectors/plus-icon.svg'
import { ReactComponent as AllTypesTokenIcon } from 'assets/vectors/tokenTypeIcons/all-types-icon.svg'
import { JdenticonConfig } from "jdenticon"

// CONFIGURATIONS

export const PREAPPROVED_CODE_IDS = {
    NETWORK: {
        LOCAL: [25].sort(),
        PRIVATE: [31].sort(),
        PUBLIC: [].sort(),
        MAINNET: [].sort(),
    }
}

export const CHAIN_DETAILS = {
    DEFAULT_MEMO: 'Created with CUDOS Token Minter',
    ADMIN_TOKEN_DENOM: 'cudosAdmin',
    NATIVE_TOKEN_DENOM: 'acudos',
    CURRENCY_DISPLAY_NAME: 'CUDOS',
    DEFAULT_NETWORK: import.meta.env.VITE_APP_DEFAULT_NETWORK || process.env.VITE_APP_DEFAULT_NETWORK || "",
    GAS_PRICE: import.meta.env.VITE_APP_GAS_PRICE || process.env.VITE_APP_GAS_PRICE || "",
    GRAPHQL_URL: {
        LOCAL: import.meta.env.VITE_APP_LOCAL_GRAPHQL_URL || process.env.VITE_APP_LOCAL_GRAPHQL_URL || "",
        PRIVATE: import.meta.env.VITE_APP_PRIVATE_GRAPHQL_URL || process.env.VITE_APP_PRIVATE_GRAPHQL_URL || "",
        PUBLIC: import.meta.env.VITE_APP_PUBLIC_GRAPHQL_URL || process.env.VITE_APP_PUBLIC_GRAPHQL_URL || "",
        MAINNET: import.meta.env.VITE_APP_MAINNET_GRAPHQL_URL || process.env.VITE_APP_MAINNET_GRAPHQL_URL || ""
    },
    GRAPHQL_WS: {
        LOCAL: import.meta.env.VITE_APP_LOCAL_GRAPHQL_WS || process.env.VITE_APP_LOCAL_GRAPHQL_WS || "",
        PRIVATE: import.meta.env.VITE_APP_PRIVATE_GRAPHQL_WS || process.env.VITE_APP_PRIVATE_GRAPHQL_WS || "",
        PUBLIC: import.meta.env.VITE_APP_PUBLIC_GRAPHQL_WS || process.env.VITE_APP_PUBLIC_GRAPHQL_WS || "",
        MAINNET: import.meta.env.VITE_APP_MAINNET_GRAPHQL_WS || process.env.VITE_APP_MAINNET_GRAPHQL_WS || ""
    },
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
        ALIAS_NAME: 'Local Testnet',
        SHORT_NAMES: ['local']
    },
    PRIVATE: {
        ALIAS_NAME: 'Private Testnet',
        SHORT_NAMES: ['private', 'dev-test']
    },
    PUBLIC: {
        ALIAS_NAME: 'Public Testnet',
        SHORT_NAMES: ['public']
    },
    MAINNET: {
        ALIAS_NAME: 'Main Network',
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

//APP CONFIG

export const JD_CONFIG: JdenticonConfig = {
    hues: [204],
    lightness: {
        color: [0.28, 0.59],
        grayscale: [0.26, 0.90]
    },
    saturation: {
        color: 1.00,
        grayscale: 0.42
    },
    backColor: "#0000"
}

export const RESOLUTIONS = {
    MAX_IMG: {
        height: 512,
        width: 512,
    },
    HIGH: 1600,
    MID_LOW: 1300,
    LOW: 1000,
    MID_LOWER: 850,
    LOWER: 750,
    MID_LOWEST: 450,
    LOWEST: 200
}

export enum NAVIGATION_PATH {
    Home = '/',
    MintTokens = '/mint-tokens',
    AllAssets = '/all-assets',
    MyAssets = '/my-assets',
}

export const APP_MENU = {
    ITEMS: [
        { icon: <PlusIcon />, text: 'Mint Tokens', route: NAVIGATION_PATH.MintTokens, disabled: false },
        { icon: <AllTypesTokenIcon />, text: 'Assets', route: NAVIGATION_PATH.AllAssets, disabled: false }
    ]
}

export const FOOTER = {
    LEFT_LINKS: [
        { text: 'Terms & Conditions', url: 'https://www.cudos.org/terms-and-conditions/' },
        { text: 'Privacy Policy', url: 'https://www.cudos.org/privacy-policy' },
        { text: 'cudos.org', url: 'https://www.cudos.org/' },
        { text: `License © 2018 - ${moment().year()}`, url: 'https://www.cudos.org/' }
    ],
    RIGHT_LINKS: [
        { icon: <TwitterIcon />, url: 'https://twitter.com/CUDOS_' },
        { icon: <TelegramIcon />, url: 'https://t.me/cudostelegram' },
        { icon: <DiscordIcon />, url: 'https://discord.com/invite/t397SKqf4u' },
        { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/company/cudos1' },
        { icon: <MediumIcon />, url: 'https://medium.com/cudos' },
        { icon: <YouTubeIcon />, url: 'https://www.youtube.com/c/CUDOS' },
        { icon: <FacebookIcon />, url: 'https://www.facebook.com/cudos.org' },
        { icon: <SpotifyIcon />, url: 'https://open.spotify.com/show/2lZuBXJ270g7taK06tnK35' },

    ]
}

// MODAL MSGS
export const MODAL_MSGS = {
    PROMPTS: {
        VALID_DATA: 'Please provide valid data'
    },
    LOADING: {
        MESSAGES: {
            DEFAULT: 'Waiting for transaction confirmation...'
        }
    },
    SUCCESS: {
        TITLES: {
            DEFAULT: 'Success',
        },
    },
    ERRORS: {
        TYPE: {
            FETCH: 'FETCH_ERROR',
            CONNECTION: 'CONNECTION_ERROR'
        },
        TITLES: {
            DEFAULT: 'Error',
            LOGIN_FAIL: 'Login Failed'
        },
        MESSAGES: {
            DEFAULT: 'Seems like something went wrong. Please try again later',
            LOGIN_FAIL: 'Seems like we cannot log you in. Please try again later',
        }
    }
}

//TYPE URLS
export enum TYPE_URLS {
    MsgInstantiateContract = "/cosmwasm.wasm.v1.MsgInstantiateContract",
}
