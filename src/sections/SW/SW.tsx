import { useCallback, useEffect, useRef } from 'react';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

import { SnackbarKey, useSnackbar } from 'notistack';
import { useRegisterSW } from 'virtual:pwa-register/react';

// TODO: this should be a custom hook :)
function SW() {
  const notificationKey = useRef<SnackbarKey | null>(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
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
      notificationKey.current = enqueueSnackbar(
        'New content is available, click on reload button to update.',
        {
          variant: 'warning',
          persist: true,
          action: (
            <>
              <Button onClick={() => updateServiceWorker(true)}>Reload</Button>
              <Button onClick={close}>Close</Button>
            </>
          ),
        },
      );
    }
  }, [close, needRefresh, offlineReady, enqueueSnackbar, updateServiceWorker]);

  return null;
}

export default SW;
