import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, TextField, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

import SimpleError from '../../components/SimpleError';
import SimpleLoader from '../../components/SimpleLoader';
import { useProfileQuery } from '../../generated/graphql';

function Profile() {
  const { data, error } = useProfileQuery();

  if (error)
    return (
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <SimpleError text={error?.message} />
      </Box>
    );
  if (!data)
    return (
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <SimpleLoader />
      </Box>
    );

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <TextField
          value={data.me.email}
          margin="normal"
          fullWidth
          label="Email Address"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          value={data.me.nickname}
          margin="normal"
          fullWidth
          label="Nickname"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          value={data.me.profile?.name ?? 'no name'}
          margin="normal"
          fullWidth
          label="Name"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          value={data.me.profile?.surname ?? 'no surname'}
          margin="normal"
          fullWidth
          label="Surname"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          value={data.me.profile?.birthday ?? 'no birthday'}
          margin="normal"
          fullWidth
          label="Birthday"
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
    </Container>
  );
}

export default Profile;
