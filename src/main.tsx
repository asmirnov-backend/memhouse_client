import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/app';
import welcome from '@/shared/utils/welcome';

import './shared/lib/i18n/i18n';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

welcome();
