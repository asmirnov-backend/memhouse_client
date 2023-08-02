import compose from 'compose-function';

import { withApolloClient } from './with-apollo-client';
import { withHelmet } from './with-helmet';
import { withRecoil } from './with-recoil';
import { withRouter } from './with-router';
import { withSnackbar } from './with-snackbar';
import { withTheme } from './with-theme';

export const withProviders = compose(
  withRecoil,
  withTheme,
  withRouter,
  withApolloClient,
  withSnackbar,
  withHelmet,
);
