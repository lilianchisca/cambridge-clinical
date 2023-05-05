import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

import { env } from '@/env.mjs'

let client: ApolloClient<NormalizedCacheObject>

export function _createApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        RootQuery: {
          queryType: true,
        },
        RootMutation: {
          mutationType: true,
        },
      },
    }),
    link: new HttpLink({
      uri: `${env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT}`,
    }),
  })
}

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient()
  }
  return client
}
