import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Grid, IconButton, Typography } from '@mui/material';

import { useSnackbar } from 'notistack';

import {
  MemFullDto,
  useToggleDislikeMutation,
  useToggleLikeMutation,
} from '../../generated/graphql';

export default function MemActionsBar(props: {
  mem: Pick<
    MemFullDto,
    | 'id'
    | 'likes'
    | 'dislikes'
    | 'rating'
    | 'isCurrentUserHasSetLike'
    | 'isCurrentUserHasSetDislike'
  >;
}) {
  const { enqueueSnackbar } = useSnackbar();
  const [toggleLikeMutation] = useToggleLikeMutation();
  const [toggleDislikeMutation] = useToggleDislikeMutation();
  const { t } = useTranslation();

  const [likes, setLikes] = useState(props.mem.likes);
  const [isCurrentUserHasSetLike, setIsCurrentUserHasSetLike] = useState(
    props.mem.isCurrentUserHasSetLike,
  );
  const [dislikes, setDislikes] = useState(props.mem.dislikes);
  const [isCurrentUserHasSetDislike, setIsCurrentUserHasSetDislike] = useState(
    props.mem.isCurrentUserHasSetDislike,
  );

  const toggleLike = async () => {
    const { data, errors } = await toggleLikeMutation({
      variables: { memId: props.mem.id },
      errorPolicy: 'all',
    });

    if (errors) {
      enqueueSnackbar(errors[0].message, { variant: 'error' });
    } else if (data?.toggleLike.reactionAmount !== undefined) {
      setLikes(data.toggleLike.reactionAmount);
      setIsCurrentUserHasSetLike(!isCurrentUserHasSetLike);
    }
  };

  const toggleDislike = async () => {
    const { data, errors } = await toggleDislikeMutation({
      variables: { memId: props.mem.id },
      errorPolicy: 'all',
    });

    if (errors) {
      enqueueSnackbar(errors[0].message, { variant: 'error' });
    } else if (data?.toggleDislike.reactionAmount !== undefined) {
      setDislikes(data.toggleDislike.reactionAmount);
      setIsCurrentUserHasSetDislike(!isCurrentUserHasSetDislike);
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
        <IconButton
          onClick={() => {
            enqueueSnackbar(t('not implemented'), { variant: 'warning' });
          }}
        >
          <InfoIcon color="primary" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton onClick={toggleDislike}>
          {isCurrentUserHasSetDislike ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}
          <Typography>{dislikes}</Typography>
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
