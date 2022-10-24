import { CHAIN_DETAILS } from "utils/constants";

export interface ApolloLinks {
    uri: string; //GRAPHQL_URL
    url: string; //GRAPHQL_WS
}

export const defaultApolloLinks: ApolloLinks = {
    uri: CHAIN_DETAILS.GRAPHQL_URL[CHAIN_DETAILS.DEFAULT_NETWORK!],
    url: CHAIN_DETAILS.GRAPHQL_WS[CHAIN_DETAILS.DEFAULT_NETWORK!]
  }
