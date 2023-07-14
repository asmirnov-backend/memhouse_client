//prettier-ignore
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (component: () => React.ReactNode) =>
  // eslint-disable-next-line react/display-name, func-names
  function () {
    return (
      <BrowserRouter>
        <Suspense fallback="Загрузка...">{component()}</Suspense>
      </BrowserRouter>
    );
  };
