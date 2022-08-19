import BugReportIcon from '@mui/icons-material/BugReport';
import HomeIcon from '@mui/icons-material/Home';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import PreviewIcon from '@mui/icons-material/Preview';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

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
    icon: VpnKeyIcon,
  },
  [Pages.SignUp]: {
    component: asyncComponentLoader(() => import('@/pages/Page4')),
    path: '/sign-up',
    title: 'SignUp',
    icon: BugReportIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
