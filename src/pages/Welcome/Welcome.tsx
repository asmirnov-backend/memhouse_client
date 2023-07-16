import { useTranslation } from 'react-i18next';

import { Button, Container, Typography } from '@mui/material';

import isAuthorized from '@/shared/utils/is-authorized';

import { FullSizeCenteredFlexBox } from '../../shared/styled-components/styled';
import routes from '../routes';
import { PAGES } from '../types';

function Welcome() {
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="xs">
      <FullSizeCenteredFlexBox>
        <Typography variant="h2" m={5}>
          {t('title')}
        </Typography>
        {!isAuthorized() && (
          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{ my: 4 }}
            href={routes[PAGES.SignIn].path}
          >
            {t('sign in button')}
          </Button>
        )}
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{ my: 4 }}
          href={routes[PAGES.ViewMemes].path}
        >
          {t('to mems')}
        </Button>
      </FullSizeCenteredFlexBox>
    </Container>
  );
}

export default Welcome;
