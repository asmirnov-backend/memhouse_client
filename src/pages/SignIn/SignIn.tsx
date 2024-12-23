import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Avatar, Box, Button, Container, Link, TextField, Typography } from '@mui/material';

import { useSnackbar } from 'notistack';

import { AuthenticationControls } from '@/shared/components/AuthenticationControls/AuthenticationControls';

import { AUTH_TOKEN } from '../../shared/constants/auth-costants';
import { LoginMutationVariables, useLoginMutation } from '../../shared/generated/graphql';
import { ErrorResponse } from '../../shared/interfaces/error-response.interface';
import { FullCenteredFlexBox } from '../../shared/styled-components/styled';
import BlockPageWhileLoading from '../../widgets/BlockPageWhileLoading';
import routes from '../routes';
import { PAGES } from '../types';

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
      const response = errors[0].extensions.originalError as ErrorResponse;
      const message = Array.isArray(response.message)
        ? response.message.join('. ')
        : response.message;
      enqueueSnackbar(message, { variant: 'error' });
    }

    if (data) {
      localStorage.setItem(AUTH_TOKEN, data.login.jwtToken);
      enqueueSnackbar('Вход успешен', { variant: 'success' });
      navigate(routes[PAGES.Profile].path);
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
          <AuthenticationControls formType="signin" />
        </Box>
      </FullCenteredFlexBox>
    </Container>
  );
}

export default SignIn;
