import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorBoundaryFallback from './error-boundary-fallback';

function getDisplayName(WrappedComponent: FC) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withErrorHandler<P extends object>(Component: FC<P>) {
  function ComponentWithErrorHandling(props: P) {
    return (
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
        <Component {...(props as P)} />
      </ErrorBoundary>
    );
  }

  ComponentWithErrorHandling.displayName = `WithErrorHandling${getDisplayName(
    Component as FC<unknown>,
  )}`;

  return ComponentWithErrorHandling;
}

export { withErrorHandler };
