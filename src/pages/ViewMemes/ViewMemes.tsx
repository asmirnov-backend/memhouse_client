import { Typography } from '@mui/material';

import { CenteredFlexBox } from '../../components/styled';

function ViewMemes() {
  return (
    <>
      <CenteredFlexBox flexDirection="column">
        <img
          src={'https://www.meme-arsenal.com/memes/048a7fdd6bd30a71a465fcf6238b3a2d.jpg'}
          width="35%"
          height="50%"
        />
        <Typography variant="h4" sx={{ color: (theme) => theme.palette.info.main }}>
          Первый мем 😊
        </Typography>
      </CenteredFlexBox>
    </>
  );
}

export default ViewMemes;
