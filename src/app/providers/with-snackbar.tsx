//prettier-ignore
import { Suspense } from 'react';

import { SnackbarProvider } from 'notistack';

const TIME_AUTO_HIDE_NOTIFICATION = 6000;

// eslint-disable-next-line react/display-name, func-names
export const withSnackbar = (component: () => React.ReactNode) => () => {
  return (
    <SnackbarProvider autoHideDuration={TIME_AUTO_HIDE_NOTIFICATION} dense={true}>
      <Suspense fallback="Загрузка...">{component()}</Suspense>
    </SnackbarProvider>
  );
};
