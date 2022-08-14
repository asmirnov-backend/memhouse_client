import BugReportIcon from '@mui/icons-material/BugReport';
import HomeIcon from '@mui/icons-material/Home';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import PreviewIcon from '@mui/icons-material/Preview';
import TerrainIcon from '@mui/icons-material/Terrain';

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
  [Pages.Page3]: {
    component: asyncComponentLoader(() => import('@/pages/Page3')),
    path: '/page-3',
    title: 'Page 3',
    icon: TerrainIcon,
  },
  [Pages.Page4]: {
    component: asyncComponentLoader(() => import('@/pages/Page4')),
    path: '/page-4',
    title: 'Page 4',
    icon: BugReportIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
