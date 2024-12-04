import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import InfoIcon from '@mui/icons-material/Info';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarIcon from '@mui/icons-material/Star';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Button, Grid, IconButton, Typography } from '@mui/material';

import { useSnackbar } from 'notistack';

import routes from '../../pages/routes';
import { PAGES } from '../../pages/types';
import {
  MemFullDto,
  useToggleDislikeMutation,
  useToggleLikeMutation,
} from '../../shared/generated/graphql';
import useYMVersion from '../../shared/hooks/useYMVersion';

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
  const versionYM = useYMVersion();

  const [likes, setLikes] = useState(props.mem.likes);
  const [isCurrentUserHasSetLike, setIsCurrentUserHasSetLike] = useState(
    props.mem.isCurrentUserHasSetLike,
  );
  const [dislikes, setDislikes] = useState(props.mem.dislikes);
  const [isCurrentUserHasSetDislike, setIsCurrentUserHasSetDislike] = useState(
    props.mem.isCurrentUserHasSetDislike,
  );

  const toggleLike = async () => {
    ym(98456879, 'reachGoal', 'LikeButton.click');
    ym(98456879, 'params', { version: versionYM });

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
    ym(98456879, 'reachGoal', 'DislikeButton.click');
    ym(98456879, 'params', { version: versionYM });

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
          {versionYM === 3 && <Typography marginInlineStart={1}>Нравится</Typography>}
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
          {versionYM === 3 && <Typography marginInlineStart={1}>Не нравится</Typography>}
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <StarIcon />
          <Typography>{props.mem.rating?.toFixed(2) ?? 0}</Typography>
        </IconButton>
      </Grid>
      {versionYM == 2 && (
        <Grid item marginLeft="auto">
          <Button
            variant="outlined"
            color="warning"
            href={routes[PAGES.Subscription].path}
            onClick={() => {
              ym(98456879, 'reachGoal', 'SubscriptionButtonAfterMem');
              ym(98456879, 'params', { version: versionYM });
            }}
            endIcon={<OpenInNewIcon />}
          >
            Купить подписку
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
