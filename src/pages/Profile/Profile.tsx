import { useTranslation } from 'react-i18next';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, TextField, Typography } from '@mui/material';
import Container from '@mui/material/Container';

import SimpleError from '../../shared/components/SimpleError';
import SimpleLoader from '../../shared/components/SimpleLoader';
import { useProfileQuery } from '../../shared/generated/graphql';
import { FullCenteredFlexBox } from '../../shared/styled-components/styled';

function Profile() {
  const { data, error } = useProfileQuery();
  const { t } = useTranslation();

  if (error) return <SimpleError text={error.message} />;
  if (!data) return <SimpleLoader />;

  return (
    <Container component="main" maxWidth="xs">
      <FullCenteredFlexBox>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('profile title')}
        </Typography>
        <TextField
          value={data.me.email}
          margin="normal"
          fullWidth
          label={t('email')}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          value={data.me.nickname}
          margin="normal"
          fullWidth
          label={t('user.nickname')}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          value={data.me.name ?? 'no name'}
          margin="normal"
          fullWidth
          label={t('user.name')}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          value={data.me.surname ?? 'no surname'}
          margin="normal"
          fullWidth
          label={t('user.surname')}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          value={data.me.birthday ?? 'no birthday'}
          margin="normal"
          fullWidth
          label={t('user.birthday')}
          InputProps={{
            readOnly: true,
          }}
        />
      </FullCenteredFlexBox>
    </Container>
  );
}

export default Profile;
