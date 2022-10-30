import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
  split,
} from "@apollo/client";
import { TOKEN_KEY } from "../constants";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";
import { SummerTheme } from "../styles/styles";

const token = localStorage.getItem(TOKEN_KEY);
const isLoggedInVar = makeVar(Boolean(token));
const authToken = makeVar(token);
const themeVar = makeVar(SummerTheme);
const logUserIn = (token: string) => {
  isLoggedInVar(true);
  localStorage.setItem(TOKEN_KEY, token);
};
const logUserOut = () => {
  isLoggedInVar(false);
  localStorage.removeItem(TOKEN_KEY);
};
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});
const authLink = setContext(() => {
  return {
    headers: {
      token: authToken() || null,
    },
  };
});
// const wsLink = new WebSocketLink(
//   new SubscriptionClient("ws://localhost:4000/graphql", {
//     connectionParams: {
//       authToken: authToken || null,
//     },
//   })
// );
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/graphql",
    connectionParams: {
      token: authToken() || "",
    },
  })
);
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authLink.concat(httpLink)
);
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
export { isLoggedInVar, themeVar, logUserIn, logUserOut };
