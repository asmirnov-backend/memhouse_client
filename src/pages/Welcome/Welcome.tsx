import { useTranslation } from 'react-i18next';

import { Button, Typography } from '@mui/material';

import useOrientation from '@/hooks/useOrientation';

import { FullSizeCenteredFlexBox } from '../../components/styled';

function Welcome() {
  const isPortrait = useOrientation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
        <Typography variant="h1" m={5}>
          {t('title')}
        </Typography>
        <Button onClick={() => changeLanguage('en')}>EN</Button>
        <Button onClick={() => changeLanguage('ru')}>RU</Button>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
