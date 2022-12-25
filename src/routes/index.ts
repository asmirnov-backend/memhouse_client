import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeIcon from '@mui/icons-material/Home';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LoginIcon from '@mui/icons-material/Login';
import PreviewIcon from '@mui/icons-material/Preview';

import i18next from 'i18next';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    component: asyncComponentLoader(() => import('@/pages/Welcome')),
    path: '/',
    title: i18next.t('pages titles.welcome'),
    icon: HomeIcon,
  },
  [Pages.ViewBestMemes]: {
    component: asyncComponentLoader(() => import('@/pages/ViewBestMemes')),
    path: '/view-best-memes',
    title: i18next.t('pages titles.view best memes'),
    icon: ImageSearchIcon,
  },
  [Pages.ViewMemes]: {
    component: asyncComponentLoader(() => import('@/pages/ViewMemes')),
    path: '/view-memes',
    title: i18next.t('pages titles.view memes'),
    icon: PreviewIcon,
  },
  [Pages.SignIn]: {
    component: asyncComponentLoader(() => import('@/pages/SignIn')),
    path: '/sign-in',
    title: i18next.t('pages titles.sign in'),
    icon: LoginIcon,
  },
  [Pages.SignUp]: {
    component: asyncComponentLoader(() => import('@/pages/SignUp')),
    path: '/sign-up',
    title: i18next.t('pages titles.sign up'),
    icon: AddCircleIcon,
  },
  [Pages.Profile]: {
    component: asyncComponentLoader(() => import('@/pages/Profile')),
    path: '/profile',
    title: i18next.t('pages titles.profile'),
    icon: AccountCircleIcon,
  },
  [Pages.CreateMem]: {
    component: asyncComponentLoader(() => import('@/pages/CreateMem')),
    path: '/create-mem',
    title: i18next.t('pages titles.create mem'),
    icon: AddCircleOutlineIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
