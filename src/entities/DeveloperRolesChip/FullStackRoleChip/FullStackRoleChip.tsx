import { Chip } from '@mui/material';

import useTheme from '../../../app/store/theme';
import { Themes } from '../../../shared/theme/types';

const FullStackRoleChip = () => {
  const [theme] = useTheme();
  return (
    <Chip
      label={'FullStack'}
      sx={{ backgroundColor: theme === Themes.LIGHT ? '#f57c00' : '#ef6c00' }}
    />
  );
};

export default FullStackRoleChip;
