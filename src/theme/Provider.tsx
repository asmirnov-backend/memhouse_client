import { useRecoilValue } from 'recoil';

import * as locales from '@mui/material/locale';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import useTheme from '@/store/theme';

import { muiLocaleState } from '../store/muiLocale';
import themes from './themes';
import type { CustomThemeProviderProps } from './types';

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const [theme] = useTheme();
  const locale = useRecoilValue(muiLocaleState);

  return (
    <ThemeProvider theme={createTheme(themes[theme], locales[locale])}>{children}</ThemeProvider>
  );
}

export default CustomThemeProvider;
