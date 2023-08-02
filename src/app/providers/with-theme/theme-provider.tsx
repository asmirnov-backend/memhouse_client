import { useRecoilValue } from 'recoil';

import * as locales from '@mui/material/locale';
import { ThemeProvider as ThemeProviderMui, createTheme } from '@mui/material/styles';

import { muiLocaleState } from '@/app/store/muiLocale';
import useTheme from '@/app/store/theme';
import themes from '@/shared/theme/themes';

function ThemeProvider({ children }: { children: JSX.Element }) {
  const [theme] = useTheme();
  const locale = useRecoilValue(muiLocaleState);
  console.log(theme);

  return (
    <ThemeProviderMui theme={createTheme(themes[theme], locales[locale])}>
      {children}
    </ThemeProviderMui>
  );
}

export default ThemeProvider;
