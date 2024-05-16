import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "//localhost:3000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token =
    sessionStorage.getItem("token")?.slice(1, -1) || localStorage.getItem("token")?.slice(1, -1);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
