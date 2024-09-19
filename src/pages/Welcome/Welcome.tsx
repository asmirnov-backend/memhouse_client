import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Button, Collapse, Fade, Grid, Slide, Typography, Zoom } from '@mui/material';

import useTheme from '@/app/store/theme';
import isAuthorized from '@/shared/utils/is-authorized';

import routes from '../routes';
import { PAGES } from '../types';

function Welcome() {
  const { t } = useTranslation();
  const [animateDescription, setAnimateDescription] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);
  const [theme] = useTheme();
  console.log(theme);

  useEffect(() => {
    setAnimateTitle(true);
    const descriptionTimer = setTimeout(() => {
      setAnimateDescription(true);
    }, 1000);
    const buttonTimer = setTimeout(() => {
      setAnimateButton(true);
    }, 2000);

    return () => {
      clearTimeout(descriptionTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
      padding={'30px'}
      height={'100%'}
      overflow={'hidden'}
    >
      <Slide direction="left" in={animateTitle} timeout={{ appear: 1000, enter: 1000 }}>
        <Typography variant="h2" m={5}>
          {t('welcomePage.title')}
        </Typography>
      </Slide>
      <Collapse
        orientation="vertical"
        in={animateDescription}
        timeout={{ appear: 1000, enter: 1000 }}
      >
        <Box p={5}>{t('welcomePage.memhouseDescribe')}</Box>
      </Collapse>
      <Fade in={animateButton} {...(animateButton ? { timeout: 1000 } : {})}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'45px'}>
          {!isAuthorized() && (
            <Button
              variant="contained"
              size="large"
              sx={{ my: 4 }}
              href={routes[PAGES.SignIn].path}
            >
              {t('sign in button')}
            </Button>
          )}
          <Button
            variant="outlined"
            size="large"
            sx={{ my: 4 }}
            href={routes[PAGES.ViewMemes].path}
          >
            {t('to mems')}
          </Button>
        </Box>
      </Fade>
    </Box>
  );
}

export default Welcome;
