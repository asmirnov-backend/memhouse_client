import { useTranslation } from 'react-i18next';

import { Grid } from '@mui/material';

import DeveloperCard from '../../entities/DeveloperCard/DeveloperCard';
import BackendRoleChip from '../../entities/DeveloperRolesChip/BackendRoleChip';
import DevopsRoleChip from '../../entities/DeveloperRolesChip/DevopsRoleChip';
import FrontendRoleChip from '../../entities/DeveloperRolesChip/FrontendRoleChip';

function Developers() {
  const { t } = useTranslation();

  return (
    <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={3}>
      <Grid item>
        <DeveloperCard
          image="developersPhoto/Andrew.jpg"
          name={t('developer names.Andrew Smirnov')}
          githubDeveloperLink="https://github.com/asmirnov-backend"
          roles={[BackendRoleChip, DevopsRoleChip]}
        />
      </Grid>
      <Grid item>
        <DeveloperCard
          image="developersPhoto/Luka.jpg"
          name={t('developer names.Luka Khergiani')}
          githubDeveloperLink="https://github.com/Nash-G-jr"
          roles={[FrontendRoleChip]}
        />
      </Grid>
      <Grid item>
        <DeveloperCard
          image="developersPhoto/Vladimir.jpg"
          name={t('developer names.Vladimir Parasochka')}
          githubDeveloperLink="https://github.com/Vpar7907"
          roles={[FrontendRoleChip]}
        />
      </Grid>
    </Grid>
  );
}

export default Developers;
