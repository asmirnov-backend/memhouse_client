import { useForm } from 'react-hook-form';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Link,
  TextField,
  Typography,
} from '@mui/material';

import { useLoginMutation } from '../../generated/graphql';
import routes from '../../routes/index';
import { Pages } from '../../routes/types';

interface SignIn {
  email: string;
  password: string;
}

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<SignIn>();
  const [loginMutation] = useLoginMutation({ errorPolicy: 'all' });

  const onSubmit = async (params: SignIn) => {
    const { data, errors } = await loginMutation({ variables: params });

    console.log(errors);
    console.log(data);

    if (errors) {
      alert(errors[0].message);
    }
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          {/* register your input into the hook by invoking the "register" function */}
          <TextField
            margin="normal"
            fullWidth
            label="Email Address"
            type="email"
            {...register('email', {
              required: 'Email Address is required',
              pattern: {
                // Check the @ and . in email
                value: new RegExp('.+@.+..+'),
                message: 'It is not a valid email address',
              },
            })}
            error={formErrors.email ? true : false}
            helperText={formErrors.email?.message}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
            })}
            error={formErrors.password ? true : false}
            helperText={formErrors.password?.message}
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Link href={routes[Pages.SignUp].path} variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default SignIn;
