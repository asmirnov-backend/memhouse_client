import ErrorIcon from '@mui/icons-material/Error';
import { Typography } from '@mui/material';

import { CenteredFlexBox } from '../styled';

interface ErrorProps {
  text?: string;
}

export default function SimpleError({ text }: ErrorProps) {
  return (
    <CenteredFlexBox>
      <ErrorIcon color="error" fontSize="large" sx={{ marginTop: 10 }} />
      <Typography variant="h5" sx={{ marginTop: 2 }}>
        {text}
      </Typography>
    </CenteredFlexBox>
  );
}
