import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: "https://countries.trevorblades.com",
    fetch,
  }),
  cache: new InMemoryCache(),
});

export default apolloClient;
