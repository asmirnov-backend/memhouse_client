import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PreviewIcon from '@mui/icons-material/Preview';
import SettingsIcon from '@mui/icons-material/Settings';

import asyncComponentLoader from '@/shared/utils/loader';

import { PAGES } from './types';

const routes = {
  [PAGES.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/',
    icon: HomeIcon,
  },
  [PAGES.ViewMemes]: {
    component: asyncComponentLoader(() => import('@/pages/ViewMemes')),
    path: '/view-memes',
    icon: PreviewIcon,
  },
  [PAGES.SignIn]: {
    component: asyncComponentLoader(() => import('@/pages/SignIn')),
    path: '/sign-in',
    icon: LoginIcon,
  },
  [PAGES.SignUp]: {
    component: asyncComponentLoader(() => import('@/pages/SignUp')),
    path: '/sign-up',
    icon: AddCircleIcon,
  },
  [PAGES.Profile]: {
    component: asyncComponentLoader(() => import('@/pages/Profile')),
    path: '/profile',
    icon: AccountCircleIcon,
  },
  [PAGES.CreateMem]: {
    component: asyncComponentLoader(() => import('@/pages/CreateMem')),
    path: '/create-mem',
    icon: AddCircleOutlineIcon,
  },
  [PAGES.Settings]: {
    component: asyncComponentLoader(() => import('@/pages/Settings')),
    path: '/settings',
    icon: SettingsIcon,
  },
  [PAGES.Developers]: {
    component: asyncComponentLoader(() => import('@/pages/Developers')),
    path: '/developers',
    icon: ManageAccountsIcon,
  },
  [PAGES.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
