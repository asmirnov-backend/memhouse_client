import { Box, CssBaseline } from '@mui/material';

import Header from '@/app/layout/components/header';
import Sidebar from '@/app/layout/components/sidebar';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box display={'grid'} gridTemplateRows={'64px 1fr'} height={'100svh'}>
      <CssBaseline />
      <Header />
      <Sidebar />
      {children}
    </Box>
  );
}
