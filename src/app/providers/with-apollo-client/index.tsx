//prettier-ignore
import { Suspense } from 'react';

import { ApolloProvider } from '@apollo/client';

import apolloClient from './graphql-config';

// eslint-disable-next-line react/display-name, func-names
export const withApolloClient = (component: () => React.ReactNode) => () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Suspense fallback="Загрузка...">{component()}</Suspense>
    </ApolloProvider>
  );
};
