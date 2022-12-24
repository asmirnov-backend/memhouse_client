import { CircularProgress } from '@mui/material';

import { FullCenteredFlexBox } from '../styled';

export default function SimpleLoader() {
  return (
    <FullCenteredFlexBox>
      <CircularProgress color="inherit" />
    </FullCenteredFlexBox>
  );
}
