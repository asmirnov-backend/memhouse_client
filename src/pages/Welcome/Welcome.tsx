import { useTranslation } from 'react-i18next';

import { Button, Container, Typography } from '@mui/material';

import { FullSizeCenteredFlexBox } from '../../components/styled';
import routes from '../../routes';
import { Pages } from '../../routes/types';
import isAuthorized from '../../utils/is-authorized';

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
            href={routes[Pages.SignIn].path}
          >
            {t('sign in button')}
          </Button>
        )}
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
