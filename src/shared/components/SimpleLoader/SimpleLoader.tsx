import { CircularProgress } from '@mui/material';

import { FullCenteredFlexBox } from '@/shared/styled-components/styled';

export default function SimpleLoader() {
  return (
    <FullCenteredFlexBox>
      <CircularProgress color="inherit" />
    </FullCenteredFlexBox>
  );
}
