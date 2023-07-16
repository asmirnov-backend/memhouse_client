//prettier-ignore
import { Suspense } from 'react';

import ThemeProvider from './theme-provider';

// eslint-disable-next-line react/display-name, func-names
export const withTheme = (component: () => React.ReactNode) => () => {
  console.log(component);

  return (
    <ThemeProvider>
      <Suspense fallback="Загрузка...">{component()}</Suspense>
    </ThemeProvider>
  );
};
