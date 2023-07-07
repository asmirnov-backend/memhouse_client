import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { ApolloProvider } from '@apollo/client';

import Pages from '@/app/router/Pages';
import SW from '@/app/service-worker';
import { withErrorHandler } from '@/features/error-handling';
import AppErrorBoundaryFallback from '@/features/error-handling/fallbacks/App';
import Header from '@/widgets/Header';
import Sidebar from '@/widgets/Sidebar';

import apolloClient from './graphql.client';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <SW />
      <ApolloProvider client={apolloClient}>
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
