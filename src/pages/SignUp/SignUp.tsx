import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Link,
  TextField,
  Typography,
} from '@mui/material';

import { useSnackbar } from 'notistack';

import { AuthenticationControls } from '@/shared/components/AuthenticationControls/AuthenticationControls';

import { AUTH_TOKEN } from '../../shared/constants/auth-costants';
import { SignUpMutationVariables, useSignUpMutation } from '../../shared/generated/graphql';
import { ErrorResponse } from '../../shared/interfaces/error-response.interface';
import { FullCenteredFlexBox } from '../../shared/styled-components/styled';
import BlockPageWhileLoading from '../../widgets/BlockPageWhileLoading';
import routes from '../routes';
import { PAGES } from '../types';

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<SignUpMutationVariables>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [signUpMutation, { loading }] = useSignUpMutation({ errorPolicy: 'all' });

  const onSubmit = async (params: SignUpMutationVariables) => {
    const { data, errors } = await signUpMutation({ variables: params });

    if (errors) {
      const response = errors[0].extensions.originalError as ErrorResponse;
      const message = Array.isArray(response.message)
        ? response.message.join('. ')
        : response.message;

      enqueueSnackbar(message, { variant: 'error' });
    }

    if (data) {
      localStorage.setItem(AUTH_TOKEN, data?.registration.jwtToken);
      enqueueSnackbar(t('success'), { variant: 'success' });
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
          {t('sign up title')}
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

          <Divider sx={{ p: 1 }} />

          <TextField
            margin="normal"
            fullWidth
            label={t('user.nickname')}
            type="text"
            {...register('nickname', {
              required: 'Nickname is required',
              minLength: { value: 1, message: 'Nickname must be at least 1 character' },
            })}
            error={formErrors.nickname ? true : false}
            helperText={formErrors.nickname?.message}
          />

          <TextField
            margin="normal"
            fullWidth
            label={t('user.name')}
            type="text"
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 1, message: 'Name must be at least 1 character' },
            })}
            error={formErrors.name ? true : false}
            helperText={formErrors.name?.message}
          />

          <TextField
            margin="normal"
            fullWidth
            label={t('user.surname')}
            type="text"
            {...register('surname', {
              required: 'Surname is required',
              minLength: { value: 1, message: 'Surname must be at least 1 character' },
            })}
            error={formErrors.surname ? true : false}
            helperText={formErrors.surname?.message}
          />
          <AuthenticationControls formType="signup" />
        </Box>
      </FullCenteredFlexBox>
    </Container>
  );
}

export default SignUp;
