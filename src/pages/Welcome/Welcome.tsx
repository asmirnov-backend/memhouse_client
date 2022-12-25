import { useTranslation } from 'react-i18next';

import { Button, Container, Typography } from '@mui/material';

import useOrientation from '@/hooks/useOrientation';

import { FullSizeCenteredFlexBox } from '../../components/styled';
import routes from '../../routes';
import { Pages } from '../../routes/types';

function Welcome() {
  const isPortrait = useOrientation();
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="xs">
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
        <Typography variant="h1" m={5}>
          {t('title')}
        </Typography>
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{ my: 4 }}
          href={routes[Pages.SignIn].path}
        >
          {t('sign in button')}
        </Button>
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{ my: 4 }}
          href={routes[Pages.ViewMemes].path}
        >
          {t('to mems')}
        </Button>
      </FullSizeCenteredFlexBox>
    </Container>
  );
}

export default Welcome;
