//prettier-ignore
import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// eslint-disable-next-line react/display-name, func-names
export const withHelmet = (component: () => React.ReactNode) => () => {
  return (
    <HelmetProvider>
      <Suspense fallback="Загрузка...">{component()}</Suspense>
    </HelmetProvider>
  );
};
