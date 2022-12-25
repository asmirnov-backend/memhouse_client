import { atom } from 'recoil';

import * as locales from '@mui/material/locale';

export const muiLocaleState = atom<keyof typeof locales>({
  key: 'mui-locale-state',
  default: 'ruRU',
});
