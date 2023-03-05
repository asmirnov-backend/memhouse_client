import { useState } from 'react';

import StarIcon from '@mui/icons-material/Star';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Grid, IconButton, Typography } from '@mui/material';

import { useSnackbar } from 'notistack';

import { MemFullDto, useToggleLikeMutation } from '../../generated/graphql';

export default function MemActionsBar(props: { mem: Omit<MemFullDto, 'images'> }) {
  const { enqueueSnackbar } = useSnackbar();
  const [toggleLikeMutation] = useToggleLikeMutation();

  const [likes, setLikes] = useState(props.mem.likes);

  const toggleLike = async () => {
    const { data, errors } = await toggleLikeMutation({
      variables: { memId: props.mem.id },
      errorPolicy: 'all',
    });

    if (errors) {
      enqueueSnackbar(errors[0].message, { variant: 'error' });
    } else if (data?.toggleLike.likes !== undefined) {
      setLikes(data.toggleLike.likes);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <IconButton onClick={toggleLike}>
          {/* TODO if user set like change icon to ThumbUpAltIcon */}
          <ThumbUpOffAltIcon />
          <Typography>{likes}</Typography>
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
          <Typography>{props.mem.rating?.toFixed(2) ?? 0}</Typography>
        </IconButton>
      </Grid>
    </Grid>
  );
}
