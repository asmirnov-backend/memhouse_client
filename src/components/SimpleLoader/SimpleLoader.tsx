import { CircularProgress } from '@mui/material';

import { CenteredFlexBox } from '../styled';

export default function SimpleLoader() {
  return (
    <CenteredFlexBox>
      <CircularProgress color="inherit" />
    </CenteredFlexBox>
  );
}
