import { useTranslation } from 'react-i18next';

import GitHubIcon from '@mui/icons-material/GitHub';
import { Card, CardContent, CardMedia, Chip, Grid, IconButton, Tooltip } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CenteredFlexBox } from '@/shared/styled-components/styled';

import { repository } from '../../app/config';

function Developers() {
  const { t } = useTranslation();

  return (
    <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
      <Grid item>
        <Container sx={{ height: '100%' }}>
          <CenteredFlexBox
            flexDirection="column"
            sx={{
              mt: '2rem',
            }}
          >
            <Card
              sx={{
                width: 385,
              }}
            >
              <CardMedia sx={{ height: 450 }} image="public/developersPhoto/Andrew.jpg" />
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h5" component="div">
                      {t('developer names.Andrew Smirnov')}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Tooltip title="GitHub" arrow>
                      <IconButton
                        color="info"
                        size="large"
                        component="a"
                        href={repository}
                        target="_blank"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid container spacing={1.5}>
                  <Grid item>
                    <Chip label="Backend" sx={{ backgroundColor: 'purple' }} />
                  </Grid>
                  <Grid item>
                    <Chip label="DevOps" sx={{ backgroundColor: 'darkblue' }} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </CenteredFlexBox>
        </Container>
      </Grid>
      <Grid item>
        <Container sx={{ height: '100%' }}>
          <CenteredFlexBox
            flexDirection="column"
            sx={{
              mt: '2rem',
            }}
          >
            <Card
              sx={{
                width: 385,
              }}
            >
              <CardMedia sx={{ height: 450 }} image="public/developersPhoto/Luka.jpg" />
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h5" component="div">
                      {t('developer names.Luka Khergiani')}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Tooltip title="GitHub" arrow>
                      <IconButton
                        color="info"
                        size="large"
                        component="a"
                        href={repository}
                        target="_blank"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid container spacing={1.5}>
                  <Grid item>
                    <Chip label="Frontend" sx={{ backgroundColor: '#007568' }} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </CenteredFlexBox>
        </Container>
      </Grid>
      <Grid item>
        <Container sx={{ height: '100%' }}>
          <CenteredFlexBox
            flexDirection="column"
            sx={{
              mt: '2rem',
            }}
          >
            <Card
              sx={{
                width: 385,
              }}
            >
              <CardMedia sx={{ height: 450 }} image="public/developersPhoto/Vladimir.jpg" />
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h5" component="div">
                      {t('developer names.Vladimir Parasochka')}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Tooltip title="GitHub" arrow>
                      <IconButton
                        color="info"
                        size="large"
                        component="a"
                        href={repository}
                        target="_blank"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid container spacing={1.5}>
                  <Grid item>
                    <Chip label="Frontend" sx={{ backgroundColor: '#007568' }} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </CenteredFlexBox>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Developers;
