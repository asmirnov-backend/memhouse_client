import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import useSidebar from '@/app/store/sidebar';
import InstallPWA from '@/features/InstallPwa';
import { FlexBox } from '@/shared/styled-components/styled';

function Header() {
  const [, sidebarActions] = useSidebar();

  return (
    <AppBar color="transparent" elevation={1} position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <FlexBox sx={{ alignItems: 'center' }}>
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
          <InstallPWA />
        </FlexBox>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
