import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { getMainDefinition } from 'apollo-utilities';
import { onError } from 'apollo-link-error';
import { environment } from '../environments/environment';

// const uri = 'http://localhost:3000/graphql';
// const SERVER_PATH = 'localhost:4000/graphql'; // <-- add the URL of the GraphQL server here
// const SERVER_PATH = 'localhost:4000/graphql'; // <-- add the URL of the GraphQL server here
// export function createApollo(httpLink: HttpLink) {
//   return {
//     link: httpLink.create({uri: `http://${SERVER_PATH}`}),
//     cache: new InMemoryCache(),
//   };
// }


@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {

      const ws = new WebSocketLink({
        uri: `ws://${environment.GRAPHQL_PATH}`,
        options: {
          reconnect: true
        }
      });

      const http = httpLink.create({
        uri: `http://${environment.GRAPHQL_PATH}`
      });

      const authLink = setContext((_, { headers }) => {
        // get the authentication token from local storage if it exists
        const token = localStorage.getItem('token');
        // return the headers to the context so httpLink can read them
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
          }
        }
      });

      // const errorLink = onError(({ graphQLErrors, networkError }) => {
      //   if (graphQLErrors)
      //     graphQLErrors.map(({ message, locations, path }) =>
      //       console.log(
      //         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      //       ),
      //     );

      //   if (networkError) console.log(`[Network error]: ${networkError}`);
      // });

      return {
        cache: new InMemoryCache(),
        link: split(({ query }) => {
          const { kind, operation }: any = getMainDefinition(query);
          return kind === 'OperationDefinition' && operation === 'subscription';
        }, ws, authLink.concat(http))
      }
    },
    deps: [HttpLink]
  }],
})
export class GraphQLModule {}
