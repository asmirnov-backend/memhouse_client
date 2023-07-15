import compose from 'compose-function';

import { withApolloClient } from './with-apollo-client';
import { withRouter } from './with-router';

export const withProviders = compose(withRouter, withApolloClient);
