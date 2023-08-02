import { Chip } from '@mui/material';

import useTheme from '../../../app/store/theme';
import { Themes } from '../../../shared/theme/types';

const FrontendRoleChip = () => {
  const [theme] = useTheme();
  return (
    <Chip
      label={'Frontend'}
      sx={{ backgroundColor: theme === Themes.LIGHT ? '#4db6ac' : '#26a69a' }}
    />
  );
};

export default FrontendRoleChip;
