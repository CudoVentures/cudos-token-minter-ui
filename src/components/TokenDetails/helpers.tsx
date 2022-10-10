export const FORBIDDEN_SYMBOLS = {
    Precision: ['e', 'E', '+', '-', '.', ',']
}

export const DEFAULT_TOTAL_SUPPLY_VALUE = '100,000,000,000'

export const emptyTokenObject: TokenObject = {
    name: '',
    symbol: '',
    decimalPrecision: 0,
    initialSupply: '',
    totalSupply: '',
    logoUrl: ''
}

export enum INPUT_NAMES {
    TokenName = 'Token Name',
    TokenSymbol = 'Token Symbol',
    DecimalPrecision = 'Decimal Precision',
    InitialSupply = 'Initial Supply',
    TotalSupply = 'Total Supply',
    LogoUrl = 'Logo URL'
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
    TokenName = 'Choose a name for your token.',
    TokenSymbol = 'Choose a symbol for your token (usually 3-5 chars).',
    DecimalPrecision = "Insert the decimal precision of your token. (0 to 18). If you don't know what to insert, use 18.",
    InitialSupply = 'Insert the initial number of tokens available. Maximum (100,000,000,000,000) Will be put in your account.',
    TotalSupply = 'Insert the maximum number of tokens available. Maximum (100,000,000,000,000)',
    LogoUrl = 'Insert the URL of the logo. Max (512x512 pixels). Only PNG and SVG formats are supported and must be hosted with https protocol (i.e. https://).'
}

export enum INPUT_TYPES {
    Text = 'text',
    Number = 'number'
}

export enum AVAILABLE {
    YES = 'Yes',
    NO = 'No'
}

export enum SUPPLY_TYPE {
    TYPE = 'Supply Type',
    FIXED = 'Fixed - you cannot edit the total supply in the next step',
    CAPPED = 'Capped - you cannot burn from total supply after initial mint',
    UNLIMITED = 'Unlimited - have an unlimited total supply'
}

export enum TOKEN_NAME {
    Standart = 'Standart',
    Burnable = 'Burnable',
    Mintable = 'Mintable',
    Unlimited = 'Unlimited'
}

export enum TOKEN_DESCRIPTION {
    Standart = 'Standard type tokens have fixed supply and cannot be burned or minted after initial mint',
    Burnable = 'Burnable type tokens have fixed supply and can be burned or minted after initial mint',
    Mintable = 'Mintable type tokens have a capped total sypply and can be minted but not burned after initial mint',
    Unlimited = 'Unlimited type tokens have an unlimited total supply and can be burned and minted after initial mint'
}

export interface INPUT_FIELD {
    name: string;
    value: string | number;
    placeholder: string;
    tooltip: string;
    inputType: string;
    oldState: TokenObject;
    isDisabled: boolean;
}

export const TOKEN_TYPES = {
    [TOKEN_NAME.Standart]: {
        name: TOKEN_NAME.Standart,
        description: TOKEN_DESCRIPTION.Standart,
        attributes: [
            { type: SUPPLY_TYPE.TYPE, option: SUPPLY_TYPE.FIXED },
            { type: TOKEN_NAME.Burnable, option: AVAILABLE.NO },
            { type: TOKEN_NAME.Mintable, option: AVAILABLE.NO },
        ]
    },
    [TOKEN_NAME.Burnable]: {
        name: TOKEN_NAME.Burnable,
        description: TOKEN_DESCRIPTION.Burnable,
        attributes: [
            { type: SUPPLY_TYPE.TYPE, option: SUPPLY_TYPE.FIXED },
            { type: TOKEN_NAME.Burnable, option: AVAILABLE.YES },
            { type: TOKEN_NAME.Mintable, option: AVAILABLE.NO },
        ]
    },
    [TOKEN_NAME.Mintable]: {
        name: TOKEN_NAME.Mintable,
        description: TOKEN_DESCRIPTION.Mintable,
        attributes: [
            { type: SUPPLY_TYPE.TYPE, option: SUPPLY_TYPE.CAPPED },
            { type: TOKEN_NAME.Burnable, option: AVAILABLE.NO },
            { type: TOKEN_NAME.Mintable, option: AVAILABLE.YES },
        ]
    },
    [TOKEN_NAME.Unlimited]: {
        name: TOKEN_NAME.Unlimited,
        description: TOKEN_DESCRIPTION.Unlimited,
        attributes: [
            { type: SUPPLY_TYPE.TYPE, option: SUPPLY_TYPE.UNLIMITED },
            { type: TOKEN_NAME.Burnable, option: AVAILABLE.YES },
            { type: TOKEN_NAME.Mintable, option: AVAILABLE.YES },
        ]
    }
}
