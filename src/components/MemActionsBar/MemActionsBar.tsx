import StarIcon from '@mui/icons-material/Star';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Grid, IconButton, Typography } from '@mui/material';

import { MemFullDto } from '../../generated/graphql';

export default function MemActionsBar(props: { mem: Omit<MemFullDto, 'images'> }) {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <IconButton onClick={() => console.log(111)}>
          {/* TODO if user set like change icon to ThumbUpAltIcon */}
          <ThumbUpOffAltIcon />
          <Typography>{props.mem.likes}</Typography>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton onClick={() => console.log(111)}>
          <ThumbDownOffAltIcon />
          <Typography>{props.mem.dislikes}</Typography>
        </IconButton>
      </Grid>
      <Grid item marginLeft="auto">
        <IconButton>
          <StarIcon />
          <Typography>{props.mem.rating?.toFixed(2)}</Typography>
        </IconButton>
      </Grid>
    </Grid>
  );
}
