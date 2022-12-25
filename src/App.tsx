import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { ApolloProvider } from '@apollo/client';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Header from '@/sections/Header';
import SW from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';

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
