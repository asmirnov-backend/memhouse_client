import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import DefaultIcon from '@mui/icons-material/Deblur';
import LogoutIcon from '@mui/icons-material/Logout';
import StarsIcon from '@mui/icons-material/Stars';
import { Divider } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import useSidebar from '@/app/store/sidebar';
import routes from '@/pages/routes';
import isAuthorized from '@/shared/utils/is-authorized';

import useYMVersion from '../../../../shared/hooks/useYMVersion';

function Sidebar() {
  const [isSidebarOpen, sidebarActions] = useSidebar();
  const { t } = useTranslation();
  const versionYM = useYMVersion();

  return (
    <SwipeableDrawer
      anchor="left"
      open={isSidebarOpen}
      onClose={sidebarActions.close}
      onOpen={sidebarActions.open}
      disableBackdropTransition={false}
      disableSwipeToOpen={true}
      swipeAreaWidth={30}
    >
      <List
        sx={{
          width: theme => `${theme.mixins.toolbar.minWidth}px`,
          pt: theme => `${theme.mixins.toolbar.minHeight}px`,
        }}
      >
        <ListItem sx={{ p: 0 }} key="Title">
          <ListItemButton>
            <ListItemIcon>
              <StarsIcon sx={{ color: '#1e88e5' }} />
            </ListItemIcon>
            <ListItemText
              sx={{ my: 0 }}
              primary="MemHouse"
              primaryTypographyProps={{
                color: '#1e88e5',
                fontSize: 20,
                fontWeight: 'medium',
                letterSpacing: 0,
              }}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem sx={{ p: 0 }} key={routes.Welcome.path}>
          <ListItemButton onClick={sidebarActions.close} component={Link} to={routes.Welcome.path}>
            <ListItemIcon>
              {routes.Welcome.icon ? <routes.Welcome.icon /> : <DefaultIcon />}
            </ListItemIcon>
            <ListItemText>{t('pages titles.welcome')}</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }} key={routes.ViewMemes.path}>
          <ListItemButton
            onClick={sidebarActions.close}
            component={Link}
            to={routes.ViewMemes.path}
          >
            <ListItemIcon>
              {routes.ViewMemes.icon ? <routes.ViewMemes.icon /> : <DefaultIcon />}
            </ListItemIcon>
            <ListItemText>{t('pages titles.view memes')}</ListItemText>
          </ListItemButton>
        </ListItem>
        {isAuthorized() && (
          <ListItem sx={{ p: 0 }} key={routes.CreateMem.path}>
            <ListItemButton
              onClick={sidebarActions.close}
              component={Link}
              to={routes.CreateMem.path}
            >
              <ListItemIcon>
                {routes.CreateMem.icon ? <routes.CreateMem.icon /> : <DefaultIcon />}
              </ListItemIcon>
              <ListItemText>{t('pages titles.create mem')}</ListItemText>
            </ListItemButton>
          </ListItem>
        )}
        <Divider />
        {!isAuthorized() && (
          <ListItem
            sx={{
              p: 0,
            }}
            key={routes.SignIn.path}
          >
            <ListItemButton onClick={sidebarActions.close} component={Link} to={routes.SignIn.path}>
              <ListItemIcon>
                {routes.SignIn.icon ? <routes.SignIn.icon /> : <DefaultIcon />}
              </ListItemIcon>
              <ListItemText>{t('pages titles.sign in')}</ListItemText>
            </ListItemButton>
          </ListItem>
        )}
        {!isAuthorized() && (
          <ListItem
            sx={{
              p: 0,
            }}
            key={routes.SignUp.path}
          >
            <ListItemButton onClick={sidebarActions.close} component={Link} to={routes.SignUp.path}>
              <ListItemIcon>
                {routes.SignUp.icon ? <routes.SignUp.icon /> : <DefaultIcon />}
              </ListItemIcon>
              <ListItemText>{t('pages titles.sign up')}</ListItemText>
            </ListItemButton>
          </ListItem>
        )}
        {isAuthorized() && (
          <ListItem sx={{ p: 0 }} key={routes.Profile.path}>
            <ListItemButton
              onClick={sidebarActions.close}
              component={Link}
              to={routes.Profile.path}
            >
              <ListItemIcon>
                {routes.Profile.icon ? <routes.Profile.icon /> : <DefaultIcon />}
              </ListItemIcon>
              <ListItemText>{t('pages titles.profile')}</ListItemText>
            </ListItemButton>
          </ListItem>
        )}
        <ListItem sx={{ p: 0 }} key={routes.Settings.path}>
          <ListItemButton onClick={sidebarActions.close} component={Link} to={routes.Settings.path}>
            <ListItemIcon>
              {routes.Settings.icon ? <routes.Settings.icon /> : <DefaultIcon />}
            </ListItemIcon>
            <ListItemText>{t('pages titles.settings')}</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ p: 0 }} key={routes.Developers.path}>
          <ListItemButton
            onClick={sidebarActions.close}
            component={Link}
            to={routes.Developers.path}
          >
            <ListItemIcon>
              {routes.Developers.icon ? <routes.Developers.icon /> : <DefaultIcon />}
            </ListItemIcon>
            <ListItemText>{t('pages titles.developers')}</ListItemText>
          </ListItemButton>
        </ListItem>
        {versionYM != 1 && (
          <ListItem sx={{ p: 0 }} key={routes.Subscription.path}>
            <ListItemButton
              onClick={() => {
                if (versionYM == 0) {
                  ym(98456879, 'reachGoal', 'f2iu8732hbj2');
                  ym(98456879, 'params', { version: versionYM });
                }
                sidebarActions.close();
              }}
              component={Link}
              to={routes.Subscription.path}
            >
              <ListItemIcon>
                {routes.Subscription.icon ? <routes.Subscription.icon /> : <DefaultIcon />}
              </ListItemIcon>
              <ListItemText>{t('pages titles.subscription')}</ListItemText>
            </ListItemButton>
          </ListItem>
        )}
        {isAuthorized() && (
          <ListItem sx={{ p: 0 }} key="logout">
            <ListItemButton
              onClick={() => {
                localStorage.clear();
                sidebarActions.close();
              }}
              component={Link}
              to={routes.SignIn.path}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText>{t('logout')}</ListItemText>
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </SwipeableDrawer>
  );
}

export default Sidebar;
