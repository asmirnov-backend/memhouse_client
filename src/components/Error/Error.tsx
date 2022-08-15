import ErrorIcon from '@mui/icons-material/Error';
import { Typography } from '@mui/material';

interface ErrorProps {
  text?: string;
}

export default function Error({ text }: ErrorProps) {
  return (
    <>
      <ErrorIcon color="error" fontSize="large" sx={{ marginTop: 10 }} />
      <Typography variant="h5" sx={{ marginTop: 2 }}>
        {text}
      </Typography>
    </>
  );
}
