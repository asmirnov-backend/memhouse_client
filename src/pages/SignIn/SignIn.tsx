import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Avatar, Box, Button, Container, Link, TextField, Typography } from '@mui/material';

import { useSnackbar } from 'notistack';

import { AUTH_TOKEN } from '../../app/constants/auth-token.constant';
import routes from '../../app/router/index';
import { Pages } from '../../app/router/types';
import BlockPageWhileLoading from '../../components/BlockPageWhileLoading';
import { FullCenteredFlexBox } from '../../components/styled';
import { LoginMutationVariables, useLoginMutation } from '../../generated/graphql';
import { ErrorResponse } from '../../interfaces/error-response.interface';

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<LoginMutationVariables>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [loginMutation, { loading }] = useLoginMutation({ errorPolicy: 'all' });

  const onSubmit = async (params: LoginMutationVariables) => {
    const { data, errors } = await loginMutation({ variables: params });

    if (errors) {
      const response = errors[0].extensions.response as ErrorResponse;
      const message = Array.isArray(response.message)
        ? response.message.join('. ')
        : response.message;
      enqueueSnackbar(message, { variant: 'error' });
    }

    if (data) {
      localStorage.setItem(AUTH_TOKEN, data.login.jwtToken);
      enqueueSnackbar('Вход успешен', { variant: 'success' });
      navigate(routes[Pages.Profile].path);
    }
    // client.resetStore() - for logout
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Container component="main" maxWidth="xs">
      <BlockPageWhileLoading isLoading={loading} />
      <FullCenteredFlexBox>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('sign in title')}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          {/* register your input into the hook by invoking the "register" function */}
          <TextField
            margin="normal"
            fullWidth
            label={t('email')}
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
            label={t('password')}
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
            })}
            error={formErrors.password ? true : false}
            helperText={formErrors.password?.message}
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            {t('sign in button')}
          </Button>
          <Link href={routes[Pages.SignUp].path} variant="body2">
            {t('link to sign up')}
          </Link>
        </Box>
      </FullCenteredFlexBox>
    </Container>
  );
}

export default SignIn;
