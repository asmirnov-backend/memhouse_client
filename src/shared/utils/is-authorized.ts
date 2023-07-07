import { AUTH_TOKEN } from '@/app/constants/auth-token.constant';

function isAuthorized() {
  return Boolean(localStorage.getItem(AUTH_TOKEN));
}

export default isAuthorized;
