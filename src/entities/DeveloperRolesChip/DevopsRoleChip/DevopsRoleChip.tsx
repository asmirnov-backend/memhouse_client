import { Chip } from '@mui/material';

import useTheme from '../../../app/store/theme';
import { Themes } from '../../../shared/theme/types';

const DevopsRoleChip = () => {
  const [theme] = useTheme();
  return (
    <Chip
      label={'Devops'}
      sx={{ backgroundColor: theme === Themes.LIGHT ? '#03a9f4' : '#039be5' }}
    />
  );
};

export default DevopsRoleChip;
