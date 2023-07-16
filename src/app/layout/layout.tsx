import { Box, CssBaseline } from '@mui/material';

import Header from '@/app/layout/components/header';
import Sidebar from '@/app/layout/components/sidebar';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <Sidebar />
      {children}
    </Box>
  );
}
