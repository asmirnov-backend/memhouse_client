import { Typography } from '@mui/material';

import useOrientation from '@/hooks/useOrientation';

import { FullSizeCenteredFlexBox } from '../../components/styled';

function Welcome() {
  const isPortrait = useOrientation();

  return (
    <>
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
        <Typography variant="h1" m={5}>
          😊
        </Typography>
        <Typography variant="h1" m={5}>
          😆
        </Typography>
        <Typography variant="h1" m={5}>
          😋
        </Typography>
        <Typography variant="h1" m={5}>
          😂
        </Typography>
        <Typography variant="h1" m={5}>
          👍
        </Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
