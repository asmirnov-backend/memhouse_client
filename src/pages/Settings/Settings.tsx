import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import { Avatar, MenuItem, TextField, Typography } from '@mui/material';
import Container from '@mui/material/Container';

import useTheme from '@/app/store/theme';

import { muiLocaleState } from '../../app/store/muiLocale';
import { FullCenteredFlexBox } from '../../shared/styled-components/styled';
import routes from '../routes';

type lngs = 'ru' | 'en';
const i18nToMuiLocale = { en: 'enUS', ru: 'ruRU' } as const;

function Settings() {
  const [theme, themeActions] = useTheme();
  const { t, i18n } = useTranslation();
  const [, setMuiLocale] = useRecoilState(muiLocaleState);

  const changeLanguage = async (event: any) => {
    await i18n.changeLanguage(event.target.value);
    setMuiLocale(i18nToMuiLocale[event.target.value as lngs]);
  };

  return (
    <Container component="main" maxWidth="xs">
      <FullCenteredFlexBox>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <routes.Settings.icon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('pages titles.settings')}
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          select
          label={t('settings.language')}
          value={i18n.language as lngs}
          onChange={changeLanguage}
        >
          <MenuItem value={'ru'}>Русский</MenuItem>
          <MenuItem value={'en'}>English</MenuItem>
        </TextField>
        <TextField margin="normal" fullWidth select label={t('settings.theme')} value={theme}>
          <MenuItem value={'dark'} onClick={themeActions.setDarkTheme}>
            {t('settings.themeStyles.dark')}
          </MenuItem>
          <MenuItem value={'light'} onClick={themeActions.setLightTheme}>
            {t('settings.themeStyles.light')}
          </MenuItem>
        </TextField>
      </FullCenteredFlexBox>
    </Container>
  );
}

export default Settings;
