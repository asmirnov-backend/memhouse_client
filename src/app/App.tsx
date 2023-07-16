import { Fragment } from 'react';

import { withErrorHandler } from '@/app/error-handling';
import { Pages } from '@/pages';

import { Layout } from './layout';
import { withProviders } from './providers';
import { ServiceWorker } from './service-worker';

function App() {
  return (
    <Fragment>
      <Layout>
        <Pages />
      </Layout>
      <ServiceWorker />
    </Fragment>
  );
}

export default withErrorHandler(withProviders(App));
