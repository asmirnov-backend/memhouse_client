import { useState } from 'react';

import StarIcon from '@mui/icons-material/Star';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Grid, IconButton, Typography } from '@mui/material';

import { useSnackbar } from 'notistack';

import { MemFullDto, useToggleLikeMutation } from '../../generated/graphql';

export default function MemActionsBar(props: {
  mem: Pick<MemFullDto, 'id' | 'likes' | 'dislikes' | 'rating' | 'isCurrentUserHasSetLike'>;
}) {
  const { enqueueSnackbar } = useSnackbar();
  const [toggleLikeMutation] = useToggleLikeMutation();

  const [likes, setLikes] = useState(props.mem.likes);
  const [isCurrentUserHasSetLike, setIsCurrentUserHasSetLike] = useState(
    props.mem.isCurrentUserHasSetLike,
  );

  const toggleLike = async () => {
    const { data, errors } = await toggleLikeMutation({
      variables: { memId: props.mem.id },
      errorPolicy: 'all',
    });

    if (errors) {
      enqueueSnackbar(errors[0].message, { variant: 'error' });
    } else if (data?.toggleLike.likes !== undefined) {
      setLikes(data.toggleLike.likes);
      setIsCurrentUserHasSetLike(!isCurrentUserHasSetLike);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <IconButton onClick={toggleLike}>
          {isCurrentUserHasSetLike ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
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
