import { Box, CssBaseline } from '@mui/material';

import Header from '@/widgets/Header';
import Sidebar from '@/widgets/Sidebar';

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
