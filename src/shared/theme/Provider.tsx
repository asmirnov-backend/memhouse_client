import { useRecoilValue } from 'recoil';

import * as locales from '@mui/material/locale';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { muiLocaleState } from '@/app/store/muiLocale';
import useTheme from '@/app/store/theme';

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
