import { loader as loaderDefaultOptions } from '@/config';

import SimpleLoader from '../../components/SimpleLoader';
import asyncComponentLoader from './loader';
import type { AnyProps, LoadComponent, LoaderDefaultOptions } from './types';

const configuredAsyncComponentLoader = (
  loadComponent: LoadComponent,
  additionalProps: AnyProps = {},
  loaderOptions: LoaderDefaultOptions = loaderDefaultOptions,
  FallbackWaiting = SimpleLoader,
) => asyncComponentLoader(loadComponent, additionalProps, loaderOptions, FallbackWaiting);

export { loaderDefaultOptions };
export default configuredAsyncComponentLoader;
