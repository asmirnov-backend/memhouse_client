import { FC } from 'react';
import { PathRouteProps } from 'react-router-dom';

import type { SvgIconProps } from '@mui/material/SvgIcon';

enum Pages {
  Welcome = 'Welcome',
  ViewBestMemes = 'ViewBestMemes',
  ViewMemes = 'ViewMemes',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  Profile = 'Profile',
  NotFound = 'NotFound',
  CreateMem = 'CreateMem',
}

type PathRouteCustomProps = {
  title?: string;
  component: FC;
  icon?: FC<SvgIconProps>;
};

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps & { path: string }>;

export type { Routes };
export { Pages };
