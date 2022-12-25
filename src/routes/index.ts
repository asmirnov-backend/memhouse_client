import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeIcon from '@mui/icons-material/Home';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LoginIcon from '@mui/icons-material/Login';
import PreviewIcon from '@mui/icons-material/Preview';
import SettingsIcon from '@mui/icons-material/Settings';

import asyncComponentLoader from '@/utils/loader';

import { Pages } from './types';

const routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/',
    icon: HomeIcon,
  },
  [Pages.ViewBestMemes]: {
    component: asyncComponentLoader(() => import('@/pages/ViewBestMemes')),
    path: '/view-best-memes',
    icon: ImageSearchIcon,
  },
  [Pages.ViewMemes]: {
    component: asyncComponentLoader(() => import('@/pages/ViewMemes')),
    path: '/view-memes',
    icon: PreviewIcon,
  },
  [Pages.SignIn]: {
    component: asyncComponentLoader(() => import('@/pages/SignIn')),
    path: '/sign-in',
    icon: LoginIcon,
  },
  [Pages.SignUp]: {
    component: asyncComponentLoader(() => import('@/pages/SignUp')),
    path: '/sign-up',
    icon: AddCircleIcon,
  },
  [Pages.Profile]: {
    component: asyncComponentLoader(() => import('@/pages/Profile')),
    path: '/profile',
    icon: AccountCircleIcon,
  },
  [Pages.CreateMem]: {
    component: asyncComponentLoader(() => import('@/pages/CreateMem')),
    path: '/create-mem',
    icon: AddCircleOutlineIcon,
  },
  [Pages.Settings]: {
    component: asyncComponentLoader(() => import('@/pages/Settings')),
    path: '/settings',
    icon: SettingsIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
