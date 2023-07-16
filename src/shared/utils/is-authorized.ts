import { AUTH_TOKEN } from '@/shared/constants/auth-costants';

function isAuthorized() {
  return Boolean(localStorage.getItem(AUTH_TOKEN));
}

export default isAuthorized;
