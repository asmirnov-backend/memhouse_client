import { Alert, AlertColor, Snackbar } from '@mui/material';

function AlertPopup(props: {
  text: string;
  severity: AlertColor;
  show: boolean;
  setShow?: (value: React.SetStateAction<boolean>) => void;
}) {
  const onClose = props.setShow
    ? () => {
        if (props.setShow) {
          props.setShow(false);
        }
      }
    : undefined;

  return (
    <Snackbar
      onClose={onClose}
      open={props.show}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity={props.severity} onClose={onClose}>
        {props.text}
      </Alert>
    </Snackbar>
  );
}

export default AlertPopup;
