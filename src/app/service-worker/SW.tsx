import { useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

import { SnackbarKey, useSnackbar } from 'notistack';
import { useRegisterSW } from 'virtual:pwa-register/react';

// TODO: this should be a custom hook :)
function SW() {
  const notificationKey = useRef<SnackbarKey | null>(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const close = useCallback(() => {
    setOfflineReady(false);
    setNeedRefresh(false);

    if (notificationKey.current) {
      closeSnackbar(notificationKey.current);
    }
  }, [setOfflineReady, setNeedRefresh, closeSnackbar]);

  useEffect(() => {
    if (offlineReady) {
      enqueueSnackbar(<Alert severity="success">App is ready to work offline.</Alert>, {
        autoHideDuration: 4500,
      });
    } else if (needRefresh) {
      notificationKey.current = enqueueSnackbar(t('update to new version text'), {
        variant: 'warning',
        persist: true,
        action: (
          <>
            <Button onClick={() => updateServiceWorker(true)}>{t('reload')}</Button>
            <Button onClick={close}>{t('close')}</Button>
          </>
        ),
      });
    }
  }, [close, needRefresh, offlineReady, enqueueSnackbar, updateServiceWorker, t]);

  return null;
}

export default SW;
