import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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

import AlertPopup from '../../components/AlertPopup';
import BlockPageWhileLoading from '../../components/BlockPageWhileLoading';
import { AUTH_TOKEN } from '../../constants/auth-token.constant';
import { useLoginMutation } from '../../generated/graphql';
import { ErrorResponse } from '../../interfaces/error-response.interface';
import routes from '../../routes/index';
import { Pages } from '../../routes/types';
import sleep from '../../utils/sleep';

interface SignInParams {
  email: string;
  password: string;
}

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<SignInParams>();
  const navigate = useNavigate();
  const [loginMutation] = useLoginMutation({ errorPolicy: 'all' });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [loginErrorText, setLoginErrorText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (params: SignInParams) => {
    setIsLoading(true);
    const { data, errors } = await loginMutation({ variables: params });
    setIsLoading(false);

    if (errors) {
      setIsLoginError(true);
      const response = errors[0].extensions.response as ErrorResponse;
      const message = Array.isArray(response.message)
        ? response.message.join('. ')
        : response.message;
      setLoginErrorText(message);
    }

    if (data) {
      setIsSuccess(true);
      localStorage.setItem(AUTH_TOKEN, data?.login.jwtToken);
      // sleep to see success popup message
      await sleep(1200);
      navigate(routes[Pages.Welcome].path);
    }
    // client.resetStore() - for logout
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <BlockPageWhileLoading isLoading={isLoading} />
      <AlertPopup
        severity="error"
        show={isLoginError}
        setShow={setIsLoginError}
        text={loginErrorText}
      />
      <AlertPopup severity="success" show={isSuccess} text={'Успех'} />
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
