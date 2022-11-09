import { EncodeObject, StdFee } from "cudosjs"
import { CW20 } from "types/CW20"

export const FORBIDDEN_SYMBOLS = {
    Precision: ['e', 'E', '+', '-', '.', ',']
}

export const DEFAULT_TOTAL_SUPPLY_VALUE = '100,000,000,000'
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
    gas: "0"
}

export const emptyEncodeObject: EncodeObject = {
    typeUrl: '',
    value: {}
}

export enum TOKEN_ACTION {
    Instantiate = 'Instantiate',
    EditLogo = 'Edit Logo',
    IncreaseAllowance = 'Increase Allowance',
    DecreaseAllowance =  'Decrease Allowance',
    Transfer = 'Transfer',
    Mint = 'Mint',
    Burn = 'Burn'
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
    CurrentSupply = 'Current Supply',
    YourBalance='Your Balance',
    LogoUrl = 'Logo URL',
    TokenType = "Token Type",
    Summary = 'Summary',
    ReceiverAddress = 'Receiver Address',
    Amount = 'Amount',
    Send = 'Send',
    Burn = 'Burn',
    Mint = 'Mint',
    Increase = 'Increase',
    Decrease = 'Decrease',
    InvalidImgUrl = 'Invalid IMG URL',
    InvalidAddress = 'Invalid Address',
    InsufficientBalance = 'Insufficient Balance',
    ResolutionExceedsLimit = 'Resolution Exceeds Limit',
    InvalidImgSource = 'Invalid IMG Source',
    DefaultLogo = 'Default Logo'
}

export enum PLACEHOLDERS {
    CudosAddress = 'e.g. cudos21j319f2j932j3g92jg2jg',
    TokenName = "e.g 'Bitcoin','Etherium'",
    TokenSymbol = "e.g 'BTC','ETH'",
    DecimalPrecision = "e.g 18",
    DecimalZeroes = '00.00',
    InitialSupply = 'e.g 100,000,000,000',
    TotalSupply = 'e.g 100,000,000,000',
    LogoUrl = 'e.g https://drive.google.com/file/d/_512x512.svg'
}

export enum TOOLTIPS {
    Transfer = 'Moves amount tokens from the info.sender account to the recipient account. This is designed to send to an address controlled by a private key and does not trigger any actions on the recipient if it is a contract',
    Burn = 'Removes the amount from your balance and reduce total supply by the same amount',
    Mint = 'This will create amount of new tokens (updating total supply) and add them to your balance, as long as it does not exceed the cap',
    IncreaseAllowance = 'Set or increase the allowance such that spender may access up to amount + current_allowance tokens from the owner account',
    DecreaseAllowance = 'Decrease or clear the allowance such that spender may access up to current_allowance - amount tokens from the owner account',
    TokenType = 'The specific details for your CW20 tokens',
    DeploymentNetwork = 'The network where your token will be deployed',
    TokenName = 'Choose a name for your token.',
    TokenSymbol = 'Choose a symbol for your token (usually 3-5 chars).',
    DecimalPrecision = "The decimal precision of your token. (0 to 18). If you don't know what to insert, use 18.",
    InitialSupply = 'The initial number of tokens available. Maximum (100,000,000,000) Will be put in your account.',
    TotalSupply = 'The maximum number of tokens available. Maximum (100,000,000,000)',
    LogoUrl = 'The URL of the logo. Max (512x512 pixels). Only PNG and SVG formats are supported and must be hosted with https protocol (i.e. https://).'
}

export enum SUPPLY_TYPE {
    FIXED = 'Fixed - you cannot edit the total supply in the next step',
    CAPPED = 'Capped - you cannot burn from total supply after initial mint',
    UNLIMITED = 'Unlimited - have an unlimited total supply'
}

export enum TOKEN_TYPE {
    All = 'All Token Types',
    Standard = 'Standard',
    Burnable = 'Burnable',
    Mintable = 'Mintable',
    Unlimited = 'Unlimited',
    Undefined = 'Undefined'
}

export const CODE_IDS = {
    Simulate: 1,
    NETWORK: {
        LOCAL: {
            [TOKEN_TYPE.Standard]: [11],
            [TOKEN_TYPE.Burnable]: [12],
            [TOKEN_TYPE.Mintable]: [0],
            [TOKEN_TYPE.Unlimited]: [6, 14],
        },
        PRIVATE: {
            [TOKEN_TYPE.Standard]: [13],
            [TOKEN_TYPE.Burnable]: [15],
            [TOKEN_TYPE.Mintable]: [14],
            [TOKEN_TYPE.Unlimited]: [16],
        },
        PUBLIC: {
            [TOKEN_TYPE.Standard]: [1],
            [TOKEN_TYPE.Burnable]: [1],
            [TOKEN_TYPE.Mintable]: [1],
            [TOKEN_TYPE.Unlimited]: [1],
        },
        MAINNET: {
            [TOKEN_TYPE.Standard]: [1],
            [TOKEN_TYPE.Burnable]: [1],
            [TOKEN_TYPE.Mintable]: [1],
            [TOKEN_TYPE.Unlimited]: [1],
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
