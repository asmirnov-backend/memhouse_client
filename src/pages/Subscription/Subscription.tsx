import { useTranslation } from 'react-i18next';

import { Grid } from '@mui/material';

import SubscriptionCard from '../../entities/SubscriptionCard';

function Subscription() {
  const { t } = useTranslation();

  return (
    <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={3}>
      <Grid item>
        <SubscriptionCard image="subscriptions/essential.png" name={'Обычная'} price="100" />
      </Grid>
      <Grid item>
        <SubscriptionCard image="subscriptions/extra.png" name={'Премиум'} price="200" />
      </Grid>
      <Grid item>
        <SubscriptionCard image="subscriptions/premium.png" name={'VIP'} price="300" />
      </Grid>
    </Grid>
  );
}

export default Subscription;
