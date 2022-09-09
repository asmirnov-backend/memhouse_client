import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, TextField, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

import Error from '../../components/Error';
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
        <Error text={error?.message} />
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
      </Box>
    </Container>
  );
}

export default Profile;
