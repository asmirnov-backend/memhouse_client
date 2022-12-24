import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, Typography } from '@mui/material';
import Container from '@mui/material/Container';

import CustomTextField from '../../components/CustomTextField';
import SimpleError from '../../components/SimpleError';
import SimpleLoader from '../../components/SimpleLoader';
import { CenteredFlexBox } from '../../components/styled';
import { useProfileQuery } from '../../generated/graphql';

function Profile() {
  const { data, error } = useProfileQuery();

  if (error) return <SimpleError text={error?.message} />;
  if (!data) return <SimpleLoader />;

  return (
    <Container component="main" maxWidth="xs">
      <CenteredFlexBox>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <CustomTextField
          value={data.me.email}
          label="Email Address"
          InputProps={{
            readOnly: true,
          }}
        />
        <CustomTextField
          value={data.me.nickname}
          label="Nickname"
          InputProps={{
            readOnly: true,
          }}
        />
        <CustomTextField
          value={data.me.name ?? 'no name'}
          label="Name"
          InputProps={{
            readOnly: true,
          }}
        />
        <CustomTextField
          value={data.me.surname ?? 'no surname'}
          label="Surname"
          InputProps={{
            readOnly: true,
          }}
        />
        <CustomTextField
          value={data.me.birthday ?? 'no birthday'}
          label="Birthday"
          InputProps={{
            readOnly: true,
          }}
        />
      </CenteredFlexBox>
    </Container>
  );
}

export default Profile;
