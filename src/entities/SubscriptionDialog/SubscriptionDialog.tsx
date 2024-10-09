import { useState } from 'react';

import ShopIcon from '@mui/icons-material/Shop';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  styled,
} from '@mui/material';

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

  setTimeout(() => {
    setOpen(true);
  }, 5000);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth="md"
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>Приглашение о приобретении подписки</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Для улучшения качества и удобства использования нашего сервиса, рекомендуем приобрести
          подписку. Она откроет доступ к эксклюзивному контенту и расширенным функциям, делая ваш
          опыт еще более приятным и продуктивным.
        </DialogContentText>
        <BootstrapButton endIcon={<ShopIcon />} variant="contained" href="/subscription">
          Посмотреть варианты покупки
        </BootstrapButton>
      </DialogContent>
      <DialogActions> </DialogActions>
    </Dialog>
  );
};

export default SubscriptionDialog;
