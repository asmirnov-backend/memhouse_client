//prettier-ignore
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line react/display-name, func-names
export const withRouter = (component: () => React.ReactNode) => () => {
  return (
    <BrowserRouter>
      <Suspense fallback="Загрузка...">{component()}</Suspense>
    </BrowserRouter>
  );
};
