import { TextField, TextFieldProps } from '@mui/material';

export default function CustomTextField(props: TextFieldProps) {
  return <TextField margin="normal" fullWidth {...props} />;
}
