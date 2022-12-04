import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ActionCoin: any;
  ActionDelegation: any;
  ActionNftTransferEvent: any;
  ActionPagination: any;
  ActionRedelegation: any;
  ActionUnbondingDelegation: any;
  _coin: any;
  _dec_coin: any;
  _text: any;
  bigint: any;
  coin: any;
  json: any;
  jsonb: any;
  numeric: any;
  proposal_executor_result: any;
  proposal_status: any;
  smallint: any;
  timestamp: any;
  vote_option: any;
};

export type ActionAddress = {
  __typename?: 'ActionAddress';
  address: Scalars['String'];
};

export type ActionBalance = {
  __typename?: 'ActionBalance';
  coins?: Maybe<Array<Maybe<Scalars['ActionCoin']>>>;
};

export type ActionDelegationResponse = {
  __typename?: 'ActionDelegationResponse';
  delegations?: Maybe<Array<Maybe<Scalars['ActionDelegation']>>>;
  pagination?: Maybe<Scalars['ActionPagination']>;
};

export type ActionDelegationReward = {
  __typename?: 'ActionDelegationReward';
  coins?: Maybe<Array<Maybe<Scalars['ActionCoin']>>>;
  validator_address: Scalars['String'];
};

export type ActionNftTransferEventsResponse = {
  __typename?: 'ActionNftTransferEventsResponse';
  events?: Maybe<Array<Maybe<Scalars['ActionNftTransferEvent']>>>;
};

export type ActionRedelegationResponse = {
  __typename?: 'ActionRedelegationResponse';
  pagination?: Maybe<Scalars['ActionPagination']>;
  redelegations?: Maybe<Array<Maybe<Scalars['ActionRedelegation']>>>;
};

export type ActionUnbondingDelegationResponse = {
  __typename?: 'ActionUnbondingDelegationResponse';
  pagination?: Maybe<Scalars['ActionPagination']>;
  unbonding_delegations?: Maybe<Array<Maybe<Scalars['ActionUnbondingDelegation']>>>;
};

export type ActionValidatorCommissionAmount = {
  __typename?: 'ActionValidatorCommissionAmount';
  coins?: Maybe<Array<Maybe<Scalars['ActionCoin']>>>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "_coin". All fields are combined with logical 'AND'. */
export type _Coin_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_coin']>;
  _gt?: InputMaybe<Scalars['_coin']>;
  _gte?: InputMaybe<Scalars['_coin']>;
  _in?: InputMaybe<Array<Scalars['_coin']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_coin']>;
  _lte?: InputMaybe<Scalars['_coin']>;
  _neq?: InputMaybe<Scalars['_coin']>;
  _nin?: InputMaybe<Array<Scalars['_coin']>>;
};

/** Boolean expression to compare columns of type "_dec_coin". All fields are combined with logical 'AND'. */
export type _Dec_Coin_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_dec_coin']>;
  _gt?: InputMaybe<Scalars['_dec_coin']>;
  _gte?: InputMaybe<Scalars['_dec_coin']>;
  _in?: InputMaybe<Array<Scalars['_dec_coin']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_dec_coin']>;
  _lte?: InputMaybe<Scalars['_dec_coin']>;
  _neq?: InputMaybe<Scalars['_dec_coin']>;
  _nin?: InputMaybe<Array<Scalars['_dec_coin']>>;
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']>;
  _gt?: InputMaybe<Scalars['_text']>;
  _gte?: InputMaybe<Scalars['_text']>;
  _in?: InputMaybe<Array<Scalars['_text']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_text']>;
  _lte?: InputMaybe<Scalars['_text']>;
  _neq?: InputMaybe<Scalars['_text']>;
  _nin?: InputMaybe<Array<Scalars['_text']>>;
};

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'account';
  address: Scalars['String'];
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposit_Aggregate;
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Vote_Aggregate;
  /** An array relationship */
  proposals: Array<Proposal>;
  /** An aggregate relationship */
  proposals_aggregate: Proposal_Aggregate;
  /** An array relationship */
  validator_infos: Array<Validator_Info>;
  /** An aggregate relationship */
  validator_infos_aggregate: Validator_Info_Aggregate;
  /** An object relationship */
  vesting_account?: Maybe<Vesting_Account>;
};


/** columns and relationships of "account" */
export type AccountProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposalsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountValidator_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};

/** aggregated selection of "account" */
export type Account_Aggregate = {
  __typename?: 'account_aggregate';
  aggregate?: Maybe<Account_Aggregate_Fields>;
  nodes: Array<Account>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
  __typename?: 'account_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Account_Max_Fields>;
  min?: Maybe<Account_Min_Fields>;
};


/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Bool_Exp>>;
  _not?: InputMaybe<Account_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>;
  proposals?: InputMaybe<Proposal_Bool_Exp>;
  validator_infos?: InputMaybe<Validator_Info_Bool_Exp>;
  vesting_account?: InputMaybe<Vesting_Account_Bool_Exp>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
  __typename?: 'account_max_fields';
  address?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
  __typename?: 'account_min_fields';
  address?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  address?: InputMaybe<Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>;
  proposals_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>;
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Order_By>;
  vesting_account?: InputMaybe<Vesting_Account_Order_By>;
};

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  Address = 'address'
}

/** columns and relationships of "adjusted_supply" */
export type Adjusted_Supply = {
  __typename?: 'adjusted_supply';
  height: Scalars['bigint'];
  value: Scalars['numeric'];
};

/** aggregated selection of "adjusted_supply" */
export type Adjusted_Supply_Aggregate = {
  __typename?: 'adjusted_supply_aggregate';
  aggregate?: Maybe<Adjusted_Supply_Aggregate_Fields>;
  nodes: Array<Adjusted_Supply>;
};

/** aggregate fields of "adjusted_supply" */
export type Adjusted_Supply_Aggregate_Fields = {
  __typename?: 'adjusted_supply_aggregate_fields';
  avg?: Maybe<Adjusted_Supply_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Adjusted_Supply_Max_Fields>;
  min?: Maybe<Adjusted_Supply_Min_Fields>;
  stddev?: Maybe<Adjusted_Supply_Stddev_Fields>;
  stddev_pop?: Maybe<Adjusted_Supply_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Adjusted_Supply_Stddev_Samp_Fields>;
  sum?: Maybe<Adjusted_Supply_Sum_Fields>;
  var_pop?: Maybe<Adjusted_Supply_Var_Pop_Fields>;
  var_samp?: Maybe<Adjusted_Supply_Var_Samp_Fields>;
  variance?: Maybe<Adjusted_Supply_Variance_Fields>;
};


/** aggregate fields of "adjusted_supply" */
export type Adjusted_Supply_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Adjusted_Supply_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Adjusted_Supply_Avg_Fields = {
  __typename?: 'adjusted_supply_avg_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "adjusted_supply". All fields are combined with a logical 'AND'. */
export type Adjusted_Supply_Bool_Exp = {
  _and?: InputMaybe<Array<Adjusted_Supply_Bool_Exp>>;
  _not?: InputMaybe<Adjusted_Supply_Bool_Exp>;
  _or?: InputMaybe<Array<Adjusted_Supply_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Adjusted_Supply_Max_Fields = {
  __typename?: 'adjusted_supply_max_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Adjusted_Supply_Min_Fields = {
  __typename?: 'adjusted_supply_min_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** Ordering options when selecting data from "adjusted_supply". */
export type Adjusted_Supply_Order_By = {
  height?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "adjusted_supply" */
export enum Adjusted_Supply_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Adjusted_Supply_Stddev_Fields = {
  __typename?: 'adjusted_supply_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Adjusted_Supply_Stddev_Pop_Fields = {
  __typename?: 'adjusted_supply_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Adjusted_Supply_Stddev_Samp_Fields = {
  __typename?: 'adjusted_supply_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Adjusted_Supply_Sum_Fields = {
  __typename?: 'adjusted_supply_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Adjusted_Supply_Var_Pop_Fields = {
  __typename?: 'adjusted_supply_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Adjusted_Supply_Var_Samp_Fields = {
  __typename?: 'adjusted_supply_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Adjusted_Supply_Variance_Fields = {
  __typename?: 'adjusted_supply_variance_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "apr" */
export type Apr = {
  __typename?: 'apr';
  height: Scalars['bigint'];
  value: Scalars['numeric'];
};

/** aggregated selection of "apr" */
export type Apr_Aggregate = {
  __typename?: 'apr_aggregate';
  aggregate?: Maybe<Apr_Aggregate_Fields>;
  nodes: Array<Apr>;
};

/** aggregate fields of "apr" */
export type Apr_Aggregate_Fields = {
  __typename?: 'apr_aggregate_fields';
  avg?: Maybe<Apr_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Apr_Max_Fields>;
  min?: Maybe<Apr_Min_Fields>;
  stddev?: Maybe<Apr_Stddev_Fields>;
  stddev_pop?: Maybe<Apr_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Apr_Stddev_Samp_Fields>;
  sum?: Maybe<Apr_Sum_Fields>;
  var_pop?: Maybe<Apr_Var_Pop_Fields>;
  var_samp?: Maybe<Apr_Var_Samp_Fields>;
  variance?: Maybe<Apr_Variance_Fields>;
};


/** aggregate fields of "apr" */
export type Apr_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Apr_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Apr_Avg_Fields = {
  __typename?: 'apr_avg_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "apr". All fields are combined with a logical 'AND'. */
export type Apr_Bool_Exp = {
  _and?: InputMaybe<Array<Apr_Bool_Exp>>;
  _not?: InputMaybe<Apr_Bool_Exp>;
  _or?: InputMaybe<Array<Apr_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Apr_Max_Fields = {
  __typename?: 'apr_max_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Apr_Min_Fields = {
  __typename?: 'apr_min_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** Ordering options when selecting data from "apr". */
export type Apr_Order_By = {
  height?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "apr" */
export enum Apr_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Apr_Stddev_Fields = {
  __typename?: 'apr_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Apr_Stddev_Pop_Fields = {
  __typename?: 'apr_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Apr_Stddev_Samp_Fields = {
  __typename?: 'apr_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Apr_Sum_Fields = {
  __typename?: 'apr_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Apr_Var_Pop_Fields = {
  __typename?: 'apr_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Apr_Var_Samp_Fields = {
  __typename?: 'apr_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Apr_Variance_Fields = {
  __typename?: 'apr_variance_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis = {
  __typename?: 'average_block_time_from_genesis';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
};

/** aggregated selection of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate = {
  __typename?: 'average_block_time_from_genesis_aggregate';
  aggregate?: Maybe<Average_Block_Time_From_Genesis_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_From_Genesis>;
};

/** aggregate fields of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate_Fields = {
  __typename?: 'average_block_time_from_genesis_aggregate_fields';
  avg?: Maybe<Average_Block_Time_From_Genesis_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_From_Genesis_Max_Fields>;
  min?: Maybe<Average_Block_Time_From_Genesis_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_From_Genesis_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_From_Genesis_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_From_Genesis_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_From_Genesis_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_From_Genesis_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_From_Genesis_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_From_Genesis_Variance_Fields>;
};


/** aggregate fields of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_From_Genesis_Avg_Fields = {
  __typename?: 'average_block_time_from_genesis_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_from_genesis". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_From_Genesis_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Average_Block_Time_From_Genesis_Max_Fields = {
  __typename?: 'average_block_time_from_genesis_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_From_Genesis_Min_Fields = {
  __typename?: 'average_block_time_from_genesis_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "average_block_time_from_genesis". */
export type Average_Block_Time_From_Genesis_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "average_block_time_from_genesis" */
export enum Average_Block_Time_From_Genesis_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Average_Block_Time_From_Genesis_Stddev_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_From_Genesis_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_From_Genesis_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_From_Genesis_Sum_Fields = {
  __typename?: 'average_block_time_from_genesis_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_From_Genesis_Var_Pop_Fields = {
  __typename?: 'average_block_time_from_genesis_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_From_Genesis_Var_Samp_Fields = {
  __typename?: 'average_block_time_from_genesis_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_From_Genesis_Variance_Fields = {
  __typename?: 'average_block_time_from_genesis_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day = {
  __typename?: 'average_block_time_per_day';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
};

/** aggregated selection of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate = {
  __typename?: 'average_block_time_per_day_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Day_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Day>;
};

/** aggregate fields of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate_Fields = {
  __typename?: 'average_block_time_per_day_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Day_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_Per_Day_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Day_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Day_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Day_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Day_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Day_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Day_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Day_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Day_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Day_Avg_Fields = {
  __typename?: 'average_block_time_per_day_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_day". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Day_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Day_Max_Fields = {
  __typename?: 'average_block_time_per_day_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Day_Min_Fields = {
  __typename?: 'average_block_time_per_day_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "average_block_time_per_day". */
export type Average_Block_Time_Per_Day_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Day_Stddev_Fields = {
  __typename?: 'average_block_time_per_day_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Day_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_day_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Day_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_day_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Day_Sum_Fields = {
  __typename?: 'average_block_time_per_day_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Day_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_day_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Day_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_day_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Day_Variance_Fields = {
  __typename?: 'average_block_time_per_day_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour = {
  __typename?: 'average_block_time_per_hour';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
};

/** aggregated selection of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate = {
  __typename?: 'average_block_time_per_hour_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Hour_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Hour>;
};

/** aggregate fields of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate_Fields = {
  __typename?: 'average_block_time_per_hour_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Hour_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_Per_Hour_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Hour_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Hour_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Hour_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Hour_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Hour_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Hour_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Hour_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Hour_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Hour_Avg_Fields = {
  __typename?: 'average_block_time_per_hour_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_hour". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Hour_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Hour_Max_Fields = {
  __typename?: 'average_block_time_per_hour_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Hour_Min_Fields = {
  __typename?: 'average_block_time_per_hour_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "average_block_time_per_hour". */
export type Average_Block_Time_Per_Hour_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Hour_Stddev_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Hour_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Hour_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Hour_Sum_Fields = {
  __typename?: 'average_block_time_per_hour_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Hour_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_hour_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Hour_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_hour_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Hour_Variance_Fields = {
  __typename?: 'average_block_time_per_hour_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute = {
  __typename?: 'average_block_time_per_minute';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
};

/** aggregated selection of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate = {
  __typename?: 'average_block_time_per_minute_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Minute_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Minute>;
};

/** aggregate fields of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate_Fields = {
  __typename?: 'average_block_time_per_minute_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Minute_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_Per_Minute_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Minute_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Minute_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Minute_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Minute_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Minute_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Minute_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Minute_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Minute_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Minute_Avg_Fields = {
  __typename?: 'average_block_time_per_minute_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_minute". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Minute_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Minute_Max_Fields = {
  __typename?: 'average_block_time_per_minute_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Minute_Min_Fields = {
  __typename?: 'average_block_time_per_minute_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "average_block_time_per_minute". */
export type Average_Block_Time_Per_Minute_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Minute_Stddev_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Minute_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Minute_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Minute_Sum_Fields = {
  __typename?: 'average_block_time_per_minute_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Minute_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_minute_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Minute_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_minute_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Minute_Variance_Fields = {
  __typename?: 'average_block_time_per_minute_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "block" */
export type Block = {
  __typename?: 'block';
  hash: Scalars['String'];
  height: Scalars['bigint'];
  num_txs?: Maybe<Scalars['Int']>;
  /** An array relationship */
  pre_commits: Array<Pre_Commit>;
  /** An aggregate relationship */
  pre_commits_aggregate: Pre_Commit_Aggregate;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp: Scalars['timestamp'];
  total_gas?: Maybe<Scalars['bigint']>;
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
  /** An object relationship */
  validator?: Maybe<Validator>;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate;
};


/** columns and relationships of "block" */
export type BlockPre_CommitsArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockPre_Commits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};

/** aggregated selection of "block" */
export type Block_Aggregate = {
  __typename?: 'block_aggregate';
  aggregate?: Maybe<Block_Aggregate_Fields>;
  nodes: Array<Block>;
};

/** aggregate fields of "block" */
export type Block_Aggregate_Fields = {
  __typename?: 'block_aggregate_fields';
  avg?: Maybe<Block_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Block_Max_Fields>;
  min?: Maybe<Block_Min_Fields>;
  stddev?: Maybe<Block_Stddev_Fields>;
  stddev_pop?: Maybe<Block_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Block_Stddev_Samp_Fields>;
  sum?: Maybe<Block_Sum_Fields>;
  var_pop?: Maybe<Block_Var_Pop_Fields>;
  var_samp?: Maybe<Block_Var_Samp_Fields>;
  variance?: Maybe<Block_Variance_Fields>;
};


/** aggregate fields of "block" */
export type Block_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Block_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "block" */
export type Block_Aggregate_Order_By = {
  avg?: InputMaybe<Block_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Block_Max_Order_By>;
  min?: InputMaybe<Block_Min_Order_By>;
  stddev?: InputMaybe<Block_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Block_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Block_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Block_Sum_Order_By>;
  var_pop?: InputMaybe<Block_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Block_Var_Samp_Order_By>;
  variance?: InputMaybe<Block_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Block_Avg_Fields = {
  __typename?: 'block_avg_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "block" */
export type Block_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
export type Block_Bool_Exp = {
  _and?: InputMaybe<Array<Block_Bool_Exp>>;
  _not?: InputMaybe<Block_Bool_Exp>;
  _or?: InputMaybe<Array<Block_Bool_Exp>>;
  hash?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  num_txs?: InputMaybe<Int_Comparison_Exp>;
  pre_commits?: InputMaybe<Pre_Commit_Bool_Exp>;
  proposer_address?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  total_gas?: InputMaybe<Bigint_Comparison_Exp>;
  transactions?: InputMaybe<Transaction_Bool_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};

/** aggregate max on columns */
export type Block_Max_Fields = {
  __typename?: 'block_max_fields';
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  total_gas?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "block" */
export type Block_Max_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Block_Min_Fields = {
  __typename?: 'block_min_fields';
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  total_gas?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "block" */
export type Block_Min_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "block". */
export type Block_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Order_By>;
};

/** select columns of table "block" */
export enum Block_Select_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  NumTxs = 'num_txs',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalGas = 'total_gas'
}

/** aggregate stddev on columns */
export type Block_Stddev_Fields = {
  __typename?: 'block_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "block" */
export type Block_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Block_Stddev_Pop_Fields = {
  __typename?: 'block_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "block" */
export type Block_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Block_Stddev_Samp_Fields = {
  __typename?: 'block_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "block" */
export type Block_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Block_Sum_Fields = {
  __typename?: 'block_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  total_gas?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "block" */
export type Block_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Block_Var_Pop_Fields = {
  __typename?: 'block_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "block" */
export type Block_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Block_Var_Samp_Fields = {
  __typename?: 'block_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "block" */
export type Block_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Block_Variance_Fields = {
  __typename?: 'block_variance_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "block" */
export type Block_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "coin". All fields are combined with logical 'AND'. */
export type Coin_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['coin']>;
  _gt?: InputMaybe<Scalars['coin']>;
  _gte?: InputMaybe<Scalars['coin']>;
  _in?: InputMaybe<Array<Scalars['coin']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['coin']>;
  _lte?: InputMaybe<Scalars['coin']>;
  _neq?: InputMaybe<Scalars['coin']>;
  _nin?: InputMaybe<Array<Scalars['coin']>>;
};

/** columns and relationships of "community_pool" */
export type Community_Pool = {
  __typename?: 'community_pool';
  coins: Scalars['_dec_coin'];
  height: Scalars['bigint'];
};

/** aggregated selection of "community_pool" */
export type Community_Pool_Aggregate = {
  __typename?: 'community_pool_aggregate';
  aggregate?: Maybe<Community_Pool_Aggregate_Fields>;
  nodes: Array<Community_Pool>;
};

/** aggregate fields of "community_pool" */
export type Community_Pool_Aggregate_Fields = {
  __typename?: 'community_pool_aggregate_fields';
  avg?: Maybe<Community_Pool_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Community_Pool_Max_Fields>;
  min?: Maybe<Community_Pool_Min_Fields>;
  stddev?: Maybe<Community_Pool_Stddev_Fields>;
  stddev_pop?: Maybe<Community_Pool_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Community_Pool_Stddev_Samp_Fields>;
  sum?: Maybe<Community_Pool_Sum_Fields>;
  var_pop?: Maybe<Community_Pool_Var_Pop_Fields>;
  var_samp?: Maybe<Community_Pool_Var_Samp_Fields>;
  variance?: Maybe<Community_Pool_Variance_Fields>;
};


/** aggregate fields of "community_pool" */
export type Community_Pool_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Community_Pool_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Community_Pool_Avg_Fields = {
  __typename?: 'community_pool_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "community_pool". All fields are combined with a logical 'AND'. */
export type Community_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Community_Pool_Bool_Exp>>;
  _not?: InputMaybe<Community_Pool_Bool_Exp>;
  _or?: InputMaybe<Array<Community_Pool_Bool_Exp>>;
  coins?: InputMaybe<_Dec_Coin_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Community_Pool_Max_Fields = {
  __typename?: 'community_pool_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Community_Pool_Min_Fields = {
  __typename?: 'community_pool_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "community_pool". */
export type Community_Pool_Order_By = {
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "community_pool" */
export enum Community_Pool_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Community_Pool_Stddev_Fields = {
  __typename?: 'community_pool_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Community_Pool_Stddev_Pop_Fields = {
  __typename?: 'community_pool_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Community_Pool_Stddev_Samp_Fields = {
  __typename?: 'community_pool_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Community_Pool_Sum_Fields = {
  __typename?: 'community_pool_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Community_Pool_Var_Pop_Fields = {
  __typename?: 'community_pool_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Community_Pool_Var_Samp_Fields = {
  __typename?: 'community_pool_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Community_Pool_Variance_Fields = {
  __typename?: 'community_pool_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "cosmwasm_clear_admin" */
export type Cosmwasm_Clear_Admin = {
  __typename?: 'cosmwasm_clear_admin';
  contract: Scalars['String'];
  index: Scalars['bigint'];
  sender: Scalars['String'];
  success: Scalars['Boolean'];
  /** An object relationship */
  transaction: Transaction;
  transaction_hash: Scalars['String'];
};

/** aggregated selection of "cosmwasm_clear_admin" */
export type Cosmwasm_Clear_Admin_Aggregate = {
  __typename?: 'cosmwasm_clear_admin_aggregate';
  aggregate?: Maybe<Cosmwasm_Clear_Admin_Aggregate_Fields>;
  nodes: Array<Cosmwasm_Clear_Admin>;
};

/** aggregate fields of "cosmwasm_clear_admin" */
export type Cosmwasm_Clear_Admin_Aggregate_Fields = {
  __typename?: 'cosmwasm_clear_admin_aggregate_fields';
  avg?: Maybe<Cosmwasm_Clear_Admin_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cosmwasm_Clear_Admin_Max_Fields>;
  min?: Maybe<Cosmwasm_Clear_Admin_Min_Fields>;
  stddev?: Maybe<Cosmwasm_Clear_Admin_Stddev_Fields>;
  stddev_pop?: Maybe<Cosmwasm_Clear_Admin_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cosmwasm_Clear_Admin_Stddev_Samp_Fields>;
  sum?: Maybe<Cosmwasm_Clear_Admin_Sum_Fields>;
  var_pop?: Maybe<Cosmwasm_Clear_Admin_Var_Pop_Fields>;
  var_samp?: Maybe<Cosmwasm_Clear_Admin_Var_Samp_Fields>;
  variance?: Maybe<Cosmwasm_Clear_Admin_Variance_Fields>;
};


/** aggregate fields of "cosmwasm_clear_admin" */
export type Cosmwasm_Clear_Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cosmwasm_Clear_Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cosmwasm_Clear_Admin_Avg_Fields = {
  __typename?: 'cosmwasm_clear_admin_avg_fields';
  index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cosmwasm_clear_admin". All fields are combined with a logical 'AND'. */
export type Cosmwasm_Clear_Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Cosmwasm_Clear_Admin_Bool_Exp>>;
  _not?: InputMaybe<Cosmwasm_Clear_Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Cosmwasm_Clear_Admin_Bool_Exp>>;
  contract?: InputMaybe<String_Comparison_Exp>;
  index?: InputMaybe<Bigint_Comparison_Exp>;
  sender?: InputMaybe<String_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Cosmwasm_Clear_Admin_Max_Fields = {
  __typename?: 'cosmwasm_clear_admin_max_fields';
  contract?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['bigint']>;
  sender?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cosmwasm_Clear_Admin_Min_Fields = {
  __typename?: 'cosmwasm_clear_admin_min_fields';
  contract?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['bigint']>;
  sender?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "cosmwasm_clear_admin". */
export type Cosmwasm_Clear_Admin_Order_By = {
  contract?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** select columns of table "cosmwasm_clear_admin" */
export enum Cosmwasm_Clear_Admin_Select_Column {
  /** column name */
  Contract = 'contract',
  /** column name */
  Index = 'index',
  /** column name */
  Sender = 'sender',
  /** column name */
  Success = 'success',
  /** column name */
  TransactionHash = 'transaction_hash'
}

/** aggregate stddev on columns */
export type Cosmwasm_Clear_Admin_Stddev_Fields = {
  __typename?: 'cosmwasm_clear_admin_stddev_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cosmwasm_Clear_Admin_Stddev_Pop_Fields = {
  __typename?: 'cosmwasm_clear_admin_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cosmwasm_Clear_Admin_Stddev_Samp_Fields = {
  __typename?: 'cosmwasm_clear_admin_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Cosmwasm_Clear_Admin_Sum_Fields = {
  __typename?: 'cosmwasm_clear_admin_sum_fields';
  index?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Cosmwasm_Clear_Admin_Var_Pop_Fields = {
  __typename?: 'cosmwasm_clear_admin_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cosmwasm_Clear_Admin_Var_Samp_Fields = {
  __typename?: 'cosmwasm_clear_admin_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cosmwasm_Clear_Admin_Variance_Fields = {
  __typename?: 'cosmwasm_clear_admin_variance_fields';
  index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "cosmwasm_execute" */
export type Cosmwasm_Execute = {
  __typename?: 'cosmwasm_execute';
  arguments?: Maybe<Scalars['jsonb']>;
  contract: Scalars['String'];
  funds?: Maybe<Scalars['jsonb']>;
  index: Scalars['bigint'];
  method: Scalars['String'];
  sender: Scalars['String'];
  success: Scalars['Boolean'];
  /** An object relationship */
  transaction: Transaction;
  transaction_hash: Scalars['String'];
};


/** columns and relationships of "cosmwasm_execute" */
export type Cosmwasm_ExecuteArgumentsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "cosmwasm_execute" */
export type Cosmwasm_ExecuteFundsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "cosmwasm_execute" */
export type Cosmwasm_Execute_Aggregate = {
  __typename?: 'cosmwasm_execute_aggregate';
  aggregate?: Maybe<Cosmwasm_Execute_Aggregate_Fields>;
  nodes: Array<Cosmwasm_Execute>;
};

/** aggregate fields of "cosmwasm_execute" */
export type Cosmwasm_Execute_Aggregate_Fields = {
  __typename?: 'cosmwasm_execute_aggregate_fields';
  avg?: Maybe<Cosmwasm_Execute_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cosmwasm_Execute_Max_Fields>;
  min?: Maybe<Cosmwasm_Execute_Min_Fields>;
  stddev?: Maybe<Cosmwasm_Execute_Stddev_Fields>;
  stddev_pop?: Maybe<Cosmwasm_Execute_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cosmwasm_Execute_Stddev_Samp_Fields>;
  sum?: Maybe<Cosmwasm_Execute_Sum_Fields>;
  var_pop?: Maybe<Cosmwasm_Execute_Var_Pop_Fields>;
  var_samp?: Maybe<Cosmwasm_Execute_Var_Samp_Fields>;
  variance?: Maybe<Cosmwasm_Execute_Variance_Fields>;
};


/** aggregate fields of "cosmwasm_execute" */
export type Cosmwasm_Execute_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cosmwasm_Execute_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cosmwasm_Execute_Avg_Fields = {
  __typename?: 'cosmwasm_execute_avg_fields';
  index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cosmwasm_execute". All fields are combined with a logical 'AND'. */
export type Cosmwasm_Execute_Bool_Exp = {
  _and?: InputMaybe<Array<Cosmwasm_Execute_Bool_Exp>>;
  _not?: InputMaybe<Cosmwasm_Execute_Bool_Exp>;
  _or?: InputMaybe<Array<Cosmwasm_Execute_Bool_Exp>>;
  arguments?: InputMaybe<Jsonb_Comparison_Exp>;
  contract?: InputMaybe<String_Comparison_Exp>;
  funds?: InputMaybe<Jsonb_Comparison_Exp>;
  index?: InputMaybe<Bigint_Comparison_Exp>;
  method?: InputMaybe<String_Comparison_Exp>;
  sender?: InputMaybe<String_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Cosmwasm_Execute_Max_Fields = {
  __typename?: 'cosmwasm_execute_max_fields';
  contract?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['bigint']>;
  method?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cosmwasm_Execute_Min_Fields = {
  __typename?: 'cosmwasm_execute_min_fields';
  contract?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['bigint']>;
  method?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "cosmwasm_execute". */
export type Cosmwasm_Execute_Order_By = {
  arguments?: InputMaybe<Order_By>;
  contract?: InputMaybe<Order_By>;
  funds?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  method?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** select columns of table "cosmwasm_execute" */
export enum Cosmwasm_Execute_Select_Column {
  /** column name */
  Arguments = 'arguments',
  /** column name */
  Contract = 'contract',
  /** column name */
  Funds = 'funds',
  /** column name */
  Index = 'index',
  /** column name */
  Method = 'method',
  /** column name */
  Sender = 'sender',
  /** column name */
  Success = 'success',
  /** column name */
  TransactionHash = 'transaction_hash'
}

/** aggregate stddev on columns */
export type Cosmwasm_Execute_Stddev_Fields = {
  __typename?: 'cosmwasm_execute_stddev_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cosmwasm_Execute_Stddev_Pop_Fields = {
  __typename?: 'cosmwasm_execute_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cosmwasm_Execute_Stddev_Samp_Fields = {
  __typename?: 'cosmwasm_execute_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Cosmwasm_Execute_Sum_Fields = {
  __typename?: 'cosmwasm_execute_sum_fields';
  index?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Cosmwasm_Execute_Var_Pop_Fields = {
  __typename?: 'cosmwasm_execute_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cosmwasm_Execute_Var_Samp_Fields = {
  __typename?: 'cosmwasm_execute_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cosmwasm_Execute_Variance_Fields = {
  __typename?: 'cosmwasm_execute_variance_fields';
  index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "cosmwasm_instantiate" */
export type Cosmwasm_Instantiate = {
  __typename?: 'cosmwasm_instantiate';
  admin?: Maybe<Scalars['String']>;
  code_id: Scalars['String'];
  funds?: Maybe<Scalars['jsonb']>;
  index: Scalars['bigint'];
  label: Scalars['String'];
  result_contract_address?: Maybe<Scalars['String']>;
  sender: Scalars['String'];
  success: Scalars['Boolean'];
  /** An object relationship */
  transaction: Transaction;
  transaction_hash: Scalars['String'];
};


/** columns and relationships of "cosmwasm_instantiate" */
export type Cosmwasm_InstantiateFundsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "cosmwasm_instantiate" */
export type Cosmwasm_Instantiate_Aggregate = {
  __typename?: 'cosmwasm_instantiate_aggregate';
  aggregate?: Maybe<Cosmwasm_Instantiate_Aggregate_Fields>;
  nodes: Array<Cosmwasm_Instantiate>;
};

/** aggregate fields of "cosmwasm_instantiate" */
export type Cosmwasm_Instantiate_Aggregate_Fields = {
  __typename?: 'cosmwasm_instantiate_aggregate_fields';
  avg?: Maybe<Cosmwasm_Instantiate_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cosmwasm_Instantiate_Max_Fields>;
  min?: Maybe<Cosmwasm_Instantiate_Min_Fields>;
  stddev?: Maybe<Cosmwasm_Instantiate_Stddev_Fields>;
  stddev_pop?: Maybe<Cosmwasm_Instantiate_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cosmwasm_Instantiate_Stddev_Samp_Fields>;
  sum?: Maybe<Cosmwasm_Instantiate_Sum_Fields>;
  var_pop?: Maybe<Cosmwasm_Instantiate_Var_Pop_Fields>;
  var_samp?: Maybe<Cosmwasm_Instantiate_Var_Samp_Fields>;
  variance?: Maybe<Cosmwasm_Instantiate_Variance_Fields>;
};


/** aggregate fields of "cosmwasm_instantiate" */
export type Cosmwasm_Instantiate_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cosmwasm_Instantiate_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cosmwasm_Instantiate_Avg_Fields = {
  __typename?: 'cosmwasm_instantiate_avg_fields';
  index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cosmwasm_instantiate". All fields are combined with a logical 'AND'. */
export type Cosmwasm_Instantiate_Bool_Exp = {
  _and?: InputMaybe<Array<Cosmwasm_Instantiate_Bool_Exp>>;
  _not?: InputMaybe<Cosmwasm_Instantiate_Bool_Exp>;
  _or?: InputMaybe<Array<Cosmwasm_Instantiate_Bool_Exp>>;
  admin?: InputMaybe<String_Comparison_Exp>;
  code_id?: InputMaybe<String_Comparison_Exp>;
  funds?: InputMaybe<Jsonb_Comparison_Exp>;
  index?: InputMaybe<Bigint_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  result_contract_address?: InputMaybe<String_Comparison_Exp>;
  sender?: InputMaybe<String_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Cosmwasm_Instantiate_Max_Fields = {
  __typename?: 'cosmwasm_instantiate_max_fields';
  admin?: Maybe<Scalars['String']>;
  code_id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['bigint']>;
  label?: Maybe<Scalars['String']>;
  result_contract_address?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cosmwasm_Instantiate_Min_Fields = {
  __typename?: 'cosmwasm_instantiate_min_fields';
  admin?: Maybe<Scalars['String']>;
  code_id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['bigint']>;
  label?: Maybe<Scalars['String']>;
  result_contract_address?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "cosmwasm_instantiate". */
export type Cosmwasm_Instantiate_Order_By = {
  admin?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  funds?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  result_contract_address?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** select columns of table "cosmwasm_instantiate" */
export enum Cosmwasm_Instantiate_Select_Column {
  /** column name */
  Admin = 'admin',
  /** column name */
  CodeId = 'code_id',
  /** column name */
  Funds = 'funds',
  /** column name */
  Index = 'index',
  /** column name */
  Label = 'label',
  /** column name */
  ResultContractAddress = 'result_contract_address',
  /** column name */
  Sender = 'sender',
  /** column name */
  Success = 'success',
  /** column name */
  TransactionHash = 'transaction_hash'
}

/** aggregate stddev on columns */
export type Cosmwasm_Instantiate_Stddev_Fields = {
  __typename?: 'cosmwasm_instantiate_stddev_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cosmwasm_Instantiate_Stddev_Pop_Fields = {
  __typename?: 'cosmwasm_instantiate_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cosmwasm_Instantiate_Stddev_Samp_Fields = {
  __typename?: 'cosmwasm_instantiate_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Cosmwasm_Instantiate_Sum_Fields = {
  __typename?: 'cosmwasm_instantiate_sum_fields';
  index?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Cosmwasm_Instantiate_Var_Pop_Fields = {
  __typename?: 'cosmwasm_instantiate_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cosmwasm_Instantiate_Var_Samp_Fields = {
  __typename?: 'cosmwasm_instantiate_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cosmwasm_Instantiate_Variance_Fields = {
  __typename?: 'cosmwasm_instantiate_variance_fields';
  index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "cosmwasm_migrate" */
export type Cosmwasm_Migrate = {
  __typename?: 'cosmwasm_migrate';
  arguments?: Maybe<Scalars['jsonb']>;
  code_id: Scalars['String'];
  contract: Scalars['String'];
  index: Scalars['bigint'];
  sender: Scalars['String'];
  success: Scalars['Boolean'];
  /** An object relationship */
  transaction: Transaction;
  transaction_hash: Scalars['String'];
};


/** columns and relationships of "cosmwasm_migrate" */
export type Cosmwasm_MigrateArgumentsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "cosmwasm_migrate" */
export type Cosmwasm_Migrate_Aggregate = {
  __typename?: 'cosmwasm_migrate_aggregate';
  aggregate?: Maybe<Cosmwasm_Migrate_Aggregate_Fields>;
  nodes: Array<Cosmwasm_Migrate>;
};

/** aggregate fields of "cosmwasm_migrate" */
export type Cosmwasm_Migrate_Aggregate_Fields = {
  __typename?: 'cosmwasm_migrate_aggregate_fields';
  avg?: Maybe<Cosmwasm_Migrate_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cosmwasm_Migrate_Max_Fields>;
  min?: Maybe<Cosmwasm_Migrate_Min_Fields>;
  stddev?: Maybe<Cosmwasm_Migrate_Stddev_Fields>;
  stddev_pop?: Maybe<Cosmwasm_Migrate_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cosmwasm_Migrate_Stddev_Samp_Fields>;
  sum?: Maybe<Cosmwasm_Migrate_Sum_Fields>;
  var_pop?: Maybe<Cosmwasm_Migrate_Var_Pop_Fields>;
  var_samp?: Maybe<Cosmwasm_Migrate_Var_Samp_Fields>;
  variance?: Maybe<Cosmwasm_Migrate_Variance_Fields>;
};


/** aggregate fields of "cosmwasm_migrate" */
export type Cosmwasm_Migrate_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cosmwasm_Migrate_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cosmwasm_Migrate_Avg_Fields = {
  __typename?: 'cosmwasm_migrate_avg_fields';
  index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cosmwasm_migrate". All fields are combined with a logical 'AND'. */
export type Cosmwasm_Migrate_Bool_Exp = {
  _and?: InputMaybe<Array<Cosmwasm_Migrate_Bool_Exp>>;
  _not?: InputMaybe<Cosmwasm_Migrate_Bool_Exp>;
  _or?: InputMaybe<Array<Cosmwasm_Migrate_Bool_Exp>>;
  arguments?: InputMaybe<Jsonb_Comparison_Exp>;
  code_id?: InputMaybe<String_Comparison_Exp>;
  contract?: InputMaybe<String_Comparison_Exp>;
  index?: InputMaybe<Bigint_Comparison_Exp>;
  sender?: InputMaybe<String_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Cosmwasm_Migrate_Max_Fields = {
  __typename?: 'cosmwasm_migrate_max_fields';
  code_id?: Maybe<Scalars['String']>;
  contract?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['bigint']>;
  sender?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cosmwasm_Migrate_Min_Fields = {
  __typename?: 'cosmwasm_migrate_min_fields';
  code_id?: Maybe<Scalars['String']>;
  contract?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['bigint']>;
  sender?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "cosmwasm_migrate". */
export type Cosmwasm_Migrate_Order_By = {
  arguments?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  contract?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** select columns of table "cosmwasm_migrate" */
export enum Cosmwasm_Migrate_Select_Column {
  /** column name */
  Arguments = 'arguments',
  /** column name */
  CodeId = 'code_id',
  /** column name */
  Contract = 'contract',
  /** column name */
  Index = 'index',
  /** column name */
  Sender = 'sender',
  /** column name */
  Success = 'success',
  /** column name */
  TransactionHash = 'transaction_hash'
}

/** aggregate stddev on columns */
export type Cosmwasm_Migrate_Stddev_Fields = {
  __typename?: 'cosmwasm_migrate_stddev_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cosmwasm_Migrate_Stddev_Pop_Fields = {
  __typename?: 'cosmwasm_migrate_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cosmwasm_Migrate_Stddev_Samp_Fields = {
  __typename?: 'cosmwasm_migrate_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Cosmwasm_Migrate_Sum_Fields = {
  __typename?: 'cosmwasm_migrate_sum_fields';
  index?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Cosmwasm_Migrate_Var_Pop_Fields = {
  __typename?: 'cosmwasm_migrate_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cosmwasm_Migrate_Var_Samp_Fields = {
  __typename?: 'cosmwasm_migrate_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cosmwasm_Migrate_Variance_Fields = {
  __typename?: 'cosmwasm_migrate_variance_fields';
  index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "cosmwasm_store" */
export type Cosmwasm_Store = {
  __typename?: 'cosmwasm_store';
  index: Scalars['bigint'];
  instantiate_permission?: Maybe<Scalars['jsonb']>;
  result_code_id?: Maybe<Scalars['String']>;
  sender: Scalars['String'];
  success: Scalars['Boolean'];
  /** An object relationship */
  transaction: Transaction;
  transaction_hash: Scalars['String'];
};


/** columns and relationships of "cosmwasm_store" */
export type Cosmwasm_StoreInstantiate_PermissionArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "cosmwasm_store" */
export type Cosmwasm_Store_Aggregate = {
  __typename?: 'cosmwasm_store_aggregate';
  aggregate?: Maybe<Cosmwasm_Store_Aggregate_Fields>;
  nodes: Array<Cosmwasm_Store>;
};

/** aggregate fields of "cosmwasm_store" */
export type Cosmwasm_Store_Aggregate_Fields = {
  __typename?: 'cosmwasm_store_aggregate_fields';
  avg?: Maybe<Cosmwasm_Store_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cosmwasm_Store_Max_Fields>;
  min?: Maybe<Cosmwasm_Store_Min_Fields>;
  stddev?: Maybe<Cosmwasm_Store_Stddev_Fields>;
  stddev_pop?: Maybe<Cosmwasm_Store_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cosmwasm_Store_Stddev_Samp_Fields>;
  sum?: Maybe<Cosmwasm_Store_Sum_Fields>;
  var_pop?: Maybe<Cosmwasm_Store_Var_Pop_Fields>;
  var_samp?: Maybe<Cosmwasm_Store_Var_Samp_Fields>;
  variance?: Maybe<Cosmwasm_Store_Variance_Fields>;
};


/** aggregate fields of "cosmwasm_store" */
export type Cosmwasm_Store_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cosmwasm_Store_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cosmwasm_Store_Avg_Fields = {
  __typename?: 'cosmwasm_store_avg_fields';
  index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cosmwasm_store". All fields are combined with a logical 'AND'. */
export type Cosmwasm_Store_Bool_Exp = {
  _and?: InputMaybe<Array<Cosmwasm_Store_Bool_Exp>>;
  _not?: InputMaybe<Cosmwasm_Store_Bool_Exp>;
  _or?: InputMaybe<Array<Cosmwasm_Store_Bool_Exp>>;
  index?: InputMaybe<Bigint_Comparison_Exp>;
  instantiate_permission?: InputMaybe<Jsonb_Comparison_Exp>;
  result_code_id?: InputMaybe<String_Comparison_Exp>;
  sender?: InputMaybe<String_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Cosmwasm_Store_Max_Fields = {
  __typename?: 'cosmwasm_store_max_fields';
  index?: Maybe<Scalars['bigint']>;
  result_code_id?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cosmwasm_Store_Min_Fields = {
  __typename?: 'cosmwasm_store_min_fields';
  index?: Maybe<Scalars['bigint']>;
  result_code_id?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "cosmwasm_store". */
export type Cosmwasm_Store_Order_By = {
  index?: InputMaybe<Order_By>;
  instantiate_permission?: InputMaybe<Order_By>;
  result_code_id?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** select columns of table "cosmwasm_store" */
export enum Cosmwasm_Store_Select_Column {
  /** column name */
  Index = 'index',
  /** column name */
  InstantiatePermission = 'instantiate_permission',
  /** column name */
  ResultCodeId = 'result_code_id',
  /** column name */
  Sender = 'sender',
  /** column name */
  Success = 'success',
  /** column name */
  TransactionHash = 'transaction_hash'
}

/** aggregate stddev on columns */
export type Cosmwasm_Store_Stddev_Fields = {
  __typename?: 'cosmwasm_store_stddev_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cosmwasm_Store_Stddev_Pop_Fields = {
  __typename?: 'cosmwasm_store_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cosmwasm_Store_Stddev_Samp_Fields = {
  __typename?: 'cosmwasm_store_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Cosmwasm_Store_Sum_Fields = {
  __typename?: 'cosmwasm_store_sum_fields';
  index?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Cosmwasm_Store_Var_Pop_Fields = {
  __typename?: 'cosmwasm_store_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cosmwasm_Store_Var_Samp_Fields = {
  __typename?: 'cosmwasm_store_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cosmwasm_Store_Variance_Fields = {
  __typename?: 'cosmwasm_store_variance_fields';
  index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "cosmwasm_update_admin" */
export type Cosmwasm_Update_Admin = {
  __typename?: 'cosmwasm_update_admin';
  contract: Scalars['String'];
  index: Scalars['bigint'];
  new_admin: Scalars['String'];
  sender: Scalars['String'];
  success: Scalars['Boolean'];
  /** An object relationship */
  transaction: Transaction;
  transaction_hash: Scalars['String'];
};

/** aggregated selection of "cosmwasm_update_admin" */
export type Cosmwasm_Update_Admin_Aggregate = {
  __typename?: 'cosmwasm_update_admin_aggregate';
  aggregate?: Maybe<Cosmwasm_Update_Admin_Aggregate_Fields>;
  nodes: Array<Cosmwasm_Update_Admin>;
};

/** aggregate fields of "cosmwasm_update_admin" */
export type Cosmwasm_Update_Admin_Aggregate_Fields = {
  __typename?: 'cosmwasm_update_admin_aggregate_fields';
  avg?: Maybe<Cosmwasm_Update_Admin_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cosmwasm_Update_Admin_Max_Fields>;
  min?: Maybe<Cosmwasm_Update_Admin_Min_Fields>;
  stddev?: Maybe<Cosmwasm_Update_Admin_Stddev_Fields>;
  stddev_pop?: Maybe<Cosmwasm_Update_Admin_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cosmwasm_Update_Admin_Stddev_Samp_Fields>;
  sum?: Maybe<Cosmwasm_Update_Admin_Sum_Fields>;
  var_pop?: Maybe<Cosmwasm_Update_Admin_Var_Pop_Fields>;
  var_samp?: Maybe<Cosmwasm_Update_Admin_Var_Samp_Fields>;
  variance?: Maybe<Cosmwasm_Update_Admin_Variance_Fields>;
};


/** aggregate fields of "cosmwasm_update_admin" */
export type Cosmwasm_Update_Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cosmwasm_Update_Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cosmwasm_Update_Admin_Avg_Fields = {
  __typename?: 'cosmwasm_update_admin_avg_fields';
  index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cosmwasm_update_admin". All fields are combined with a logical 'AND'. */
export type Cosmwasm_Update_Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Cosmwasm_Update_Admin_Bool_Exp>>;
  _not?: InputMaybe<Cosmwasm_Update_Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Cosmwasm_Update_Admin_Bool_Exp>>;
  contract?: InputMaybe<String_Comparison_Exp>;
  index?: InputMaybe<Bigint_Comparison_Exp>;
  new_admin?: InputMaybe<String_Comparison_Exp>;
  sender?: InputMaybe<String_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Cosmwasm_Update_Admin_Max_Fields = {
  __typename?: 'cosmwasm_update_admin_max_fields';
  contract?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['bigint']>;
  new_admin?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cosmwasm_Update_Admin_Min_Fields = {
  __typename?: 'cosmwasm_update_admin_min_fields';
  contract?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['bigint']>;
  new_admin?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "cosmwasm_update_admin". */
export type Cosmwasm_Update_Admin_Order_By = {
  contract?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  new_admin?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** select columns of table "cosmwasm_update_admin" */
export enum Cosmwasm_Update_Admin_Select_Column {
  /** column name */
  Contract = 'contract',
  /** column name */
  Index = 'index',
  /** column name */
  NewAdmin = 'new_admin',
  /** column name */
  Sender = 'sender',
  /** column name */
  Success = 'success',
  /** column name */
  TransactionHash = 'transaction_hash'
}

/** aggregate stddev on columns */
export type Cosmwasm_Update_Admin_Stddev_Fields = {
  __typename?: 'cosmwasm_update_admin_stddev_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cosmwasm_Update_Admin_Stddev_Pop_Fields = {
  __typename?: 'cosmwasm_update_admin_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cosmwasm_Update_Admin_Stddev_Samp_Fields = {
  __typename?: 'cosmwasm_update_admin_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Cosmwasm_Update_Admin_Sum_Fields = {
  __typename?: 'cosmwasm_update_admin_sum_fields';
  index?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Cosmwasm_Update_Admin_Var_Pop_Fields = {
  __typename?: 'cosmwasm_update_admin_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cosmwasm_Update_Admin_Var_Samp_Fields = {
  __typename?: 'cosmwasm_update_admin_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cosmwasm_Update_Admin_Variance_Fields = {
  __typename?: 'cosmwasm_update_admin_variance_fields';
  index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "cw20token_balance" */
export type Cw20token_Balance = {
  __typename?: 'cw20token_balance';
  address: Scalars['String'];
  balance: Scalars['String'];
  /** An object relationship */
  cw20token_info: Cw20token_Info;
  token: Scalars['String'];
};

/** aggregated selection of "cw20token_balance" */
export type Cw20token_Balance_Aggregate = {
  __typename?: 'cw20token_balance_aggregate';
  aggregate?: Maybe<Cw20token_Balance_Aggregate_Fields>;
  nodes: Array<Cw20token_Balance>;
};

/** aggregate fields of "cw20token_balance" */
export type Cw20token_Balance_Aggregate_Fields = {
  __typename?: 'cw20token_balance_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Cw20token_Balance_Max_Fields>;
  min?: Maybe<Cw20token_Balance_Min_Fields>;
};


/** aggregate fields of "cw20token_balance" */
export type Cw20token_Balance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cw20token_Balance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cw20token_balance" */
export type Cw20token_Balance_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cw20token_Balance_Max_Order_By>;
  min?: InputMaybe<Cw20token_Balance_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "cw20token_balance". All fields are combined with a logical 'AND'. */
export type Cw20token_Balance_Bool_Exp = {
  _and?: InputMaybe<Array<Cw20token_Balance_Bool_Exp>>;
  _not?: InputMaybe<Cw20token_Balance_Bool_Exp>;
  _or?: InputMaybe<Array<Cw20token_Balance_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  balance?: InputMaybe<String_Comparison_Exp>;
  cw20token_info?: InputMaybe<Cw20token_Info_Bool_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Cw20token_Balance_Max_Fields = {
  __typename?: 'cw20token_balance_max_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "cw20token_balance" */
export type Cw20token_Balance_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cw20token_Balance_Min_Fields = {
  __typename?: 'cw20token_balance_min_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "cw20token_balance" */
export type Cw20token_Balance_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "cw20token_balance". */
export type Cw20token_Balance_Order_By = {
  address?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  cw20token_info?: InputMaybe<Cw20token_Info_Order_By>;
  token?: InputMaybe<Order_By>;
};

/** select columns of table "cw20token_balance" */
export enum Cw20token_Balance_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Balance = 'balance',
  /** column name */
  Token = 'token'
}

/** columns and relationships of "cw20token_code_id" */
export type Cw20token_Code_Id = {
  __typename?: 'cw20token_code_id';
  id: Scalars['Int'];
};

/** Boolean expression to filter rows from the table "cw20token_code_id". All fields are combined with a logical 'AND'. */
export type Cw20token_Code_Id_Bool_Exp = {
  _and?: InputMaybe<Array<Cw20token_Code_Id_Bool_Exp>>;
  _not?: InputMaybe<Cw20token_Code_Id_Bool_Exp>;
  _or?: InputMaybe<Array<Cw20token_Code_Id_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "cw20token_code_id". */
export type Cw20token_Code_Id_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** select columns of table "cw20token_code_id" */
export enum Cw20token_Code_Id_Select_Column {
  /** column name */
  Id = 'id'
}

/** columns and relationships of "cw20token_info" */
export type Cw20token_Info = {
  __typename?: 'cw20token_info';
  address: Scalars['String'];
  /** An array relationship */
  balances: Array<Cw20token_Balance>;
  /** An aggregate relationship */
  balances_aggregate: Cw20token_Balance_Aggregate;
  circulating_supply: Scalars['String'];
  code_id: Scalars['Int'];
  creator: Scalars['String'];
  decimals: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  initial_supply: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  marketing_admin?: Maybe<Scalars['String']>;
  max_supply?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  project_url?: Maybe<Scalars['String']>;
  symbol: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};


/** columns and relationships of "cw20token_info" */
export type Cw20token_InfoBalancesArgs = {
  distinct_on?: InputMaybe<Array<Cw20token_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cw20token_Balance_Order_By>>;
  where?: InputMaybe<Cw20token_Balance_Bool_Exp>;
};


/** columns and relationships of "cw20token_info" */
export type Cw20token_InfoBalances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cw20token_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cw20token_Balance_Order_By>>;
  where?: InputMaybe<Cw20token_Balance_Bool_Exp>;
};

/** aggregated selection of "cw20token_info" */
export type Cw20token_Info_Aggregate = {
  __typename?: 'cw20token_info_aggregate';
  aggregate?: Maybe<Cw20token_Info_Aggregate_Fields>;
  nodes: Array<Cw20token_Info>;
};

/** aggregate fields of "cw20token_info" */
export type Cw20token_Info_Aggregate_Fields = {
  __typename?: 'cw20token_info_aggregate_fields';
  avg?: Maybe<Cw20token_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cw20token_Info_Max_Fields>;
  min?: Maybe<Cw20token_Info_Min_Fields>;
  stddev?: Maybe<Cw20token_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Cw20token_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cw20token_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Cw20token_Info_Sum_Fields>;
  var_pop?: Maybe<Cw20token_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Cw20token_Info_Var_Samp_Fields>;
  variance?: Maybe<Cw20token_Info_Variance_Fields>;
};


/** aggregate fields of "cw20token_info" */
export type Cw20token_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cw20token_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cw20token_Info_Avg_Fields = {
  __typename?: 'cw20token_info_avg_fields';
  code_id?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cw20token_info". All fields are combined with a logical 'AND'. */
export type Cw20token_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Cw20token_Info_Bool_Exp>>;
  _not?: InputMaybe<Cw20token_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Cw20token_Info_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  balances?: InputMaybe<Cw20token_Balance_Bool_Exp>;
  circulating_supply?: InputMaybe<String_Comparison_Exp>;
  code_id?: InputMaybe<Int_Comparison_Exp>;
  creator?: InputMaybe<String_Comparison_Exp>;
  decimals?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  initial_supply?: InputMaybe<String_Comparison_Exp>;
  logo?: InputMaybe<String_Comparison_Exp>;
  marketing_admin?: InputMaybe<String_Comparison_Exp>;
  max_supply?: InputMaybe<String_Comparison_Exp>;
  minter?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  project_url?: InputMaybe<String_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Cw20token_Info_Max_Fields = {
  __typename?: 'cw20token_info_max_fields';
  address?: Maybe<Scalars['String']>;
  circulating_supply?: Maybe<Scalars['String']>;
  code_id?: Maybe<Scalars['Int']>;
  creator?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  initial_supply?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  marketing_admin?: Maybe<Scalars['String']>;
  max_supply?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  project_url?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cw20token_Info_Min_Fields = {
  __typename?: 'cw20token_info_min_fields';
  address?: Maybe<Scalars['String']>;
  circulating_supply?: Maybe<Scalars['String']>;
  code_id?: Maybe<Scalars['Int']>;
  creator?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  initial_supply?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  marketing_admin?: Maybe<Scalars['String']>;
  max_supply?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  project_url?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "cw20token_info". */
export type Cw20token_Info_Order_By = {
  address?: InputMaybe<Order_By>;
  balances_aggregate?: InputMaybe<Cw20token_Balance_Aggregate_Order_By>;
  circulating_supply?: InputMaybe<Order_By>;
  code_id?: InputMaybe<Order_By>;
  creator?: InputMaybe<Order_By>;
  decimals?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  initial_supply?: InputMaybe<Order_By>;
  logo?: InputMaybe<Order_By>;
  marketing_admin?: InputMaybe<Order_By>;
  max_supply?: InputMaybe<Order_By>;
  minter?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_url?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "cw20token_info" */
export enum Cw20token_Info_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CirculatingSupply = 'circulating_supply',
  /** column name */
  CodeId = 'code_id',
  /** column name */
  Creator = 'creator',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  Description = 'description',
  /** column name */
  InitialSupply = 'initial_supply',
  /** column name */
  Logo = 'logo',
  /** column name */
  MarketingAdmin = 'marketing_admin',
  /** column name */
  MaxSupply = 'max_supply',
  /** column name */
  Minter = 'minter',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectUrl = 'project_url',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  Type = 'type'
}

/** aggregate stddev on columns */
export type Cw20token_Info_Stddev_Fields = {
  __typename?: 'cw20token_info_stddev_fields';
  code_id?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cw20token_Info_Stddev_Pop_Fields = {
  __typename?: 'cw20token_info_stddev_pop_fields';
  code_id?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cw20token_Info_Stddev_Samp_Fields = {
  __typename?: 'cw20token_info_stddev_samp_fields';
  code_id?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Cw20token_Info_Sum_Fields = {
  __typename?: 'cw20token_info_sum_fields';
  code_id?: Maybe<Scalars['Int']>;
  decimals?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Cw20token_Info_Var_Pop_Fields = {
  __typename?: 'cw20token_info_var_pop_fields';
  code_id?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cw20token_Info_Var_Samp_Fields = {
  __typename?: 'cw20token_info_var_samp_fields';
  code_id?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cw20token_Info_Variance_Fields = {
  __typename?: 'cw20token_info_variance_fields';
  code_id?: Maybe<Scalars['Float']>;
  decimals?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "delegation" */
export type Delegation = {
  __typename?: 'delegation';
  /** An object relationship */
  account: Account;
  amount: Scalars['coin'];
  delegator_address: Scalars['String'];
  validator_address: Scalars['String'];
  /** An object relationship */
  validator_info: Validator_Info;
};

/** aggregated selection of "delegation" */
export type Delegation_Aggregate = {
  __typename?: 'delegation_aggregate';
  aggregate?: Maybe<Delegation_Aggregate_Fields>;
  nodes: Array<Delegation>;
};

/** aggregate fields of "delegation" */
export type Delegation_Aggregate_Fields = {
  __typename?: 'delegation_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Delegation_Max_Fields>;
  min?: Maybe<Delegation_Min_Fields>;
};


/** aggregate fields of "delegation" */
export type Delegation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Delegation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "delegation" */
export type Delegation_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Delegation_Max_Order_By>;
  min?: InputMaybe<Delegation_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "delegation". All fields are combined with a logical 'AND'. */
export type Delegation_Bool_Exp = {
  _and?: InputMaybe<Array<Delegation_Bool_Exp>>;
  _not?: InputMaybe<Delegation_Bool_Exp>;
  _or?: InputMaybe<Array<Delegation_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  amount?: InputMaybe<Coin_Comparison_Exp>;
  delegator_address?: InputMaybe<String_Comparison_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  validator_info?: InputMaybe<Validator_Info_Bool_Exp>;
};

/** aggregate max on columns */
export type Delegation_Max_Fields = {
  __typename?: 'delegation_max_fields';
  delegator_address?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "delegation" */
export type Delegation_Max_Order_By = {
  delegator_address?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Delegation_Min_Fields = {
  __typename?: 'delegation_min_fields';
  delegator_address?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "delegation" */
export type Delegation_Min_Order_By = {
  delegator_address?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "delegation". */
export type Delegation_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  amount?: InputMaybe<Order_By>;
  delegator_address?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_info?: InputMaybe<Validator_Info_Order_By>;
};

/** select columns of table "delegation" */
export enum Delegation_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DelegatorAddress = 'delegator_address',
  /** column name */
  ValidatorAddress = 'validator_address'
}

export type Denoms_By_Data_Property_Args = {
  limit?: InputMaybe<Scalars['bigint']>;
  offset?: InputMaybe<Scalars['bigint']>;
  property_name?: InputMaybe<Scalars['String']>;
  property_value?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "distinct_message" */
export type Distinct_Message = {
  __typename?: 'distinct_message';
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  involved_accounts_addresses?: Maybe<Scalars['_text']>;
  /** An object relationship */
  transaction: Transaction;
  transaction_hash: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['jsonb']>;
};


/** columns and relationships of "distinct_message" */
export type Distinct_MessageValueArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "distinct_message" */
export type Distinct_Message_Aggregate = {
  __typename?: 'distinct_message_aggregate';
  aggregate?: Maybe<Distinct_Message_Aggregate_Fields>;
  nodes: Array<Distinct_Message>;
};

/** aggregate fields of "distinct_message" */
export type Distinct_Message_Aggregate_Fields = {
  __typename?: 'distinct_message_aggregate_fields';
  avg?: Maybe<Distinct_Message_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Distinct_Message_Max_Fields>;
  min?: Maybe<Distinct_Message_Min_Fields>;
  stddev?: Maybe<Distinct_Message_Stddev_Fields>;
  stddev_pop?: Maybe<Distinct_Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Distinct_Message_Stddev_Samp_Fields>;
  sum?: Maybe<Distinct_Message_Sum_Fields>;
  var_pop?: Maybe<Distinct_Message_Var_Pop_Fields>;
  var_samp?: Maybe<Distinct_Message_Var_Samp_Fields>;
  variance?: Maybe<Distinct_Message_Variance_Fields>;
};


/** aggregate fields of "distinct_message" */
export type Distinct_Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Distinct_Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Distinct_Message_Avg_Fields = {
  __typename?: 'distinct_message_avg_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "distinct_message". All fields are combined with a logical 'AND'. */
export type Distinct_Message_Bool_Exp = {
  _and?: InputMaybe<Array<Distinct_Message_Bool_Exp>>;
  _not?: InputMaybe<Distinct_Message_Bool_Exp>;
  _or?: InputMaybe<Array<Distinct_Message_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  index?: InputMaybe<Bigint_Comparison_Exp>;
  involved_accounts_addresses?: InputMaybe<_Text_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** aggregate max on columns */
export type Distinct_Message_Max_Fields = {
  __typename?: 'distinct_message_max_fields';
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Distinct_Message_Min_Fields = {
  __typename?: 'distinct_message_min_fields';
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "distinct_message". */
export type Distinct_Message_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  involved_accounts_addresses?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "distinct_message" */
export enum Distinct_Message_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Index = 'index',
  /** column name */
  InvolvedAccountsAddresses = 'involved_accounts_addresses',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Distinct_Message_Stddev_Fields = {
  __typename?: 'distinct_message_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Distinct_Message_Stddev_Pop_Fields = {
  __typename?: 'distinct_message_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Distinct_Message_Stddev_Samp_Fields = {
  __typename?: 'distinct_message_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Distinct_Message_Sum_Fields = {
  __typename?: 'distinct_message_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Distinct_Message_Var_Pop_Fields = {
  __typename?: 'distinct_message_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Distinct_Message_Var_Samp_Fields = {
  __typename?: 'distinct_message_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Distinct_Message_Variance_Fields = {
  __typename?: 'distinct_message_variance_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "distribution_params" */
export type Distribution_Params = {
  __typename?: 'distribution_params';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "distribution_params" */
export type Distribution_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "distribution_params" */
export type Distribution_Params_Aggregate = {
  __typename?: 'distribution_params_aggregate';
  aggregate?: Maybe<Distribution_Params_Aggregate_Fields>;
  nodes: Array<Distribution_Params>;
};

/** aggregate fields of "distribution_params" */
export type Distribution_Params_Aggregate_Fields = {
  __typename?: 'distribution_params_aggregate_fields';
  avg?: Maybe<Distribution_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Distribution_Params_Max_Fields>;
  min?: Maybe<Distribution_Params_Min_Fields>;
  stddev?: Maybe<Distribution_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Distribution_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Distribution_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Distribution_Params_Sum_Fields>;
  var_pop?: Maybe<Distribution_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Distribution_Params_Var_Samp_Fields>;
  variance?: Maybe<Distribution_Params_Variance_Fields>;
};


/** aggregate fields of "distribution_params" */
export type Distribution_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Distribution_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Distribution_Params_Avg_Fields = {
  __typename?: 'distribution_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "distribution_params". All fields are combined with a logical 'AND'. */
export type Distribution_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Distribution_Params_Bool_Exp>>;
  _not?: InputMaybe<Distribution_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Distribution_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** aggregate max on columns */
export type Distribution_Params_Max_Fields = {
  __typename?: 'distribution_params_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Distribution_Params_Min_Fields = {
  __typename?: 'distribution_params_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "distribution_params". */
export type Distribution_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** select columns of table "distribution_params" */
export enum Distribution_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** aggregate stddev on columns */
export type Distribution_Params_Stddev_Fields = {
  __typename?: 'distribution_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Distribution_Params_Stddev_Pop_Fields = {
  __typename?: 'distribution_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Distribution_Params_Stddev_Samp_Fields = {
  __typename?: 'distribution_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Distribution_Params_Sum_Fields = {
  __typename?: 'distribution_params_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Distribution_Params_Var_Pop_Fields = {
  __typename?: 'distribution_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Distribution_Params_Var_Samp_Fields = {
  __typename?: 'distribution_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Distribution_Params_Variance_Fields = {
  __typename?: 'distribution_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "double_sign_evidence" */
export type Double_Sign_Evidence = {
  __typename?: 'double_sign_evidence';
  /** An object relationship */
  doubleSignVoteByVoteAId: Double_Sign_Vote;
  /** An object relationship */
  double_sign_vote: Double_Sign_Vote;
  height: Scalars['bigint'];
  vote_a_id: Scalars['bigint'];
  vote_b_id: Scalars['bigint'];
};

/** aggregated selection of "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate = {
  __typename?: 'double_sign_evidence_aggregate';
  aggregate?: Maybe<Double_Sign_Evidence_Aggregate_Fields>;
  nodes: Array<Double_Sign_Evidence>;
};

/** aggregate fields of "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_Fields = {
  __typename?: 'double_sign_evidence_aggregate_fields';
  avg?: Maybe<Double_Sign_Evidence_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Double_Sign_Evidence_Max_Fields>;
  min?: Maybe<Double_Sign_Evidence_Min_Fields>;
  stddev?: Maybe<Double_Sign_Evidence_Stddev_Fields>;
  stddev_pop?: Maybe<Double_Sign_Evidence_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Double_Sign_Evidence_Stddev_Samp_Fields>;
  sum?: Maybe<Double_Sign_Evidence_Sum_Fields>;
  var_pop?: Maybe<Double_Sign_Evidence_Var_Pop_Fields>;
  var_samp?: Maybe<Double_Sign_Evidence_Var_Samp_Fields>;
  variance?: Maybe<Double_Sign_Evidence_Variance_Fields>;
};


/** aggregate fields of "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_Order_By = {
  avg?: InputMaybe<Double_Sign_Evidence_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Double_Sign_Evidence_Max_Order_By>;
  min?: InputMaybe<Double_Sign_Evidence_Min_Order_By>;
  stddev?: InputMaybe<Double_Sign_Evidence_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Double_Sign_Evidence_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Double_Sign_Evidence_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Double_Sign_Evidence_Sum_Order_By>;
  var_pop?: InputMaybe<Double_Sign_Evidence_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Double_Sign_Evidence_Var_Samp_Order_By>;
  variance?: InputMaybe<Double_Sign_Evidence_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Double_Sign_Evidence_Avg_Fields = {
  __typename?: 'double_sign_evidence_avg_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "double_sign_evidence". All fields are combined with a logical 'AND'. */
export type Double_Sign_Evidence_Bool_Exp = {
  _and?: InputMaybe<Array<Double_Sign_Evidence_Bool_Exp>>;
  _not?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
  _or?: InputMaybe<Array<Double_Sign_Evidence_Bool_Exp>>;
  doubleSignVoteByVoteAId?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  double_sign_vote?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  vote_a_id?: InputMaybe<Bigint_Comparison_Exp>;
  vote_b_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Double_Sign_Evidence_Max_Fields = {
  __typename?: 'double_sign_evidence_max_fields';
  height?: Maybe<Scalars['bigint']>;
  vote_a_id?: Maybe<Scalars['bigint']>;
  vote_b_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Double_Sign_Evidence_Min_Fields = {
  __typename?: 'double_sign_evidence_min_fields';
  height?: Maybe<Scalars['bigint']>;
  vote_a_id?: Maybe<Scalars['bigint']>;
  vote_b_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "double_sign_evidence". */
export type Double_Sign_Evidence_Order_By = {
  doubleSignVoteByVoteAId?: InputMaybe<Double_Sign_Vote_Order_By>;
  double_sign_vote?: InputMaybe<Double_Sign_Vote_Order_By>;
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** select columns of table "double_sign_evidence" */
export enum Double_Sign_Evidence_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  VoteAId = 'vote_a_id',
  /** column name */
  VoteBId = 'vote_b_id'
}

/** aggregate stddev on columns */
export type Double_Sign_Evidence_Stddev_Fields = {
  __typename?: 'double_sign_evidence_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Double_Sign_Evidence_Stddev_Pop_Fields = {
  __typename?: 'double_sign_evidence_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Double_Sign_Evidence_Stddev_Samp_Fields = {
  __typename?: 'double_sign_evidence_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Double_Sign_Evidence_Sum_Fields = {
  __typename?: 'double_sign_evidence_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  vote_a_id?: Maybe<Scalars['bigint']>;
  vote_b_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Double_Sign_Evidence_Var_Pop_Fields = {
  __typename?: 'double_sign_evidence_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Double_Sign_Evidence_Var_Samp_Fields = {
  __typename?: 'double_sign_evidence_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Double_Sign_Evidence_Variance_Fields = {
  __typename?: 'double_sign_evidence_variance_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "double_sign_vote" */
export type Double_Sign_Vote = {
  __typename?: 'double_sign_vote';
  block_id: Scalars['String'];
  /** An array relationship */
  doubleSignEvidencesByVoteBId: Array<Double_Sign_Evidence>;
  /** An aggregate relationship */
  doubleSignEvidencesByVoteBId_aggregate: Double_Sign_Evidence_Aggregate;
  /** An array relationship */
  double_sign_evidences: Array<Double_Sign_Evidence>;
  /** An aggregate relationship */
  double_sign_evidences_aggregate: Double_Sign_Evidence_Aggregate;
  height: Scalars['bigint'];
  id: Scalars['Int'];
  round: Scalars['Int'];
  signature: Scalars['String'];
  type: Scalars['smallint'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  validator_index: Scalars['Int'];
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDoubleSignEvidencesByVoteBIdArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDoubleSignEvidencesByVoteBId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDouble_Sign_EvidencesArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDouble_Sign_Evidences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};

/** aggregated selection of "double_sign_vote" */
export type Double_Sign_Vote_Aggregate = {
  __typename?: 'double_sign_vote_aggregate';
  aggregate?: Maybe<Double_Sign_Vote_Aggregate_Fields>;
  nodes: Array<Double_Sign_Vote>;
};

/** aggregate fields of "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_Fields = {
  __typename?: 'double_sign_vote_aggregate_fields';
  avg?: Maybe<Double_Sign_Vote_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Double_Sign_Vote_Max_Fields>;
  min?: Maybe<Double_Sign_Vote_Min_Fields>;
  stddev?: Maybe<Double_Sign_Vote_Stddev_Fields>;
  stddev_pop?: Maybe<Double_Sign_Vote_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Double_Sign_Vote_Stddev_Samp_Fields>;
  sum?: Maybe<Double_Sign_Vote_Sum_Fields>;
  var_pop?: Maybe<Double_Sign_Vote_Var_Pop_Fields>;
  var_samp?: Maybe<Double_Sign_Vote_Var_Samp_Fields>;
  variance?: Maybe<Double_Sign_Vote_Variance_Fields>;
};


/** aggregate fields of "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Double_Sign_Vote_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Double_Sign_Vote_Max_Order_By>;
  min?: InputMaybe<Double_Sign_Vote_Min_Order_By>;
  stddev?: InputMaybe<Double_Sign_Vote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Double_Sign_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Double_Sign_Vote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Double_Sign_Vote_Sum_Order_By>;
  var_pop?: InputMaybe<Double_Sign_Vote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Double_Sign_Vote_Var_Samp_Order_By>;
  variance?: InputMaybe<Double_Sign_Vote_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Double_Sign_Vote_Avg_Fields = {
  __typename?: 'double_sign_vote_avg_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "double_sign_vote". All fields are combined with a logical 'AND'. */
export type Double_Sign_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Double_Sign_Vote_Bool_Exp>>;
  _not?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Double_Sign_Vote_Bool_Exp>>;
  block_id?: InputMaybe<String_Comparison_Exp>;
  doubleSignEvidencesByVoteBId?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
  double_sign_evidences?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  round?: InputMaybe<Int_Comparison_Exp>;
  signature?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Smallint_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  validator_index?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Double_Sign_Vote_Max_Fields = {
  __typename?: 'double_sign_vote_max_fields';
  block_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['smallint']>;
  validator_address?: Maybe<Scalars['String']>;
  validator_index?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Max_Order_By = {
  block_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Double_Sign_Vote_Min_Fields = {
  __typename?: 'double_sign_vote_min_fields';
  block_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['smallint']>;
  validator_address?: Maybe<Scalars['String']>;
  validator_index?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Min_Order_By = {
  block_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "double_sign_vote". */
export type Double_Sign_Vote_Order_By = {
  block_id?: InputMaybe<Order_By>;
  doubleSignEvidencesByVoteBId_aggregate?: InputMaybe<Double_Sign_Evidence_Aggregate_Order_By>;
  double_sign_evidences_aggregate?: InputMaybe<Double_Sign_Evidence_Aggregate_Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** select columns of table "double_sign_vote" */
export enum Double_Sign_Vote_Select_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Round = 'round',
  /** column name */
  Signature = 'signature',
  /** column name */
  Type = 'type',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  ValidatorIndex = 'validator_index'
}

/** aggregate stddev on columns */
export type Double_Sign_Vote_Stddev_Fields = {
  __typename?: 'double_sign_vote_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Double_Sign_Vote_Stddev_Pop_Fields = {
  __typename?: 'double_sign_vote_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Double_Sign_Vote_Stddev_Samp_Fields = {
  __typename?: 'double_sign_vote_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Double_Sign_Vote_Sum_Fields = {
  __typename?: 'double_sign_vote_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['smallint']>;
  validator_index?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Double_Sign_Vote_Var_Pop_Fields = {
  __typename?: 'double_sign_vote_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Double_Sign_Vote_Var_Samp_Fields = {
  __typename?: 'double_sign_vote_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Double_Sign_Vote_Variance_Fields = {
  __typename?: 'double_sign_vote_variance_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** columns and relationships of "fee_grant_allowance" */
export type Fee_Grant_Allowance = {
  __typename?: 'fee_grant_allowance';
  allowance: Scalars['jsonb'];
  grantee_address: Scalars['String'];
  granter_address: Scalars['String'];
  height: Scalars['bigint'];
  id: Scalars['Int'];
};


/** columns and relationships of "fee_grant_allowance" */
export type Fee_Grant_AllowanceAllowanceArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "fee_grant_allowance" */
export type Fee_Grant_Allowance_Aggregate = {
  __typename?: 'fee_grant_allowance_aggregate';
  aggregate?: Maybe<Fee_Grant_Allowance_Aggregate_Fields>;
  nodes: Array<Fee_Grant_Allowance>;
};

/** aggregate fields of "fee_grant_allowance" */
export type Fee_Grant_Allowance_Aggregate_Fields = {
  __typename?: 'fee_grant_allowance_aggregate_fields';
  avg?: Maybe<Fee_Grant_Allowance_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Fee_Grant_Allowance_Max_Fields>;
  min?: Maybe<Fee_Grant_Allowance_Min_Fields>;
  stddev?: Maybe<Fee_Grant_Allowance_Stddev_Fields>;
  stddev_pop?: Maybe<Fee_Grant_Allowance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fee_Grant_Allowance_Stddev_Samp_Fields>;
  sum?: Maybe<Fee_Grant_Allowance_Sum_Fields>;
  var_pop?: Maybe<Fee_Grant_Allowance_Var_Pop_Fields>;
  var_samp?: Maybe<Fee_Grant_Allowance_Var_Samp_Fields>;
  variance?: Maybe<Fee_Grant_Allowance_Variance_Fields>;
};


/** aggregate fields of "fee_grant_allowance" */
export type Fee_Grant_Allowance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Fee_Grant_Allowance_Avg_Fields = {
  __typename?: 'fee_grant_allowance_avg_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "fee_grant_allowance". All fields are combined with a logical 'AND'. */
export type Fee_Grant_Allowance_Bool_Exp = {
  _and?: InputMaybe<Array<Fee_Grant_Allowance_Bool_Exp>>;
  _not?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
  _or?: InputMaybe<Array<Fee_Grant_Allowance_Bool_Exp>>;
  allowance?: InputMaybe<Jsonb_Comparison_Exp>;
  grantee_address?: InputMaybe<String_Comparison_Exp>;
  granter_address?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Fee_Grant_Allowance_Max_Fields = {
  __typename?: 'fee_grant_allowance_max_fields';
  grantee_address?: Maybe<Scalars['String']>;
  granter_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Fee_Grant_Allowance_Min_Fields = {
  __typename?: 'fee_grant_allowance_min_fields';
  grantee_address?: Maybe<Scalars['String']>;
  granter_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "fee_grant_allowance". */
export type Fee_Grant_Allowance_Order_By = {
  allowance?: InputMaybe<Order_By>;
  grantee_address?: InputMaybe<Order_By>;
  granter_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** select columns of table "fee_grant_allowance" */
export enum Fee_Grant_Allowance_Select_Column {
  /** column name */
  Allowance = 'allowance',
  /** column name */
  GranteeAddress = 'grantee_address',
  /** column name */
  GranterAddress = 'granter_address',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id'
}

/** aggregate stddev on columns */
export type Fee_Grant_Allowance_Stddev_Fields = {
  __typename?: 'fee_grant_allowance_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Fee_Grant_Allowance_Stddev_Pop_Fields = {
  __typename?: 'fee_grant_allowance_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Fee_Grant_Allowance_Stddev_Samp_Fields = {
  __typename?: 'fee_grant_allowance_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Fee_Grant_Allowance_Sum_Fields = {
  __typename?: 'fee_grant_allowance_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Fee_Grant_Allowance_Var_Pop_Fields = {
  __typename?: 'fee_grant_allowance_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Fee_Grant_Allowance_Var_Samp_Fields = {
  __typename?: 'fee_grant_allowance_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Fee_Grant_Allowance_Variance_Fields = {
  __typename?: 'fee_grant_allowance_variance_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "genesis" */
export type Genesis = {
  __typename?: 'genesis';
  chain_id: Scalars['String'];
  initial_height: Scalars['bigint'];
  time: Scalars['timestamp'];
};

/** aggregated selection of "genesis" */
export type Genesis_Aggregate = {
  __typename?: 'genesis_aggregate';
  aggregate?: Maybe<Genesis_Aggregate_Fields>;
  nodes: Array<Genesis>;
};

/** aggregate fields of "genesis" */
export type Genesis_Aggregate_Fields = {
  __typename?: 'genesis_aggregate_fields';
  avg?: Maybe<Genesis_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Genesis_Max_Fields>;
  min?: Maybe<Genesis_Min_Fields>;
  stddev?: Maybe<Genesis_Stddev_Fields>;
  stddev_pop?: Maybe<Genesis_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Genesis_Stddev_Samp_Fields>;
  sum?: Maybe<Genesis_Sum_Fields>;
  var_pop?: Maybe<Genesis_Var_Pop_Fields>;
  var_samp?: Maybe<Genesis_Var_Samp_Fields>;
  variance?: Maybe<Genesis_Variance_Fields>;
};


/** aggregate fields of "genesis" */
export type Genesis_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Genesis_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Genesis_Avg_Fields = {
  __typename?: 'genesis_avg_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "genesis". All fields are combined with a logical 'AND'. */
export type Genesis_Bool_Exp = {
  _and?: InputMaybe<Array<Genesis_Bool_Exp>>;
  _not?: InputMaybe<Genesis_Bool_Exp>;
  _or?: InputMaybe<Array<Genesis_Bool_Exp>>;
  chain_id?: InputMaybe<String_Comparison_Exp>;
  initial_height?: InputMaybe<Bigint_Comparison_Exp>;
  time?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Genesis_Max_Fields = {
  __typename?: 'genesis_max_fields';
  chain_id?: Maybe<Scalars['String']>;
  initial_height?: Maybe<Scalars['bigint']>;
  time?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Genesis_Min_Fields = {
  __typename?: 'genesis_min_fields';
  chain_id?: Maybe<Scalars['String']>;
  initial_height?: Maybe<Scalars['bigint']>;
  time?: Maybe<Scalars['timestamp']>;
};

/** Ordering options when selecting data from "genesis". */
export type Genesis_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  initial_height?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
};

/** select columns of table "genesis" */
export enum Genesis_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  InitialHeight = 'initial_height',
  /** column name */
  Time = 'time'
}

/** aggregate stddev on columns */
export type Genesis_Stddev_Fields = {
  __typename?: 'genesis_stddev_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Genesis_Stddev_Pop_Fields = {
  __typename?: 'genesis_stddev_pop_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Genesis_Stddev_Samp_Fields = {
  __typename?: 'genesis_stddev_samp_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Genesis_Sum_Fields = {
  __typename?: 'genesis_sum_fields';
  initial_height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Genesis_Var_Pop_Fields = {
  __typename?: 'genesis_var_pop_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Genesis_Var_Samp_Fields = {
  __typename?: 'genesis_var_samp_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Genesis_Variance_Fields = {
  __typename?: 'genesis_variance_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "gov_params" */
export type Gov_Params = {
  __typename?: 'gov_params';
  deposit_params: Scalars['jsonb'];
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  tally_params: Scalars['jsonb'];
  voting_params: Scalars['jsonb'];
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsDeposit_ParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsTally_ParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsVoting_ParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "gov_params" */
export type Gov_Params_Aggregate = {
  __typename?: 'gov_params_aggregate';
  aggregate?: Maybe<Gov_Params_Aggregate_Fields>;
  nodes: Array<Gov_Params>;
};

/** aggregate fields of "gov_params" */
export type Gov_Params_Aggregate_Fields = {
  __typename?: 'gov_params_aggregate_fields';
  avg?: Maybe<Gov_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Gov_Params_Max_Fields>;
  min?: Maybe<Gov_Params_Min_Fields>;
  stddev?: Maybe<Gov_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Gov_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gov_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Gov_Params_Sum_Fields>;
  var_pop?: Maybe<Gov_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Gov_Params_Var_Samp_Fields>;
  variance?: Maybe<Gov_Params_Variance_Fields>;
};


/** aggregate fields of "gov_params" */
export type Gov_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gov_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Gov_Params_Avg_Fields = {
  __typename?: 'gov_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "gov_params". All fields are combined with a logical 'AND'. */
export type Gov_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Gov_Params_Bool_Exp>>;
  _not?: InputMaybe<Gov_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Gov_Params_Bool_Exp>>;
  deposit_params?: InputMaybe<Jsonb_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
  tally_params?: InputMaybe<Jsonb_Comparison_Exp>;
  voting_params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** aggregate max on columns */
export type Gov_Params_Max_Fields = {
  __typename?: 'gov_params_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Gov_Params_Min_Fields = {
  __typename?: 'gov_params_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "gov_params". */
export type Gov_Params_Order_By = {
  deposit_params?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
  tally_params?: InputMaybe<Order_By>;
  voting_params?: InputMaybe<Order_By>;
};

/** select columns of table "gov_params" */
export enum Gov_Params_Select_Column {
  /** column name */
  DepositParams = 'deposit_params',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  TallyParams = 'tally_params',
  /** column name */
  VotingParams = 'voting_params'
}

/** aggregate stddev on columns */
export type Gov_Params_Stddev_Fields = {
  __typename?: 'gov_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Gov_Params_Stddev_Pop_Fields = {
  __typename?: 'gov_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Gov_Params_Stddev_Samp_Fields = {
  __typename?: 'gov_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Gov_Params_Sum_Fields = {
  __typename?: 'gov_params_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Gov_Params_Var_Pop_Fields = {
  __typename?: 'gov_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Gov_Params_Var_Samp_Fields = {
  __typename?: 'gov_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Gov_Params_Variance_Fields = {
  __typename?: 'gov_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Gravity_Messages_By_Address_Args = {
  limit?: InputMaybe<Scalars['bigint']>;
  offset?: InputMaybe<Scalars['bigint']>;
  receiver_addr?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "group_member" */
export type Group_Member = {
  __typename?: 'group_member';
  add_time: Scalars['timestamp'];
  address: Scalars['String'];
  group_id: Scalars['Int'];
  /** An array relationship */
  group_proposal_votes: Array<Group_Proposal_Vote>;
  /** An aggregate relationship */
  group_proposal_votes_aggregate: Group_Proposal_Vote_Aggregate;
  /** An object relationship */
  group_with_policy: Group_With_Policy;
  metadata?: Maybe<Scalars['String']>;
  weight: Scalars['Int'];
};


/** columns and relationships of "group_member" */
export type Group_MemberGroup_Proposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Group_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Group_Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "group_member" */
export type Group_MemberGroup_Proposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Group_Proposal_Vote_Bool_Exp>;
};

/** aggregated selection of "group_member" */
export type Group_Member_Aggregate = {
  __typename?: 'group_member_aggregate';
  aggregate?: Maybe<Group_Member_Aggregate_Fields>;
  nodes: Array<Group_Member>;
};

/** aggregate fields of "group_member" */
export type Group_Member_Aggregate_Fields = {
  __typename?: 'group_member_aggregate_fields';
  avg?: Maybe<Group_Member_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Group_Member_Max_Fields>;
  min?: Maybe<Group_Member_Min_Fields>;
  stddev?: Maybe<Group_Member_Stddev_Fields>;
  stddev_pop?: Maybe<Group_Member_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group_Member_Stddev_Samp_Fields>;
  sum?: Maybe<Group_Member_Sum_Fields>;
  var_pop?: Maybe<Group_Member_Var_Pop_Fields>;
  var_samp?: Maybe<Group_Member_Var_Samp_Fields>;
  variance?: Maybe<Group_Member_Variance_Fields>;
};


/** aggregate fields of "group_member" */
export type Group_Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Group_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_member" */
export type Group_Member_Aggregate_Order_By = {
  avg?: InputMaybe<Group_Member_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Group_Member_Max_Order_By>;
  min?: InputMaybe<Group_Member_Min_Order_By>;
  stddev?: InputMaybe<Group_Member_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Group_Member_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Group_Member_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Group_Member_Sum_Order_By>;
  var_pop?: InputMaybe<Group_Member_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Group_Member_Var_Samp_Order_By>;
  variance?: InputMaybe<Group_Member_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Group_Member_Avg_Fields = {
  __typename?: 'group_member_avg_fields';
  group_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "group_member" */
export type Group_Member_Avg_Order_By = {
  group_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "group_member". All fields are combined with a logical 'AND'. */
export type Group_Member_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Member_Bool_Exp>>;
  _not?: InputMaybe<Group_Member_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Member_Bool_Exp>>;
  add_time?: InputMaybe<Timestamp_Comparison_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  group_id?: InputMaybe<Int_Comparison_Exp>;
  group_proposal_votes?: InputMaybe<Group_Proposal_Vote_Bool_Exp>;
  group_with_policy?: InputMaybe<Group_With_Policy_Bool_Exp>;
  metadata?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Group_Member_Max_Fields = {
  __typename?: 'group_member_max_fields';
  add_time?: Maybe<Scalars['timestamp']>;
  address?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "group_member" */
export type Group_Member_Max_Order_By = {
  add_time?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Member_Min_Fields = {
  __typename?: 'group_member_min_fields';
  add_time?: Maybe<Scalars['timestamp']>;
  address?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "group_member" */
export type Group_Member_Min_Order_By = {
  add_time?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "group_member". */
export type Group_Member_Order_By = {
  add_time?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  group_proposal_votes_aggregate?: InputMaybe<Group_Proposal_Vote_Aggregate_Order_By>;
  group_with_policy?: InputMaybe<Group_With_Policy_Order_By>;
  metadata?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** select columns of table "group_member" */
export enum Group_Member_Select_Column {
  /** column name */
  AddTime = 'add_time',
  /** column name */
  Address = 'address',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Weight = 'weight'
}

/** aggregate stddev on columns */
export type Group_Member_Stddev_Fields = {
  __typename?: 'group_member_stddev_fields';
  group_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "group_member" */
export type Group_Member_Stddev_Order_By = {
  group_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Group_Member_Stddev_Pop_Fields = {
  __typename?: 'group_member_stddev_pop_fields';
  group_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "group_member" */
export type Group_Member_Stddev_Pop_Order_By = {
  group_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Group_Member_Stddev_Samp_Fields = {
  __typename?: 'group_member_stddev_samp_fields';
  group_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "group_member" */
export type Group_Member_Stddev_Samp_Order_By = {
  group_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Group_Member_Sum_Fields = {
  __typename?: 'group_member_sum_fields';
  group_id?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "group_member" */
export type Group_Member_Sum_Order_By = {
  group_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Group_Member_Var_Pop_Fields = {
  __typename?: 'group_member_var_pop_fields';
  group_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "group_member" */
export type Group_Member_Var_Pop_Order_By = {
  group_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Group_Member_Var_Samp_Fields = {
  __typename?: 'group_member_var_samp_fields';
  group_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "group_member" */
export type Group_Member_Var_Samp_Order_By = {
  group_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Group_Member_Variance_Fields = {
  __typename?: 'group_member_variance_fields';
  group_id?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "group_member" */
export type Group_Member_Variance_Order_By = {
  group_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** columns and relationships of "group_proposal" */
export type Group_Proposal = {
  __typename?: 'group_proposal';
  /** An object relationship */
  block: Block;
  execution_log?: Maybe<Scalars['String']>;
  execution_time?: Maybe<Scalars['timestamp']>;
  executor?: Maybe<Scalars['String']>;
  executor_result: Scalars['proposal_executor_result'];
  group_id: Scalars['Int'];
  /** An array relationship */
  group_proposal_votes: Array<Group_Proposal_Vote>;
  /** An aggregate relationship */
  group_proposal_votes_aggregate: Group_Proposal_Vote_Aggregate;
  /** An object relationship */
  group_with_policy: Group_With_Policy;
  height: Scalars['bigint'];
  id: Scalars['Int'];
  member_count: Scalars['Int'];
  messages: Scalars['jsonb'];
  metadata?: Maybe<Scalars['String']>;
  proposer: Scalars['String'];
  status: Scalars['proposal_status'];
  submit_time: Scalars['timestamp'];
  /** An object relationship */
  transaction?: Maybe<Transaction>;
  transaction_hash?: Maybe<Scalars['String']>;
};


/** columns and relationships of "group_proposal" */
export type Group_ProposalGroup_Proposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Group_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Group_Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "group_proposal" */
export type Group_ProposalGroup_Proposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Group_Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "group_proposal" */
export type Group_ProposalMessagesArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "group_proposal" */
export type Group_Proposal_Aggregate = {
  __typename?: 'group_proposal_aggregate';
  aggregate?: Maybe<Group_Proposal_Aggregate_Fields>;
  nodes: Array<Group_Proposal>;
};

/** aggregate fields of "group_proposal" */
export type Group_Proposal_Aggregate_Fields = {
  __typename?: 'group_proposal_aggregate_fields';
  avg?: Maybe<Group_Proposal_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Group_Proposal_Max_Fields>;
  min?: Maybe<Group_Proposal_Min_Fields>;
  stddev?: Maybe<Group_Proposal_Stddev_Fields>;
  stddev_pop?: Maybe<Group_Proposal_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group_Proposal_Stddev_Samp_Fields>;
  sum?: Maybe<Group_Proposal_Sum_Fields>;
  var_pop?: Maybe<Group_Proposal_Var_Pop_Fields>;
  var_samp?: Maybe<Group_Proposal_Var_Samp_Fields>;
  variance?: Maybe<Group_Proposal_Variance_Fields>;
};


/** aggregate fields of "group_proposal" */
export type Group_Proposal_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Group_Proposal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_proposal" */
export type Group_Proposal_Aggregate_Order_By = {
  avg?: InputMaybe<Group_Proposal_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Group_Proposal_Max_Order_By>;
  min?: InputMaybe<Group_Proposal_Min_Order_By>;
  stddev?: InputMaybe<Group_Proposal_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Group_Proposal_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Group_Proposal_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Group_Proposal_Sum_Order_By>;
  var_pop?: InputMaybe<Group_Proposal_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Group_Proposal_Var_Samp_Order_By>;
  variance?: InputMaybe<Group_Proposal_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Group_Proposal_Avg_Fields = {
  __typename?: 'group_proposal_avg_fields';
  group_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "group_proposal" */
export type Group_Proposal_Avg_Order_By = {
  group_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "group_proposal". All fields are combined with a logical 'AND'. */
export type Group_Proposal_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Proposal_Bool_Exp>>;
  _not?: InputMaybe<Group_Proposal_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Proposal_Bool_Exp>>;
  block?: InputMaybe<Block_Bool_Exp>;
  execution_log?: InputMaybe<String_Comparison_Exp>;
  execution_time?: InputMaybe<Timestamp_Comparison_Exp>;
  executor?: InputMaybe<String_Comparison_Exp>;
  executor_result?: InputMaybe<Proposal_Executor_Result_Comparison_Exp>;
  group_id?: InputMaybe<Int_Comparison_Exp>;
  group_proposal_votes?: InputMaybe<Group_Proposal_Vote_Bool_Exp>;
  group_with_policy?: InputMaybe<Group_With_Policy_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  member_count?: InputMaybe<Int_Comparison_Exp>;
  messages?: InputMaybe<Jsonb_Comparison_Exp>;
  metadata?: InputMaybe<String_Comparison_Exp>;
  proposer?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Proposal_Status_Comparison_Exp>;
  submit_time?: InputMaybe<Timestamp_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Group_Proposal_Max_Fields = {
  __typename?: 'group_proposal_max_fields';
  execution_log?: Maybe<Scalars['String']>;
  execution_time?: Maybe<Scalars['timestamp']>;
  executor?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  member_count?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['String']>;
  proposer?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "group_proposal" */
export type Group_Proposal_Max_Order_By = {
  execution_log?: InputMaybe<Order_By>;
  execution_time?: InputMaybe<Order_By>;
  executor?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  proposer?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Proposal_Min_Fields = {
  __typename?: 'group_proposal_min_fields';
  execution_log?: Maybe<Scalars['String']>;
  execution_time?: Maybe<Scalars['timestamp']>;
  executor?: Maybe<Scalars['String']>;
  group_id?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  member_count?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['String']>;
  proposer?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "group_proposal" */
export type Group_Proposal_Min_Order_By = {
  execution_log?: InputMaybe<Order_By>;
  execution_time?: InputMaybe<Order_By>;
  executor?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  proposer?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "group_proposal". */
export type Group_Proposal_Order_By = {
  block?: InputMaybe<Block_Order_By>;
  execution_log?: InputMaybe<Order_By>;
  execution_time?: InputMaybe<Order_By>;
  executor?: InputMaybe<Order_By>;
  executor_result?: InputMaybe<Order_By>;
  group_id?: InputMaybe<Order_By>;
  group_proposal_votes_aggregate?: InputMaybe<Group_Proposal_Vote_Aggregate_Order_By>;
  group_with_policy?: InputMaybe<Group_With_Policy_Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
  messages?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  proposer?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** select columns of table "group_proposal" */
export enum Group_Proposal_Select_Column {
  /** column name */
  ExecutionLog = 'execution_log',
  /** column name */
  ExecutionTime = 'execution_time',
  /** column name */
  Executor = 'executor',
  /** column name */
  ExecutorResult = 'executor_result',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  MemberCount = 'member_count',
  /** column name */
  Messages = 'messages',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Proposer = 'proposer',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitTime = 'submit_time',
  /** column name */
  TransactionHash = 'transaction_hash'
}

/** aggregate stddev on columns */
export type Group_Proposal_Stddev_Fields = {
  __typename?: 'group_proposal_stddev_fields';
  group_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "group_proposal" */
export type Group_Proposal_Stddev_Order_By = {
  group_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Group_Proposal_Stddev_Pop_Fields = {
  __typename?: 'group_proposal_stddev_pop_fields';
  group_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "group_proposal" */
export type Group_Proposal_Stddev_Pop_Order_By = {
  group_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Group_Proposal_Stddev_Samp_Fields = {
  __typename?: 'group_proposal_stddev_samp_fields';
  group_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "group_proposal" */
export type Group_Proposal_Stddev_Samp_Order_By = {
  group_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Group_Proposal_Sum_Fields = {
  __typename?: 'group_proposal_sum_fields';
  group_id?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  member_count?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "group_proposal" */
export type Group_Proposal_Sum_Order_By = {
  group_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Group_Proposal_Var_Pop_Fields = {
  __typename?: 'group_proposal_var_pop_fields';
  group_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "group_proposal" */
export type Group_Proposal_Var_Pop_Order_By = {
  group_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Group_Proposal_Var_Samp_Fields = {
  __typename?: 'group_proposal_var_samp_fields';
  group_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "group_proposal" */
export type Group_Proposal_Var_Samp_Order_By = {
  group_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Group_Proposal_Variance_Fields = {
  __typename?: 'group_proposal_variance_fields';
  group_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  member_count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "group_proposal" */
export type Group_Proposal_Variance_Order_By = {
  group_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
};

/** columns and relationships of "group_proposal_vote" */
export type Group_Proposal_Vote = {
  __typename?: 'group_proposal_vote';
  group_id: Scalars['Int'];
  /** An object relationship */
  group_member?: Maybe<Group_Member>;
  /** An object relationship */
  group_proposal: Group_Proposal;
  proposal_id: Scalars['Int'];
  submit_time: Scalars['timestamp'];
  vote_metadata?: Maybe<Scalars['String']>;
  vote_option: Scalars['vote_option'];
  voter: Scalars['String'];
};

/** aggregated selection of "group_proposal_vote" */
export type Group_Proposal_Vote_Aggregate = {
  __typename?: 'group_proposal_vote_aggregate';
  aggregate?: Maybe<Group_Proposal_Vote_Aggregate_Fields>;
  nodes: Array<Group_Proposal_Vote>;
};

/** aggregate fields of "group_proposal_vote" */
export type Group_Proposal_Vote_Aggregate_Fields = {
  __typename?: 'group_proposal_vote_aggregate_fields';
  avg?: Maybe<Group_Proposal_Vote_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Group_Proposal_Vote_Max_Fields>;
  min?: Maybe<Group_Proposal_Vote_Min_Fields>;
  stddev?: Maybe<Group_Proposal_Vote_Stddev_Fields>;
  stddev_pop?: Maybe<Group_Proposal_Vote_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group_Proposal_Vote_Stddev_Samp_Fields>;
  sum?: Maybe<Group_Proposal_Vote_Sum_Fields>;
  var_pop?: Maybe<Group_Proposal_Vote_Var_Pop_Fields>;
  var_samp?: Maybe<Group_Proposal_Vote_Var_Samp_Fields>;
  variance?: Maybe<Group_Proposal_Vote_Variance_Fields>;
};


/** aggregate fields of "group_proposal_vote" */
export type Group_Proposal_Vote_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Group_Proposal_Vote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_proposal_vote" */
export type Group_Proposal_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Group_Proposal_Vote_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Group_Proposal_Vote_Max_Order_By>;
  min?: InputMaybe<Group_Proposal_Vote_Min_Order_By>;
  stddev?: InputMaybe<Group_Proposal_Vote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Group_Proposal_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Group_Proposal_Vote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Group_Proposal_Vote_Sum_Order_By>;
  var_pop?: InputMaybe<Group_Proposal_Vote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Group_Proposal_Vote_Var_Samp_Order_By>;
  variance?: InputMaybe<Group_Proposal_Vote_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Group_Proposal_Vote_Avg_Fields = {
  __typename?: 'group_proposal_vote_avg_fields';
  group_id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "group_proposal_vote" */
export type Group_Proposal_Vote_Avg_Order_By = {
  group_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "group_proposal_vote". All fields are combined with a logical 'AND'. */
export type Group_Proposal_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Proposal_Vote_Bool_Exp>>;
  _not?: InputMaybe<Group_Proposal_Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Proposal_Vote_Bool_Exp>>;
  group_id?: InputMaybe<Int_Comparison_Exp>;
  group_member?: InputMaybe<Group_Member_Bool_Exp>;
  group_proposal?: InputMaybe<Group_Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  submit_time?: InputMaybe<Timestamp_Comparison_Exp>;
  vote_metadata?: InputMaybe<String_Comparison_Exp>;
  vote_option?: InputMaybe<Vote_Option_Comparison_Exp>;
  voter?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Group_Proposal_Vote_Max_Fields = {
  __typename?: 'group_proposal_vote_max_fields';
  group_id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  vote_metadata?: Maybe<Scalars['String']>;
  voter?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "group_proposal_vote" */
export type Group_Proposal_Vote_Max_Order_By = {
  group_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  vote_metadata?: InputMaybe<Order_By>;
  voter?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Proposal_Vote_Min_Fields = {
  __typename?: 'group_proposal_vote_min_fields';
  group_id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  vote_metadata?: Maybe<Scalars['String']>;
  voter?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "group_proposal_vote" */
export type Group_Proposal_Vote_Min_Order_By = {
  group_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  vote_metadata?: InputMaybe<Order_By>;
  voter?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "group_proposal_vote". */
export type Group_Proposal_Vote_Order_By = {
  group_id?: InputMaybe<Order_By>;
  group_member?: InputMaybe<Group_Member_Order_By>;
  group_proposal?: InputMaybe<Group_Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  vote_metadata?: InputMaybe<Order_By>;
  vote_option?: InputMaybe<Order_By>;
  voter?: InputMaybe<Order_By>;
};

/** select columns of table "group_proposal_vote" */
export enum Group_Proposal_Vote_Select_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  SubmitTime = 'submit_time',
  /** column name */
  VoteMetadata = 'vote_metadata',
  /** column name */
  VoteOption = 'vote_option',
  /** column name */
  Voter = 'voter'
}

/** aggregate stddev on columns */
export type Group_Proposal_Vote_Stddev_Fields = {
  __typename?: 'group_proposal_vote_stddev_fields';
  group_id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "group_proposal_vote" */
export type Group_Proposal_Vote_Stddev_Order_By = {
  group_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Group_Proposal_Vote_Stddev_Pop_Fields = {
  __typename?: 'group_proposal_vote_stddev_pop_fields';
  group_id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "group_proposal_vote" */
export type Group_Proposal_Vote_Stddev_Pop_Order_By = {
  group_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Group_Proposal_Vote_Stddev_Samp_Fields = {
  __typename?: 'group_proposal_vote_stddev_samp_fields';
  group_id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "group_proposal_vote" */
export type Group_Proposal_Vote_Stddev_Samp_Order_By = {
  group_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Group_Proposal_Vote_Sum_Fields = {
  __typename?: 'group_proposal_vote_sum_fields';
  group_id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "group_proposal_vote" */
export type Group_Proposal_Vote_Sum_Order_By = {
  group_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Group_Proposal_Vote_Var_Pop_Fields = {
  __typename?: 'group_proposal_vote_var_pop_fields';
  group_id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "group_proposal_vote" */
export type Group_Proposal_Vote_Var_Pop_Order_By = {
  group_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Group_Proposal_Vote_Var_Samp_Fields = {
  __typename?: 'group_proposal_vote_var_samp_fields';
  group_id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "group_proposal_vote" */
export type Group_Proposal_Vote_Var_Samp_Order_By = {
  group_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Group_Proposal_Vote_Variance_Fields = {
  __typename?: 'group_proposal_vote_variance_fields';
  group_id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "group_proposal_vote" */
export type Group_Proposal_Vote_Variance_Order_By = {
  group_id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "group_with_policy" */
export type Group_With_Policy = {
  __typename?: 'group_with_policy';
  address: Scalars['String'];
  /** An array relationship */
  group_members: Array<Group_Member>;
  /** An aggregate relationship */
  group_members_aggregate: Group_Member_Aggregate;
  group_metadata?: Maybe<Scalars['String']>;
  /** An array relationship */
  group_proposals: Array<Group_Proposal>;
  /** An aggregate relationship */
  group_proposals_aggregate: Group_Proposal_Aggregate;
  id: Scalars['Int'];
  min_execution_period: Scalars['bigint'];
  policy_metadata?: Maybe<Scalars['String']>;
  threshold: Scalars['Int'];
  voting_period: Scalars['bigint'];
};


/** columns and relationships of "group_with_policy" */
export type Group_With_PolicyGroup_MembersArgs = {
  distinct_on?: InputMaybe<Array<Group_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Member_Order_By>>;
  where?: InputMaybe<Group_Member_Bool_Exp>;
};


/** columns and relationships of "group_with_policy" */
export type Group_With_PolicyGroup_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Member_Order_By>>;
  where?: InputMaybe<Group_Member_Bool_Exp>;
};


/** columns and relationships of "group_with_policy" */
export type Group_With_PolicyGroup_ProposalsArgs = {
  distinct_on?: InputMaybe<Array<Group_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Proposal_Order_By>>;
  where?: InputMaybe<Group_Proposal_Bool_Exp>;
};


/** columns and relationships of "group_with_policy" */
export type Group_With_PolicyGroup_Proposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Proposal_Order_By>>;
  where?: InputMaybe<Group_Proposal_Bool_Exp>;
};

/** aggregated selection of "group_with_policy" */
export type Group_With_Policy_Aggregate = {
  __typename?: 'group_with_policy_aggregate';
  aggregate?: Maybe<Group_With_Policy_Aggregate_Fields>;
  nodes: Array<Group_With_Policy>;
};

/** aggregate fields of "group_with_policy" */
export type Group_With_Policy_Aggregate_Fields = {
  __typename?: 'group_with_policy_aggregate_fields';
  avg?: Maybe<Group_With_Policy_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Group_With_Policy_Max_Fields>;
  min?: Maybe<Group_With_Policy_Min_Fields>;
  stddev?: Maybe<Group_With_Policy_Stddev_Fields>;
  stddev_pop?: Maybe<Group_With_Policy_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group_With_Policy_Stddev_Samp_Fields>;
  sum?: Maybe<Group_With_Policy_Sum_Fields>;
  var_pop?: Maybe<Group_With_Policy_Var_Pop_Fields>;
  var_samp?: Maybe<Group_With_Policy_Var_Samp_Fields>;
  variance?: Maybe<Group_With_Policy_Variance_Fields>;
};


/** aggregate fields of "group_with_policy" */
export type Group_With_Policy_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Group_With_Policy_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Group_With_Policy_Avg_Fields = {
  __typename?: 'group_with_policy_avg_fields';
  id?: Maybe<Scalars['Float']>;
  min_execution_period?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  voting_period?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "group_with_policy". All fields are combined with a logical 'AND'. */
export type Group_With_Policy_Bool_Exp = {
  _and?: InputMaybe<Array<Group_With_Policy_Bool_Exp>>;
  _not?: InputMaybe<Group_With_Policy_Bool_Exp>;
  _or?: InputMaybe<Array<Group_With_Policy_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  group_members?: InputMaybe<Group_Member_Bool_Exp>;
  group_metadata?: InputMaybe<String_Comparison_Exp>;
  group_proposals?: InputMaybe<Group_Proposal_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  min_execution_period?: InputMaybe<Bigint_Comparison_Exp>;
  policy_metadata?: InputMaybe<String_Comparison_Exp>;
  threshold?: InputMaybe<Int_Comparison_Exp>;
  voting_period?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Group_With_Policy_Max_Fields = {
  __typename?: 'group_with_policy_max_fields';
  address?: Maybe<Scalars['String']>;
  group_metadata?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  min_execution_period?: Maybe<Scalars['bigint']>;
  policy_metadata?: Maybe<Scalars['String']>;
  threshold?: Maybe<Scalars['Int']>;
  voting_period?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Group_With_Policy_Min_Fields = {
  __typename?: 'group_with_policy_min_fields';
  address?: Maybe<Scalars['String']>;
  group_metadata?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  min_execution_period?: Maybe<Scalars['bigint']>;
  policy_metadata?: Maybe<Scalars['String']>;
  threshold?: Maybe<Scalars['Int']>;
  voting_period?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "group_with_policy". */
export type Group_With_Policy_Order_By = {
  address?: InputMaybe<Order_By>;
  group_members_aggregate?: InputMaybe<Group_Member_Aggregate_Order_By>;
  group_metadata?: InputMaybe<Order_By>;
  group_proposals_aggregate?: InputMaybe<Group_Proposal_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  min_execution_period?: InputMaybe<Order_By>;
  policy_metadata?: InputMaybe<Order_By>;
  threshold?: InputMaybe<Order_By>;
  voting_period?: InputMaybe<Order_By>;
};

/** select columns of table "group_with_policy" */
export enum Group_With_Policy_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  GroupMetadata = 'group_metadata',
  /** column name */
  Id = 'id',
  /** column name */
  MinExecutionPeriod = 'min_execution_period',
  /** column name */
  PolicyMetadata = 'policy_metadata',
  /** column name */
  Threshold = 'threshold',
  /** column name */
  VotingPeriod = 'voting_period'
}

/** aggregate stddev on columns */
export type Group_With_Policy_Stddev_Fields = {
  __typename?: 'group_with_policy_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  min_execution_period?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  voting_period?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Group_With_Policy_Stddev_Pop_Fields = {
  __typename?: 'group_with_policy_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  min_execution_period?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  voting_period?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Group_With_Policy_Stddev_Samp_Fields = {
  __typename?: 'group_with_policy_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  min_execution_period?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  voting_period?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Group_With_Policy_Sum_Fields = {
  __typename?: 'group_with_policy_sum_fields';
  id?: Maybe<Scalars['Int']>;
  min_execution_period?: Maybe<Scalars['bigint']>;
  threshold?: Maybe<Scalars['Int']>;
  voting_period?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Group_With_Policy_Var_Pop_Fields = {
  __typename?: 'group_with_policy_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  min_execution_period?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  voting_period?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Group_With_Policy_Var_Samp_Fields = {
  __typename?: 'group_with_policy_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  min_execution_period?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  voting_period?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Group_With_Policy_Variance_Fields = {
  __typename?: 'group_with_policy_variance_fields';
  id?: Maybe<Scalars['Float']>;
  min_execution_period?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Float']>;
  voting_period?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "inflation" */
export type Inflation = {
  __typename?: 'inflation';
  height: Scalars['bigint'];
  value: Scalars['numeric'];
};

/** aggregated selection of "inflation" */
export type Inflation_Aggregate = {
  __typename?: 'inflation_aggregate';
  aggregate?: Maybe<Inflation_Aggregate_Fields>;
  nodes: Array<Inflation>;
};

/** aggregate fields of "inflation" */
export type Inflation_Aggregate_Fields = {
  __typename?: 'inflation_aggregate_fields';
  avg?: Maybe<Inflation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Inflation_Max_Fields>;
  min?: Maybe<Inflation_Min_Fields>;
  stddev?: Maybe<Inflation_Stddev_Fields>;
  stddev_pop?: Maybe<Inflation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Inflation_Stddev_Samp_Fields>;
  sum?: Maybe<Inflation_Sum_Fields>;
  var_pop?: Maybe<Inflation_Var_Pop_Fields>;
  var_samp?: Maybe<Inflation_Var_Samp_Fields>;
  variance?: Maybe<Inflation_Variance_Fields>;
};


/** aggregate fields of "inflation" */
export type Inflation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Inflation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Inflation_Avg_Fields = {
  __typename?: 'inflation_avg_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "inflation". All fields are combined with a logical 'AND'. */
export type Inflation_Bool_Exp = {
  _and?: InputMaybe<Array<Inflation_Bool_Exp>>;
  _not?: InputMaybe<Inflation_Bool_Exp>;
  _or?: InputMaybe<Array<Inflation_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Inflation_Max_Fields = {
  __typename?: 'inflation_max_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Inflation_Min_Fields = {
  __typename?: 'inflation_min_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** Ordering options when selecting data from "inflation". */
export type Inflation_Order_By = {
  height?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "inflation" */
export enum Inflation_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Inflation_Stddev_Fields = {
  __typename?: 'inflation_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Inflation_Stddev_Pop_Fields = {
  __typename?: 'inflation_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Inflation_Stddev_Samp_Fields = {
  __typename?: 'inflation_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Inflation_Sum_Fields = {
  __typename?: 'inflation_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Inflation_Var_Pop_Fields = {
  __typename?: 'inflation_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Inflation_Var_Samp_Fields = {
  __typename?: 'inflation_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Inflation_Variance_Fields = {
  __typename?: 'inflation_variance_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']>;
  _gt?: InputMaybe<Scalars['json']>;
  _gte?: InputMaybe<Scalars['json']>;
  _in?: InputMaybe<Array<Scalars['json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['json']>;
  _lte?: InputMaybe<Scalars['json']>;
  _neq?: InputMaybe<Scalars['json']>;
  _nin?: InputMaybe<Array<Scalars['json']>>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "marketplace_collection" */
export type Marketplace_Collection = {
  __typename?: 'marketplace_collection';
  creator: Scalars['String'];
  denom_id: Scalars['String'];
  id: Scalars['bigint'];
  mint_royalties: Scalars['String'];
  /** An object relationship */
  nft_denom: Nft_Denom;
  resale_royalties: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transaction_hash: Scalars['String'];
  verified: Scalars['Boolean'];
};

/** aggregated selection of "marketplace_collection" */
export type Marketplace_Collection_Aggregate = {
  __typename?: 'marketplace_collection_aggregate';
  aggregate?: Maybe<Marketplace_Collection_Aggregate_Fields>;
  nodes: Array<Marketplace_Collection>;
};

/** aggregate fields of "marketplace_collection" */
export type Marketplace_Collection_Aggregate_Fields = {
  __typename?: 'marketplace_collection_aggregate_fields';
  avg?: Maybe<Marketplace_Collection_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Marketplace_Collection_Max_Fields>;
  min?: Maybe<Marketplace_Collection_Min_Fields>;
  stddev?: Maybe<Marketplace_Collection_Stddev_Fields>;
  stddev_pop?: Maybe<Marketplace_Collection_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Marketplace_Collection_Stddev_Samp_Fields>;
  sum?: Maybe<Marketplace_Collection_Sum_Fields>;
  var_pop?: Maybe<Marketplace_Collection_Var_Pop_Fields>;
  var_samp?: Maybe<Marketplace_Collection_Var_Samp_Fields>;
  variance?: Maybe<Marketplace_Collection_Variance_Fields>;
};


/** aggregate fields of "marketplace_collection" */
export type Marketplace_Collection_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Marketplace_Collection_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Marketplace_Collection_Avg_Fields = {
  __typename?: 'marketplace_collection_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "marketplace_collection". All fields are combined with a logical 'AND'. */
export type Marketplace_Collection_Bool_Exp = {
  _and?: InputMaybe<Array<Marketplace_Collection_Bool_Exp>>;
  _not?: InputMaybe<Marketplace_Collection_Bool_Exp>;
  _or?: InputMaybe<Array<Marketplace_Collection_Bool_Exp>>;
  creator?: InputMaybe<String_Comparison_Exp>;
  denom_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  mint_royalties?: InputMaybe<String_Comparison_Exp>;
  nft_denom?: InputMaybe<Nft_Denom_Bool_Exp>;
  resale_royalties?: InputMaybe<String_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  verified?: InputMaybe<Boolean_Comparison_Exp>;
};

/** aggregate max on columns */
export type Marketplace_Collection_Max_Fields = {
  __typename?: 'marketplace_collection_max_fields';
  creator?: Maybe<Scalars['String']>;
  denom_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  mint_royalties?: Maybe<Scalars['String']>;
  resale_royalties?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Marketplace_Collection_Min_Fields = {
  __typename?: 'marketplace_collection_min_fields';
  creator?: Maybe<Scalars['String']>;
  denom_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  mint_royalties?: Maybe<Scalars['String']>;
  resale_royalties?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "marketplace_collection". */
export type Marketplace_Collection_Order_By = {
  creator?: InputMaybe<Order_By>;
  denom_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mint_royalties?: InputMaybe<Order_By>;
  nft_denom?: InputMaybe<Nft_Denom_Order_By>;
  resale_royalties?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** select columns of table "marketplace_collection" */
export enum Marketplace_Collection_Select_Column {
  /** column name */
  Creator = 'creator',
  /** column name */
  DenomId = 'denom_id',
  /** column name */
  Id = 'id',
  /** column name */
  MintRoyalties = 'mint_royalties',
  /** column name */
  ResaleRoyalties = 'resale_royalties',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Verified = 'verified'
}

/** aggregate stddev on columns */
export type Marketplace_Collection_Stddev_Fields = {
  __typename?: 'marketplace_collection_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Marketplace_Collection_Stddev_Pop_Fields = {
  __typename?: 'marketplace_collection_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Marketplace_Collection_Stddev_Samp_Fields = {
  __typename?: 'marketplace_collection_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Marketplace_Collection_Sum_Fields = {
  __typename?: 'marketplace_collection_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Marketplace_Collection_Var_Pop_Fields = {
  __typename?: 'marketplace_collection_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Marketplace_Collection_Var_Samp_Fields = {
  __typename?: 'marketplace_collection_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Marketplace_Collection_Variance_Fields = {
  __typename?: 'marketplace_collection_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "marketplace_nft" */
export type Marketplace_Nft = {
  __typename?: 'marketplace_nft';
  creator: Scalars['String'];
  denom_id: Scalars['String'];
  id?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  nft_denom: Nft_Denom;
  /** An object relationship */
  nft_nft: Nft_Nft;
  price?: Maybe<Scalars['numeric']>;
  token_id: Scalars['bigint'];
  /** An object relationship */
  transaction: Transaction;
  transaction_hash: Scalars['String'];
  uid?: Maybe<Scalars['String']>;
};

/** aggregated selection of "marketplace_nft" */
export type Marketplace_Nft_Aggregate = {
  __typename?: 'marketplace_nft_aggregate';
  aggregate?: Maybe<Marketplace_Nft_Aggregate_Fields>;
  nodes: Array<Marketplace_Nft>;
};

/** aggregate fields of "marketplace_nft" */
export type Marketplace_Nft_Aggregate_Fields = {
  __typename?: 'marketplace_nft_aggregate_fields';
  avg?: Maybe<Marketplace_Nft_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Marketplace_Nft_Max_Fields>;
  min?: Maybe<Marketplace_Nft_Min_Fields>;
  stddev?: Maybe<Marketplace_Nft_Stddev_Fields>;
  stddev_pop?: Maybe<Marketplace_Nft_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Marketplace_Nft_Stddev_Samp_Fields>;
  sum?: Maybe<Marketplace_Nft_Sum_Fields>;
  var_pop?: Maybe<Marketplace_Nft_Var_Pop_Fields>;
  var_samp?: Maybe<Marketplace_Nft_Var_Samp_Fields>;
  variance?: Maybe<Marketplace_Nft_Variance_Fields>;
};


/** aggregate fields of "marketplace_nft" */
export type Marketplace_Nft_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Marketplace_Nft_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Marketplace_Nft_Avg_Fields = {
  __typename?: 'marketplace_nft_avg_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  token_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "marketplace_nft". All fields are combined with a logical 'AND'. */
export type Marketplace_Nft_Bool_Exp = {
  _and?: InputMaybe<Array<Marketplace_Nft_Bool_Exp>>;
  _not?: InputMaybe<Marketplace_Nft_Bool_Exp>;
  _or?: InputMaybe<Array<Marketplace_Nft_Bool_Exp>>;
  creator?: InputMaybe<String_Comparison_Exp>;
  denom_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  nft_denom?: InputMaybe<Nft_Denom_Bool_Exp>;
  nft_nft?: InputMaybe<Nft_Nft_Bool_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "marketplace_nft_buy_history" */
export type Marketplace_Nft_Buy_History = {
  __typename?: 'marketplace_nft_buy_history';
  btc_price: Scalars['numeric'];
  buyer: Scalars['String'];
  denom_id: Scalars['String'];
  /** An object relationship */
  nft_denom: Nft_Denom;
  /** An object relationship */
  nft_nft: Nft_Nft;
  price: Scalars['numeric'];
  seller: Scalars['String'];
  timestamp: Scalars['bigint'];
  token_id: Scalars['bigint'];
  /** An object relationship */
  transaction: Transaction;
  transaction_hash: Scalars['String'];
  usd_price: Scalars['numeric'];
};

/** aggregated selection of "marketplace_nft_buy_history" */
export type Marketplace_Nft_Buy_History_Aggregate = {
  __typename?: 'marketplace_nft_buy_history_aggregate';
  aggregate?: Maybe<Marketplace_Nft_Buy_History_Aggregate_Fields>;
  nodes: Array<Marketplace_Nft_Buy_History>;
};

/** aggregate fields of "marketplace_nft_buy_history" */
export type Marketplace_Nft_Buy_History_Aggregate_Fields = {
  __typename?: 'marketplace_nft_buy_history_aggregate_fields';
  avg?: Maybe<Marketplace_Nft_Buy_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Marketplace_Nft_Buy_History_Max_Fields>;
  min?: Maybe<Marketplace_Nft_Buy_History_Min_Fields>;
  stddev?: Maybe<Marketplace_Nft_Buy_History_Stddev_Fields>;
  stddev_pop?: Maybe<Marketplace_Nft_Buy_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Marketplace_Nft_Buy_History_Stddev_Samp_Fields>;
  sum?: Maybe<Marketplace_Nft_Buy_History_Sum_Fields>;
  var_pop?: Maybe<Marketplace_Nft_Buy_History_Var_Pop_Fields>;
  var_samp?: Maybe<Marketplace_Nft_Buy_History_Var_Samp_Fields>;
  variance?: Maybe<Marketplace_Nft_Buy_History_Variance_Fields>;
};


/** aggregate fields of "marketplace_nft_buy_history" */
export type Marketplace_Nft_Buy_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Marketplace_Nft_Buy_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Marketplace_Nft_Buy_History_Avg_Fields = {
  __typename?: 'marketplace_nft_buy_history_avg_fields';
  btc_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
  token_id?: Maybe<Scalars['Float']>;
  usd_price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "marketplace_nft_buy_history". All fields are combined with a logical 'AND'. */
export type Marketplace_Nft_Buy_History_Bool_Exp = {
  _and?: InputMaybe<Array<Marketplace_Nft_Buy_History_Bool_Exp>>;
  _not?: InputMaybe<Marketplace_Nft_Buy_History_Bool_Exp>;
  _or?: InputMaybe<Array<Marketplace_Nft_Buy_History_Bool_Exp>>;
  btc_price?: InputMaybe<Numeric_Comparison_Exp>;
  buyer?: InputMaybe<String_Comparison_Exp>;
  denom_id?: InputMaybe<String_Comparison_Exp>;
  nft_denom?: InputMaybe<Nft_Denom_Bool_Exp>;
  nft_nft?: InputMaybe<Nft_Nft_Bool_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  seller?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  token_id?: InputMaybe<Bigint_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  usd_price?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Marketplace_Nft_Buy_History_Max_Fields = {
  __typename?: 'marketplace_nft_buy_history_max_fields';
  btc_price?: Maybe<Scalars['numeric']>;
  buyer?: Maybe<Scalars['String']>;
  denom_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  seller?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['bigint']>;
  token_id?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  usd_price?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Marketplace_Nft_Buy_History_Min_Fields = {
  __typename?: 'marketplace_nft_buy_history_min_fields';
  btc_price?: Maybe<Scalars['numeric']>;
  buyer?: Maybe<Scalars['String']>;
  denom_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  seller?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['bigint']>;
  token_id?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  usd_price?: Maybe<Scalars['numeric']>;
};

/** Ordering options when selecting data from "marketplace_nft_buy_history". */
export type Marketplace_Nft_Buy_History_Order_By = {
  btc_price?: InputMaybe<Order_By>;
  buyer?: InputMaybe<Order_By>;
  denom_id?: InputMaybe<Order_By>;
  nft_denom?: InputMaybe<Nft_Denom_Order_By>;
  nft_nft?: InputMaybe<Nft_Nft_Order_By>;
  price?: InputMaybe<Order_By>;
  seller?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  usd_price?: InputMaybe<Order_By>;
};

/** select columns of table "marketplace_nft_buy_history" */
export enum Marketplace_Nft_Buy_History_Select_Column {
  /** column name */
  BtcPrice = 'btc_price',
  /** column name */
  Buyer = 'buyer',
  /** column name */
  DenomId = 'denom_id',
  /** column name */
  Price = 'price',
  /** column name */
  Seller = 'seller',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  UsdPrice = 'usd_price'
}

/** aggregate stddev on columns */
export type Marketplace_Nft_Buy_History_Stddev_Fields = {
  __typename?: 'marketplace_nft_buy_history_stddev_fields';
  btc_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
  token_id?: Maybe<Scalars['Float']>;
  usd_price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Marketplace_Nft_Buy_History_Stddev_Pop_Fields = {
  __typename?: 'marketplace_nft_buy_history_stddev_pop_fields';
  btc_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
  token_id?: Maybe<Scalars['Float']>;
  usd_price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Marketplace_Nft_Buy_History_Stddev_Samp_Fields = {
  __typename?: 'marketplace_nft_buy_history_stddev_samp_fields';
  btc_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
  token_id?: Maybe<Scalars['Float']>;
  usd_price?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Marketplace_Nft_Buy_History_Sum_Fields = {
  __typename?: 'marketplace_nft_buy_history_sum_fields';
  btc_price?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['bigint']>;
  token_id?: Maybe<Scalars['bigint']>;
  usd_price?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Marketplace_Nft_Buy_History_Var_Pop_Fields = {
  __typename?: 'marketplace_nft_buy_history_var_pop_fields';
  btc_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
  token_id?: Maybe<Scalars['Float']>;
  usd_price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Marketplace_Nft_Buy_History_Var_Samp_Fields = {
  __typename?: 'marketplace_nft_buy_history_var_samp_fields';
  btc_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
  token_id?: Maybe<Scalars['Float']>;
  usd_price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Marketplace_Nft_Buy_History_Variance_Fields = {
  __typename?: 'marketplace_nft_buy_history_variance_fields';
  btc_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
  token_id?: Maybe<Scalars['Float']>;
  usd_price?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Marketplace_Nft_Max_Fields = {
  __typename?: 'marketplace_nft_max_fields';
  creator?: Maybe<Scalars['String']>;
  denom_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  token_id?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Marketplace_Nft_Min_Fields = {
  __typename?: 'marketplace_nft_min_fields';
  creator?: Maybe<Scalars['String']>;
  denom_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  token_id?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "marketplace_nft". */
export type Marketplace_Nft_Order_By = {
  creator?: InputMaybe<Order_By>;
  denom_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nft_denom?: InputMaybe<Nft_Denom_Order_By>;
  nft_nft?: InputMaybe<Nft_Nft_Order_By>;
  price?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** select columns of table "marketplace_nft" */
export enum Marketplace_Nft_Select_Column {
  /** column name */
  Creator = 'creator',
  /** column name */
  DenomId = 'denom_id',
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Uid = 'uid'
}

/** aggregate stddev on columns */
export type Marketplace_Nft_Stddev_Fields = {
  __typename?: 'marketplace_nft_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  token_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Marketplace_Nft_Stddev_Pop_Fields = {
  __typename?: 'marketplace_nft_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  token_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Marketplace_Nft_Stddev_Samp_Fields = {
  __typename?: 'marketplace_nft_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  token_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Marketplace_Nft_Sum_Fields = {
  __typename?: 'marketplace_nft_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  token_id?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Marketplace_Nft_Var_Pop_Fields = {
  __typename?: 'marketplace_nft_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  token_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Marketplace_Nft_Var_Samp_Fields = {
  __typename?: 'marketplace_nft_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  token_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Marketplace_Nft_Variance_Fields = {
  __typename?: 'marketplace_nft_variance_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  token_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "message" */
export type Message = {
  __typename?: 'message';
  index: Scalars['bigint'];
  involved_accounts_addresses?: Maybe<Scalars['_text']>;
  /** An object relationship */
  transaction: Transaction;
  transaction_hash: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['jsonb'];
};


/** columns and relationships of "message" */
export type MessageValueArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "message" */
export type Message_Aggregate = {
  __typename?: 'message_aggregate';
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

/** aggregate fields of "message" */
export type Message_Aggregate_Fields = {
  __typename?: 'message_aggregate_fields';
  avg?: Maybe<Message_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
  stddev?: Maybe<Message_Stddev_Fields>;
  stddev_pop?: Maybe<Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Message_Stddev_Samp_Fields>;
  sum?: Maybe<Message_Sum_Fields>;
  var_pop?: Maybe<Message_Var_Pop_Fields>;
  var_samp?: Maybe<Message_Var_Samp_Fields>;
  variance?: Maybe<Message_Variance_Fields>;
};


/** aggregate fields of "message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "message" */
export type Message_Aggregate_Order_By = {
  avg?: InputMaybe<Message_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Message_Max_Order_By>;
  min?: InputMaybe<Message_Min_Order_By>;
  stddev?: InputMaybe<Message_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Message_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Message_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Message_Sum_Order_By>;
  var_pop?: InputMaybe<Message_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Message_Var_Samp_Order_By>;
  variance?: InputMaybe<Message_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Message_Avg_Fields = {
  __typename?: 'message_avg_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "message" */
export type Message_Avg_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: InputMaybe<Array<Message_Bool_Exp>>;
  _not?: InputMaybe<Message_Bool_Exp>;
  _or?: InputMaybe<Array<Message_Bool_Exp>>;
  index?: InputMaybe<Bigint_Comparison_Exp>;
  involved_accounts_addresses?: InputMaybe<_Text_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'message_max_fields';
  index?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "message" */
export type Message_Max_Order_By = {
  index?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'message_min_fields';
  index?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "message" */
export type Message_Min_Order_By = {
  index?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "message". */
export type Message_Order_By = {
  index?: InputMaybe<Order_By>;
  involved_accounts_addresses?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "message" */
export enum Message_Select_Column {
  /** column name */
  Index = 'index',
  /** column name */
  InvolvedAccountsAddresses = 'involved_accounts_addresses',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Message_Stddev_Fields = {
  __typename?: 'message_stddev_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "message" */
export type Message_Stddev_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Message_Stddev_Pop_Fields = {
  __typename?: 'message_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "message" */
export type Message_Stddev_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Message_Stddev_Samp_Fields = {
  __typename?: 'message_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "message" */
export type Message_Stddev_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Message_Sum_Fields = {
  __typename?: 'message_sum_fields';
  index?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "message" */
export type Message_Sum_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Message_Var_Pop_Fields = {
  __typename?: 'message_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "message" */
export type Message_Var_Pop_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Message_Var_Samp_Fields = {
  __typename?: 'message_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "message" */
export type Message_Var_Samp_Order_By = {
  index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Message_Variance_Fields = {
  __typename?: 'message_variance_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "message" */
export type Message_Variance_Order_By = {
  index?: InputMaybe<Order_By>;
};

export type Messages_By_Address_Args = {
  addresses?: InputMaybe<Scalars['_text']>;
  limit?: InputMaybe<Scalars['bigint']>;
  offset?: InputMaybe<Scalars['bigint']>;
  types?: InputMaybe<Scalars['_text']>;
};

export type Messages_By_Address_Distinct_On_Tx_Hash_Args = {
  addresses?: InputMaybe<Scalars['_text']>;
  limit?: InputMaybe<Scalars['bigint']>;
  offset?: InputMaybe<Scalars['bigint']>;
  types?: InputMaybe<Scalars['_text']>;
};

/** columns and relationships of "mint_params" */
export type Mint_Params = {
  __typename?: 'mint_params';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "mint_params" */
export type Mint_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "mint_params" */
export type Mint_Params_Aggregate = {
  __typename?: 'mint_params_aggregate';
  aggregate?: Maybe<Mint_Params_Aggregate_Fields>;
  nodes: Array<Mint_Params>;
};

/** aggregate fields of "mint_params" */
export type Mint_Params_Aggregate_Fields = {
  __typename?: 'mint_params_aggregate_fields';
  avg?: Maybe<Mint_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Mint_Params_Max_Fields>;
  min?: Maybe<Mint_Params_Min_Fields>;
  stddev?: Maybe<Mint_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Mint_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mint_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Mint_Params_Sum_Fields>;
  var_pop?: Maybe<Mint_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Mint_Params_Var_Samp_Fields>;
  variance?: Maybe<Mint_Params_Variance_Fields>;
};


/** aggregate fields of "mint_params" */
export type Mint_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Mint_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Mint_Params_Avg_Fields = {
  __typename?: 'mint_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "mint_params". All fields are combined with a logical 'AND'. */
export type Mint_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Mint_Params_Bool_Exp>>;
  _not?: InputMaybe<Mint_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Mint_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** aggregate max on columns */
export type Mint_Params_Max_Fields = {
  __typename?: 'mint_params_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Mint_Params_Min_Fields = {
  __typename?: 'mint_params_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "mint_params". */
export type Mint_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** select columns of table "mint_params" */
export enum Mint_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** aggregate stddev on columns */
export type Mint_Params_Stddev_Fields = {
  __typename?: 'mint_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Mint_Params_Stddev_Pop_Fields = {
  __typename?: 'mint_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Mint_Params_Stddev_Samp_Fields = {
  __typename?: 'mint_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Mint_Params_Sum_Fields = {
  __typename?: 'mint_params_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Mint_Params_Var_Pop_Fields = {
  __typename?: 'mint_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Mint_Params_Var_Samp_Fields = {
  __typename?: 'mint_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Mint_Params_Variance_Fields = {
  __typename?: 'mint_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "modules" */
export type Modules = {
  __typename?: 'modules';
  module_name: Scalars['String'];
};

/** aggregated selection of "modules" */
export type Modules_Aggregate = {
  __typename?: 'modules_aggregate';
  aggregate?: Maybe<Modules_Aggregate_Fields>;
  nodes: Array<Modules>;
};

/** aggregate fields of "modules" */
export type Modules_Aggregate_Fields = {
  __typename?: 'modules_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Modules_Max_Fields>;
  min?: Maybe<Modules_Min_Fields>;
};


/** aggregate fields of "modules" */
export type Modules_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Modules_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "modules". All fields are combined with a logical 'AND'. */
export type Modules_Bool_Exp = {
  _and?: InputMaybe<Array<Modules_Bool_Exp>>;
  _not?: InputMaybe<Modules_Bool_Exp>;
  _or?: InputMaybe<Array<Modules_Bool_Exp>>;
  module_name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Modules_Max_Fields = {
  __typename?: 'modules_max_fields';
  module_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Modules_Min_Fields = {
  __typename?: 'modules_min_fields';
  module_name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "modules". */
export type Modules_Order_By = {
  module_name?: InputMaybe<Order_By>;
};

/** select columns of table "modules" */
export enum Modules_Select_Column {
  /** column name */
  ModuleName = 'module_name'
}

/** columns and relationships of "nft_denom" */
export type Nft_Denom = {
  __typename?: 'nft_denom';
  contract_address_signer: Scalars['String'];
  data_json: Scalars['jsonb'];
  data_text?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  minter?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  owner: Scalars['String'];
  schema: Scalars['String'];
  symbol: Scalars['String'];
  traits?: Maybe<Scalars['String']>;
  /** An object relationship */
  transaction: Transaction;
  transaction_hash: Scalars['String'];
};


/** columns and relationships of "nft_denom" */
export type Nft_DenomData_JsonArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "nft_denom" */
export type Nft_Denom_Aggregate = {
  __typename?: 'nft_denom_aggregate';
  aggregate?: Maybe<Nft_Denom_Aggregate_Fields>;
  nodes: Array<Nft_Denom>;
};

/** aggregate fields of "nft_denom" */
export type Nft_Denom_Aggregate_Fields = {
  __typename?: 'nft_denom_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Nft_Denom_Max_Fields>;
  min?: Maybe<Nft_Denom_Min_Fields>;
};


/** aggregate fields of "nft_denom" */
export type Nft_Denom_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Denom_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "nft_denom". All fields are combined with a logical 'AND'. */
export type Nft_Denom_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Denom_Bool_Exp>>;
  _not?: InputMaybe<Nft_Denom_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Denom_Bool_Exp>>;
  contract_address_signer?: InputMaybe<String_Comparison_Exp>;
  data_json?: InputMaybe<Jsonb_Comparison_Exp>;
  data_text?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  minter?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  schema?: InputMaybe<String_Comparison_Exp>;
  symbol?: InputMaybe<String_Comparison_Exp>;
  traits?: InputMaybe<String_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nft_Denom_Max_Fields = {
  __typename?: 'nft_denom_max_fields';
  contract_address_signer?: Maybe<Scalars['String']>;
  data_text?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  schema?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Nft_Denom_Min_Fields = {
  __typename?: 'nft_denom_min_fields';
  contract_address_signer?: Maybe<Scalars['String']>;
  data_text?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  schema?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "nft_denom". */
export type Nft_Denom_Order_By = {
  contract_address_signer?: InputMaybe<Order_By>;
  data_json?: InputMaybe<Order_By>;
  data_text?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  minter?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  schema?: InputMaybe<Order_By>;
  symbol?: InputMaybe<Order_By>;
  traits?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** select columns of table "nft_denom" */
export enum Nft_Denom_Select_Column {
  /** column name */
  ContractAddressSigner = 'contract_address_signer',
  /** column name */
  DataJson = 'data_json',
  /** column name */
  DataText = 'data_text',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Minter = 'minter',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  Schema = 'schema',
  /** column name */
  Symbol = 'symbol',
  /** column name */
  Traits = 'traits',
  /** column name */
  TransactionHash = 'transaction_hash'
}

/** columns and relationships of "nft_nft" */
export type Nft_Nft = {
  __typename?: 'nft_nft';
  burned?: Maybe<Scalars['Boolean']>;
  contract_address_signer: Scalars['String'];
  data_json: Scalars['jsonb'];
  data_text: Scalars['String'];
  denom_id: Scalars['String'];
  id: Scalars['bigint'];
  name: Scalars['String'];
  /** An object relationship */
  nft_denom: Nft_Denom;
  owner: Scalars['String'];
  sender: Scalars['String'];
  /** An object relationship */
  transaction: Transaction;
  transaction_hash: Scalars['String'];
  uri: Scalars['String'];
};


/** columns and relationships of "nft_nft" */
export type Nft_NftData_JsonArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "nft_nft" */
export type Nft_Nft_Aggregate = {
  __typename?: 'nft_nft_aggregate';
  aggregate?: Maybe<Nft_Nft_Aggregate_Fields>;
  nodes: Array<Nft_Nft>;
};

/** aggregate fields of "nft_nft" */
export type Nft_Nft_Aggregate_Fields = {
  __typename?: 'nft_nft_aggregate_fields';
  avg?: Maybe<Nft_Nft_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nft_Nft_Max_Fields>;
  min?: Maybe<Nft_Nft_Min_Fields>;
  stddev?: Maybe<Nft_Nft_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Nft_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Nft_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Nft_Sum_Fields>;
  var_pop?: Maybe<Nft_Nft_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Nft_Var_Samp_Fields>;
  variance?: Maybe<Nft_Nft_Variance_Fields>;
};


/** aggregate fields of "nft_nft" */
export type Nft_Nft_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Nft_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Nft_Nft_Avg_Fields = {
  __typename?: 'nft_nft_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nft_nft". All fields are combined with a logical 'AND'. */
export type Nft_Nft_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Nft_Bool_Exp>>;
  _not?: InputMaybe<Nft_Nft_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Nft_Bool_Exp>>;
  burned?: InputMaybe<Boolean_Comparison_Exp>;
  contract_address_signer?: InputMaybe<String_Comparison_Exp>;
  data_json?: InputMaybe<Jsonb_Comparison_Exp>;
  data_text?: InputMaybe<String_Comparison_Exp>;
  denom_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nft_denom?: InputMaybe<Nft_Denom_Bool_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  sender?: InputMaybe<String_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  uri?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nft_Nft_Max_Fields = {
  __typename?: 'nft_nft_max_fields';
  contract_address_signer?: Maybe<Scalars['String']>;
  data_text?: Maybe<Scalars['String']>;
  denom_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Nft_Nft_Min_Fields = {
  __typename?: 'nft_nft_min_fields';
  contract_address_signer?: Maybe<Scalars['String']>;
  data_text?: Maybe<Scalars['String']>;
  denom_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  transaction_hash?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "nft_nft". */
export type Nft_Nft_Order_By = {
  burned?: InputMaybe<Order_By>;
  contract_address_signer?: InputMaybe<Order_By>;
  data_json?: InputMaybe<Order_By>;
  data_text?: InputMaybe<Order_By>;
  denom_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nft_denom?: InputMaybe<Nft_Denom_Order_By>;
  owner?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  uri?: InputMaybe<Order_By>;
};

/** select columns of table "nft_nft" */
export enum Nft_Nft_Select_Column {
  /** column name */
  Burned = 'burned',
  /** column name */
  ContractAddressSigner = 'contract_address_signer',
  /** column name */
  DataJson = 'data_json',
  /** column name */
  DataText = 'data_text',
  /** column name */
  DenomId = 'denom_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  Sender = 'sender',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Uri = 'uri'
}

/** aggregate stddev on columns */
export type Nft_Nft_Stddev_Fields = {
  __typename?: 'nft_nft_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nft_Nft_Stddev_Pop_Fields = {
  __typename?: 'nft_nft_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nft_Nft_Stddev_Samp_Fields = {
  __typename?: 'nft_nft_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nft_Nft_Sum_Fields = {
  __typename?: 'nft_nft_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Nft_Nft_Var_Pop_Fields = {
  __typename?: 'nft_nft_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nft_Nft_Var_Samp_Fields = {
  __typename?: 'nft_nft_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nft_Nft_Variance_Fields = {
  __typename?: 'nft_nft_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nft_transfer_history" */
export type Nft_Transfer_History = {
  __typename?: 'nft_transfer_history';
  denom_id: Scalars['String'];
  id: Scalars['bigint'];
  new_owner: Scalars['String'];
  /** An object relationship */
  nft_denom: Nft_Denom;
  old_owner: Scalars['String'];
  timestamp: Scalars['bigint'];
  /** An object relationship */
  transaction: Transaction;
  transaction_hash: Scalars['String'];
};

/** aggregated selection of "nft_transfer_history" */
export type Nft_Transfer_History_Aggregate = {
  __typename?: 'nft_transfer_history_aggregate';
  aggregate?: Maybe<Nft_Transfer_History_Aggregate_Fields>;
  nodes: Array<Nft_Transfer_History>;
};

/** aggregate fields of "nft_transfer_history" */
export type Nft_Transfer_History_Aggregate_Fields = {
  __typename?: 'nft_transfer_history_aggregate_fields';
  avg?: Maybe<Nft_Transfer_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nft_Transfer_History_Max_Fields>;
  min?: Maybe<Nft_Transfer_History_Min_Fields>;
  stddev?: Maybe<Nft_Transfer_History_Stddev_Fields>;
  stddev_pop?: Maybe<Nft_Transfer_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nft_Transfer_History_Stddev_Samp_Fields>;
  sum?: Maybe<Nft_Transfer_History_Sum_Fields>;
  var_pop?: Maybe<Nft_Transfer_History_Var_Pop_Fields>;
  var_samp?: Maybe<Nft_Transfer_History_Var_Samp_Fields>;
  variance?: Maybe<Nft_Transfer_History_Variance_Fields>;
};


/** aggregate fields of "nft_transfer_history" */
export type Nft_Transfer_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Nft_Transfer_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Nft_Transfer_History_Avg_Fields = {
  __typename?: 'nft_transfer_history_avg_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nft_transfer_history". All fields are combined with a logical 'AND'. */
export type Nft_Transfer_History_Bool_Exp = {
  _and?: InputMaybe<Array<Nft_Transfer_History_Bool_Exp>>;
  _not?: InputMaybe<Nft_Transfer_History_Bool_Exp>;
  _or?: InputMaybe<Array<Nft_Transfer_History_Bool_Exp>>;
  denom_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  new_owner?: InputMaybe<String_Comparison_Exp>;
  nft_denom?: InputMaybe<Nft_Denom_Bool_Exp>;
  old_owner?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Nft_Transfer_History_Max_Fields = {
  __typename?: 'nft_transfer_history_max_fields';
  denom_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  new_owner?: Maybe<Scalars['String']>;
  old_owner?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Nft_Transfer_History_Min_Fields = {
  __typename?: 'nft_transfer_history_min_fields';
  denom_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  new_owner?: Maybe<Scalars['String']>;
  old_owner?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "nft_transfer_history". */
export type Nft_Transfer_History_Order_By = {
  denom_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  new_owner?: InputMaybe<Order_By>;
  nft_denom?: InputMaybe<Nft_Denom_Order_By>;
  old_owner?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
};

/** select columns of table "nft_transfer_history" */
export enum Nft_Transfer_History_Select_Column {
  /** column name */
  DenomId = 'denom_id',
  /** column name */
  Id = 'id',
  /** column name */
  NewOwner = 'new_owner',
  /** column name */
  OldOwner = 'old_owner',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionHash = 'transaction_hash'
}

/** aggregate stddev on columns */
export type Nft_Transfer_History_Stddev_Fields = {
  __typename?: 'nft_transfer_history_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nft_Transfer_History_Stddev_Pop_Fields = {
  __typename?: 'nft_transfer_history_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nft_Transfer_History_Stddev_Samp_Fields = {
  __typename?: 'nft_transfer_history_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nft_Transfer_History_Sum_Fields = {
  __typename?: 'nft_transfer_history_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Nft_Transfer_History_Var_Pop_Fields = {
  __typename?: 'nft_transfer_history_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nft_Transfer_History_Var_Samp_Fields = {
  __typename?: 'nft_transfer_history_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nft_Transfer_History_Variance_Fields = {
  __typename?: 'nft_transfer_history_variance_fields';
  id?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
};

export type Nfts_By_Data_Property_Args = {
  limit?: InputMaybe<Scalars['bigint']>;
  offset?: InputMaybe<Scalars['bigint']>;
  property_name?: InputMaybe<Scalars['String']>;
};

export type Nfts_By_Expiration_Date_Args = {
  expiration_date?: InputMaybe<Scalars['bigint']>;
  limit?: InputMaybe<Scalars['bigint']>;
  offset?: InputMaybe<Scalars['bigint']>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pre_commit" */
export type Pre_Commit = {
  __typename?: 'pre_commit';
  height: Scalars['bigint'];
  proposer_priority: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** aggregated selection of "pre_commit" */
export type Pre_Commit_Aggregate = {
  __typename?: 'pre_commit_aggregate';
  aggregate?: Maybe<Pre_Commit_Aggregate_Fields>;
  nodes: Array<Pre_Commit>;
};

/** aggregate fields of "pre_commit" */
export type Pre_Commit_Aggregate_Fields = {
  __typename?: 'pre_commit_aggregate_fields';
  avg?: Maybe<Pre_Commit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pre_Commit_Max_Fields>;
  min?: Maybe<Pre_Commit_Min_Fields>;
  stddev?: Maybe<Pre_Commit_Stddev_Fields>;
  stddev_pop?: Maybe<Pre_Commit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pre_Commit_Stddev_Samp_Fields>;
  sum?: Maybe<Pre_Commit_Sum_Fields>;
  var_pop?: Maybe<Pre_Commit_Var_Pop_Fields>;
  var_samp?: Maybe<Pre_Commit_Var_Samp_Fields>;
  variance?: Maybe<Pre_Commit_Variance_Fields>;
};


/** aggregate fields of "pre_commit" */
export type Pre_Commit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pre_commit" */
export type Pre_Commit_Aggregate_Order_By = {
  avg?: InputMaybe<Pre_Commit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pre_Commit_Max_Order_By>;
  min?: InputMaybe<Pre_Commit_Min_Order_By>;
  stddev?: InputMaybe<Pre_Commit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pre_Commit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pre_Commit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pre_Commit_Sum_Order_By>;
  var_pop?: InputMaybe<Pre_Commit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pre_Commit_Var_Samp_Order_By>;
  variance?: InputMaybe<Pre_Commit_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Pre_Commit_Avg_Fields = {
  __typename?: 'pre_commit_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "pre_commit" */
export type Pre_Commit_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pre_commit". All fields are combined with a logical 'AND'. */
export type Pre_Commit_Bool_Exp = {
  _and?: InputMaybe<Array<Pre_Commit_Bool_Exp>>;
  _not?: InputMaybe<Pre_Commit_Bool_Exp>;
  _or?: InputMaybe<Array<Pre_Commit_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  proposer_priority?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Pre_Commit_Max_Fields = {
  __typename?: 'pre_commit_max_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "pre_commit" */
export type Pre_Commit_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pre_Commit_Min_Fields = {
  __typename?: 'pre_commit_min_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "pre_commit" */
export type Pre_Commit_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "pre_commit". */
export type Pre_Commit_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** select columns of table "pre_commit" */
export enum Pre_Commit_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ProposerPriority = 'proposer_priority',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** aggregate stddev on columns */
export type Pre_Commit_Stddev_Fields = {
  __typename?: 'pre_commit_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pre_Commit_Stddev_Pop_Fields = {
  __typename?: 'pre_commit_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pre_Commit_Stddev_Samp_Fields = {
  __typename?: 'pre_commit_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Pre_Commit_Sum_Fields = {
  __typename?: 'pre_commit_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "pre_commit" */
export type Pre_Commit_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Pre_Commit_Var_Pop_Fields = {
  __typename?: 'pre_commit_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "pre_commit" */
export type Pre_Commit_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pre_Commit_Var_Samp_Fields = {
  __typename?: 'pre_commit_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "pre_commit" */
export type Pre_Commit_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Pre_Commit_Variance_Fields = {
  __typename?: 'pre_commit_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "pre_commit" */
export type Pre_Commit_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal" */
export type Proposal = {
  __typename?: 'proposal';
  content: Scalars['jsonb'];
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposit_Aggregate;
  proposal_route: Scalars['String'];
  /** An object relationship */
  proposal_tally_result?: Maybe<Proposal_Tally_Result>;
  /** An array relationship */
  proposal_tally_results: Array<Proposal_Tally_Result>;
  /** An aggregate relationship */
  proposal_tally_results_aggregate: Proposal_Tally_Result_Aggregate;
  proposal_type: Scalars['String'];
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Vote_Aggregate;
  /** An object relationship */
  proposer: Account;
  proposer_address: Scalars['String'];
  /** An object relationship */
  staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot>;
  status?: Maybe<Scalars['String']>;
  submit_time: Scalars['timestamp'];
  title: Scalars['String'];
  /** An array relationship */
  validator_status_snapshots: Array<Proposal_Validator_Status_Snapshot>;
  /** An aggregate relationship */
  validator_status_snapshots_aggregate: Proposal_Validator_Status_Snapshot_Aggregate;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "proposal" */
export type ProposalContentArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Tally_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Tally_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalValidator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalValidator_Status_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};

/** aggregated selection of "proposal" */
export type Proposal_Aggregate = {
  __typename?: 'proposal_aggregate';
  aggregate?: Maybe<Proposal_Aggregate_Fields>;
  nodes: Array<Proposal>;
};

/** aggregate fields of "proposal" */
export type Proposal_Aggregate_Fields = {
  __typename?: 'proposal_aggregate_fields';
  avg?: Maybe<Proposal_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Max_Fields>;
  min?: Maybe<Proposal_Min_Fields>;
  stddev?: Maybe<Proposal_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Sum_Fields>;
  var_pop?: Maybe<Proposal_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Variance_Fields>;
};


/** aggregate fields of "proposal" */
export type Proposal_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal" */
export type Proposal_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Max_Order_By>;
  min?: InputMaybe<Proposal_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Proposal_Avg_Fields = {
  __typename?: 'proposal_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal" */
export type Proposal_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal". All fields are combined with a logical 'AND'. */
export type Proposal_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Bool_Exp>>;
  content?: InputMaybe<Jsonb_Comparison_Exp>;
  deposit_end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  proposal_route?: InputMaybe<String_Comparison_Exp>;
  proposal_tally_result?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  proposal_tally_results?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  proposal_type?: InputMaybe<String_Comparison_Exp>;
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>;
  proposer?: InputMaybe<Account_Bool_Exp>;
  proposer_address?: InputMaybe<String_Comparison_Exp>;
  staking_pool_snapshot?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  submit_time?: InputMaybe<Timestamp_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  voting_end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  voting_start_time?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** columns and relationships of "proposal_deposit" */
export type Proposal_Deposit = {
  __typename?: 'proposal_deposit';
  amount?: Maybe<Scalars['_coin']>;
  /** An object relationship */
  block?: Maybe<Block>;
  /** An object relationship */
  depositor?: Maybe<Account>;
  depositor_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
};

/** aggregated selection of "proposal_deposit" */
export type Proposal_Deposit_Aggregate = {
  __typename?: 'proposal_deposit_aggregate';
  aggregate?: Maybe<Proposal_Deposit_Aggregate_Fields>;
  nodes: Array<Proposal_Deposit>;
};

/** aggregate fields of "proposal_deposit" */
export type Proposal_Deposit_Aggregate_Fields = {
  __typename?: 'proposal_deposit_aggregate_fields';
  avg?: Maybe<Proposal_Deposit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Deposit_Max_Fields>;
  min?: Maybe<Proposal_Deposit_Min_Fields>;
  stddev?: Maybe<Proposal_Deposit_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Deposit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Deposit_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Deposit_Sum_Fields>;
  var_pop?: Maybe<Proposal_Deposit_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Deposit_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Deposit_Variance_Fields>;
};


/** aggregate fields of "proposal_deposit" */
export type Proposal_Deposit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal_deposit" */
export type Proposal_Deposit_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Deposit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Deposit_Max_Order_By>;
  min?: InputMaybe<Proposal_Deposit_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Deposit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Deposit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Deposit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Deposit_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Deposit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Deposit_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Deposit_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Proposal_Deposit_Avg_Fields = {
  __typename?: 'proposal_deposit_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_deposit". All fields are combined with a logical 'AND'. */
export type Proposal_Deposit_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Deposit_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Deposit_Bool_Exp>>;
  amount?: InputMaybe<_Coin_Comparison_Exp>;
  block?: InputMaybe<Block_Bool_Exp>;
  depositor?: InputMaybe<Account_Bool_Exp>;
  depositor_address?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Proposal_Deposit_Max_Fields = {
  __typename?: 'proposal_deposit_max_fields';
  depositor_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Max_Order_By = {
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Deposit_Min_Fields = {
  __typename?: 'proposal_deposit_min_fields';
  depositor_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Min_Order_By = {
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_deposit". */
export type Proposal_Deposit_Order_By = {
  amount?: InputMaybe<Order_By>;
  block?: InputMaybe<Block_Order_By>;
  depositor?: InputMaybe<Account_Order_By>;
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_deposit" */
export enum Proposal_Deposit_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DepositorAddress = 'depositor_address',
  /** column name */
  Height = 'height',
  /** column name */
  ProposalId = 'proposal_id'
}

/** aggregate stddev on columns */
export type Proposal_Deposit_Stddev_Fields = {
  __typename?: 'proposal_deposit_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Deposit_Stddev_Pop_Fields = {
  __typename?: 'proposal_deposit_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Deposit_Stddev_Samp_Fields = {
  __typename?: 'proposal_deposit_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Proposal_Deposit_Sum_Fields = {
  __typename?: 'proposal_deposit_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Proposal_Deposit_Var_Pop_Fields = {
  __typename?: 'proposal_deposit_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Deposit_Var_Samp_Fields = {
  __typename?: 'proposal_deposit_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Deposit_Variance_Fields = {
  __typename?: 'proposal_deposit_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "proposal_executor_result". All fields are combined with logical 'AND'. */
export type Proposal_Executor_Result_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['proposal_executor_result']>;
  _gt?: InputMaybe<Scalars['proposal_executor_result']>;
  _gte?: InputMaybe<Scalars['proposal_executor_result']>;
  _in?: InputMaybe<Array<Scalars['proposal_executor_result']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['proposal_executor_result']>;
  _lte?: InputMaybe<Scalars['proposal_executor_result']>;
  _neq?: InputMaybe<Scalars['proposal_executor_result']>;
  _nin?: InputMaybe<Array<Scalars['proposal_executor_result']>>;
};

/** aggregate max on columns */
export type Proposal_Max_Fields = {
  __typename?: 'proposal_max_fields';
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  proposal_route?: Maybe<Scalars['String']>;
  proposal_type?: Maybe<Scalars['String']>;
  proposer_address?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "proposal" */
export type Proposal_Max_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Min_Fields = {
  __typename?: 'proposal_min_fields';
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  proposal_route?: Maybe<Scalars['String']>;
  proposal_type?: Maybe<Scalars['String']>;
  proposer_address?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "proposal" */
export type Proposal_Min_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal". */
export type Proposal_Order_By = {
  content?: InputMaybe<Order_By>;
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_tally_result?: InputMaybe<Proposal_Tally_Result_Order_By>;
  proposal_tally_results_aggregate?: InputMaybe<Proposal_Tally_Result_Aggregate_Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>;
  proposer?: InputMaybe<Account_Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  staking_pool_snapshot?: InputMaybe<Proposal_Staking_Pool_Snapshot_Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** select columns of table "proposal" */
export enum Proposal_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DepositEndTime = 'deposit_end_time',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProposalRoute = 'proposal_route',
  /** column name */
  ProposalType = 'proposal_type',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitTime = 'submit_time',
  /** column name */
  Title = 'title',
  /** column name */
  VotingEndTime = 'voting_end_time',
  /** column name */
  VotingStartTime = 'voting_start_time'
}

/** columns and relationships of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot = {
  __typename?: 'proposal_staking_pool_snapshot';
  bonded_tokens: Scalars['numeric'];
  height: Scalars['bigint'];
  not_bonded_tokens: Scalars['numeric'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
};

/** aggregated selection of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Aggregate = {
  __typename?: 'proposal_staking_pool_snapshot_aggregate';
  aggregate?: Maybe<Proposal_Staking_Pool_Snapshot_Aggregate_Fields>;
  nodes: Array<Proposal_Staking_Pool_Snapshot>;
};

/** aggregate fields of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Aggregate_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_aggregate_fields';
  avg?: Maybe<Proposal_Staking_Pool_Snapshot_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Staking_Pool_Snapshot_Max_Fields>;
  min?: Maybe<Proposal_Staking_Pool_Snapshot_Min_Fields>;
  stddev?: Maybe<Proposal_Staking_Pool_Snapshot_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Staking_Pool_Snapshot_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Staking_Pool_Snapshot_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Staking_Pool_Snapshot_Sum_Fields>;
  var_pop?: Maybe<Proposal_Staking_Pool_Snapshot_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Staking_Pool_Snapshot_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Staking_Pool_Snapshot_Variance_Fields>;
};


/** aggregate fields of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Proposal_Staking_Pool_Snapshot_Avg_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_avg_fields';
  bonded_tokens?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  not_bonded_tokens?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "proposal_staking_pool_snapshot". All fields are combined with a logical 'AND'. */
export type Proposal_Staking_Pool_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Bool_Exp>>;
  bonded_tokens?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  not_bonded_tokens?: InputMaybe<Numeric_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Proposal_Staking_Pool_Snapshot_Max_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_max_fields';
  bonded_tokens?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['numeric']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Proposal_Staking_Pool_Snapshot_Min_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_min_fields';
  bonded_tokens?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['numeric']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "proposal_staking_pool_snapshot". */
export type Proposal_Staking_Pool_Snapshot_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_staking_pool_snapshot" */
export enum Proposal_Staking_Pool_Snapshot_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  ProposalId = 'proposal_id'
}

/** aggregate stddev on columns */
export type Proposal_Staking_Pool_Snapshot_Stddev_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_stddev_fields';
  bonded_tokens?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  not_bonded_tokens?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Staking_Pool_Snapshot_Stddev_Pop_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_stddev_pop_fields';
  bonded_tokens?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  not_bonded_tokens?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Staking_Pool_Snapshot_Stddev_Samp_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_stddev_samp_fields';
  bonded_tokens?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  not_bonded_tokens?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Proposal_Staking_Pool_Snapshot_Sum_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_sum_fields';
  bonded_tokens?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['numeric']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Proposal_Staking_Pool_Snapshot_Var_Pop_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_var_pop_fields';
  bonded_tokens?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  not_bonded_tokens?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Proposal_Staking_Pool_Snapshot_Var_Samp_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_var_samp_fields';
  bonded_tokens?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  not_bonded_tokens?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Proposal_Staking_Pool_Snapshot_Variance_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_variance_fields';
  bonded_tokens?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  not_bonded_tokens?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "proposal_status". All fields are combined with logical 'AND'. */
export type Proposal_Status_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['proposal_status']>;
  _gt?: InputMaybe<Scalars['proposal_status']>;
  _gte?: InputMaybe<Scalars['proposal_status']>;
  _in?: InputMaybe<Array<Scalars['proposal_status']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['proposal_status']>;
  _lte?: InputMaybe<Scalars['proposal_status']>;
  _neq?: InputMaybe<Scalars['proposal_status']>;
  _nin?: InputMaybe<Array<Scalars['proposal_status']>>;
};

/** aggregate stddev on columns */
export type Proposal_Stddev_Fields = {
  __typename?: 'proposal_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal" */
export type Proposal_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Stddev_Pop_Fields = {
  __typename?: 'proposal_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal" */
export type Proposal_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Stddev_Samp_Fields = {
  __typename?: 'proposal_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal" */
export type Proposal_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Proposal_Sum_Fields = {
  __typename?: 'proposal_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proposal" */
export type Proposal_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_tally_result" */
export type Proposal_Tally_Result = {
  __typename?: 'proposal_tally_result';
  abstain: Scalars['String'];
  height: Scalars['bigint'];
  no: Scalars['String'];
  no_with_veto: Scalars['String'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
  yes: Scalars['String'];
};

/** aggregated selection of "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate = {
  __typename?: 'proposal_tally_result_aggregate';
  aggregate?: Maybe<Proposal_Tally_Result_Aggregate_Fields>;
  nodes: Array<Proposal_Tally_Result>;
};

/** aggregate fields of "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_Fields = {
  __typename?: 'proposal_tally_result_aggregate_fields';
  avg?: Maybe<Proposal_Tally_Result_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Tally_Result_Max_Fields>;
  min?: Maybe<Proposal_Tally_Result_Min_Fields>;
  stddev?: Maybe<Proposal_Tally_Result_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Tally_Result_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Tally_Result_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Tally_Result_Sum_Fields>;
  var_pop?: Maybe<Proposal_Tally_Result_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Tally_Result_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Tally_Result_Variance_Fields>;
};


/** aggregate fields of "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Tally_Result_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Tally_Result_Max_Order_By>;
  min?: InputMaybe<Proposal_Tally_Result_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Tally_Result_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Tally_Result_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Tally_Result_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Tally_Result_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Tally_Result_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Tally_Result_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Tally_Result_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Proposal_Tally_Result_Avg_Fields = {
  __typename?: 'proposal_tally_result_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_tally_result". All fields are combined with a logical 'AND'. */
export type Proposal_Tally_Result_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Tally_Result_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Tally_Result_Bool_Exp>>;
  abstain?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  no?: InputMaybe<String_Comparison_Exp>;
  no_with_veto?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  yes?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Proposal_Tally_Result_Max_Fields = {
  __typename?: 'proposal_tally_result_max_fields';
  abstain?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  no?: Maybe<Scalars['String']>;
  no_with_veto?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  yes?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Max_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Tally_Result_Min_Fields = {
  __typename?: 'proposal_tally_result_min_fields';
  abstain?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  no?: Maybe<Scalars['String']>;
  no_with_veto?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  yes?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Min_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_tally_result". */
export type Proposal_Tally_Result_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_tally_result" */
export enum Proposal_Tally_Result_Select_Column {
  /** column name */
  Abstain = 'abstain',
  /** column name */
  Height = 'height',
  /** column name */
  No = 'no',
  /** column name */
  NoWithVeto = 'no_with_veto',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Yes = 'yes'
}

/** aggregate stddev on columns */
export type Proposal_Tally_Result_Stddev_Fields = {
  __typename?: 'proposal_tally_result_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Tally_Result_Stddev_Pop_Fields = {
  __typename?: 'proposal_tally_result_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Tally_Result_Stddev_Samp_Fields = {
  __typename?: 'proposal_tally_result_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Proposal_Tally_Result_Sum_Fields = {
  __typename?: 'proposal_tally_result_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Proposal_Tally_Result_Var_Pop_Fields = {
  __typename?: 'proposal_tally_result_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Tally_Result_Var_Samp_Fields = {
  __typename?: 'proposal_tally_result_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Tally_Result_Variance_Fields = {
  __typename?: 'proposal_tally_result_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot = {
  __typename?: 'proposal_validator_status_snapshot';
  height: Scalars['bigint'];
  id: Scalars['Int'];
  jailed: Scalars['Boolean'];
  /** An object relationship */
  proposal?: Maybe<Proposal>;
  proposal_id?: Maybe<Scalars['Int']>;
  status: Scalars['Int'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** aggregated selection of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate = {
  __typename?: 'proposal_validator_status_snapshot_aggregate';
  aggregate?: Maybe<Proposal_Validator_Status_Snapshot_Aggregate_Fields>;
  nodes: Array<Proposal_Validator_Status_Snapshot>;
};

/** aggregate fields of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_Fields = {
  __typename?: 'proposal_validator_status_snapshot_aggregate_fields';
  avg?: Maybe<Proposal_Validator_Status_Snapshot_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Validator_Status_Snapshot_Max_Fields>;
  min?: Maybe<Proposal_Validator_Status_Snapshot_Min_Fields>;
  stddev?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Validator_Status_Snapshot_Sum_Fields>;
  var_pop?: Maybe<Proposal_Validator_Status_Snapshot_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Validator_Status_Snapshot_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Validator_Status_Snapshot_Variance_Fields>;
};


/** aggregate fields of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Validator_Status_Snapshot_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Validator_Status_Snapshot_Max_Order_By>;
  min?: InputMaybe<Proposal_Validator_Status_Snapshot_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Validator_Status_Snapshot_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Validator_Status_Snapshot_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Validator_Status_Snapshot_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Validator_Status_Snapshot_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Proposal_Validator_Status_Snapshot_Avg_Fields = {
  __typename?: 'proposal_validator_status_snapshot_avg_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_validator_status_snapshot". All fields are combined with a logical 'AND'. */
export type Proposal_Validator_Status_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  jailed?: InputMaybe<Boolean_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Proposal_Validator_Status_Snapshot_Max_Fields = {
  __typename?: 'proposal_validator_status_snapshot_max_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Validator_Status_Snapshot_Min_Fields = {
  __typename?: 'proposal_validator_status_snapshot_min_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_validator_status_snapshot". */
export type Proposal_Validator_Status_Snapshot_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  jailed?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** aggregate stddev on columns */
export type Proposal_Validator_Status_Snapshot_Stddev_Fields = {
  __typename?: 'proposal_validator_status_snapshot_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Validator_Status_Snapshot_Stddev_Pop_Fields = {
  __typename?: 'proposal_validator_status_snapshot_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Validator_Status_Snapshot_Stddev_Samp_Fields = {
  __typename?: 'proposal_validator_status_snapshot_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Proposal_Validator_Status_Snapshot_Sum_Fields = {
  __typename?: 'proposal_validator_status_snapshot_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Proposal_Validator_Status_Snapshot_Var_Pop_Fields = {
  __typename?: 'proposal_validator_status_snapshot_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Validator_Status_Snapshot_Var_Samp_Fields = {
  __typename?: 'proposal_validator_status_snapshot_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Validator_Status_Snapshot_Variance_Fields = {
  __typename?: 'proposal_validator_status_snapshot_variance_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Proposal_Var_Pop_Fields = {
  __typename?: 'proposal_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal" */
export type Proposal_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Var_Samp_Fields = {
  __typename?: 'proposal_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal" */
export type Proposal_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Variance_Fields = {
  __typename?: 'proposal_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal" */
export type Proposal_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_vote" */
export type Proposal_Vote = {
  __typename?: 'proposal_vote';
  /** An object relationship */
  account: Account;
  height: Scalars['bigint'];
  option: Scalars['String'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
  voter_address: Scalars['String'];
};

/** aggregated selection of "proposal_vote" */
export type Proposal_Vote_Aggregate = {
  __typename?: 'proposal_vote_aggregate';
  aggregate?: Maybe<Proposal_Vote_Aggregate_Fields>;
  nodes: Array<Proposal_Vote>;
};

/** aggregate fields of "proposal_vote" */
export type Proposal_Vote_Aggregate_Fields = {
  __typename?: 'proposal_vote_aggregate_fields';
  avg?: Maybe<Proposal_Vote_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Vote_Max_Fields>;
  min?: Maybe<Proposal_Vote_Min_Fields>;
  stddev?: Maybe<Proposal_Vote_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Vote_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Vote_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Vote_Sum_Fields>;
  var_pop?: Maybe<Proposal_Vote_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Vote_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Vote_Variance_Fields>;
};


/** aggregate fields of "proposal_vote" */
export type Proposal_Vote_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal_vote" */
export type Proposal_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Vote_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Vote_Max_Order_By>;
  min?: InputMaybe<Proposal_Vote_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Vote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Vote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Vote_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Vote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Vote_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Vote_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Proposal_Vote_Avg_Fields = {
  __typename?: 'proposal_vote_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal_vote" */
export type Proposal_Vote_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_vote". All fields are combined with a logical 'AND'. */
export type Proposal_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Vote_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Vote_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  option?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  voter_address?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Proposal_Vote_Max_Fields = {
  __typename?: 'proposal_vote_max_fields';
  height?: Maybe<Scalars['bigint']>;
  option?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  voter_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "proposal_vote" */
export type Proposal_Vote_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Vote_Min_Fields = {
  __typename?: 'proposal_vote_min_fields';
  height?: Maybe<Scalars['bigint']>;
  option?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  voter_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "proposal_vote" */
export type Proposal_Vote_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_vote". */
export type Proposal_Vote_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_vote" */
export enum Proposal_Vote_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Option = 'option',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  VoterAddress = 'voter_address'
}

/** aggregate stddev on columns */
export type Proposal_Vote_Stddev_Fields = {
  __typename?: 'proposal_vote_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Vote_Stddev_Pop_Fields = {
  __typename?: 'proposal_vote_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Vote_Stddev_Samp_Fields = {
  __typename?: 'proposal_vote_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Proposal_Vote_Sum_Fields = {
  __typename?: 'proposal_vote_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proposal_vote" */
export type Proposal_Vote_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Proposal_Vote_Var_Pop_Fields = {
  __typename?: 'proposal_vote_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal_vote" */
export type Proposal_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Vote_Var_Samp_Fields = {
  __typename?: 'proposal_vote_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal_vote" */
export type Proposal_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Vote_Variance_Fields = {
  __typename?: 'proposal_vote_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal_vote" */
export type Proposal_Vote_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_vote_weighted" */
export type Proposal_Vote_Weighted = {
  __typename?: 'proposal_vote_weighted';
  /** An object relationship */
  account: Account;
  height: Scalars['bigint'];
  option: Scalars['String'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
  voter_address: Scalars['String'];
  weight: Scalars['String'];
};

/** aggregated selection of "proposal_vote_weighted" */
export type Proposal_Vote_Weighted_Aggregate = {
  __typename?: 'proposal_vote_weighted_aggregate';
  aggregate?: Maybe<Proposal_Vote_Weighted_Aggregate_Fields>;
  nodes: Array<Proposal_Vote_Weighted>;
};

/** aggregate fields of "proposal_vote_weighted" */
export type Proposal_Vote_Weighted_Aggregate_Fields = {
  __typename?: 'proposal_vote_weighted_aggregate_fields';
  avg?: Maybe<Proposal_Vote_Weighted_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Vote_Weighted_Max_Fields>;
  min?: Maybe<Proposal_Vote_Weighted_Min_Fields>;
  stddev?: Maybe<Proposal_Vote_Weighted_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Vote_Weighted_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Vote_Weighted_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Vote_Weighted_Sum_Fields>;
  var_pop?: Maybe<Proposal_Vote_Weighted_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Vote_Weighted_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Vote_Weighted_Variance_Fields>;
};


/** aggregate fields of "proposal_vote_weighted" */
export type Proposal_Vote_Weighted_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Vote_Weighted_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Proposal_Vote_Weighted_Avg_Fields = {
  __typename?: 'proposal_vote_weighted_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "proposal_vote_weighted". All fields are combined with a logical 'AND'. */
export type Proposal_Vote_Weighted_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Vote_Weighted_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Vote_Weighted_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Vote_Weighted_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  option?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  voter_address?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Proposal_Vote_Weighted_Max_Fields = {
  __typename?: 'proposal_vote_weighted_max_fields';
  height?: Maybe<Scalars['bigint']>;
  option?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  voter_address?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Proposal_Vote_Weighted_Min_Fields = {
  __typename?: 'proposal_vote_weighted_min_fields';
  height?: Maybe<Scalars['bigint']>;
  option?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  voter_address?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "proposal_vote_weighted". */
export type Proposal_Vote_Weighted_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_vote_weighted" */
export enum Proposal_Vote_Weighted_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Option = 'option',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  VoterAddress = 'voter_address',
  /** column name */
  Weight = 'weight'
}

/** aggregate stddev on columns */
export type Proposal_Vote_Weighted_Stddev_Fields = {
  __typename?: 'proposal_vote_weighted_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Vote_Weighted_Stddev_Pop_Fields = {
  __typename?: 'proposal_vote_weighted_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Vote_Weighted_Stddev_Samp_Fields = {
  __typename?: 'proposal_vote_weighted_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Proposal_Vote_Weighted_Sum_Fields = {
  __typename?: 'proposal_vote_weighted_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Proposal_Vote_Weighted_Var_Pop_Fields = {
  __typename?: 'proposal_vote_weighted_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Proposal_Vote_Weighted_Var_Samp_Fields = {
  __typename?: 'proposal_vote_weighted_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Proposal_Vote_Weighted_Variance_Fields = {
  __typename?: 'proposal_vote_weighted_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  action_account_balance?: Maybe<ActionBalance>;
  action_delegation?: Maybe<ActionDelegationResponse>;
  action_delegation_reward?: Maybe<Array<Maybe<ActionDelegationReward>>>;
  action_delegation_total?: Maybe<ActionBalance>;
  action_delegator_withdraw_address: ActionAddress;
  action_nft_transfer_events?: Maybe<ActionNftTransferEventsResponse>;
  action_redelegation?: Maybe<ActionRedelegationResponse>;
  action_unbonding_delegation?: Maybe<ActionUnbondingDelegationResponse>;
  action_unbonding_delegation_total?: Maybe<ActionBalance>;
  action_validator_commission_amount?: Maybe<ActionValidatorCommissionAmount>;
  action_validator_delegations?: Maybe<ActionDelegationResponse>;
  action_validator_redelegations_from?: Maybe<ActionRedelegationResponse>;
  action_validator_unbonding_delegations?: Maybe<ActionUnbondingDelegationResponse>;
  /** fetch data from the table: "adjusted_supply" */
  adjusted_supply: Array<Adjusted_Supply>;
  /** fetch aggregated fields from the table: "adjusted_supply" */
  adjusted_supply_aggregate: Adjusted_Supply_Aggregate;
  /** fetch data from the table: "apr" */
  apr: Array<Apr>;
  /** fetch aggregated fields from the table: "apr" */
  apr_aggregate: Apr_Aggregate;
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>;
  /** fetch aggregated fields from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis_aggregate: Average_Block_Time_From_Genesis_Aggregate;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch aggregated fields from the table: "average_block_time_per_day" */
  average_block_time_per_day_aggregate: Average_Block_Time_Per_Day_Aggregate;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch aggregated fields from the table: "average_block_time_per_hour" */
  average_block_time_per_hour_aggregate: Average_Block_Time_Per_Hour_Aggregate;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch aggregated fields from the table: "average_block_time_per_minute" */
  average_block_time_per_minute_aggregate: Average_Block_Time_Per_Minute_Aggregate;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table: "community_pool" */
  community_pool: Array<Community_Pool>;
  /** fetch aggregated fields from the table: "community_pool" */
  community_pool_aggregate: Community_Pool_Aggregate;
  /** fetch data from the table: "cosmwasm_clear_admin" */
  cosmwasm_clear_admin: Array<Cosmwasm_Clear_Admin>;
  /** fetch aggregated fields from the table: "cosmwasm_clear_admin" */
  cosmwasm_clear_admin_aggregate: Cosmwasm_Clear_Admin_Aggregate;
  /** fetch data from the table: "cosmwasm_clear_admin" using primary key columns */
  cosmwasm_clear_admin_by_pk?: Maybe<Cosmwasm_Clear_Admin>;
  /** fetch data from the table: "cosmwasm_execute" */
  cosmwasm_execute: Array<Cosmwasm_Execute>;
  /** fetch aggregated fields from the table: "cosmwasm_execute" */
  cosmwasm_execute_aggregate: Cosmwasm_Execute_Aggregate;
  /** fetch data from the table: "cosmwasm_execute" using primary key columns */
  cosmwasm_execute_by_pk?: Maybe<Cosmwasm_Execute>;
  /** fetch data from the table: "cosmwasm_instantiate" */
  cosmwasm_instantiate: Array<Cosmwasm_Instantiate>;
  /** fetch aggregated fields from the table: "cosmwasm_instantiate" */
  cosmwasm_instantiate_aggregate: Cosmwasm_Instantiate_Aggregate;
  /** fetch data from the table: "cosmwasm_instantiate" using primary key columns */
  cosmwasm_instantiate_by_pk?: Maybe<Cosmwasm_Instantiate>;
  /** fetch data from the table: "cosmwasm_migrate" */
  cosmwasm_migrate: Array<Cosmwasm_Migrate>;
  /** fetch aggregated fields from the table: "cosmwasm_migrate" */
  cosmwasm_migrate_aggregate: Cosmwasm_Migrate_Aggregate;
  /** fetch data from the table: "cosmwasm_migrate" using primary key columns */
  cosmwasm_migrate_by_pk?: Maybe<Cosmwasm_Migrate>;
  /** fetch data from the table: "cosmwasm_store" */
  cosmwasm_store: Array<Cosmwasm_Store>;
  /** fetch aggregated fields from the table: "cosmwasm_store" */
  cosmwasm_store_aggregate: Cosmwasm_Store_Aggregate;
  /** fetch data from the table: "cosmwasm_store" using primary key columns */
  cosmwasm_store_by_pk?: Maybe<Cosmwasm_Store>;
  /** fetch data from the table: "cosmwasm_update_admin" */
  cosmwasm_update_admin: Array<Cosmwasm_Update_Admin>;
  /** fetch aggregated fields from the table: "cosmwasm_update_admin" */
  cosmwasm_update_admin_aggregate: Cosmwasm_Update_Admin_Aggregate;
  /** fetch data from the table: "cosmwasm_update_admin" using primary key columns */
  cosmwasm_update_admin_by_pk?: Maybe<Cosmwasm_Update_Admin>;
  /** fetch data from the table: "cw20token_balance" */
  cw20token_balance: Array<Cw20token_Balance>;
  /** fetch aggregated fields from the table: "cw20token_balance" */
  cw20token_balance_aggregate: Cw20token_Balance_Aggregate;
  /** fetch data from the table: "cw20token_balance" using primary key columns */
  cw20token_balance_by_pk?: Maybe<Cw20token_Balance>;
  /** fetch data from the table: "cw20token_code_id" */
  cw20token_code_id: Array<Cw20token_Code_Id>;
  /** fetch data from the table: "cw20token_code_id" using primary key columns */
  cw20token_code_id_by_pk?: Maybe<Cw20token_Code_Id>;
  /** fetch data from the table: "cw20token_info" */
  cw20token_info: Array<Cw20token_Info>;
  /** fetch aggregated fields from the table: "cw20token_info" */
  cw20token_info_aggregate: Cw20token_Info_Aggregate;
  /** fetch data from the table: "cw20token_info" using primary key columns */
  cw20token_info_by_pk?: Maybe<Cw20token_Info>;
  /** fetch data from the table: "delegation" */
  delegation: Array<Delegation>;
  /** fetch aggregated fields from the table: "delegation" */
  delegation_aggregate: Delegation_Aggregate;
  /** execute function "denoms_by_data_property" which returns "nft_denom" */
  denoms_by_data_property: Array<Nft_Denom>;
  /** execute function "denoms_by_data_property" and query aggregates on result of table type "nft_denom" */
  denoms_by_data_property_aggregate: Nft_Denom_Aggregate;
  /** fetch data from the table: "distinct_message" */
  distinct_message: Array<Distinct_Message>;
  /** fetch aggregated fields from the table: "distinct_message" */
  distinct_message_aggregate: Distinct_Message_Aggregate;
  /** fetch data from the table: "distribution_params" */
  distribution_params: Array<Distribution_Params>;
  /** fetch aggregated fields from the table: "distribution_params" */
  distribution_params_aggregate: Distribution_Params_Aggregate;
  /** fetch data from the table: "distribution_params" using primary key columns */
  distribution_params_by_pk?: Maybe<Distribution_Params>;
  /** fetch data from the table: "double_sign_evidence" */
  double_sign_evidence: Array<Double_Sign_Evidence>;
  /** fetch aggregated fields from the table: "double_sign_evidence" */
  double_sign_evidence_aggregate: Double_Sign_Evidence_Aggregate;
  /** fetch data from the table: "double_sign_vote" */
  double_sign_vote: Array<Double_Sign_Vote>;
  /** fetch aggregated fields from the table: "double_sign_vote" */
  double_sign_vote_aggregate: Double_Sign_Vote_Aggregate;
  /** fetch data from the table: "double_sign_vote" using primary key columns */
  double_sign_vote_by_pk?: Maybe<Double_Sign_Vote>;
  /** fetch data from the table: "fee_grant_allowance" */
  fee_grant_allowance: Array<Fee_Grant_Allowance>;
  /** fetch aggregated fields from the table: "fee_grant_allowance" */
  fee_grant_allowance_aggregate: Fee_Grant_Allowance_Aggregate;
  /** fetch data from the table: "fee_grant_allowance" using primary key columns */
  fee_grant_allowance_by_pk?: Maybe<Fee_Grant_Allowance>;
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>;
  /** fetch aggregated fields from the table: "genesis" */
  genesis_aggregate: Genesis_Aggregate;
  /** fetch data from the table: "gov_params" */
  gov_params: Array<Gov_Params>;
  /** fetch aggregated fields from the table: "gov_params" */
  gov_params_aggregate: Gov_Params_Aggregate;
  /** fetch data from the table: "gov_params" using primary key columns */
  gov_params_by_pk?: Maybe<Gov_Params>;
  /** execute function "gravity_messages_by_address" which returns "message" */
  gravity_messages_by_address: Array<Message>;
  /** execute function "gravity_messages_by_address" and query aggregates on result of table type "message" */
  gravity_messages_by_address_aggregate: Message_Aggregate;
  /** fetch data from the table: "group_member" */
  group_member: Array<Group_Member>;
  /** fetch aggregated fields from the table: "group_member" */
  group_member_aggregate: Group_Member_Aggregate;
  /** fetch data from the table: "group_member" using primary key columns */
  group_member_by_pk?: Maybe<Group_Member>;
  /** fetch data from the table: "group_proposal" */
  group_proposal: Array<Group_Proposal>;
  /** fetch aggregated fields from the table: "group_proposal" */
  group_proposal_aggregate: Group_Proposal_Aggregate;
  /** fetch data from the table: "group_proposal" using primary key columns */
  group_proposal_by_pk?: Maybe<Group_Proposal>;
  /** fetch data from the table: "group_proposal_vote" */
  group_proposal_vote: Array<Group_Proposal_Vote>;
  /** fetch aggregated fields from the table: "group_proposal_vote" */
  group_proposal_vote_aggregate: Group_Proposal_Vote_Aggregate;
  /** fetch data from the table: "group_proposal_vote" using primary key columns */
  group_proposal_vote_by_pk?: Maybe<Group_Proposal_Vote>;
  /** fetch data from the table: "group_with_policy" */
  group_with_policy: Array<Group_With_Policy>;
  /** fetch aggregated fields from the table: "group_with_policy" */
  group_with_policy_aggregate: Group_With_Policy_Aggregate;
  /** fetch data from the table: "group_with_policy" using primary key columns */
  group_with_policy_by_pk?: Maybe<Group_With_Policy>;
  /** fetch data from the table: "inflation" */
  inflation: Array<Inflation>;
  /** fetch aggregated fields from the table: "inflation" */
  inflation_aggregate: Inflation_Aggregate;
  /** fetch data from the table: "marketplace_collection" */
  marketplace_collection: Array<Marketplace_Collection>;
  /** fetch aggregated fields from the table: "marketplace_collection" */
  marketplace_collection_aggregate: Marketplace_Collection_Aggregate;
  /** fetch data from the table: "marketplace_collection" using primary key columns */
  marketplace_collection_by_pk?: Maybe<Marketplace_Collection>;
  /** fetch data from the table: "marketplace_nft" */
  marketplace_nft: Array<Marketplace_Nft>;
  /** fetch aggregated fields from the table: "marketplace_nft" */
  marketplace_nft_aggregate: Marketplace_Nft_Aggregate;
  /** fetch data from the table: "marketplace_nft_buy_history" */
  marketplace_nft_buy_history: Array<Marketplace_Nft_Buy_History>;
  /** fetch aggregated fields from the table: "marketplace_nft_buy_history" */
  marketplace_nft_buy_history_aggregate: Marketplace_Nft_Buy_History_Aggregate;
  /** fetch data from the table: "marketplace_nft" using primary key columns */
  marketplace_nft_by_pk?: Maybe<Marketplace_Nft>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** execute function "messages_by_address" which returns "message" */
  messages_by_address: Array<Message>;
  /** execute function "messages_by_address" and query aggregates on result of table type "message" */
  messages_by_address_aggregate: Message_Aggregate;
  /** execute function "messages_by_address_distinct_on_tx_hash" which returns "distinct_message" */
  messages_by_address_distinct_on_tx_hash: Array<Distinct_Message>;
  /** execute function "messages_by_address_distinct_on_tx_hash" and query aggregates on result of table type "distinct_message" */
  messages_by_address_distinct_on_tx_hash_aggregate: Distinct_Message_Aggregate;
  /** fetch data from the table: "mint_params" */
  mint_params: Array<Mint_Params>;
  /** fetch aggregated fields from the table: "mint_params" */
  mint_params_aggregate: Mint_Params_Aggregate;
  /** fetch data from the table: "mint_params" using primary key columns */
  mint_params_by_pk?: Maybe<Mint_Params>;
  /** fetch data from the table: "modules" */
  modules: Array<Modules>;
  /** fetch aggregated fields from the table: "modules" */
  modules_aggregate: Modules_Aggregate;
  /** fetch data from the table: "modules" using primary key columns */
  modules_by_pk?: Maybe<Modules>;
  /** fetch data from the table: "nft_denom" */
  nft_denom: Array<Nft_Denom>;
  /** fetch aggregated fields from the table: "nft_denom" */
  nft_denom_aggregate: Nft_Denom_Aggregate;
  /** fetch data from the table: "nft_denom" using primary key columns */
  nft_denom_by_pk?: Maybe<Nft_Denom>;
  /** fetch data from the table: "nft_nft" */
  nft_nft: Array<Nft_Nft>;
  /** fetch aggregated fields from the table: "nft_nft" */
  nft_nft_aggregate: Nft_Nft_Aggregate;
  /** fetch data from the table: "nft_nft" using primary key columns */
  nft_nft_by_pk?: Maybe<Nft_Nft>;
  /** fetch data from the table: "nft_transfer_history" */
  nft_transfer_history: Array<Nft_Transfer_History>;
  /** fetch aggregated fields from the table: "nft_transfer_history" */
  nft_transfer_history_aggregate: Nft_Transfer_History_Aggregate;
  /** execute function "nfts_by_data_property" which returns "nft_nft" */
  nfts_by_data_property: Array<Nft_Nft>;
  /** execute function "nfts_by_data_property" and query aggregates on result of table type "nft_nft" */
  nfts_by_data_property_aggregate: Nft_Nft_Aggregate;
  /** execute function "nfts_by_expiration_date" which returns "nft_nft" */
  nfts_by_expiration_date: Array<Nft_Nft>;
  /** execute function "nfts_by_expiration_date" and query aggregates on result of table type "nft_nft" */
  nfts_by_expiration_date_aggregate: Nft_Nft_Aggregate;
  /** fetch data from the table: "pre_commit" */
  pre_commit: Array<Pre_Commit>;
  /** fetch aggregated fields from the table: "pre_commit" */
  pre_commit_aggregate: Pre_Commit_Aggregate;
  /** fetch data from the table: "proposal" */
  proposal: Array<Proposal>;
  /** fetch aggregated fields from the table: "proposal" */
  proposal_aggregate: Proposal_Aggregate;
  /** fetch data from the table: "proposal" using primary key columns */
  proposal_by_pk?: Maybe<Proposal>;
  /** fetch data from the table: "proposal_deposit" */
  proposal_deposit: Array<Proposal_Deposit>;
  /** fetch aggregated fields from the table: "proposal_deposit" */
  proposal_deposit_aggregate: Proposal_Deposit_Aggregate;
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch aggregated fields from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot_aggregate: Proposal_Staking_Pool_Snapshot_Aggregate;
  /** fetch data from the table: "proposal_staking_pool_snapshot" using primary key columns */
  proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table: "proposal_tally_result" */
  proposal_tally_result: Array<Proposal_Tally_Result>;
  /** fetch aggregated fields from the table: "proposal_tally_result" */
  proposal_tally_result_aggregate: Proposal_Tally_Result_Aggregate;
  /** fetch data from the table: "proposal_tally_result" using primary key columns */
  proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch aggregated fields from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot_aggregate: Proposal_Validator_Status_Snapshot_Aggregate;
  /** fetch data from the table: "proposal_validator_status_snapshot" using primary key columns */
  proposal_validator_status_snapshot_by_pk?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table: "proposal_vote" */
  proposal_vote: Array<Proposal_Vote>;
  /** fetch aggregated fields from the table: "proposal_vote" */
  proposal_vote_aggregate: Proposal_Vote_Aggregate;
  /** fetch data from the table: "proposal_vote_weighted" */
  proposal_vote_weighted: Array<Proposal_Vote_Weighted>;
  /** fetch aggregated fields from the table: "proposal_vote_weighted" */
  proposal_vote_weighted_aggregate: Proposal_Vote_Weighted_Aggregate;
  /** fetch data from the table: "slashing_params" */
  slashing_params: Array<Slashing_Params>;
  /** fetch aggregated fields from the table: "slashing_params" */
  slashing_params_aggregate: Slashing_Params_Aggregate;
  /** fetch data from the table: "slashing_params" using primary key columns */
  slashing_params_by_pk?: Maybe<Slashing_Params>;
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>;
  /** fetch aggregated fields from the table: "staking_params" */
  staking_params_aggregate: Staking_Params_Aggregate;
  /** fetch data from the table: "staking_params" using primary key columns */
  staking_params_by_pk?: Maybe<Staking_Params>;
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>;
  /** fetch aggregated fields from the table: "staking_pool" */
  staking_pool_aggregate: Staking_Pool_Aggregate;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch aggregated fields from the table: "supply" */
  supply_aggregate: Supply_Aggregate;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch aggregated fields from the table: "token_price" */
  token_price_aggregate: Token_Price_Aggregate;
  /** fetch data from the table: "token_price" using primary key columns */
  token_price_by_pk?: Maybe<Token_Price>;
  /** fetch data from the table: "token_price_history" */
  token_price_history: Array<Token_Price_History>;
  /** fetch aggregated fields from the table: "token_price_history" */
  token_price_history_aggregate: Token_Price_History_Aggregate;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch aggregated fields from the table: "token_unit" */
  token_unit_aggregate: Token_Unit_Aggregate;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "validator" */
  validator: Array<Validator>;
  /** fetch aggregated fields from the table: "validator" */
  validator_aggregate: Validator_Aggregate;
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>;
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>;
  /** fetch aggregated fields from the table: "validator_commission" */
  validator_commission_aggregate: Validator_Commission_Aggregate;
  /** fetch data from the table: "validator_commission" using primary key columns */
  validator_commission_by_pk?: Maybe<Validator_Commission>;
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>;
  /** fetch aggregated fields from the table: "validator_description" */
  validator_description_aggregate: Validator_Description_Aggregate;
  /** fetch data from the table: "validator_description" using primary key columns */
  validator_description_by_pk?: Maybe<Validator_Description>;
  /** fetch data from the table: "validator_info" */
  validator_info: Array<Validator_Info>;
  /** fetch aggregated fields from the table: "validator_info" */
  validator_info_aggregate: Validator_Info_Aggregate;
  /** fetch data from the table: "validator_info" using primary key columns */
  validator_info_by_pk?: Maybe<Validator_Info>;
  /** fetch data from the table: "validator_signing_info" */
  validator_signing_info: Array<Validator_Signing_Info>;
  /** fetch aggregated fields from the table: "validator_signing_info" */
  validator_signing_info_aggregate: Validator_Signing_Info_Aggregate;
  /** fetch data from the table: "validator_signing_info" using primary key columns */
  validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>;
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate;
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>;
  /** fetch data from the table: "vesting_account" */
  vesting_account: Array<Vesting_Account>;
  /** fetch aggregated fields from the table: "vesting_account" */
  vesting_account_aggregate: Vesting_Account_Aggregate;
  /** fetch data from the table: "vesting_account" using primary key columns */
  vesting_account_by_pk?: Maybe<Vesting_Account>;
  /** fetch data from the table: "vesting_period" */
  vesting_period: Array<Vesting_Period>;
  /** fetch aggregated fields from the table: "vesting_period" */
  vesting_period_aggregate: Vesting_Period_Aggregate;
};


export type Query_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootAction_Account_BalanceArgs = {
  address: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_DelegationArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Delegation_RewardArgs = {
  address: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Delegation_TotalArgs = {
  address: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Delegator_Withdraw_AddressArgs = {
  address: Scalars['String'];
};


export type Query_RootAction_Nft_Transfer_EventsArgs = {
  denom_id: Scalars['String'];
  from_time?: InputMaybe<Scalars['Int']>;
  to_time?: InputMaybe<Scalars['Int']>;
  token_id: Scalars['Int'];
};


export type Query_RootAction_RedelegationArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Unbonding_DelegationArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Unbonding_Delegation_TotalArgs = {
  address: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Validator_Commission_AmountArgs = {
  address: Scalars['String'];
};


export type Query_RootAction_Validator_DelegationsArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Validator_Redelegations_FromArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Validator_Unbonding_DelegationsArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAdjusted_SupplyArgs = {
  distinct_on?: InputMaybe<Array<Adjusted_Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Adjusted_Supply_Order_By>>;
  where?: InputMaybe<Adjusted_Supply_Bool_Exp>;
};


export type Query_RootAdjusted_Supply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Adjusted_Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Adjusted_Supply_Order_By>>;
  where?: InputMaybe<Adjusted_Supply_Bool_Exp>;
};


export type Query_RootAprArgs = {
  distinct_on?: InputMaybe<Array<Apr_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apr_Order_By>>;
  where?: InputMaybe<Apr_Bool_Exp>;
};


export type Query_RootApr_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apr_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apr_Order_By>>;
  where?: InputMaybe<Apr_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_From_Genesis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Query_RootBlockArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Query_RootBlock_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Query_RootBlock_By_PkArgs = {
  height: Scalars['bigint'];
};


export type Query_RootCommunity_PoolArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>;
  where?: InputMaybe<Community_Pool_Bool_Exp>;
};


export type Query_RootCommunity_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>;
  where?: InputMaybe<Community_Pool_Bool_Exp>;
};


export type Query_RootCosmwasm_Clear_AdminArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Clear_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Clear_Admin_Order_By>>;
  where?: InputMaybe<Cosmwasm_Clear_Admin_Bool_Exp>;
};


export type Query_RootCosmwasm_Clear_Admin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Clear_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Clear_Admin_Order_By>>;
  where?: InputMaybe<Cosmwasm_Clear_Admin_Bool_Exp>;
};


export type Query_RootCosmwasm_Clear_Admin_By_PkArgs = {
  index: Scalars['bigint'];
  transaction_hash: Scalars['String'];
};


export type Query_RootCosmwasm_ExecuteArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Execute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Execute_Order_By>>;
  where?: InputMaybe<Cosmwasm_Execute_Bool_Exp>;
};


export type Query_RootCosmwasm_Execute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Execute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Execute_Order_By>>;
  where?: InputMaybe<Cosmwasm_Execute_Bool_Exp>;
};


export type Query_RootCosmwasm_Execute_By_PkArgs = {
  index: Scalars['bigint'];
  transaction_hash: Scalars['String'];
};


export type Query_RootCosmwasm_InstantiateArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Instantiate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Instantiate_Order_By>>;
  where?: InputMaybe<Cosmwasm_Instantiate_Bool_Exp>;
};


export type Query_RootCosmwasm_Instantiate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Instantiate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Instantiate_Order_By>>;
  where?: InputMaybe<Cosmwasm_Instantiate_Bool_Exp>;
};


export type Query_RootCosmwasm_Instantiate_By_PkArgs = {
  index: Scalars['bigint'];
  transaction_hash: Scalars['String'];
};


export type Query_RootCosmwasm_MigrateArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Migrate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Migrate_Order_By>>;
  where?: InputMaybe<Cosmwasm_Migrate_Bool_Exp>;
};


export type Query_RootCosmwasm_Migrate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Migrate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Migrate_Order_By>>;
  where?: InputMaybe<Cosmwasm_Migrate_Bool_Exp>;
};


export type Query_RootCosmwasm_Migrate_By_PkArgs = {
  index: Scalars['bigint'];
  transaction_hash: Scalars['String'];
};


export type Query_RootCosmwasm_StoreArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Store_Order_By>>;
  where?: InputMaybe<Cosmwasm_Store_Bool_Exp>;
};


export type Query_RootCosmwasm_Store_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Store_Order_By>>;
  where?: InputMaybe<Cosmwasm_Store_Bool_Exp>;
};


export type Query_RootCosmwasm_Store_By_PkArgs = {
  index: Scalars['bigint'];
  transaction_hash: Scalars['String'];
};


export type Query_RootCosmwasm_Update_AdminArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Update_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Update_Admin_Order_By>>;
  where?: InputMaybe<Cosmwasm_Update_Admin_Bool_Exp>;
};


export type Query_RootCosmwasm_Update_Admin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Update_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Update_Admin_Order_By>>;
  where?: InputMaybe<Cosmwasm_Update_Admin_Bool_Exp>;
};


export type Query_RootCosmwasm_Update_Admin_By_PkArgs = {
  index: Scalars['bigint'];
  transaction_hash: Scalars['String'];
};


export type Query_RootCw20token_BalanceArgs = {
  distinct_on?: InputMaybe<Array<Cw20token_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cw20token_Balance_Order_By>>;
  where?: InputMaybe<Cw20token_Balance_Bool_Exp>;
};


export type Query_RootCw20token_Balance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cw20token_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cw20token_Balance_Order_By>>;
  where?: InputMaybe<Cw20token_Balance_Bool_Exp>;
};


export type Query_RootCw20token_Balance_By_PkArgs = {
  address: Scalars['String'];
  token: Scalars['String'];
};


export type Query_RootCw20token_Code_IdArgs = {
  distinct_on?: InputMaybe<Array<Cw20token_Code_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cw20token_Code_Id_Order_By>>;
  where?: InputMaybe<Cw20token_Code_Id_Bool_Exp>;
};


export type Query_RootCw20token_Code_Id_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCw20token_InfoArgs = {
  distinct_on?: InputMaybe<Array<Cw20token_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cw20token_Info_Order_By>>;
  where?: InputMaybe<Cw20token_Info_Bool_Exp>;
};


export type Query_RootCw20token_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cw20token_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cw20token_Info_Order_By>>;
  where?: InputMaybe<Cw20token_Info_Bool_Exp>;
};


export type Query_RootCw20token_Info_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootDelegationArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Delegation_Order_By>>;
  where?: InputMaybe<Delegation_Bool_Exp>;
};


export type Query_RootDelegation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Delegation_Order_By>>;
  where?: InputMaybe<Delegation_Bool_Exp>;
};


export type Query_RootDenoms_By_Data_PropertyArgs = {
  args: Denoms_By_Data_Property_Args;
  distinct_on?: InputMaybe<Array<Nft_Denom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Denom_Order_By>>;
  where?: InputMaybe<Nft_Denom_Bool_Exp>;
};


export type Query_RootDenoms_By_Data_Property_AggregateArgs = {
  args: Denoms_By_Data_Property_Args;
  distinct_on?: InputMaybe<Array<Nft_Denom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Denom_Order_By>>;
  where?: InputMaybe<Nft_Denom_Bool_Exp>;
};


export type Query_RootDistinct_MessageArgs = {
  distinct_on?: InputMaybe<Array<Distinct_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distinct_Message_Order_By>>;
  where?: InputMaybe<Distinct_Message_Bool_Exp>;
};


export type Query_RootDistinct_Message_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distinct_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distinct_Message_Order_By>>;
  where?: InputMaybe<Distinct_Message_Bool_Exp>;
};


export type Query_RootDistribution_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>;
  where?: InputMaybe<Distribution_Params_Bool_Exp>;
};


export type Query_RootDistribution_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>;
  where?: InputMaybe<Distribution_Params_Bool_Exp>;
};


export type Query_RootDistribution_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Query_RootDouble_Sign_Evidence_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Query_RootDouble_Sign_VoteArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


export type Query_RootDouble_Sign_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


export type Query_RootDouble_Sign_Vote_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFee_Grant_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Query_RootFee_Grant_Allowance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Query_RootFee_Grant_Allowance_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootGenesisArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Genesis_Order_By>>;
  where?: InputMaybe<Genesis_Bool_Exp>;
};


export type Query_RootGenesis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Genesis_Order_By>>;
  where?: InputMaybe<Genesis_Bool_Exp>;
};


export type Query_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Query_RootGov_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Query_RootGov_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootGravity_Messages_By_AddressArgs = {
  args: Gravity_Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootGravity_Messages_By_Address_AggregateArgs = {
  args: Gravity_Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootGroup_MemberArgs = {
  distinct_on?: InputMaybe<Array<Group_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Member_Order_By>>;
  where?: InputMaybe<Group_Member_Bool_Exp>;
};


export type Query_RootGroup_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Member_Order_By>>;
  where?: InputMaybe<Group_Member_Bool_Exp>;
};


export type Query_RootGroup_Member_By_PkArgs = {
  address: Scalars['String'];
  group_id: Scalars['Int'];
};


export type Query_RootGroup_ProposalArgs = {
  distinct_on?: InputMaybe<Array<Group_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Proposal_Order_By>>;
  where?: InputMaybe<Group_Proposal_Bool_Exp>;
};


export type Query_RootGroup_Proposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Proposal_Order_By>>;
  where?: InputMaybe<Group_Proposal_Bool_Exp>;
};


export type Query_RootGroup_Proposal_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootGroup_Proposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Group_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Group_Proposal_Vote_Bool_Exp>;
};


export type Query_RootGroup_Proposal_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Group_Proposal_Vote_Bool_Exp>;
};


export type Query_RootGroup_Proposal_Vote_By_PkArgs = {
  proposal_id: Scalars['Int'];
  voter: Scalars['String'];
};


export type Query_RootGroup_With_PolicyArgs = {
  distinct_on?: InputMaybe<Array<Group_With_Policy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_With_Policy_Order_By>>;
  where?: InputMaybe<Group_With_Policy_Bool_Exp>;
};


export type Query_RootGroup_With_Policy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_With_Policy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_With_Policy_Order_By>>;
  where?: InputMaybe<Group_With_Policy_Bool_Exp>;
};


export type Query_RootGroup_With_Policy_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInflationArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inflation_Order_By>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Query_RootInflation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inflation_Order_By>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Query_RootMarketplace_CollectionArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Collection_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marketplace_Collection_Order_By>>;
  where?: InputMaybe<Marketplace_Collection_Bool_Exp>;
};


export type Query_RootMarketplace_Collection_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Collection_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marketplace_Collection_Order_By>>;
  where?: InputMaybe<Marketplace_Collection_Bool_Exp>;
};


export type Query_RootMarketplace_Collection_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootMarketplace_NftArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marketplace_Nft_Order_By>>;
  where?: InputMaybe<Marketplace_Nft_Bool_Exp>;
};


export type Query_RootMarketplace_Nft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marketplace_Nft_Order_By>>;
  where?: InputMaybe<Marketplace_Nft_Bool_Exp>;
};


export type Query_RootMarketplace_Nft_Buy_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Nft_Buy_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marketplace_Nft_Buy_History_Order_By>>;
  where?: InputMaybe<Marketplace_Nft_Buy_History_Bool_Exp>;
};


export type Query_RootMarketplace_Nft_Buy_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Nft_Buy_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marketplace_Nft_Buy_History_Order_By>>;
  where?: InputMaybe<Marketplace_Nft_Buy_History_Bool_Exp>;
};


export type Query_RootMarketplace_Nft_By_PkArgs = {
  denom_id: Scalars['String'];
  token_id: Scalars['bigint'];
};


export type Query_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessages_By_AddressArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessages_By_Address_AggregateArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessages_By_Address_Distinct_On_Tx_HashArgs = {
  args: Messages_By_Address_Distinct_On_Tx_Hash_Args;
  distinct_on?: InputMaybe<Array<Distinct_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distinct_Message_Order_By>>;
  where?: InputMaybe<Distinct_Message_Bool_Exp>;
};


export type Query_RootMessages_By_Address_Distinct_On_Tx_Hash_AggregateArgs = {
  args: Messages_By_Address_Distinct_On_Tx_Hash_Args;
  distinct_on?: InputMaybe<Array<Distinct_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distinct_Message_Order_By>>;
  where?: InputMaybe<Distinct_Message_Bool_Exp>;
};


export type Query_RootMint_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>;
  where?: InputMaybe<Mint_Params_Bool_Exp>;
};


export type Query_RootMint_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>;
  where?: InputMaybe<Mint_Params_Bool_Exp>;
};


export type Query_RootMint_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootModulesArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Order_By>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Query_RootModules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Order_By>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Query_RootModules_By_PkArgs = {
  module_name: Scalars['String'];
};


export type Query_RootNft_DenomArgs = {
  distinct_on?: InputMaybe<Array<Nft_Denom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Denom_Order_By>>;
  where?: InputMaybe<Nft_Denom_Bool_Exp>;
};


export type Query_RootNft_Denom_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Denom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Denom_Order_By>>;
  where?: InputMaybe<Nft_Denom_Bool_Exp>;
};


export type Query_RootNft_Denom_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootNft_NftArgs = {
  distinct_on?: InputMaybe<Array<Nft_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Nft_Order_By>>;
  where?: InputMaybe<Nft_Nft_Bool_Exp>;
};


export type Query_RootNft_Nft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Nft_Order_By>>;
  where?: InputMaybe<Nft_Nft_Bool_Exp>;
};


export type Query_RootNft_Nft_By_PkArgs = {
  denom_id: Scalars['String'];
  id: Scalars['bigint'];
};


export type Query_RootNft_Transfer_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Nft_Transfer_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Transfer_History_Order_By>>;
  where?: InputMaybe<Nft_Transfer_History_Bool_Exp>;
};


export type Query_RootNft_Transfer_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Transfer_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Transfer_History_Order_By>>;
  where?: InputMaybe<Nft_Transfer_History_Bool_Exp>;
};


export type Query_RootNfts_By_Data_PropertyArgs = {
  args: Nfts_By_Data_Property_Args;
  distinct_on?: InputMaybe<Array<Nft_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Nft_Order_By>>;
  where?: InputMaybe<Nft_Nft_Bool_Exp>;
};


export type Query_RootNfts_By_Data_Property_AggregateArgs = {
  args: Nfts_By_Data_Property_Args;
  distinct_on?: InputMaybe<Array<Nft_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Nft_Order_By>>;
  where?: InputMaybe<Nft_Nft_Bool_Exp>;
};


export type Query_RootNfts_By_Expiration_DateArgs = {
  args: Nfts_By_Expiration_Date_Args;
  distinct_on?: InputMaybe<Array<Nft_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Nft_Order_By>>;
  where?: InputMaybe<Nft_Nft_Bool_Exp>;
};


export type Query_RootNfts_By_Expiration_Date_AggregateArgs = {
  args: Nfts_By_Expiration_Date_Args;
  distinct_on?: InputMaybe<Array<Nft_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Nft_Order_By>>;
  where?: InputMaybe<Nft_Nft_Bool_Exp>;
};


export type Query_RootPre_CommitArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Query_RootPre_Commit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Query_RootProposalArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Query_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Query_RootProposal_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Query_RootProposal_Deposit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Query_RootProposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Query_RootProposal_Tally_Result_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Query_RootProposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Query_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Validator_Status_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Validator_Status_Snapshot_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Query_RootProposal_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Query_RootProposal_Vote_WeightedArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Weighted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Weighted_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Weighted_Bool_Exp>;
};


export type Query_RootProposal_Vote_Weighted_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Weighted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Weighted_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Weighted_Bool_Exp>;
};


export type Query_RootSlashing_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>;
  where?: InputMaybe<Slashing_Params_Bool_Exp>;
};


export type Query_RootSlashing_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>;
  where?: InputMaybe<Slashing_Params_Bool_Exp>;
};


export type Query_RootSlashing_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Query_RootStaking_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Query_RootStaking_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Query_RootStaking_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Query_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Query_RootSupply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Query_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Query_RootToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Query_RootToken_PriceArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


export type Query_RootToken_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


export type Query_RootToken_Price_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootToken_Price_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


export type Query_RootToken_Price_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


export type Query_RootToken_UnitArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


export type Query_RootToken_Unit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_By_PkArgs = {
  hash: Scalars['String'];
};


export type Query_RootValidatorArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Order_By>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Query_RootValidator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Order_By>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Query_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Query_RootValidator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Query_RootValidator_Commission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Query_RootValidator_Commission_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootValidator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Query_RootValidator_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Query_RootValidator_Description_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootValidator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Query_RootValidator_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Query_RootValidator_Info_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Query_RootValidator_Signing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


export type Query_RootValidator_Signing_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


export type Query_RootValidator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootValidator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Query_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Query_RootValidator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootVesting_AccountArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};


export type Query_RootVesting_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};


export type Query_RootVesting_Account_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVesting_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};


export type Query_RootVesting_Period_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};

/** columns and relationships of "slashing_params" */
export type Slashing_Params = {
  __typename?: 'slashing_params';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "slashing_params" */
export type Slashing_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "slashing_params" */
export type Slashing_Params_Aggregate = {
  __typename?: 'slashing_params_aggregate';
  aggregate?: Maybe<Slashing_Params_Aggregate_Fields>;
  nodes: Array<Slashing_Params>;
};

/** aggregate fields of "slashing_params" */
export type Slashing_Params_Aggregate_Fields = {
  __typename?: 'slashing_params_aggregate_fields';
  avg?: Maybe<Slashing_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Slashing_Params_Max_Fields>;
  min?: Maybe<Slashing_Params_Min_Fields>;
  stddev?: Maybe<Slashing_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Slashing_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Slashing_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Slashing_Params_Sum_Fields>;
  var_pop?: Maybe<Slashing_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Slashing_Params_Var_Samp_Fields>;
  variance?: Maybe<Slashing_Params_Variance_Fields>;
};


/** aggregate fields of "slashing_params" */
export type Slashing_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Slashing_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Slashing_Params_Avg_Fields = {
  __typename?: 'slashing_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "slashing_params". All fields are combined with a logical 'AND'. */
export type Slashing_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Slashing_Params_Bool_Exp>>;
  _not?: InputMaybe<Slashing_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Slashing_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** aggregate max on columns */
export type Slashing_Params_Max_Fields = {
  __typename?: 'slashing_params_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Slashing_Params_Min_Fields = {
  __typename?: 'slashing_params_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "slashing_params". */
export type Slashing_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** select columns of table "slashing_params" */
export enum Slashing_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** aggregate stddev on columns */
export type Slashing_Params_Stddev_Fields = {
  __typename?: 'slashing_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Slashing_Params_Stddev_Pop_Fields = {
  __typename?: 'slashing_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Slashing_Params_Stddev_Samp_Fields = {
  __typename?: 'slashing_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Slashing_Params_Sum_Fields = {
  __typename?: 'slashing_params_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Slashing_Params_Var_Pop_Fields = {
  __typename?: 'slashing_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Slashing_Params_Var_Samp_Fields = {
  __typename?: 'slashing_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Slashing_Params_Variance_Fields = {
  __typename?: 'slashing_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

/** columns and relationships of "staking_params" */
export type Staking_Params = {
  __typename?: 'staking_params';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "staking_params" */
export type Staking_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "staking_params" */
export type Staking_Params_Aggregate = {
  __typename?: 'staking_params_aggregate';
  aggregate?: Maybe<Staking_Params_Aggregate_Fields>;
  nodes: Array<Staking_Params>;
};

/** aggregate fields of "staking_params" */
export type Staking_Params_Aggregate_Fields = {
  __typename?: 'staking_params_aggregate_fields';
  avg?: Maybe<Staking_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Staking_Params_Max_Fields>;
  min?: Maybe<Staking_Params_Min_Fields>;
  stddev?: Maybe<Staking_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Staking_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staking_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Staking_Params_Sum_Fields>;
  var_pop?: Maybe<Staking_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Staking_Params_Var_Samp_Fields>;
  variance?: Maybe<Staking_Params_Variance_Fields>;
};


/** aggregate fields of "staking_params" */
export type Staking_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staking_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Staking_Params_Avg_Fields = {
  __typename?: 'staking_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "staking_params". All fields are combined with a logical 'AND'. */
export type Staking_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Params_Bool_Exp>>;
  _not?: InputMaybe<Staking_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Staking_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** aggregate max on columns */
export type Staking_Params_Max_Fields = {
  __typename?: 'staking_params_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Staking_Params_Min_Fields = {
  __typename?: 'staking_params_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "staking_params". */
export type Staking_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** select columns of table "staking_params" */
export enum Staking_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** aggregate stddev on columns */
export type Staking_Params_Stddev_Fields = {
  __typename?: 'staking_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Staking_Params_Stddev_Pop_Fields = {
  __typename?: 'staking_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Staking_Params_Stddev_Samp_Fields = {
  __typename?: 'staking_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Staking_Params_Sum_Fields = {
  __typename?: 'staking_params_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Staking_Params_Var_Pop_Fields = {
  __typename?: 'staking_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Staking_Params_Var_Samp_Fields = {
  __typename?: 'staking_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Staking_Params_Variance_Fields = {
  __typename?: 'staking_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "staking_pool" */
export type Staking_Pool = {
  __typename?: 'staking_pool';
  bonded_tokens: Scalars['numeric'];
  height: Scalars['numeric'];
  not_bonded_tokens: Scalars['numeric'];
};

/** aggregated selection of "staking_pool" */
export type Staking_Pool_Aggregate = {
  __typename?: 'staking_pool_aggregate';
  aggregate?: Maybe<Staking_Pool_Aggregate_Fields>;
  nodes: Array<Staking_Pool>;
};

/** aggregate fields of "staking_pool" */
export type Staking_Pool_Aggregate_Fields = {
  __typename?: 'staking_pool_aggregate_fields';
  avg?: Maybe<Staking_Pool_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Staking_Pool_Max_Fields>;
  min?: Maybe<Staking_Pool_Min_Fields>;
  stddev?: Maybe<Staking_Pool_Stddev_Fields>;
  stddev_pop?: Maybe<Staking_Pool_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staking_Pool_Stddev_Samp_Fields>;
  sum?: Maybe<Staking_Pool_Sum_Fields>;
  var_pop?: Maybe<Staking_Pool_Var_Pop_Fields>;
  var_samp?: Maybe<Staking_Pool_Var_Samp_Fields>;
  variance?: Maybe<Staking_Pool_Variance_Fields>;
};


/** aggregate fields of "staking_pool" */
export type Staking_Pool_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Staking_Pool_Avg_Fields = {
  __typename?: 'staking_pool_avg_fields';
  bonded_tokens?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  not_bonded_tokens?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "staking_pool". All fields are combined with a logical 'AND'. */
export type Staking_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Pool_Bool_Exp>>;
  _not?: InputMaybe<Staking_Pool_Bool_Exp>;
  _or?: InputMaybe<Array<Staking_Pool_Bool_Exp>>;
  bonded_tokens?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Numeric_Comparison_Exp>;
  not_bonded_tokens?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Staking_Pool_Max_Fields = {
  __typename?: 'staking_pool_max_fields';
  bonded_tokens?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['numeric']>;
  not_bonded_tokens?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Staking_Pool_Min_Fields = {
  __typename?: 'staking_pool_min_fields';
  bonded_tokens?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['numeric']>;
  not_bonded_tokens?: Maybe<Scalars['numeric']>;
};

/** Ordering options when selecting data from "staking_pool". */
export type Staking_Pool_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
};

/** select columns of table "staking_pool" */
export enum Staking_Pool_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens'
}

/** aggregate stddev on columns */
export type Staking_Pool_Stddev_Fields = {
  __typename?: 'staking_pool_stddev_fields';
  bonded_tokens?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  not_bonded_tokens?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Staking_Pool_Stddev_Pop_Fields = {
  __typename?: 'staking_pool_stddev_pop_fields';
  bonded_tokens?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  not_bonded_tokens?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Staking_Pool_Stddev_Samp_Fields = {
  __typename?: 'staking_pool_stddev_samp_fields';
  bonded_tokens?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  not_bonded_tokens?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Staking_Pool_Sum_Fields = {
  __typename?: 'staking_pool_sum_fields';
  bonded_tokens?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['numeric']>;
  not_bonded_tokens?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Staking_Pool_Var_Pop_Fields = {
  __typename?: 'staking_pool_var_pop_fields';
  bonded_tokens?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  not_bonded_tokens?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Staking_Pool_Var_Samp_Fields = {
  __typename?: 'staking_pool_var_samp_fields';
  bonded_tokens?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  not_bonded_tokens?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Staking_Pool_Variance_Fields = {
  __typename?: 'staking_pool_variance_fields';
  bonded_tokens?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  not_bonded_tokens?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "adjusted_supply" */
  adjusted_supply: Array<Adjusted_Supply>;
  /** fetch aggregated fields from the table: "adjusted_supply" */
  adjusted_supply_aggregate: Adjusted_Supply_Aggregate;
  /** fetch data from the table: "apr" */
  apr: Array<Apr>;
  /** fetch aggregated fields from the table: "apr" */
  apr_aggregate: Apr_Aggregate;
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>;
  /** fetch aggregated fields from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis_aggregate: Average_Block_Time_From_Genesis_Aggregate;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch aggregated fields from the table: "average_block_time_per_day" */
  average_block_time_per_day_aggregate: Average_Block_Time_Per_Day_Aggregate;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch aggregated fields from the table: "average_block_time_per_hour" */
  average_block_time_per_hour_aggregate: Average_Block_Time_Per_Hour_Aggregate;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch aggregated fields from the table: "average_block_time_per_minute" */
  average_block_time_per_minute_aggregate: Average_Block_Time_Per_Minute_Aggregate;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table: "community_pool" */
  community_pool: Array<Community_Pool>;
  /** fetch aggregated fields from the table: "community_pool" */
  community_pool_aggregate: Community_Pool_Aggregate;
  /** fetch data from the table: "cosmwasm_clear_admin" */
  cosmwasm_clear_admin: Array<Cosmwasm_Clear_Admin>;
  /** fetch aggregated fields from the table: "cosmwasm_clear_admin" */
  cosmwasm_clear_admin_aggregate: Cosmwasm_Clear_Admin_Aggregate;
  /** fetch data from the table: "cosmwasm_clear_admin" using primary key columns */
  cosmwasm_clear_admin_by_pk?: Maybe<Cosmwasm_Clear_Admin>;
  /** fetch data from the table: "cosmwasm_execute" */
  cosmwasm_execute: Array<Cosmwasm_Execute>;
  /** fetch aggregated fields from the table: "cosmwasm_execute" */
  cosmwasm_execute_aggregate: Cosmwasm_Execute_Aggregate;
  /** fetch data from the table: "cosmwasm_execute" using primary key columns */
  cosmwasm_execute_by_pk?: Maybe<Cosmwasm_Execute>;
  /** fetch data from the table: "cosmwasm_instantiate" */
  cosmwasm_instantiate: Array<Cosmwasm_Instantiate>;
  /** fetch aggregated fields from the table: "cosmwasm_instantiate" */
  cosmwasm_instantiate_aggregate: Cosmwasm_Instantiate_Aggregate;
  /** fetch data from the table: "cosmwasm_instantiate" using primary key columns */
  cosmwasm_instantiate_by_pk?: Maybe<Cosmwasm_Instantiate>;
  /** fetch data from the table: "cosmwasm_migrate" */
  cosmwasm_migrate: Array<Cosmwasm_Migrate>;
  /** fetch aggregated fields from the table: "cosmwasm_migrate" */
  cosmwasm_migrate_aggregate: Cosmwasm_Migrate_Aggregate;
  /** fetch data from the table: "cosmwasm_migrate" using primary key columns */
  cosmwasm_migrate_by_pk?: Maybe<Cosmwasm_Migrate>;
  /** fetch data from the table: "cosmwasm_store" */
  cosmwasm_store: Array<Cosmwasm_Store>;
  /** fetch aggregated fields from the table: "cosmwasm_store" */
  cosmwasm_store_aggregate: Cosmwasm_Store_Aggregate;
  /** fetch data from the table: "cosmwasm_store" using primary key columns */
  cosmwasm_store_by_pk?: Maybe<Cosmwasm_Store>;
  /** fetch data from the table: "cosmwasm_update_admin" */
  cosmwasm_update_admin: Array<Cosmwasm_Update_Admin>;
  /** fetch aggregated fields from the table: "cosmwasm_update_admin" */
  cosmwasm_update_admin_aggregate: Cosmwasm_Update_Admin_Aggregate;
  /** fetch data from the table: "cosmwasm_update_admin" using primary key columns */
  cosmwasm_update_admin_by_pk?: Maybe<Cosmwasm_Update_Admin>;
  /** fetch data from the table: "cw20token_balance" */
  cw20token_balance: Array<Cw20token_Balance>;
  /** fetch aggregated fields from the table: "cw20token_balance" */
  cw20token_balance_aggregate: Cw20token_Balance_Aggregate;
  /** fetch data from the table: "cw20token_balance" using primary key columns */
  cw20token_balance_by_pk?: Maybe<Cw20token_Balance>;
  /** fetch data from the table: "cw20token_code_id" */
  cw20token_code_id: Array<Cw20token_Code_Id>;
  /** fetch data from the table: "cw20token_code_id" using primary key columns */
  cw20token_code_id_by_pk?: Maybe<Cw20token_Code_Id>;
  /** fetch data from the table: "cw20token_info" */
  cw20token_info: Array<Cw20token_Info>;
  /** fetch aggregated fields from the table: "cw20token_info" */
  cw20token_info_aggregate: Cw20token_Info_Aggregate;
  /** fetch data from the table: "cw20token_info" using primary key columns */
  cw20token_info_by_pk?: Maybe<Cw20token_Info>;
  /** fetch data from the table: "delegation" */
  delegation: Array<Delegation>;
  /** fetch aggregated fields from the table: "delegation" */
  delegation_aggregate: Delegation_Aggregate;
  /** execute function "denoms_by_data_property" which returns "nft_denom" */
  denoms_by_data_property: Array<Nft_Denom>;
  /** execute function "denoms_by_data_property" and query aggregates on result of table type "nft_denom" */
  denoms_by_data_property_aggregate: Nft_Denom_Aggregate;
  /** fetch data from the table: "distinct_message" */
  distinct_message: Array<Distinct_Message>;
  /** fetch aggregated fields from the table: "distinct_message" */
  distinct_message_aggregate: Distinct_Message_Aggregate;
  /** fetch data from the table: "distribution_params" */
  distribution_params: Array<Distribution_Params>;
  /** fetch aggregated fields from the table: "distribution_params" */
  distribution_params_aggregate: Distribution_Params_Aggregate;
  /** fetch data from the table: "distribution_params" using primary key columns */
  distribution_params_by_pk?: Maybe<Distribution_Params>;
  /** fetch data from the table: "double_sign_evidence" */
  double_sign_evidence: Array<Double_Sign_Evidence>;
  /** fetch aggregated fields from the table: "double_sign_evidence" */
  double_sign_evidence_aggregate: Double_Sign_Evidence_Aggregate;
  /** fetch data from the table: "double_sign_vote" */
  double_sign_vote: Array<Double_Sign_Vote>;
  /** fetch aggregated fields from the table: "double_sign_vote" */
  double_sign_vote_aggregate: Double_Sign_Vote_Aggregate;
  /** fetch data from the table: "double_sign_vote" using primary key columns */
  double_sign_vote_by_pk?: Maybe<Double_Sign_Vote>;
  /** fetch data from the table: "fee_grant_allowance" */
  fee_grant_allowance: Array<Fee_Grant_Allowance>;
  /** fetch aggregated fields from the table: "fee_grant_allowance" */
  fee_grant_allowance_aggregate: Fee_Grant_Allowance_Aggregate;
  /** fetch data from the table: "fee_grant_allowance" using primary key columns */
  fee_grant_allowance_by_pk?: Maybe<Fee_Grant_Allowance>;
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>;
  /** fetch aggregated fields from the table: "genesis" */
  genesis_aggregate: Genesis_Aggregate;
  /** fetch data from the table: "gov_params" */
  gov_params: Array<Gov_Params>;
  /** fetch aggregated fields from the table: "gov_params" */
  gov_params_aggregate: Gov_Params_Aggregate;
  /** fetch data from the table: "gov_params" using primary key columns */
  gov_params_by_pk?: Maybe<Gov_Params>;
  /** execute function "gravity_messages_by_address" which returns "message" */
  gravity_messages_by_address: Array<Message>;
  /** execute function "gravity_messages_by_address" and query aggregates on result of table type "message" */
  gravity_messages_by_address_aggregate: Message_Aggregate;
  /** fetch data from the table: "group_member" */
  group_member: Array<Group_Member>;
  /** fetch aggregated fields from the table: "group_member" */
  group_member_aggregate: Group_Member_Aggregate;
  /** fetch data from the table: "group_member" using primary key columns */
  group_member_by_pk?: Maybe<Group_Member>;
  /** fetch data from the table: "group_proposal" */
  group_proposal: Array<Group_Proposal>;
  /** fetch aggregated fields from the table: "group_proposal" */
  group_proposal_aggregate: Group_Proposal_Aggregate;
  /** fetch data from the table: "group_proposal" using primary key columns */
  group_proposal_by_pk?: Maybe<Group_Proposal>;
  /** fetch data from the table: "group_proposal_vote" */
  group_proposal_vote: Array<Group_Proposal_Vote>;
  /** fetch aggregated fields from the table: "group_proposal_vote" */
  group_proposal_vote_aggregate: Group_Proposal_Vote_Aggregate;
  /** fetch data from the table: "group_proposal_vote" using primary key columns */
  group_proposal_vote_by_pk?: Maybe<Group_Proposal_Vote>;
  /** fetch data from the table: "group_with_policy" */
  group_with_policy: Array<Group_With_Policy>;
  /** fetch aggregated fields from the table: "group_with_policy" */
  group_with_policy_aggregate: Group_With_Policy_Aggregate;
  /** fetch data from the table: "group_with_policy" using primary key columns */
  group_with_policy_by_pk?: Maybe<Group_With_Policy>;
  /** fetch data from the table: "inflation" */
  inflation: Array<Inflation>;
  /** fetch aggregated fields from the table: "inflation" */
  inflation_aggregate: Inflation_Aggregate;
  /** fetch data from the table: "marketplace_collection" */
  marketplace_collection: Array<Marketplace_Collection>;
  /** fetch aggregated fields from the table: "marketplace_collection" */
  marketplace_collection_aggregate: Marketplace_Collection_Aggregate;
  /** fetch data from the table: "marketplace_collection" using primary key columns */
  marketplace_collection_by_pk?: Maybe<Marketplace_Collection>;
  /** fetch data from the table: "marketplace_nft" */
  marketplace_nft: Array<Marketplace_Nft>;
  /** fetch aggregated fields from the table: "marketplace_nft" */
  marketplace_nft_aggregate: Marketplace_Nft_Aggregate;
  /** fetch data from the table: "marketplace_nft_buy_history" */
  marketplace_nft_buy_history: Array<Marketplace_Nft_Buy_History>;
  /** fetch aggregated fields from the table: "marketplace_nft_buy_history" */
  marketplace_nft_buy_history_aggregate: Marketplace_Nft_Buy_History_Aggregate;
  /** fetch data from the table: "marketplace_nft" using primary key columns */
  marketplace_nft_by_pk?: Maybe<Marketplace_Nft>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** execute function "messages_by_address" which returns "message" */
  messages_by_address: Array<Message>;
  /** execute function "messages_by_address" and query aggregates on result of table type "message" */
  messages_by_address_aggregate: Message_Aggregate;
  /** execute function "messages_by_address_distinct_on_tx_hash" which returns "distinct_message" */
  messages_by_address_distinct_on_tx_hash: Array<Distinct_Message>;
  /** execute function "messages_by_address_distinct_on_tx_hash" and query aggregates on result of table type "distinct_message" */
  messages_by_address_distinct_on_tx_hash_aggregate: Distinct_Message_Aggregate;
  /** fetch data from the table: "mint_params" */
  mint_params: Array<Mint_Params>;
  /** fetch aggregated fields from the table: "mint_params" */
  mint_params_aggregate: Mint_Params_Aggregate;
  /** fetch data from the table: "mint_params" using primary key columns */
  mint_params_by_pk?: Maybe<Mint_Params>;
  /** fetch data from the table: "modules" */
  modules: Array<Modules>;
  /** fetch aggregated fields from the table: "modules" */
  modules_aggregate: Modules_Aggregate;
  /** fetch data from the table: "modules" using primary key columns */
  modules_by_pk?: Maybe<Modules>;
  /** fetch data from the table: "nft_denom" */
  nft_denom: Array<Nft_Denom>;
  /** fetch aggregated fields from the table: "nft_denom" */
  nft_denom_aggregate: Nft_Denom_Aggregate;
  /** fetch data from the table: "nft_denom" using primary key columns */
  nft_denom_by_pk?: Maybe<Nft_Denom>;
  /** fetch data from the table: "nft_nft" */
  nft_nft: Array<Nft_Nft>;
  /** fetch aggregated fields from the table: "nft_nft" */
  nft_nft_aggregate: Nft_Nft_Aggregate;
  /** fetch data from the table: "nft_nft" using primary key columns */
  nft_nft_by_pk?: Maybe<Nft_Nft>;
  /** fetch data from the table: "nft_transfer_history" */
  nft_transfer_history: Array<Nft_Transfer_History>;
  /** fetch aggregated fields from the table: "nft_transfer_history" */
  nft_transfer_history_aggregate: Nft_Transfer_History_Aggregate;
  /** execute function "nfts_by_data_property" which returns "nft_nft" */
  nfts_by_data_property: Array<Nft_Nft>;
  /** execute function "nfts_by_data_property" and query aggregates on result of table type "nft_nft" */
  nfts_by_data_property_aggregate: Nft_Nft_Aggregate;
  /** execute function "nfts_by_expiration_date" which returns "nft_nft" */
  nfts_by_expiration_date: Array<Nft_Nft>;
  /** execute function "nfts_by_expiration_date" and query aggregates on result of table type "nft_nft" */
  nfts_by_expiration_date_aggregate: Nft_Nft_Aggregate;
  /** fetch data from the table: "pre_commit" */
  pre_commit: Array<Pre_Commit>;
  /** fetch aggregated fields from the table: "pre_commit" */
  pre_commit_aggregate: Pre_Commit_Aggregate;
  /** fetch data from the table: "proposal" */
  proposal: Array<Proposal>;
  /** fetch aggregated fields from the table: "proposal" */
  proposal_aggregate: Proposal_Aggregate;
  /** fetch data from the table: "proposal" using primary key columns */
  proposal_by_pk?: Maybe<Proposal>;
  /** fetch data from the table: "proposal_deposit" */
  proposal_deposit: Array<Proposal_Deposit>;
  /** fetch aggregated fields from the table: "proposal_deposit" */
  proposal_deposit_aggregate: Proposal_Deposit_Aggregate;
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch aggregated fields from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot_aggregate: Proposal_Staking_Pool_Snapshot_Aggregate;
  /** fetch data from the table: "proposal_staking_pool_snapshot" using primary key columns */
  proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table: "proposal_tally_result" */
  proposal_tally_result: Array<Proposal_Tally_Result>;
  /** fetch aggregated fields from the table: "proposal_tally_result" */
  proposal_tally_result_aggregate: Proposal_Tally_Result_Aggregate;
  /** fetch data from the table: "proposal_tally_result" using primary key columns */
  proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch aggregated fields from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot_aggregate: Proposal_Validator_Status_Snapshot_Aggregate;
  /** fetch data from the table: "proposal_validator_status_snapshot" using primary key columns */
  proposal_validator_status_snapshot_by_pk?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table: "proposal_vote" */
  proposal_vote: Array<Proposal_Vote>;
  /** fetch aggregated fields from the table: "proposal_vote" */
  proposal_vote_aggregate: Proposal_Vote_Aggregate;
  /** fetch data from the table: "proposal_vote_weighted" */
  proposal_vote_weighted: Array<Proposal_Vote_Weighted>;
  /** fetch aggregated fields from the table: "proposal_vote_weighted" */
  proposal_vote_weighted_aggregate: Proposal_Vote_Weighted_Aggregate;
  /** fetch data from the table: "slashing_params" */
  slashing_params: Array<Slashing_Params>;
  /** fetch aggregated fields from the table: "slashing_params" */
  slashing_params_aggregate: Slashing_Params_Aggregate;
  /** fetch data from the table: "slashing_params" using primary key columns */
  slashing_params_by_pk?: Maybe<Slashing_Params>;
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>;
  /** fetch aggregated fields from the table: "staking_params" */
  staking_params_aggregate: Staking_Params_Aggregate;
  /** fetch data from the table: "staking_params" using primary key columns */
  staking_params_by_pk?: Maybe<Staking_Params>;
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>;
  /** fetch aggregated fields from the table: "staking_pool" */
  staking_pool_aggregate: Staking_Pool_Aggregate;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch aggregated fields from the table: "supply" */
  supply_aggregate: Supply_Aggregate;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch aggregated fields from the table: "token_price" */
  token_price_aggregate: Token_Price_Aggregate;
  /** fetch data from the table: "token_price" using primary key columns */
  token_price_by_pk?: Maybe<Token_Price>;
  /** fetch data from the table: "token_price_history" */
  token_price_history: Array<Token_Price_History>;
  /** fetch aggregated fields from the table: "token_price_history" */
  token_price_history_aggregate: Token_Price_History_Aggregate;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch aggregated fields from the table: "token_unit" */
  token_unit_aggregate: Token_Unit_Aggregate;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "validator" */
  validator: Array<Validator>;
  /** fetch aggregated fields from the table: "validator" */
  validator_aggregate: Validator_Aggregate;
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>;
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>;
  /** fetch aggregated fields from the table: "validator_commission" */
  validator_commission_aggregate: Validator_Commission_Aggregate;
  /** fetch data from the table: "validator_commission" using primary key columns */
  validator_commission_by_pk?: Maybe<Validator_Commission>;
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>;
  /** fetch aggregated fields from the table: "validator_description" */
  validator_description_aggregate: Validator_Description_Aggregate;
  /** fetch data from the table: "validator_description" using primary key columns */
  validator_description_by_pk?: Maybe<Validator_Description>;
  /** fetch data from the table: "validator_info" */
  validator_info: Array<Validator_Info>;
  /** fetch aggregated fields from the table: "validator_info" */
  validator_info_aggregate: Validator_Info_Aggregate;
  /** fetch data from the table: "validator_info" using primary key columns */
  validator_info_by_pk?: Maybe<Validator_Info>;
  /** fetch data from the table: "validator_signing_info" */
  validator_signing_info: Array<Validator_Signing_Info>;
  /** fetch aggregated fields from the table: "validator_signing_info" */
  validator_signing_info_aggregate: Validator_Signing_Info_Aggregate;
  /** fetch data from the table: "validator_signing_info" using primary key columns */
  validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>;
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate;
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>;
  /** fetch data from the table: "vesting_account" */
  vesting_account: Array<Vesting_Account>;
  /** fetch aggregated fields from the table: "vesting_account" */
  vesting_account_aggregate: Vesting_Account_Aggregate;
  /** fetch data from the table: "vesting_account" using primary key columns */
  vesting_account_by_pk?: Maybe<Vesting_Account>;
  /** fetch data from the table: "vesting_period" */
  vesting_period: Array<Vesting_Period>;
  /** fetch aggregated fields from the table: "vesting_period" */
  vesting_period_aggregate: Vesting_Period_Aggregate;
};


export type Subscription_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootAdjusted_SupplyArgs = {
  distinct_on?: InputMaybe<Array<Adjusted_Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Adjusted_Supply_Order_By>>;
  where?: InputMaybe<Adjusted_Supply_Bool_Exp>;
};


export type Subscription_RootAdjusted_Supply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Adjusted_Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Adjusted_Supply_Order_By>>;
  where?: InputMaybe<Adjusted_Supply_Bool_Exp>;
};


export type Subscription_RootAprArgs = {
  distinct_on?: InputMaybe<Array<Apr_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apr_Order_By>>;
  where?: InputMaybe<Apr_Bool_Exp>;
};


export type Subscription_RootApr_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apr_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apr_Order_By>>;
  where?: InputMaybe<Apr_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_From_Genesis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootBlockArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Subscription_RootBlock_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Subscription_RootBlock_By_PkArgs = {
  height: Scalars['bigint'];
};


export type Subscription_RootCommunity_PoolArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>;
  where?: InputMaybe<Community_Pool_Bool_Exp>;
};


export type Subscription_RootCommunity_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>;
  where?: InputMaybe<Community_Pool_Bool_Exp>;
};


export type Subscription_RootCosmwasm_Clear_AdminArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Clear_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Clear_Admin_Order_By>>;
  where?: InputMaybe<Cosmwasm_Clear_Admin_Bool_Exp>;
};


export type Subscription_RootCosmwasm_Clear_Admin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Clear_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Clear_Admin_Order_By>>;
  where?: InputMaybe<Cosmwasm_Clear_Admin_Bool_Exp>;
};


export type Subscription_RootCosmwasm_Clear_Admin_By_PkArgs = {
  index: Scalars['bigint'];
  transaction_hash: Scalars['String'];
};


export type Subscription_RootCosmwasm_ExecuteArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Execute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Execute_Order_By>>;
  where?: InputMaybe<Cosmwasm_Execute_Bool_Exp>;
};


export type Subscription_RootCosmwasm_Execute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Execute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Execute_Order_By>>;
  where?: InputMaybe<Cosmwasm_Execute_Bool_Exp>;
};


export type Subscription_RootCosmwasm_Execute_By_PkArgs = {
  index: Scalars['bigint'];
  transaction_hash: Scalars['String'];
};


export type Subscription_RootCosmwasm_InstantiateArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Instantiate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Instantiate_Order_By>>;
  where?: InputMaybe<Cosmwasm_Instantiate_Bool_Exp>;
};


export type Subscription_RootCosmwasm_Instantiate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Instantiate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Instantiate_Order_By>>;
  where?: InputMaybe<Cosmwasm_Instantiate_Bool_Exp>;
};


export type Subscription_RootCosmwasm_Instantiate_By_PkArgs = {
  index: Scalars['bigint'];
  transaction_hash: Scalars['String'];
};


export type Subscription_RootCosmwasm_MigrateArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Migrate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Migrate_Order_By>>;
  where?: InputMaybe<Cosmwasm_Migrate_Bool_Exp>;
};


export type Subscription_RootCosmwasm_Migrate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Migrate_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Migrate_Order_By>>;
  where?: InputMaybe<Cosmwasm_Migrate_Bool_Exp>;
};


export type Subscription_RootCosmwasm_Migrate_By_PkArgs = {
  index: Scalars['bigint'];
  transaction_hash: Scalars['String'];
};


export type Subscription_RootCosmwasm_StoreArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Store_Order_By>>;
  where?: InputMaybe<Cosmwasm_Store_Bool_Exp>;
};


export type Subscription_RootCosmwasm_Store_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Store_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Store_Order_By>>;
  where?: InputMaybe<Cosmwasm_Store_Bool_Exp>;
};


export type Subscription_RootCosmwasm_Store_By_PkArgs = {
  index: Scalars['bigint'];
  transaction_hash: Scalars['String'];
};


export type Subscription_RootCosmwasm_Update_AdminArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Update_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Update_Admin_Order_By>>;
  where?: InputMaybe<Cosmwasm_Update_Admin_Bool_Exp>;
};


export type Subscription_RootCosmwasm_Update_Admin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cosmwasm_Update_Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cosmwasm_Update_Admin_Order_By>>;
  where?: InputMaybe<Cosmwasm_Update_Admin_Bool_Exp>;
};


export type Subscription_RootCosmwasm_Update_Admin_By_PkArgs = {
  index: Scalars['bigint'];
  transaction_hash: Scalars['String'];
};


export type Subscription_RootCw20token_BalanceArgs = {
  distinct_on?: InputMaybe<Array<Cw20token_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cw20token_Balance_Order_By>>;
  where?: InputMaybe<Cw20token_Balance_Bool_Exp>;
};


export type Subscription_RootCw20token_Balance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cw20token_Balance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cw20token_Balance_Order_By>>;
  where?: InputMaybe<Cw20token_Balance_Bool_Exp>;
};


export type Subscription_RootCw20token_Balance_By_PkArgs = {
  address: Scalars['String'];
  token: Scalars['String'];
};


export type Subscription_RootCw20token_Code_IdArgs = {
  distinct_on?: InputMaybe<Array<Cw20token_Code_Id_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cw20token_Code_Id_Order_By>>;
  where?: InputMaybe<Cw20token_Code_Id_Bool_Exp>;
};


export type Subscription_RootCw20token_Code_Id_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCw20token_InfoArgs = {
  distinct_on?: InputMaybe<Array<Cw20token_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cw20token_Info_Order_By>>;
  where?: InputMaybe<Cw20token_Info_Bool_Exp>;
};


export type Subscription_RootCw20token_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cw20token_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cw20token_Info_Order_By>>;
  where?: InputMaybe<Cw20token_Info_Bool_Exp>;
};


export type Subscription_RootCw20token_Info_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootDelegationArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Delegation_Order_By>>;
  where?: InputMaybe<Delegation_Bool_Exp>;
};


export type Subscription_RootDelegation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Delegation_Order_By>>;
  where?: InputMaybe<Delegation_Bool_Exp>;
};


export type Subscription_RootDenoms_By_Data_PropertyArgs = {
  args: Denoms_By_Data_Property_Args;
  distinct_on?: InputMaybe<Array<Nft_Denom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Denom_Order_By>>;
  where?: InputMaybe<Nft_Denom_Bool_Exp>;
};


export type Subscription_RootDenoms_By_Data_Property_AggregateArgs = {
  args: Denoms_By_Data_Property_Args;
  distinct_on?: InputMaybe<Array<Nft_Denom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Denom_Order_By>>;
  where?: InputMaybe<Nft_Denom_Bool_Exp>;
};


export type Subscription_RootDistinct_MessageArgs = {
  distinct_on?: InputMaybe<Array<Distinct_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distinct_Message_Order_By>>;
  where?: InputMaybe<Distinct_Message_Bool_Exp>;
};


export type Subscription_RootDistinct_Message_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distinct_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distinct_Message_Order_By>>;
  where?: InputMaybe<Distinct_Message_Bool_Exp>;
};


export type Subscription_RootDistribution_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>;
  where?: InputMaybe<Distribution_Params_Bool_Exp>;
};


export type Subscription_RootDistribution_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>;
  where?: InputMaybe<Distribution_Params_Bool_Exp>;
};


export type Subscription_RootDistribution_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Evidence_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_VoteArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Vote_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFee_Grant_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Subscription_RootFee_Grant_Allowance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Subscription_RootFee_Grant_Allowance_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootGenesisArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Genesis_Order_By>>;
  where?: InputMaybe<Genesis_Bool_Exp>;
};


export type Subscription_RootGenesis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Genesis_Order_By>>;
  where?: InputMaybe<Genesis_Bool_Exp>;
};


export type Subscription_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootGov_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootGov_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootGravity_Messages_By_AddressArgs = {
  args: Gravity_Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootGravity_Messages_By_Address_AggregateArgs = {
  args: Gravity_Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootGroup_MemberArgs = {
  distinct_on?: InputMaybe<Array<Group_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Member_Order_By>>;
  where?: InputMaybe<Group_Member_Bool_Exp>;
};


export type Subscription_RootGroup_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Member_Order_By>>;
  where?: InputMaybe<Group_Member_Bool_Exp>;
};


export type Subscription_RootGroup_Member_By_PkArgs = {
  address: Scalars['String'];
  group_id: Scalars['Int'];
};


export type Subscription_RootGroup_ProposalArgs = {
  distinct_on?: InputMaybe<Array<Group_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Proposal_Order_By>>;
  where?: InputMaybe<Group_Proposal_Bool_Exp>;
};


export type Subscription_RootGroup_Proposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Proposal_Order_By>>;
  where?: InputMaybe<Group_Proposal_Bool_Exp>;
};


export type Subscription_RootGroup_Proposal_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootGroup_Proposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Group_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Group_Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootGroup_Proposal_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Group_Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootGroup_Proposal_Vote_By_PkArgs = {
  proposal_id: Scalars['Int'];
  voter: Scalars['String'];
};


export type Subscription_RootGroup_With_PolicyArgs = {
  distinct_on?: InputMaybe<Array<Group_With_Policy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_With_Policy_Order_By>>;
  where?: InputMaybe<Group_With_Policy_Bool_Exp>;
};


export type Subscription_RootGroup_With_Policy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_With_Policy_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Group_With_Policy_Order_By>>;
  where?: InputMaybe<Group_With_Policy_Bool_Exp>;
};


export type Subscription_RootGroup_With_Policy_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInflationArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inflation_Order_By>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Subscription_RootInflation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inflation_Order_By>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Subscription_RootMarketplace_CollectionArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Collection_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marketplace_Collection_Order_By>>;
  where?: InputMaybe<Marketplace_Collection_Bool_Exp>;
};


export type Subscription_RootMarketplace_Collection_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Collection_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marketplace_Collection_Order_By>>;
  where?: InputMaybe<Marketplace_Collection_Bool_Exp>;
};


export type Subscription_RootMarketplace_Collection_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootMarketplace_NftArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marketplace_Nft_Order_By>>;
  where?: InputMaybe<Marketplace_Nft_Bool_Exp>;
};


export type Subscription_RootMarketplace_Nft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marketplace_Nft_Order_By>>;
  where?: InputMaybe<Marketplace_Nft_Bool_Exp>;
};


export type Subscription_RootMarketplace_Nft_Buy_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Nft_Buy_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marketplace_Nft_Buy_History_Order_By>>;
  where?: InputMaybe<Marketplace_Nft_Buy_History_Bool_Exp>;
};


export type Subscription_RootMarketplace_Nft_Buy_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Nft_Buy_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marketplace_Nft_Buy_History_Order_By>>;
  where?: InputMaybe<Marketplace_Nft_Buy_History_Bool_Exp>;
};


export type Subscription_RootMarketplace_Nft_By_PkArgs = {
  denom_id: Scalars['String'];
  token_id: Scalars['bigint'];
};


export type Subscription_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessages_By_AddressArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessages_By_Address_AggregateArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessages_By_Address_Distinct_On_Tx_HashArgs = {
  args: Messages_By_Address_Distinct_On_Tx_Hash_Args;
  distinct_on?: InputMaybe<Array<Distinct_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distinct_Message_Order_By>>;
  where?: InputMaybe<Distinct_Message_Bool_Exp>;
};


export type Subscription_RootMessages_By_Address_Distinct_On_Tx_Hash_AggregateArgs = {
  args: Messages_By_Address_Distinct_On_Tx_Hash_Args;
  distinct_on?: InputMaybe<Array<Distinct_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distinct_Message_Order_By>>;
  where?: InputMaybe<Distinct_Message_Bool_Exp>;
};


export type Subscription_RootMint_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>;
  where?: InputMaybe<Mint_Params_Bool_Exp>;
};


export type Subscription_RootMint_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>;
  where?: InputMaybe<Mint_Params_Bool_Exp>;
};


export type Subscription_RootMint_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootModulesArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Order_By>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Subscription_RootModules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Order_By>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Subscription_RootModules_By_PkArgs = {
  module_name: Scalars['String'];
};


export type Subscription_RootNft_DenomArgs = {
  distinct_on?: InputMaybe<Array<Nft_Denom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Denom_Order_By>>;
  where?: InputMaybe<Nft_Denom_Bool_Exp>;
};


export type Subscription_RootNft_Denom_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Denom_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Denom_Order_By>>;
  where?: InputMaybe<Nft_Denom_Bool_Exp>;
};


export type Subscription_RootNft_Denom_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootNft_NftArgs = {
  distinct_on?: InputMaybe<Array<Nft_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Nft_Order_By>>;
  where?: InputMaybe<Nft_Nft_Bool_Exp>;
};


export type Subscription_RootNft_Nft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Nft_Order_By>>;
  where?: InputMaybe<Nft_Nft_Bool_Exp>;
};


export type Subscription_RootNft_Nft_By_PkArgs = {
  denom_id: Scalars['String'];
  id: Scalars['bigint'];
};


export type Subscription_RootNft_Transfer_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Nft_Transfer_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Transfer_History_Order_By>>;
  where?: InputMaybe<Nft_Transfer_History_Bool_Exp>;
};


export type Subscription_RootNft_Transfer_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Nft_Transfer_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Transfer_History_Order_By>>;
  where?: InputMaybe<Nft_Transfer_History_Bool_Exp>;
};


export type Subscription_RootNfts_By_Data_PropertyArgs = {
  args: Nfts_By_Data_Property_Args;
  distinct_on?: InputMaybe<Array<Nft_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Nft_Order_By>>;
  where?: InputMaybe<Nft_Nft_Bool_Exp>;
};


export type Subscription_RootNfts_By_Data_Property_AggregateArgs = {
  args: Nfts_By_Data_Property_Args;
  distinct_on?: InputMaybe<Array<Nft_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Nft_Order_By>>;
  where?: InputMaybe<Nft_Nft_Bool_Exp>;
};


export type Subscription_RootNfts_By_Expiration_DateArgs = {
  args: Nfts_By_Expiration_Date_Args;
  distinct_on?: InputMaybe<Array<Nft_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Nft_Order_By>>;
  where?: InputMaybe<Nft_Nft_Bool_Exp>;
};


export type Subscription_RootNfts_By_Expiration_Date_AggregateArgs = {
  args: Nfts_By_Expiration_Date_Args;
  distinct_on?: InputMaybe<Array<Nft_Nft_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Nft_Nft_Order_By>>;
  where?: InputMaybe<Nft_Nft_Bool_Exp>;
};


export type Subscription_RootPre_CommitArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Subscription_RootPre_Commit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Subscription_RootProposalArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Subscription_RootProposal_Deposit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Subscription_RootProposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_Result_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Subscription_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_Snapshot_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootProposal_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootProposal_Vote_WeightedArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Weighted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Weighted_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Weighted_Bool_Exp>;
};


export type Subscription_RootProposal_Vote_Weighted_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Weighted_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Weighted_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Weighted_Bool_Exp>;
};


export type Subscription_RootSlashing_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>;
  where?: InputMaybe<Slashing_Params_Bool_Exp>;
};


export type Subscription_RootSlashing_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>;
  where?: InputMaybe<Slashing_Params_Bool_Exp>;
};


export type Subscription_RootSlashing_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootStaking_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Subscription_RootSupply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Subscription_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_PriceArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


export type Subscription_RootToken_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


export type Subscription_RootToken_Price_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootToken_Price_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


export type Subscription_RootToken_Price_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


export type Subscription_RootToken_UnitArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


export type Subscription_RootToken_Unit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_By_PkArgs = {
  hash: Scalars['String'];
};


export type Subscription_RootValidatorArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Order_By>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Order_By>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Subscription_RootValidator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_Commission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_Commission_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_Description_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Info_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Subscription_RootValidator_Signing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Signing_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootVesting_AccountArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};


export type Subscription_RootVesting_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};


export type Subscription_RootVesting_Account_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVesting_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};


export type Subscription_RootVesting_Period_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};

/** columns and relationships of "supply" */
export type Supply = {
  __typename?: 'supply';
  coins: Scalars['_coin'];
  height: Scalars['bigint'];
};

/** aggregated selection of "supply" */
export type Supply_Aggregate = {
  __typename?: 'supply_aggregate';
  aggregate?: Maybe<Supply_Aggregate_Fields>;
  nodes: Array<Supply>;
};

/** aggregate fields of "supply" */
export type Supply_Aggregate_Fields = {
  __typename?: 'supply_aggregate_fields';
  avg?: Maybe<Supply_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Supply_Max_Fields>;
  min?: Maybe<Supply_Min_Fields>;
  stddev?: Maybe<Supply_Stddev_Fields>;
  stddev_pop?: Maybe<Supply_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Supply_Stddev_Samp_Fields>;
  sum?: Maybe<Supply_Sum_Fields>;
  var_pop?: Maybe<Supply_Var_Pop_Fields>;
  var_samp?: Maybe<Supply_Var_Samp_Fields>;
  variance?: Maybe<Supply_Variance_Fields>;
};


/** aggregate fields of "supply" */
export type Supply_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Supply_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Supply_Avg_Fields = {
  __typename?: 'supply_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "supply". All fields are combined with a logical 'AND'. */
export type Supply_Bool_Exp = {
  _and?: InputMaybe<Array<Supply_Bool_Exp>>;
  _not?: InputMaybe<Supply_Bool_Exp>;
  _or?: InputMaybe<Array<Supply_Bool_Exp>>;
  coins?: InputMaybe<_Coin_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Supply_Max_Fields = {
  __typename?: 'supply_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Supply_Min_Fields = {
  __typename?: 'supply_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "supply". */
export type Supply_Order_By = {
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "supply" */
export enum Supply_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Supply_Stddev_Fields = {
  __typename?: 'supply_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Supply_Stddev_Pop_Fields = {
  __typename?: 'supply_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Supply_Stddev_Samp_Fields = {
  __typename?: 'supply_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Supply_Sum_Fields = {
  __typename?: 'supply_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Supply_Var_Pop_Fields = {
  __typename?: 'supply_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Supply_Var_Samp_Fields = {
  __typename?: 'supply_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Supply_Variance_Fields = {
  __typename?: 'supply_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** columns and relationships of "token" */
export type Token = {
  __typename?: 'token';
  name: Scalars['String'];
  /** An array relationship */
  token_units: Array<Token_Unit>;
  /** An aggregate relationship */
  token_units_aggregate: Token_Unit_Aggregate;
};


/** columns and relationships of "token" */
export type TokenToken_UnitsArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenToken_Units_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};

/** aggregated selection of "token" */
export type Token_Aggregate = {
  __typename?: 'token_aggregate';
  aggregate?: Maybe<Token_Aggregate_Fields>;
  nodes: Array<Token>;
};

/** aggregate fields of "token" */
export type Token_Aggregate_Fields = {
  __typename?: 'token_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Token_Max_Fields>;
  min?: Maybe<Token_Min_Fields>;
};


/** aggregate fields of "token" */
export type Token_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Bool_Exp>>;
  _not?: InputMaybe<Token_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  token_units?: InputMaybe<Token_Unit_Bool_Exp>;
};

/** aggregate max on columns */
export type Token_Max_Fields = {
  __typename?: 'token_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Token_Min_Fields = {
  __typename?: 'token_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  name?: InputMaybe<Order_By>;
  token_units_aggregate?: InputMaybe<Token_Unit_Aggregate_Order_By>;
};

/** columns and relationships of "token_price" */
export type Token_Price = {
  __typename?: 'token_price';
  id: Scalars['Int'];
  market_cap: Scalars['bigint'];
  price: Scalars['numeric'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  token_unit: Token_Unit;
  unit_name: Scalars['String'];
};

/** aggregated selection of "token_price" */
export type Token_Price_Aggregate = {
  __typename?: 'token_price_aggregate';
  aggregate?: Maybe<Token_Price_Aggregate_Fields>;
  nodes: Array<Token_Price>;
};

/** aggregate fields of "token_price" */
export type Token_Price_Aggregate_Fields = {
  __typename?: 'token_price_aggregate_fields';
  avg?: Maybe<Token_Price_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Price_Max_Fields>;
  min?: Maybe<Token_Price_Min_Fields>;
  stddev?: Maybe<Token_Price_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Price_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Price_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Price_Sum_Fields>;
  var_pop?: Maybe<Token_Price_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Price_Var_Samp_Fields>;
  variance?: Maybe<Token_Price_Variance_Fields>;
};


/** aggregate fields of "token_price" */
export type Token_Price_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Price_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_price" */
export type Token_Price_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Price_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Price_Max_Order_By>;
  min?: InputMaybe<Token_Price_Min_Order_By>;
  stddev?: InputMaybe<Token_Price_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Price_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Price_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Price_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Price_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Price_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Price_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Token_Price_Avg_Fields = {
  __typename?: 'token_price_avg_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "token_price" */
export type Token_Price_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_price". All fields are combined with a logical 'AND'. */
export type Token_Price_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Price_Bool_Exp>>;
  _not?: InputMaybe<Token_Price_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Price_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  market_cap?: InputMaybe<Bigint_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  token_unit?: InputMaybe<Token_Unit_Bool_Exp>;
  unit_name?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "token_price_history" */
export type Token_Price_History = {
  __typename?: 'token_price_history';
  market_cap: Scalars['bigint'];
  price: Scalars['numeric'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  token_unit: Token_Unit;
  unit_name: Scalars['String'];
};

/** aggregated selection of "token_price_history" */
export type Token_Price_History_Aggregate = {
  __typename?: 'token_price_history_aggregate';
  aggregate?: Maybe<Token_Price_History_Aggregate_Fields>;
  nodes: Array<Token_Price_History>;
};

/** aggregate fields of "token_price_history" */
export type Token_Price_History_Aggregate_Fields = {
  __typename?: 'token_price_history_aggregate_fields';
  avg?: Maybe<Token_Price_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Price_History_Max_Fields>;
  min?: Maybe<Token_Price_History_Min_Fields>;
  stddev?: Maybe<Token_Price_History_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Price_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Price_History_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Price_History_Sum_Fields>;
  var_pop?: Maybe<Token_Price_History_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Price_History_Var_Samp_Fields>;
  variance?: Maybe<Token_Price_History_Variance_Fields>;
};


/** aggregate fields of "token_price_history" */
export type Token_Price_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_price_history" */
export type Token_Price_History_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Price_History_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Price_History_Max_Order_By>;
  min?: InputMaybe<Token_Price_History_Min_Order_By>;
  stddev?: InputMaybe<Token_Price_History_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Price_History_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Price_History_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Price_History_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Price_History_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Price_History_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Price_History_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Token_Price_History_Avg_Fields = {
  __typename?: 'token_price_history_avg_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "token_price_history" */
export type Token_Price_History_Avg_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_price_history". All fields are combined with a logical 'AND'. */
export type Token_Price_History_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Price_History_Bool_Exp>>;
  _not?: InputMaybe<Token_Price_History_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Price_History_Bool_Exp>>;
  market_cap?: InputMaybe<Bigint_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  token_unit?: InputMaybe<Token_Unit_Bool_Exp>;
  unit_name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Token_Price_History_Max_Fields = {
  __typename?: 'token_price_history_max_fields';
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "token_price_history" */
export type Token_Price_History_Max_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Price_History_Min_Fields = {
  __typename?: 'token_price_history_min_fields';
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "token_price_history" */
export type Token_Price_History_Min_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "token_price_history". */
export type Token_Price_History_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  token_unit?: InputMaybe<Token_Unit_Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** select columns of table "token_price_history" */
export enum Token_Price_History_Select_Column {
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

/** aggregate stddev on columns */
export type Token_Price_History_Stddev_Fields = {
  __typename?: 'token_price_history_stddev_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Price_History_Stddev_Pop_Fields = {
  __typename?: 'token_price_history_stddev_pop_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Pop_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Price_History_Stddev_Samp_Fields = {
  __typename?: 'token_price_history_stddev_samp_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Samp_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Token_Price_History_Sum_Fields = {
  __typename?: 'token_price_history_sum_fields';
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "token_price_history" */
export type Token_Price_History_Sum_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Token_Price_History_Var_Pop_Fields = {
  __typename?: 'token_price_history_var_pop_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "token_price_history" */
export type Token_Price_History_Var_Pop_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Price_History_Var_Samp_Fields = {
  __typename?: 'token_price_history_var_samp_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "token_price_history" */
export type Token_Price_History_Var_Samp_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Price_History_Variance_Fields = {
  __typename?: 'token_price_history_variance_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "token_price_history" */
export type Token_Price_History_Variance_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Token_Price_Max_Fields = {
  __typename?: 'token_price_max_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "token_price" */
export type Token_Price_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Price_Min_Fields = {
  __typename?: 'token_price_min_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "token_price" */
export type Token_Price_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "token_price". */
export type Token_Price_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  token_unit?: InputMaybe<Token_Unit_Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** select columns of table "token_price" */
export enum Token_Price_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

/** aggregate stddev on columns */
export type Token_Price_Stddev_Fields = {
  __typename?: 'token_price_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "token_price" */
export type Token_Price_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Price_Stddev_Pop_Fields = {
  __typename?: 'token_price_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "token_price" */
export type Token_Price_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Price_Stddev_Samp_Fields = {
  __typename?: 'token_price_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "token_price" */
export type Token_Price_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Token_Price_Sum_Fields = {
  __typename?: 'token_price_sum_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "token_price" */
export type Token_Price_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Token_Price_Var_Pop_Fields = {
  __typename?: 'token_price_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "token_price" */
export type Token_Price_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Price_Var_Samp_Fields = {
  __typename?: 'token_price_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "token_price" */
export type Token_Price_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Price_Variance_Fields = {
  __typename?: 'token_price_variance_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "token_price" */
export type Token_Price_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  Name = 'name'
}

/** columns and relationships of "token_unit" */
export type Token_Unit = {
  __typename?: 'token_unit';
  aliases?: Maybe<Scalars['_text']>;
  denom: Scalars['String'];
  exponent: Scalars['Int'];
  price_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  token: Token;
  token_name: Scalars['String'];
  /** An object relationship */
  token_price?: Maybe<Token_Price>;
  /** An array relationship */
  token_price_histories: Array<Token_Price_History>;
  /** An aggregate relationship */
  token_price_histories_aggregate: Token_Price_History_Aggregate;
  /** An array relationship */
  token_prices: Array<Token_Price>;
  /** An aggregate relationship */
  token_prices_aggregate: Token_Price_Aggregate;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_Price_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_Price_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_PricesArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};

/** aggregated selection of "token_unit" */
export type Token_Unit_Aggregate = {
  __typename?: 'token_unit_aggregate';
  aggregate?: Maybe<Token_Unit_Aggregate_Fields>;
  nodes: Array<Token_Unit>;
};

/** aggregate fields of "token_unit" */
export type Token_Unit_Aggregate_Fields = {
  __typename?: 'token_unit_aggregate_fields';
  avg?: Maybe<Token_Unit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Unit_Max_Fields>;
  min?: Maybe<Token_Unit_Min_Fields>;
  stddev?: Maybe<Token_Unit_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Unit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Unit_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Unit_Sum_Fields>;
  var_pop?: Maybe<Token_Unit_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Unit_Var_Samp_Fields>;
  variance?: Maybe<Token_Unit_Variance_Fields>;
};


/** aggregate fields of "token_unit" */
export type Token_Unit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Token_Unit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_unit" */
export type Token_Unit_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Unit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Unit_Max_Order_By>;
  min?: InputMaybe<Token_Unit_Min_Order_By>;
  stddev?: InputMaybe<Token_Unit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Unit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Unit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Unit_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Unit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Unit_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Unit_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Token_Unit_Avg_Fields = {
  __typename?: 'token_unit_avg_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "token_unit" */
export type Token_Unit_Avg_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_unit". All fields are combined with a logical 'AND'. */
export type Token_Unit_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Unit_Bool_Exp>>;
  _not?: InputMaybe<Token_Unit_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Unit_Bool_Exp>>;
  aliases?: InputMaybe<_Text_Comparison_Exp>;
  denom?: InputMaybe<String_Comparison_Exp>;
  exponent?: InputMaybe<Int_Comparison_Exp>;
  price_id?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<Token_Bool_Exp>;
  token_name?: InputMaybe<String_Comparison_Exp>;
  token_price?: InputMaybe<Token_Price_Bool_Exp>;
  token_price_histories?: InputMaybe<Token_Price_History_Bool_Exp>;
  token_prices?: InputMaybe<Token_Price_Bool_Exp>;
};

/** aggregate max on columns */
export type Token_Unit_Max_Fields = {
  __typename?: 'token_unit_max_fields';
  denom?: Maybe<Scalars['String']>;
  exponent?: Maybe<Scalars['Int']>;
  price_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "token_unit" */
export type Token_Unit_Max_Order_By = {
  denom?: InputMaybe<Order_By>;
  exponent?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  token_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Unit_Min_Fields = {
  __typename?: 'token_unit_min_fields';
  denom?: Maybe<Scalars['String']>;
  exponent?: Maybe<Scalars['Int']>;
  price_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "token_unit" */
export type Token_Unit_Min_Order_By = {
  denom?: InputMaybe<Order_By>;
  exponent?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  token_name?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "token_unit". */
export type Token_Unit_Order_By = {
  aliases?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
  exponent?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  token?: InputMaybe<Token_Order_By>;
  token_name?: InputMaybe<Order_By>;
  token_price?: InputMaybe<Token_Price_Order_By>;
  token_price_histories_aggregate?: InputMaybe<Token_Price_History_Aggregate_Order_By>;
  token_prices_aggregate?: InputMaybe<Token_Price_Aggregate_Order_By>;
};

/** select columns of table "token_unit" */
export enum Token_Unit_Select_Column {
  /** column name */
  Aliases = 'aliases',
  /** column name */
  Denom = 'denom',
  /** column name */
  Exponent = 'exponent',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  TokenName = 'token_name'
}

/** aggregate stddev on columns */
export type Token_Unit_Stddev_Fields = {
  __typename?: 'token_unit_stddev_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "token_unit" */
export type Token_Unit_Stddev_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Unit_Stddev_Pop_Fields = {
  __typename?: 'token_unit_stddev_pop_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "token_unit" */
export type Token_Unit_Stddev_Pop_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Unit_Stddev_Samp_Fields = {
  __typename?: 'token_unit_stddev_samp_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "token_unit" */
export type Token_Unit_Stddev_Samp_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Token_Unit_Sum_Fields = {
  __typename?: 'token_unit_sum_fields';
  exponent?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "token_unit" */
export type Token_Unit_Sum_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Token_Unit_Var_Pop_Fields = {
  __typename?: 'token_unit_var_pop_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "token_unit" */
export type Token_Unit_Var_Pop_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Unit_Var_Samp_Fields = {
  __typename?: 'token_unit_var_samp_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "token_unit" */
export type Token_Unit_Var_Samp_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Unit_Variance_Fields = {
  __typename?: 'token_unit_variance_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "token_unit" */
export type Token_Unit_Variance_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  /** An object relationship */
  block: Block;
  fee: Scalars['jsonb'];
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash: Scalars['String'];
  height: Scalars['bigint'];
  logs?: Maybe<Scalars['json']>;
  memo?: Maybe<Scalars['String']>;
  messages: Scalars['jsonb'];
  /** An array relationship */
  messagesByTransactionHash: Array<Message>;
  /** An aggregate relationship */
  messagesByTransactionHash_aggregate: Message_Aggregate;
  raw_log?: Maybe<Scalars['String']>;
  signatures: Scalars['_text'];
  signer_infos: Scalars['jsonb'];
  success: Scalars['Boolean'];
};


/** columns and relationships of "transaction" */
export type TransactionFeeArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "transaction" */
export type TransactionLogsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "transaction" */
export type TransactionMessagesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "transaction" */
export type TransactionMessagesByTransactionHashArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionMessagesByTransactionHash_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionSigner_InfosArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Max_Order_By>;
  min?: InputMaybe<Transaction_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>;
  block?: InputMaybe<Block_Bool_Exp>;
  fee?: InputMaybe<Jsonb_Comparison_Exp>;
  gas_used?: InputMaybe<Bigint_Comparison_Exp>;
  gas_wanted?: InputMaybe<Bigint_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  logs?: InputMaybe<Json_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  messages?: InputMaybe<Jsonb_Comparison_Exp>;
  messagesByTransactionHash?: InputMaybe<Message_Bool_Exp>;
  raw_log?: InputMaybe<String_Comparison_Exp>;
  signatures?: InputMaybe<_Text_Comparison_Exp>;
  signer_infos?: InputMaybe<Jsonb_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields';
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  memo?: Maybe<Scalars['String']>;
  raw_log?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields';
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  memo?: Maybe<Scalars['String']>;
  raw_log?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  block?: InputMaybe<Block_Order_By>;
  fee?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  logs?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  messages?: InputMaybe<Order_By>;
  messagesByTransactionHash_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  raw_log?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
  signer_infos?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  GasWanted = 'gas_wanted',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Logs = 'logs',
  /** column name */
  Memo = 'memo',
  /** column name */
  Messages = 'messages',
  /** column name */
  RawLog = 'raw_log',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  SignerInfos = 'signer_infos',
  /** column name */
  Success = 'success'
}

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields';
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator" */
export type Validator = {
  __typename?: 'validator';
  /** An array relationship */
  blocks: Array<Block>;
  /** An aggregate relationship */
  blocks_aggregate: Block_Aggregate;
  consensus_address: Scalars['String'];
  consensus_pubkey: Scalars['String'];
  /** An array relationship */
  double_sign_votes: Array<Double_Sign_Vote>;
  /** An aggregate relationship */
  double_sign_votes_aggregate: Double_Sign_Vote_Aggregate;
  /** An array relationship */
  pre_commits: Array<Pre_Commit>;
  /** An aggregate relationship */
  pre_commits_aggregate: Pre_Commit_Aggregate;
  /** An array relationship */
  validator_commissions: Array<Validator_Commission>;
  /** An aggregate relationship */
  validator_commissions_aggregate: Validator_Commission_Aggregate;
  /** An array relationship */
  validator_descriptions: Array<Validator_Description>;
  /** An aggregate relationship */
  validator_descriptions_aggregate: Validator_Description_Aggregate;
  /** An object relationship */
  validator_info?: Maybe<Validator_Info>;
  /** An array relationship */
  validator_infos: Array<Validator_Info>;
  /** An aggregate relationship */
  validator_infos_aggregate: Validator_Info_Aggregate;
  /** An array relationship */
  validator_signing_infos: Array<Validator_Signing_Info>;
  /** An aggregate relationship */
  validator_signing_infos_aggregate: Validator_Signing_Info_Aggregate;
  /** An array relationship */
  validator_statuses: Array<Validator_Status>;
  /** An aggregate relationship */
  validator_statuses_aggregate: Validator_Status_Aggregate;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate;
};


/** columns and relationships of "validator" */
export type ValidatorBlocksArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorDouble_Sign_VotesArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorDouble_Sign_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorPre_CommitsArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorPre_Commits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_CommissionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Commissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_DescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Descriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Signing_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Signing_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};

/** aggregated selection of "validator" */
export type Validator_Aggregate = {
  __typename?: 'validator_aggregate';
  aggregate?: Maybe<Validator_Aggregate_Fields>;
  nodes: Array<Validator>;
};

/** aggregate fields of "validator" */
export type Validator_Aggregate_Fields = {
  __typename?: 'validator_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Validator_Max_Fields>;
  min?: Maybe<Validator_Min_Fields>;
};


/** aggregate fields of "validator" */
export type Validator_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "validator". All fields are combined with a logical 'AND'. */
export type Validator_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Bool_Exp>>;
  _not?: InputMaybe<Validator_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Bool_Exp>>;
  blocks?: InputMaybe<Block_Bool_Exp>;
  consensus_address?: InputMaybe<String_Comparison_Exp>;
  consensus_pubkey?: InputMaybe<String_Comparison_Exp>;
  double_sign_votes?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  pre_commits?: InputMaybe<Pre_Commit_Bool_Exp>;
  validator_commissions?: InputMaybe<Validator_Commission_Bool_Exp>;
  validator_descriptions?: InputMaybe<Validator_Description_Bool_Exp>;
  validator_info?: InputMaybe<Validator_Info_Bool_Exp>;
  validator_infos?: InputMaybe<Validator_Info_Bool_Exp>;
  validator_signing_infos?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
  validator_statuses?: InputMaybe<Validator_Status_Bool_Exp>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};

/** columns and relationships of "validator_commission" */
export type Validator_Commission = {
  __typename?: 'validator_commission';
  commission: Scalars['numeric'];
  height: Scalars['bigint'];
  min_self_delegation: Scalars['numeric'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
};

/** aggregated selection of "validator_commission" */
export type Validator_Commission_Aggregate = {
  __typename?: 'validator_commission_aggregate';
  aggregate?: Maybe<Validator_Commission_Aggregate_Fields>;
  nodes: Array<Validator_Commission>;
};

/** aggregate fields of "validator_commission" */
export type Validator_Commission_Aggregate_Fields = {
  __typename?: 'validator_commission_aggregate_fields';
  avg?: Maybe<Validator_Commission_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Commission_Max_Fields>;
  min?: Maybe<Validator_Commission_Min_Fields>;
  stddev?: Maybe<Validator_Commission_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Commission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Commission_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Commission_Sum_Fields>;
  var_pop?: Maybe<Validator_Commission_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Commission_Var_Samp_Fields>;
  variance?: Maybe<Validator_Commission_Variance_Fields>;
};


/** aggregate fields of "validator_commission" */
export type Validator_Commission_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_commission" */
export type Validator_Commission_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Commission_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Commission_Max_Order_By>;
  min?: InputMaybe<Validator_Commission_Min_Order_By>;
  stddev?: InputMaybe<Validator_Commission_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Commission_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Commission_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Commission_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Commission_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Commission_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Commission_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Validator_Commission_Avg_Fields = {
  __typename?: 'validator_commission_avg_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_commission" */
export type Validator_Commission_Avg_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_commission". All fields are combined with a logical 'AND'. */
export type Validator_Commission_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Commission_Bool_Exp>>;
  _not?: InputMaybe<Validator_Commission_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Commission_Bool_Exp>>;
  commission?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  min_self_delegation?: InputMaybe<Numeric_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Commission_Max_Fields = {
  __typename?: 'validator_commission_max_fields';
  commission?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  min_self_delegation?: Maybe<Scalars['numeric']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_commission" */
export type Validator_Commission_Max_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Commission_Min_Fields = {
  __typename?: 'validator_commission_min_fields';
  commission?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  min_self_delegation?: Maybe<Scalars['numeric']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_commission" */
export type Validator_Commission_Min_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_commission". */
export type Validator_Commission_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** select columns of table "validator_commission" */
export enum Validator_Commission_Select_Column {
  /** column name */
  Commission = 'commission',
  /** column name */
  Height = 'height',
  /** column name */
  MinSelfDelegation = 'min_self_delegation',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** aggregate stddev on columns */
export type Validator_Commission_Stddev_Fields = {
  __typename?: 'validator_commission_stddev_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Commission_Stddev_Pop_Fields = {
  __typename?: 'validator_commission_stddev_pop_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Pop_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Commission_Stddev_Samp_Fields = {
  __typename?: 'validator_commission_stddev_samp_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Samp_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Validator_Commission_Sum_Fields = {
  __typename?: 'validator_commission_sum_fields';
  commission?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  min_self_delegation?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "validator_commission" */
export type Validator_Commission_Sum_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Validator_Commission_Var_Pop_Fields = {
  __typename?: 'validator_commission_var_pop_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_commission" */
export type Validator_Commission_Var_Pop_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Commission_Var_Samp_Fields = {
  __typename?: 'validator_commission_var_samp_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_commission" */
export type Validator_Commission_Var_Samp_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Commission_Variance_Fields = {
  __typename?: 'validator_commission_variance_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_commission" */
export type Validator_Commission_Variance_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_description" */
export type Validator_Description = {
  __typename?: 'validator_description';
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height: Scalars['bigint'];
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

/** aggregated selection of "validator_description" */
export type Validator_Description_Aggregate = {
  __typename?: 'validator_description_aggregate';
  aggregate?: Maybe<Validator_Description_Aggregate_Fields>;
  nodes: Array<Validator_Description>;
};

/** aggregate fields of "validator_description" */
export type Validator_Description_Aggregate_Fields = {
  __typename?: 'validator_description_aggregate_fields';
  avg?: Maybe<Validator_Description_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Description_Max_Fields>;
  min?: Maybe<Validator_Description_Min_Fields>;
  stddev?: Maybe<Validator_Description_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Description_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Description_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Description_Sum_Fields>;
  var_pop?: Maybe<Validator_Description_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Description_Var_Samp_Fields>;
  variance?: Maybe<Validator_Description_Variance_Fields>;
};


/** aggregate fields of "validator_description" */
export type Validator_Description_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Description_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_description" */
export type Validator_Description_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Description_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Description_Max_Order_By>;
  min?: InputMaybe<Validator_Description_Min_Order_By>;
  stddev?: InputMaybe<Validator_Description_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Description_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Description_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Description_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Description_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Description_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Description_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Validator_Description_Avg_Fields = {
  __typename?: 'validator_description_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_description" */
export type Validator_Description_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_description". All fields are combined with a logical 'AND'. */
export type Validator_Description_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Description_Bool_Exp>>;
  _not?: InputMaybe<Validator_Description_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Description_Bool_Exp>>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  identity?: InputMaybe<String_Comparison_Exp>;
  moniker?: InputMaybe<String_Comparison_Exp>;
  security_contact?: InputMaybe<String_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Description_Max_Fields = {
  __typename?: 'validator_description_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_description" */
export type Validator_Description_Max_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Description_Min_Fields = {
  __typename?: 'validator_description_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_description" */
export type Validator_Description_Min_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_description". */
export type Validator_Description_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** select columns of table "validator_description" */
export enum Validator_Description_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Details = 'details',
  /** column name */
  Height = 'height',
  /** column name */
  Identity = 'identity',
  /** column name */
  Moniker = 'moniker',
  /** column name */
  SecurityContact = 'security_contact',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  Website = 'website'
}

/** aggregate stddev on columns */
export type Validator_Description_Stddev_Fields = {
  __typename?: 'validator_description_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_description" */
export type Validator_Description_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Description_Stddev_Pop_Fields = {
  __typename?: 'validator_description_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_description" */
export type Validator_Description_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Description_Stddev_Samp_Fields = {
  __typename?: 'validator_description_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_description" */
export type Validator_Description_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Validator_Description_Sum_Fields = {
  __typename?: 'validator_description_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_description" */
export type Validator_Description_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Validator_Description_Var_Pop_Fields = {
  __typename?: 'validator_description_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_description" */
export type Validator_Description_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Description_Var_Samp_Fields = {
  __typename?: 'validator_description_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_description" */
export type Validator_Description_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Description_Variance_Fields = {
  __typename?: 'validator_description_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_description" */
export type Validator_Description_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_info" */
export type Validator_Info = {
  __typename?: 'validator_info';
  /** An object relationship */
  account?: Maybe<Account>;
  consensus_address: Scalars['String'];
  /** An array relationship */
  delegations: Array<Delegation>;
  /** An aggregate relationship */
  delegations_aggregate: Delegation_Aggregate;
  max_change_rate: Scalars['String'];
  max_rate: Scalars['String'];
  operator_address: Scalars['String'];
  self_delegate_address?: Maybe<Scalars['String']>;
  /** An object relationship */
  validator: Validator;
};


/** columns and relationships of "validator_info" */
export type Validator_InfoDelegationsArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Delegation_Order_By>>;
  where?: InputMaybe<Delegation_Bool_Exp>;
};


/** columns and relationships of "validator_info" */
export type Validator_InfoDelegations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Delegation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Delegation_Order_By>>;
  where?: InputMaybe<Delegation_Bool_Exp>;
};

/** aggregated selection of "validator_info" */
export type Validator_Info_Aggregate = {
  __typename?: 'validator_info_aggregate';
  aggregate?: Maybe<Validator_Info_Aggregate_Fields>;
  nodes: Array<Validator_Info>;
};

/** aggregate fields of "validator_info" */
export type Validator_Info_Aggregate_Fields = {
  __typename?: 'validator_info_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Validator_Info_Max_Fields>;
  min?: Maybe<Validator_Info_Min_Fields>;
};


/** aggregate fields of "validator_info" */
export type Validator_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_info" */
export type Validator_Info_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Info_Max_Order_By>;
  min?: InputMaybe<Validator_Info_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "validator_info". All fields are combined with a logical 'AND'. */
export type Validator_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Info_Bool_Exp>>;
  _not?: InputMaybe<Validator_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Info_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  consensus_address?: InputMaybe<String_Comparison_Exp>;
  delegations?: InputMaybe<Delegation_Bool_Exp>;
  max_change_rate?: InputMaybe<String_Comparison_Exp>;
  max_rate?: InputMaybe<String_Comparison_Exp>;
  operator_address?: InputMaybe<String_Comparison_Exp>;
  self_delegate_address?: InputMaybe<String_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
};

/** aggregate max on columns */
export type Validator_Info_Max_Fields = {
  __typename?: 'validator_info_max_fields';
  consensus_address?: Maybe<Scalars['String']>;
  max_change_rate?: Maybe<Scalars['String']>;
  max_rate?: Maybe<Scalars['String']>;
  operator_address?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_info" */
export type Validator_Info_Max_Order_By = {
  consensus_address?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Info_Min_Fields = {
  __typename?: 'validator_info_min_fields';
  consensus_address?: Maybe<Scalars['String']>;
  max_change_rate?: Maybe<Scalars['String']>;
  max_rate?: Maybe<Scalars['String']>;
  operator_address?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_info" */
export type Validator_Info_Min_Order_By = {
  consensus_address?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_info". */
export type Validator_Info_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  delegations_aggregate?: InputMaybe<Delegation_Aggregate_Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
};

/** select columns of table "validator_info" */
export enum Validator_Info_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  MaxChangeRate = 'max_change_rate',
  /** column name */
  MaxRate = 'max_rate',
  /** column name */
  OperatorAddress = 'operator_address',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address'
}

/** aggregate max on columns */
export type Validator_Max_Fields = {
  __typename?: 'validator_max_fields';
  consensus_address?: Maybe<Scalars['String']>;
  consensus_pubkey?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Validator_Min_Fields = {
  __typename?: 'validator_min_fields';
  consensus_address?: Maybe<Scalars['String']>;
  consensus_pubkey?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "validator". */
export type Validator_Order_By = {
  blocks_aggregate?: InputMaybe<Block_Aggregate_Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  consensus_pubkey?: InputMaybe<Order_By>;
  double_sign_votes_aggregate?: InputMaybe<Double_Sign_Vote_Aggregate_Order_By>;
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Order_By>;
  validator_commissions_aggregate?: InputMaybe<Validator_Commission_Aggregate_Order_By>;
  validator_descriptions_aggregate?: InputMaybe<Validator_Description_Aggregate_Order_By>;
  validator_info?: InputMaybe<Validator_Info_Order_By>;
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Order_By>;
  validator_signing_infos_aggregate?: InputMaybe<Validator_Signing_Info_Aggregate_Order_By>;
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Order_By>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Order_By>;
};

/** select columns of table "validator" */
export enum Validator_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  ConsensusPubkey = 'consensus_pubkey'
}

/** columns and relationships of "validator_signing_info" */
export type Validator_Signing_Info = {
  __typename?: 'validator_signing_info';
  height: Scalars['bigint'];
  index_offset: Scalars['bigint'];
  jailed_until: Scalars['timestamp'];
  missed_blocks_counter: Scalars['bigint'];
  start_height: Scalars['bigint'];
  tombstoned: Scalars['Boolean'];
  validator_address: Scalars['String'];
};

/** aggregated selection of "validator_signing_info" */
export type Validator_Signing_Info_Aggregate = {
  __typename?: 'validator_signing_info_aggregate';
  aggregate?: Maybe<Validator_Signing_Info_Aggregate_Fields>;
  nodes: Array<Validator_Signing_Info>;
};

/** aggregate fields of "validator_signing_info" */
export type Validator_Signing_Info_Aggregate_Fields = {
  __typename?: 'validator_signing_info_aggregate_fields';
  avg?: Maybe<Validator_Signing_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Signing_Info_Max_Fields>;
  min?: Maybe<Validator_Signing_Info_Min_Fields>;
  stddev?: Maybe<Validator_Signing_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Signing_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Signing_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Signing_Info_Sum_Fields>;
  var_pop?: Maybe<Validator_Signing_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Signing_Info_Var_Samp_Fields>;
  variance?: Maybe<Validator_Signing_Info_Variance_Fields>;
};


/** aggregate fields of "validator_signing_info" */
export type Validator_Signing_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_signing_info" */
export type Validator_Signing_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Signing_Info_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Signing_Info_Max_Order_By>;
  min?: InputMaybe<Validator_Signing_Info_Min_Order_By>;
  stddev?: InputMaybe<Validator_Signing_Info_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Signing_Info_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Signing_Info_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Signing_Info_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Signing_Info_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Signing_Info_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Signing_Info_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Validator_Signing_Info_Avg_Fields = {
  __typename?: 'validator_signing_info_avg_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_signing_info". All fields are combined with a logical 'AND'. */
export type Validator_Signing_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Signing_Info_Bool_Exp>>;
  _not?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Signing_Info_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  index_offset?: InputMaybe<Bigint_Comparison_Exp>;
  jailed_until?: InputMaybe<Timestamp_Comparison_Exp>;
  missed_blocks_counter?: InputMaybe<Bigint_Comparison_Exp>;
  start_height?: InputMaybe<Bigint_Comparison_Exp>;
  tombstoned?: InputMaybe<Boolean_Comparison_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Signing_Info_Max_Fields = {
  __typename?: 'validator_signing_info_max_fields';
  height?: Maybe<Scalars['bigint']>;
  index_offset?: Maybe<Scalars['bigint']>;
  jailed_until?: Maybe<Scalars['timestamp']>;
  missed_blocks_counter?: Maybe<Scalars['bigint']>;
  start_height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  jailed_until?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Signing_Info_Min_Fields = {
  __typename?: 'validator_signing_info_min_fields';
  height?: Maybe<Scalars['bigint']>;
  index_offset?: Maybe<Scalars['bigint']>;
  jailed_until?: Maybe<Scalars['timestamp']>;
  missed_blocks_counter?: Maybe<Scalars['bigint']>;
  start_height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  jailed_until?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_signing_info". */
export type Validator_Signing_Info_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  jailed_until?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
  tombstoned?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** select columns of table "validator_signing_info" */
export enum Validator_Signing_Info_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  IndexOffset = 'index_offset',
  /** column name */
  JailedUntil = 'jailed_until',
  /** column name */
  MissedBlocksCounter = 'missed_blocks_counter',
  /** column name */
  StartHeight = 'start_height',
  /** column name */
  Tombstoned = 'tombstoned',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** aggregate stddev on columns */
export type Validator_Signing_Info_Stddev_Fields = {
  __typename?: 'validator_signing_info_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Signing_Info_Stddev_Pop_Fields = {
  __typename?: 'validator_signing_info_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Signing_Info_Stddev_Samp_Fields = {
  __typename?: 'validator_signing_info_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Validator_Signing_Info_Sum_Fields = {
  __typename?: 'validator_signing_info_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  index_offset?: Maybe<Scalars['bigint']>;
  missed_blocks_counter?: Maybe<Scalars['bigint']>;
  start_height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Validator_Signing_Info_Var_Pop_Fields = {
  __typename?: 'validator_signing_info_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Signing_Info_Var_Samp_Fields = {
  __typename?: 'validator_signing_info_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Signing_Info_Variance_Fields = {
  __typename?: 'validator_signing_info_variance_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_status" */
export type Validator_Status = {
  __typename?: 'validator_status';
  height: Scalars['bigint'];
  jailed: Scalars['Boolean'];
  status: Scalars['Int'];
  tombstoned: Scalars['Boolean'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
};

/** aggregated selection of "validator_status" */
export type Validator_Status_Aggregate = {
  __typename?: 'validator_status_aggregate';
  aggregate?: Maybe<Validator_Status_Aggregate_Fields>;
  nodes: Array<Validator_Status>;
};

/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_Fields = {
  __typename?: 'validator_status_aggregate_fields';
  avg?: Maybe<Validator_Status_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Status_Max_Fields>;
  min?: Maybe<Validator_Status_Min_Fields>;
  stddev?: Maybe<Validator_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Status_Sum_Fields>;
  var_pop?: Maybe<Validator_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Status_Var_Samp_Fields>;
  variance?: Maybe<Validator_Status_Variance_Fields>;
};


/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_status" */
export type Validator_Status_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Status_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Status_Max_Order_By>;
  min?: InputMaybe<Validator_Status_Min_Order_By>;
  stddev?: InputMaybe<Validator_Status_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Status_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Status_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Status_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Status_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Status_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Status_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Validator_Status_Avg_Fields = {
  __typename?: 'validator_status_avg_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_status" */
export type Validator_Status_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_status". All fields are combined with a logical 'AND'. */
export type Validator_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Status_Bool_Exp>>;
  _not?: InputMaybe<Validator_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Status_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  jailed?: InputMaybe<Boolean_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  tombstoned?: InputMaybe<Boolean_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Status_Max_Fields = {
  __typename?: 'validator_status_max_fields';
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_status" */
export type Validator_Status_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Status_Min_Fields = {
  __typename?: 'validator_status_min_fields';
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_status" */
export type Validator_Status_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_status". */
export type Validator_Status_Order_By = {
  height?: InputMaybe<Order_By>;
  jailed?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tombstoned?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** select columns of table "validator_status" */
export enum Validator_Status_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  Status = 'status',
  /** column name */
  Tombstoned = 'tombstoned',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** aggregate stddev on columns */
export type Validator_Status_Stddev_Fields = {
  __typename?: 'validator_status_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_status" */
export type Validator_Status_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Status_Stddev_Pop_Fields = {
  __typename?: 'validator_status_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_status" */
export type Validator_Status_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Status_Stddev_Samp_Fields = {
  __typename?: 'validator_status_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_status" */
export type Validator_Status_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Validator_Status_Sum_Fields = {
  __typename?: 'validator_status_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "validator_status" */
export type Validator_Status_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Validator_Status_Var_Pop_Fields = {
  __typename?: 'validator_status_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_status" */
export type Validator_Status_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Status_Var_Samp_Fields = {
  __typename?: 'validator_status_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_status" */
export type Validator_Status_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Status_Variance_Fields = {
  __typename?: 'validator_status_variance_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_status" */
export type Validator_Status_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_voting_power" */
export type Validator_Voting_Power = {
  __typename?: 'validator_voting_power';
  height: Scalars['bigint'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** aggregated selection of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate = {
  __typename?: 'validator_voting_power_aggregate';
  aggregate?: Maybe<Validator_Voting_Power_Aggregate_Fields>;
  nodes: Array<Validator_Voting_Power>;
};

/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Fields = {
  __typename?: 'validator_voting_power_aggregate_fields';
  avg?: Maybe<Validator_Voting_Power_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Voting_Power_Max_Fields>;
  min?: Maybe<Validator_Voting_Power_Min_Fields>;
  stddev?: Maybe<Validator_Voting_Power_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Voting_Power_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Voting_Power_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Voting_Power_Sum_Fields>;
  var_pop?: Maybe<Validator_Voting_Power_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Voting_Power_Var_Samp_Fields>;
  variance?: Maybe<Validator_Voting_Power_Variance_Fields>;
};


/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Voting_Power_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Voting_Power_Max_Order_By>;
  min?: InputMaybe<Validator_Voting_Power_Min_Order_By>;
  stddev?: InputMaybe<Validator_Voting_Power_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Voting_Power_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Voting_Power_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Voting_Power_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Voting_Power_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Voting_Power_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Voting_Power_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Validator_Voting_Power_Avg_Fields = {
  __typename?: 'validator_voting_power_avg_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_voting_power". All fields are combined with a logical 'AND'. */
export type Validator_Voting_Power_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Voting_Power_Bool_Exp>>;
  _not?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Voting_Power_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Voting_Power_Max_Fields = {
  __typename?: 'validator_voting_power_max_fields';
  height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Voting_Power_Min_Fields = {
  __typename?: 'validator_voting_power_min_fields';
  height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_voting_power". */
export type Validator_Voting_Power_Order_By = {
  height?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** select columns of table "validator_voting_power" */
export enum Validator_Voting_Power_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** aggregate stddev on columns */
export type Validator_Voting_Power_Stddev_Fields = {
  __typename?: 'validator_voting_power_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Voting_Power_Stddev_Pop_Fields = {
  __typename?: 'validator_voting_power_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Voting_Power_Stddev_Samp_Fields = {
  __typename?: 'validator_voting_power_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Validator_Voting_Power_Sum_Fields = {
  __typename?: 'validator_voting_power_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Validator_Voting_Power_Var_Pop_Fields = {
  __typename?: 'validator_voting_power_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Voting_Power_Var_Samp_Fields = {
  __typename?: 'validator_voting_power_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Voting_Power_Variance_Fields = {
  __typename?: 'validator_voting_power_variance_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** columns and relationships of "vesting_account" */
export type Vesting_Account = {
  __typename?: 'vesting_account';
  /** An object relationship */
  account: Account;
  address: Scalars['String'];
  end_time: Scalars['timestamp'];
  id: Scalars['Int'];
  original_vesting: Scalars['_coin'];
  start_time?: Maybe<Scalars['timestamp']>;
  type: Scalars['String'];
  /** An array relationship */
  vesting_periods: Array<Vesting_Period>;
  /** An aggregate relationship */
  vesting_periods_aggregate: Vesting_Period_Aggregate;
};


/** columns and relationships of "vesting_account" */
export type Vesting_AccountVesting_PeriodsArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};


/** columns and relationships of "vesting_account" */
export type Vesting_AccountVesting_Periods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};

/** aggregated selection of "vesting_account" */
export type Vesting_Account_Aggregate = {
  __typename?: 'vesting_account_aggregate';
  aggregate?: Maybe<Vesting_Account_Aggregate_Fields>;
  nodes: Array<Vesting_Account>;
};

/** aggregate fields of "vesting_account" */
export type Vesting_Account_Aggregate_Fields = {
  __typename?: 'vesting_account_aggregate_fields';
  avg?: Maybe<Vesting_Account_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vesting_Account_Max_Fields>;
  min?: Maybe<Vesting_Account_Min_Fields>;
  stddev?: Maybe<Vesting_Account_Stddev_Fields>;
  stddev_pop?: Maybe<Vesting_Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vesting_Account_Stddev_Samp_Fields>;
  sum?: Maybe<Vesting_Account_Sum_Fields>;
  var_pop?: Maybe<Vesting_Account_Var_Pop_Fields>;
  var_samp?: Maybe<Vesting_Account_Var_Samp_Fields>;
  variance?: Maybe<Vesting_Account_Variance_Fields>;
};


/** aggregate fields of "vesting_account" */
export type Vesting_Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Vesting_Account_Avg_Fields = {
  __typename?: 'vesting_account_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "vesting_account". All fields are combined with a logical 'AND'. */
export type Vesting_Account_Bool_Exp = {
  _and?: InputMaybe<Array<Vesting_Account_Bool_Exp>>;
  _not?: InputMaybe<Vesting_Account_Bool_Exp>;
  _or?: InputMaybe<Array<Vesting_Account_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  original_vesting?: InputMaybe<_Coin_Comparison_Exp>;
  start_time?: InputMaybe<Timestamp_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  vesting_periods?: InputMaybe<Vesting_Period_Bool_Exp>;
};

/** aggregate max on columns */
export type Vesting_Account_Max_Fields = {
  __typename?: 'vesting_account_max_fields';
  address?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  start_time?: Maybe<Scalars['timestamp']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Vesting_Account_Min_Fields = {
  __typename?: 'vesting_account_min_fields';
  address?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  start_time?: Maybe<Scalars['timestamp']>;
  type?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "vesting_account". */
export type Vesting_Account_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  address?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  original_vesting?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  vesting_periods_aggregate?: InputMaybe<Vesting_Period_Aggregate_Order_By>;
};

/** select columns of table "vesting_account" */
export enum Vesting_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalVesting = 'original_vesting',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Type = 'type'
}

/** aggregate stddev on columns */
export type Vesting_Account_Stddev_Fields = {
  __typename?: 'vesting_account_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Vesting_Account_Stddev_Pop_Fields = {
  __typename?: 'vesting_account_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Vesting_Account_Stddev_Samp_Fields = {
  __typename?: 'vesting_account_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Vesting_Account_Sum_Fields = {
  __typename?: 'vesting_account_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Vesting_Account_Var_Pop_Fields = {
  __typename?: 'vesting_account_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Vesting_Account_Var_Samp_Fields = {
  __typename?: 'vesting_account_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Vesting_Account_Variance_Fields = {
  __typename?: 'vesting_account_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "vesting_period" */
export type Vesting_Period = {
  __typename?: 'vesting_period';
  amount: Scalars['_coin'];
  length: Scalars['bigint'];
  period_order: Scalars['bigint'];
  /** An object relationship */
  vesting_account: Vesting_Account;
  vesting_account_id: Scalars['bigint'];
};

/** aggregated selection of "vesting_period" */
export type Vesting_Period_Aggregate = {
  __typename?: 'vesting_period_aggregate';
  aggregate?: Maybe<Vesting_Period_Aggregate_Fields>;
  nodes: Array<Vesting_Period>;
};

/** aggregate fields of "vesting_period" */
export type Vesting_Period_Aggregate_Fields = {
  __typename?: 'vesting_period_aggregate_fields';
  avg?: Maybe<Vesting_Period_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vesting_Period_Max_Fields>;
  min?: Maybe<Vesting_Period_Min_Fields>;
  stddev?: Maybe<Vesting_Period_Stddev_Fields>;
  stddev_pop?: Maybe<Vesting_Period_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vesting_Period_Stddev_Samp_Fields>;
  sum?: Maybe<Vesting_Period_Sum_Fields>;
  var_pop?: Maybe<Vesting_Period_Var_Pop_Fields>;
  var_samp?: Maybe<Vesting_Period_Var_Samp_Fields>;
  variance?: Maybe<Vesting_Period_Variance_Fields>;
};


/** aggregate fields of "vesting_period" */
export type Vesting_Period_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vesting_period" */
export type Vesting_Period_Aggregate_Order_By = {
  avg?: InputMaybe<Vesting_Period_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vesting_Period_Max_Order_By>;
  min?: InputMaybe<Vesting_Period_Min_Order_By>;
  stddev?: InputMaybe<Vesting_Period_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vesting_Period_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vesting_Period_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vesting_Period_Sum_Order_By>;
  var_pop?: InputMaybe<Vesting_Period_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vesting_Period_Var_Samp_Order_By>;
  variance?: InputMaybe<Vesting_Period_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vesting_Period_Avg_Fields = {
  __typename?: 'vesting_period_avg_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vesting_period" */
export type Vesting_Period_Avg_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vesting_period". All fields are combined with a logical 'AND'. */
export type Vesting_Period_Bool_Exp = {
  _and?: InputMaybe<Array<Vesting_Period_Bool_Exp>>;
  _not?: InputMaybe<Vesting_Period_Bool_Exp>;
  _or?: InputMaybe<Array<Vesting_Period_Bool_Exp>>;
  amount?: InputMaybe<_Coin_Comparison_Exp>;
  length?: InputMaybe<Bigint_Comparison_Exp>;
  period_order?: InputMaybe<Bigint_Comparison_Exp>;
  vesting_account?: InputMaybe<Vesting_Account_Bool_Exp>;
  vesting_account_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vesting_Period_Max_Fields = {
  __typename?: 'vesting_period_max_fields';
  length?: Maybe<Scalars['bigint']>;
  period_order?: Maybe<Scalars['bigint']>;
  vesting_account_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "vesting_period" */
export type Vesting_Period_Max_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vesting_Period_Min_Fields = {
  __typename?: 'vesting_period_min_fields';
  length?: Maybe<Scalars['bigint']>;
  period_order?: Maybe<Scalars['bigint']>;
  vesting_account_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "vesting_period" */
export type Vesting_Period_Min_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vesting_period". */
export type Vesting_Period_Order_By = {
  amount?: InputMaybe<Order_By>;
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account?: InputMaybe<Vesting_Account_Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** select columns of table "vesting_period" */
export enum Vesting_Period_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Length = 'length',
  /** column name */
  PeriodOrder = 'period_order',
  /** column name */
  VestingAccountId = 'vesting_account_id'
}

/** aggregate stddev on columns */
export type Vesting_Period_Stddev_Fields = {
  __typename?: 'vesting_period_stddev_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vesting_Period_Stddev_Pop_Fields = {
  __typename?: 'vesting_period_stddev_pop_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Pop_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vesting_Period_Stddev_Samp_Fields = {
  __typename?: 'vesting_period_stddev_samp_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Samp_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Vesting_Period_Sum_Fields = {
  __typename?: 'vesting_period_sum_fields';
  length?: Maybe<Scalars['bigint']>;
  period_order?: Maybe<Scalars['bigint']>;
  vesting_account_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "vesting_period" */
export type Vesting_Period_Sum_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vesting_Period_Var_Pop_Fields = {
  __typename?: 'vesting_period_var_pop_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vesting_period" */
export type Vesting_Period_Var_Pop_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vesting_Period_Var_Samp_Fields = {
  __typename?: 'vesting_period_var_samp_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vesting_period" */
export type Vesting_Period_Var_Samp_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vesting_Period_Variance_Fields = {
  __typename?: 'vesting_period_variance_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vesting_period" */
export type Vesting_Period_Variance_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "vote_option". All fields are combined with logical 'AND'. */
export type Vote_Option_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['vote_option']>;
  _gt?: InputMaybe<Scalars['vote_option']>;
  _gte?: InputMaybe<Scalars['vote_option']>;
  _in?: InputMaybe<Array<Scalars['vote_option']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['vote_option']>;
  _lte?: InputMaybe<Scalars['vote_option']>;
  _neq?: InputMaybe<Scalars['vote_option']>;
  _nin?: InputMaybe<Array<Scalars['vote_option']>>;
};

export type GetAllPreapprovedNetworkTokensQueryVariables = Exact<{
  codeIds?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
  _loggedUser?: InputMaybe<Scalars['String']>;
}>;


export type GetAllPreapprovedNetworkTokensQuery = { cw20token_info: Array<{ __typename?: 'cw20token_info', address: string, logo?: string | null, name: string, symbol: string, max_supply?: string | null, code_id: number, creator: string, type?: string | null, decimals: number, circulating_supply: string, balances: Array<{ __typename?: 'cw20token_balance', balance: string }> }> };

export type GetContractDetailsSubscriptionVariables = Exact<{
  token?: InputMaybe<Scalars['String']>;
}>;


export type GetContractDetailsSubscription = { cw20token_info_by_pk?: { __typename?: 'cw20token_info', circulating_supply: string, max_supply?: string | null, logo?: string | null } | null };

export type GetTokenDetailsQueryVariables = Exact<{
  codeIds?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
  address?: InputMaybe<Scalars['String']>;
}>;


export type GetTokenDetailsQuery = { cw20token_info: Array<{ __typename?: 'cw20token_info', address: string, logo?: string | null, name: string, symbol: string, creator: string, type?: string | null, max_supply?: string | null, code_id: number, decimals: number, circulating_supply: string, initial_supply: string }> };

export type GetUserBalancesSubscriptionVariables = Exact<{
  address?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
}>;


export type GetUserBalancesSubscription = { cw20token_balance_by_pk?: { __typename?: 'cw20token_balance', balance: string } | null };


export const GetAllPreapprovedNetworkTokensDocument = gql`
    query GetAllPreapprovedNetworkTokens($codeIds: [Int!], $_loggedUser: String = "") {
  cw20token_info(where: {code_id: {_in: $codeIds}}) {
    address
    logo
    name
    symbol
    max_supply
    code_id
    creator
    type
    decimals
    circulating_supply
    balances(where: {address: {_eq: $_loggedUser}}) {
      balance
    }
  }
}
    `;

/**
 * __useGetAllPreapprovedNetworkTokensQuery__
 *
 * To run a query within a React component, call `useGetAllPreapprovedNetworkTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPreapprovedNetworkTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPreapprovedNetworkTokensQuery({
 *   variables: {
 *      codeIds: // value for 'codeIds'
 *      _loggedUser: // value for '_loggedUser'
 *   },
 * });
 */
export function useGetAllPreapprovedNetworkTokensQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPreapprovedNetworkTokensQuery, GetAllPreapprovedNetworkTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPreapprovedNetworkTokensQuery, GetAllPreapprovedNetworkTokensQueryVariables>(GetAllPreapprovedNetworkTokensDocument, options);
      }
export function useGetAllPreapprovedNetworkTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPreapprovedNetworkTokensQuery, GetAllPreapprovedNetworkTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPreapprovedNetworkTokensQuery, GetAllPreapprovedNetworkTokensQueryVariables>(GetAllPreapprovedNetworkTokensDocument, options);
        }
export type GetAllPreapprovedNetworkTokensQueryHookResult = ReturnType<typeof useGetAllPreapprovedNetworkTokensQuery>;
export type GetAllPreapprovedNetworkTokensLazyQueryHookResult = ReturnType<typeof useGetAllPreapprovedNetworkTokensLazyQuery>;
export type GetAllPreapprovedNetworkTokensQueryResult = Apollo.QueryResult<GetAllPreapprovedNetworkTokensQuery, GetAllPreapprovedNetworkTokensQueryVariables>;
export const GetContractDetailsDocument = gql`
    subscription getContractDetails($token: String = "") {
  cw20token_info_by_pk(address: $token) {
    circulating_supply
    max_supply
    logo
  }
}
    `;

/**
 * __useGetContractDetailsSubscription__
 *
 * To run a query within a React component, call `useGetContractDetailsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetContractDetailsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContractDetailsSubscription({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetContractDetailsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetContractDetailsSubscription, GetContractDetailsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetContractDetailsSubscription, GetContractDetailsSubscriptionVariables>(GetContractDetailsDocument, options);
      }
export type GetContractDetailsSubscriptionHookResult = ReturnType<typeof useGetContractDetailsSubscription>;
export type GetContractDetailsSubscriptionResult = Apollo.SubscriptionResult<GetContractDetailsSubscription>;
export const GetTokenDetailsDocument = gql`
    query getTokenDetails($codeIds: [Int!], $address: String) {
  cw20token_info(
    where: {code_id: {_in: $codeIds}, _and: {address: {_eq: $address}}}
  ) {
    address
    logo
    name
    symbol
    creator
    type
    max_supply
    code_id
    decimals
    circulating_supply
    initial_supply
  }
}
    `;

/**
 * __useGetTokenDetailsQuery__
 *
 * To run a query within a React component, call `useGetTokenDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenDetailsQuery({
 *   variables: {
 *      codeIds: // value for 'codeIds'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetTokenDetailsQuery(baseOptions?: Apollo.QueryHookOptions<GetTokenDetailsQuery, GetTokenDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTokenDetailsQuery, GetTokenDetailsQueryVariables>(GetTokenDetailsDocument, options);
      }
export function useGetTokenDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTokenDetailsQuery, GetTokenDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTokenDetailsQuery, GetTokenDetailsQueryVariables>(GetTokenDetailsDocument, options);
        }
export type GetTokenDetailsQueryHookResult = ReturnType<typeof useGetTokenDetailsQuery>;
export type GetTokenDetailsLazyQueryHookResult = ReturnType<typeof useGetTokenDetailsLazyQuery>;
export type GetTokenDetailsQueryResult = Apollo.QueryResult<GetTokenDetailsQuery, GetTokenDetailsQueryVariables>;
export const GetUserBalancesDocument = gql`
    subscription getUserBalances($address: String = "", $token: String = "") {
  cw20token_balance_by_pk(address: $address, token: $token) {
    balance
  }
}
    `;

/**
 * __useGetUserBalancesSubscription__
 *
 * To run a query within a React component, call `useGetUserBalancesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBalancesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBalancesSubscription({
 *   variables: {
 *      address: // value for 'address'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetUserBalancesSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetUserBalancesSubscription, GetUserBalancesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetUserBalancesSubscription, GetUserBalancesSubscriptionVariables>(GetUserBalancesDocument, options);
      }
export type GetUserBalancesSubscriptionHookResult = ReturnType<typeof useGetUserBalancesSubscription>;
export type GetUserBalancesSubscriptionResult = Apollo.SubscriptionResult<GetUserBalancesSubscription>;