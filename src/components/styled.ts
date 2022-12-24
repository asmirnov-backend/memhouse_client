import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const FlexBox = styled(Box)({
  display: 'flex',
});

export const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const FullCenteredFlexBox = styled(CenteredFlexBox)({
  marginTop: 80,
});

export const FullSizeCenteredFlexBox = styled(CenteredFlexBox)({
  width: '100%',
  height: '100%',
});
