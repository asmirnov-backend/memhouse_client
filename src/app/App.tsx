import { Fragment } from 'react';

import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { ApolloProvider } from '@apollo/client';

import { withErrorHandler } from '@/app/providers/error-handling';
import AppErrorBoundaryFallback from '@/app/providers/error-handling/fallbacks/App';
import Pages from '@/app/router/Pages';
import SW from '@/app/service-worker';
import Header from '@/widgets/Header';
import Sidebar from '@/widgets/Sidebar';

import apolloClient from './graphql.client';
import { withProviders } from './providers';

function App() {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Pages />
    </Box>
  );
}

const Comp = withProviders(App);

function App1() {
  return (
    <Fragment>
      <SW />
      <ApolloProvider client={apolloClient}>
        <Comp />
      </ApolloProvider>
    </Fragment>
  );
}

export default withErrorHandler(App1, AppErrorBoundaryFallback);
