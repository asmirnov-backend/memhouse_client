import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Link } from '@mui/material';

import routes from '@/pages/routes';
import { PAGES } from '@/pages/types';
import ColoredButton from '@/shared/components/ColoredButton/ColoredButton';
import useYMVersion from '@/shared/hooks/useYMVersion';

const Y_METRIC_ID = 'SignUp.click';

export const AuthenticationControls = ({ formType }: { formType: 'signin' | 'signup' }) => {
  const versionYM = useYMVersion();

  const onSignUpClick = useCallback(() => {
    ym(98456879, 'reachGoal', Y_METRIC_ID);
    ym(98456879, 'params', { version: versionYM });
  }, [versionYM]);

  if (formType === 'signin') {
    return versionYM === 4 ? (
      <SignInControlsV4 onSignUpClick={onSignUpClick} />
    ) : (
      <SignInControlsV0 onSignUpClick={onSignUpClick} />
    );
  }

  return versionYM === 4 ? (
    <SignUpControlsV4 onSignUpClick={onSignUpClick} />
  ) : (
    <SignUpControlsV0 onSignUpClick={onSignUpClick} />
  );
};

const ExternalLinkIcon = () => {
  return (
    <svg
      width={18}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
};

/**
 * контрольная версия контролов авторизации
 * @constructor
 */
const SignInControlsV0 = ({ onSignUpClick }: { onSignUpClick: VoidFunction }) => {
  const { t } = useTranslation();

  return (
    <>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {t('sign in button')}
      </Button>
      <Link href={routes[PAGES.SignUp].path} variant="body2" onClick={onSignUpClick}>
        {t('link to sign up')}
      </Link>
    </>
  );
};
/**
 * экспериментальная версия контролов авторизации
 * @constructor
 */
const SignInControlsV4 = ({ onSignUpClick }: { onSignUpClick: VoidFunction }) => {
  const { t } = useTranslation();

  return (
    <>
      <ColoredButton
        type="submit"
        variant="contained"
        customColor="#0063cc"
        fullWidth
        sx={{ mt: 3, mb: 2 }}
      >
        {t('sign in button')}
      </ColoredButton>
      <ColoredButton
        customColor="#3B3355"
        href={routes[PAGES.SignUp].path}
        fullWidth
        sx={{ mb: 2, color: '#fff' }}
        endIcon={<ExternalLinkIcon />}
        onClick={onSignUpClick}
      >
        {t('link to sign up')}
      </ColoredButton>
    </>
  );
};

/**
 * контрольная версия контролов регистрации
 * @constructor
 */
const SignUpControlsV0 = ({ onSignUpClick }: { onSignUpClick: VoidFunction }) => {
  const { t } = useTranslation();

  return (
    <>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={onSignUpClick}
      >
        {t('sign up button')}
      </Button>
      <Link href={routes[PAGES.SignIn].path} variant="body2">
        {t('link to sign in')}
      </Link>
    </>
  );
};
/**
 * экспериментальная версия контролов регистрации
 * @constructor
 */
const SignUpControlsV4 = ({ onSignUpClick }: { onSignUpClick: VoidFunction }) => {
  const { t } = useTranslation();

  return (
    <>
      <ColoredButton
        type="submit"
        fullWidth
        variant="contained"
        customColor="#0063cc"
        onClick={onSignUpClick}
        sx={{ mt: 3, mb: 2 }}
      >
        {t('sign up button')}
      </ColoredButton>
      <ColoredButton
        href={routes[PAGES.SignIn].path}
        sx={{ mb: 2, color: '#fff' }}
        customColor="#3B3355"
        fullWidth
        endIcon={<ExternalLinkIcon />}
      >
        {t('link to sign in')}
      </ColoredButton>
    </>
  );
};
