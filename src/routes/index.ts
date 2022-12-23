import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeIcon from '@mui/icons-material/Home';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LoginIcon from '@mui/icons-material/Login';
import PreviewIcon from '@mui/icons-material/Preview';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/',
    title: 'Welcome',
    icon: HomeIcon,
  },
  [Pages.ViewBestMemes]: {
    component: asyncComponentLoader(() => import('@/pages/ViewBestMemes')),
    path: '/view-best-memes',
    title: 'View Best Memes',
    icon: ImageSearchIcon,
  },
  [Pages.ViewMemes]: {
    component: asyncComponentLoader(() => import('@/pages/ViewMemes')),
    path: '/view-memes',
    title: 'View Memes',
    icon: PreviewIcon,
  },
  [Pages.SignIn]: {
    component: asyncComponentLoader(() => import('@/pages/SignIn')),
    path: '/sign-in',
    title: 'SignIn',
    icon: LoginIcon,
  },
  [Pages.SignUp]: {
    component: asyncComponentLoader(() => import('@/pages/SignUp')),
    path: '/sign-up',
    title: 'SignUp',
    icon: AddCircleIcon,
  },
  [Pages.Profile]: {
    component: asyncComponentLoader(() => import('@/pages/Profile')),
    path: '/profile',
    title: 'Profile',
    icon: AccountCircleIcon,
  },
  [Pages.CreateMem]: {
    component: asyncComponentLoader(() => import('@/pages/CreateMem')),
    path: '/create-mem',
    title: 'Create Mem',
    icon: AddCircleOutlineIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
