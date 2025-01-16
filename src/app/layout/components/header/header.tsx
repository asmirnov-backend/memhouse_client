import { useCallback } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import useSidebar from '@/app/store/sidebar';
import InstallPWA from '@/features/InstallPwa';
import routes from '@/pages/routes';
import useYMVersion from '@/shared/hooks/useYMVersion';
import { FlexBox } from '@/shared/styled-components/styled';

const Y_METRIC_ID = 'SignUp.click';

const SignUpButton = () => {
  const versionYM = useYMVersion();

  const onSignUpClick = useCallback(() => {
    ym(98456879, 'reachGoal', Y_METRIC_ID);
    ym(98456879, 'params', { version: versionYM });
  }, [versionYM]);

  if (versionYM === 4) {
    return (
      <Button href={routes.SignUp.path} size="large" onClick={onSignUpClick}>
        Зарегистрироваться
      </Button>
    );
  }

  return null;
};

function Header() {
  const [, sidebarActions] = useSidebar();

  return (
    <AppBar color="transparent" elevation={1} position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <FlexBox sx={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
          <IconButton
            onClick={sidebarActions.toggle}
            size="large"
            edge="start"
            color="info"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <SignUpButton />
          <InstallPWA />
        </FlexBox>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
