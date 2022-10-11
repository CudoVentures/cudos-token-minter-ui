import { EncodeObject, StdFee } from "cudosjs"

export const FORBIDDEN_SYMBOLS = {
    Precision: ['e', 'E', '+', '-', '.', ',']
}

export const DEFAULT_TOTAL_SUPPLY_VALUE = '100,000,000'
export const DEFAULT_TOKEN_IMG_URL = 'https://www.cudos.org/wp-content/uploads/2022/05/Token-front@300x.png'

export enum TOKEN_OBJECT {
    name = 'name',
    symbol = 'symbol',
    decimalPrecision = 'decimalPrecision',
    initialSupply = 'initialSupply',
    totalSupply = 'totalSupply',
    logoUrl = 'logoUrl'
}

export const emptyTokenObject: CW20.TokenObject = {
    name: '',
    symbol: '',
    decimalPrecision: 0,
    initialSupply: '',
    totalSupply: '',
    logoUrl: ''
}

export const emptyFeesObject: StdFee = {
    amount: [],
    gas: ""
}

export const emptyEncodeObject: EncodeObject = {
    typeUrl: '',
    value: {}
}

export enum TEXT {
    HTTPS_Prefix = 'https://',
    OK = 'OK',
    YES = 'Yes',
    Logo = 'Logo',
    NO = 'No',
    Text = 'text',
    Number = 'number',
    SupplyType = 'Supply Type',
    DeploymentNetwork = 'Deployment network',
    TokenName = 'Token Name',
    TokenSymbol = 'Token Symbol',
    GasFeeEstimate = 'Gas Fee Estimate',
    TransactionDetails = 'Transaction Details',
    DecimalPrecision = 'Decimal Precision',
    InitialSupply = 'Initial Supply',
    TotalSupply = 'Total Supply',
    LogoUrl = 'Logo URL',
    TokenType = "Token Type",
    Summary = 'Summary'
}

export enum PLACEHOLDERS {
    TokenName = "e.g 'Bitcoin','Etherium'",
    TokenSymbol = "e.g 'BTC','ETH'",
    DecimalPrecision = "e.g 18",
    InitialSupply = 'e.g 100,000,000,000',
    TotalSupply = 'e.g 100,000,000,000',
    LogoUrl = 'e.g https://drive.google.com/file/d/_512x512.svg'
}

export enum TOOLTIPS {
    TokenType = 'The specific details for your CW20 tokens',
    DeploymentNetwork = 'The network where your token will be deployed',
    TokenName = 'Choose a name for your token.',
    TokenSymbol = 'Choose a symbol for your token (usually 3-5 chars).',
    DecimalPrecision = "The decimal precision of your token. (0 to 18). If you don't know what to insert, use 18.",
    InitialSupply = 'The initial number of tokens available. Maximum (100,000,000,000,000) Will be put in your account.',
    TotalSupply = 'The maximum number of tokens available. Maximum (100,000,000,000,000)',
    LogoUrl = 'The URL of the logo. Max (512x512 pixels). Only PNG and SVG formats are supported and must be hosted with https protocol (i.e. https://).'
}

export enum SUPPLY_TYPE {
    FIXED = 'Fixed - you cannot edit the total supply in the next step',
    CAPPED = 'Capped - you cannot burn from total supply after initial mint',
    UNLIMITED = 'Unlimited - have an unlimited total supply'
}

export enum TOKEN_TYPE {
    Standard = 'Standard',
    Burnable = 'Burnable',
    Mintable = 'Mintable',
    Unlimited = 'Unlimited'
}

export const CODE_IDS = {
    Simulate: 1,
    NETWORK: {
        LOCAL: {
            [TOKEN_TYPE.Standard]: 1,
            [TOKEN_TYPE.Burnable]: 1,
            [TOKEN_TYPE.Mintable]: 1,
            [TOKEN_TYPE.Unlimited]: 1,
        },
        PRIVATE: {
            [TOKEN_TYPE.Standard]: 1,
            [TOKEN_TYPE.Burnable]: 1,
            [TOKEN_TYPE.Mintable]: 1,
            [TOKEN_TYPE.Unlimited]: 1,
        },
        PUBLIC: {
            [TOKEN_TYPE.Standard]: 1,
            [TOKEN_TYPE.Burnable]: 1,
            [TOKEN_TYPE.Mintable]: 1,
            [TOKEN_TYPE.Unlimited]: 1,
        },
        MAINNET: {
            [TOKEN_TYPE.Standard]: 1,
            [TOKEN_TYPE.Burnable]: 1,
            [TOKEN_TYPE.Mintable]: 1,
            [TOKEN_TYPE.Unlimited]: 1,
        },
    }
}

export enum TOKEN_DESCRIPTION {
    Standard = 'Standard type tokens have fixed supply and cannot be burned or minted after initial mint',
    Burnable = 'Burnable type tokens have fixed supply and can be burned or minted after initial mint',
    Mintable = 'Mintable type tokens have a capped total sypply and can be minted but not burned after initial mint',
    Unlimited = 'Unlimited type tokens have an unlimited total supply and can be burned and minted after initial mint'
}

export const TOKEN_TYPES = {
    [TOKEN_TYPE.Standard]: {
        name: TOKEN_TYPE.Standard,
        description: TOKEN_DESCRIPTION.Standard,
        attributes: [
            { type: TEXT.SupplyType, option: SUPPLY_TYPE.FIXED },
            { type: TOKEN_TYPE.Burnable, option: TEXT.NO },
            { type: TOKEN_TYPE.Mintable, option: TEXT.NO },
        ]
    },
    [TOKEN_TYPE.Burnable]: {
        name: TOKEN_TYPE.Burnable,
        description: TOKEN_DESCRIPTION.Burnable,
        attributes: [
            { type: TEXT.SupplyType, option: SUPPLY_TYPE.FIXED },
            { type: TOKEN_TYPE.Burnable, option: TEXT.YES },
            { type: TOKEN_TYPE.Mintable, option: TEXT.NO },
        ]
    },
    [TOKEN_TYPE.Mintable]: {
        name: TOKEN_TYPE.Mintable,
        description: TOKEN_DESCRIPTION.Mintable,
        attributes: [
            { type: TEXT.SupplyType, option: SUPPLY_TYPE.CAPPED },
            { type: TOKEN_TYPE.Burnable, option: TEXT.NO },
            { type: TOKEN_TYPE.Mintable, option: TEXT.YES },
        ]
    },
    [TOKEN_TYPE.Unlimited]: {
        name: TOKEN_TYPE.Unlimited,
        description: TOKEN_DESCRIPTION.Unlimited,
        attributes: [
            { type: TEXT.SupplyType, option: SUPPLY_TYPE.UNLIMITED },
            { type: TOKEN_TYPE.Burnable, option: TEXT.YES },
            { type: TOKEN_TYPE.Mintable, option: TEXT.YES },
        ]
    }
}
