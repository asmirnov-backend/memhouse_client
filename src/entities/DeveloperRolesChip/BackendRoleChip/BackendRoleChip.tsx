import { Chip } from '@mui/material';

import useTheme from '../../../app/store/theme';
import { Themes } from '../../../shared/theme/types';

const BackendRoleChip = () => {
  const [theme] = useTheme();

  return (
    <Chip
      label={'Backend'}
      sx={{ backgroundColor: theme === Themes.LIGHT ? '#90a4ae' : '#78909c' }}
    />
  );
};

export default BackendRoleChip;
