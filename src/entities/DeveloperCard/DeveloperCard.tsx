import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Card, CardContent, CardMedia, Grid, IconButton, Tooltip, Typography } from '@mui/material';

const DeveloperCard = (props: {
  image: string;
  name: string;
  telegramDeveloperLink: string;
  githubDeveloperLink: string;
  roles: Array<() => JSX.Element>;
}) => {
  return (
    <Card
      sx={{
        width: 380,
      }}
    >
      <CardMedia sx={{ height: 450 }} image={props.image} />
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid
            item
            sx={{
              paddingTop: 1,
            }}
          >
            <Typography variant="h5" component="div">
              {props.name}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Tooltip title="GitHub" arrow>
                  <IconButton
                    color="info"
                    size="large"
                    component="a"
                    href={props.githubDeveloperLink}
                    target="_blank"
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Telegram" arrow>
                  <IconButton
                    color="info"
                    size="large"
                    component="a"
                    href={props.telegramDeveloperLink}
                    target="_blank"
                  >
                    <TelegramIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={1.5}>
          {props.roles.map((Role, index) => (
            <Grid item key={index}>
              <Role />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DeveloperCard;
