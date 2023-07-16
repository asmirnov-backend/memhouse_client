//prettier-ignore
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

// eslint-disable-next-line react/display-name, func-names
export const withRecoil = (component: () => React.ReactNode) => () => {
  return (
    <RecoilRoot>
      <Suspense fallback="Загрузка...">{component()}</Suspense>
    </RecoilRoot>
  );
};
