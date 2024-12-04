import { useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import ShopIcon from '@mui/icons-material/Shop';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  styled,
} from '@mui/material';

import useYMVersion from '../../shared/hooks/useYMVersion';

const BootstrapButton = styled(Button)({
  textTransform: 'none',
  marginTop: '3rem',
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.5rem',
  border: '2px solid',
  backgroundColor: '#4B0082',
  borderColor: '#ffe666',
});

export const SubscriptionDialog = () => {
  const [open, setOpen] = useState(false);
  const versionYM = useYMVersion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    ym(98456879, 'reachGoal', 'qwdqwd21e2d');
    ym(98456879, 'params', { version: versionYM });
  };

  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth="md"
      onClose={() => {}}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>Приглашение о приобретении подписки</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        size="large"
        sx={theme => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.primary,
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <DialogContentText>
          Для улучшения качества и удобства использования нашего сервиса, рекомендуем приобрести
          подписку. Она откроет доступ к эксклюзивному контенту и расширенным функциям, делая ваш
          опыт еще более приятным и продуктивным.
        </DialogContentText>
        <BootstrapButton
          autoFocus
          endIcon={<ShopIcon />}
          variant="contained"
          href="/subscription"
          onClick={() => {
            ym(98456879, 'reachGoal', '3213123123');
            ym(98456879, 'params', { version: versionYM });
          }}
        >
          Посмотреть варианты покупки
        </BootstrapButton>
      </DialogContent>
      <DialogActions> </DialogActions>
    </Dialog>
  );
};

export default SubscriptionDialog;
