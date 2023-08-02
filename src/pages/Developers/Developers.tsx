import { useTranslation } from 'react-i18next';

import { Grid } from '@mui/material';

import DeveloperCard from '../../entities/DeveloperCard/DeveloperCard';
import DevopsRoleChip from '../../entities/DeveloperRolesChip/DevopsRoleChip';
import FrontendRoleChip from '../../entities/DeveloperRolesChip/FrontendRoleChip';
import FullStackRoleChip from '../../entities/DeveloperRolesChip/FullStackRoleChip';

function Developers() {
  const { t } = useTranslation();

  return (
    <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={3}>
      <Grid item>
        <DeveloperCard
          image="developersPhoto/Andrew.webp"
          name={t('developer names.Andrew Smirnov')}
          telegramDeveloperLink="https://t.me/smirnovandrew1999"
          githubDeveloperLink="https://github.com/asmirnov-backend"
          roles={[FullStackRoleChip, DevopsRoleChip]}
        />
      </Grid>
      <Grid item>
        <DeveloperCard
          image="developersPhoto/Luka.webp"
          name={t('developer names.Luka Khergiani')}
          telegramDeveloperLink="https://t.me/budda_42"
          githubDeveloperLink="https://github.com/Nash-G-jr"
          roles={[FrontendRoleChip]}
        />
      </Grid>
      <Grid item>
        <DeveloperCard
          image="developersPhoto/Vladimir.webp"
          name={t('developer names.Vladimir Parasochka')}
          telegramDeveloperLink="https://t.me/gori_yar4e"
          githubDeveloperLink="https://github.com/Vpar7907"
          roles={[FrontendRoleChip]}
        />
      </Grid>
    </Grid>
  );
}

export default Developers;
