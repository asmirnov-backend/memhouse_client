import { withErrorHandler } from '@/app/error-handling';
import Pages from '@/app/router/Pages';

import { Layout } from './layout';
import { withProviders } from './providers';
import { useServiceWorker } from './service-worker';

function App() {
  useServiceWorker();

  return (
    <Layout>
      <Pages />
    </Layout>
  );
}

export default withErrorHandler(withProviders(App));
