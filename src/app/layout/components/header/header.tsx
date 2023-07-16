import GitHubIcon from '@mui/icons-material/GitHub';
import ThemeIcon from '@mui/icons-material/InvertColors';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';

import { repository } from '@/app/config';
import useSidebar from '@/app/store/sidebar';
import useTheme from '@/app/store/theme';
import InstallPWA from '@/features/InstallPwa';
import { FlexBox } from '@/shared/styled-components/styled';

function Header() {
  const [, sidebarActions] = useSidebar();
  const [, themeActions] = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
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
          <FlexBox>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="Author" arrow>
              <IconButton color="info" size="large" component="a" href={repository} target="_blank">
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="Switch theme" arrow>
              <IconButton color="info" edge="end" size="large" onClick={themeActions.toggle}>
                <ThemeIcon />
              </IconButton>
            </Tooltip>
          </FlexBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
