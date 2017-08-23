import ApolloClient, {createNetworkInterface} from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: process.env.BACKEND_URL
});

export const client = new ApolloClient({
  ssr: true,
  networkInterface
});

export default client;
