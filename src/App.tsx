import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Header from '@/sections/Header';
import HotKeys from '@/sections/HotKeys';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';

const client = new ApolloClient({
  uri: `http://localhost:3002/graphql`,
  credentials: 'include',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          mems: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: false,

            // Concatenate the incoming list items with
            // the existing list items.
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <HotKeys />
      <SW />
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Pages />
        </BrowserRouter>
      </ApolloProvider>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
