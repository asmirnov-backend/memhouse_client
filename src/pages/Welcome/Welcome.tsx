import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';

import useOrientation from '@/hooks/useOrientation';

import { FullSizeCenteredFlexBox } from '../../components/styled';

function Welcome() {
  const isPortrait = useOrientation();
  const { t } = useTranslation();

  return (
    <>
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
        <Typography variant="h1" m={5}>
          {t('title')}
        </Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
