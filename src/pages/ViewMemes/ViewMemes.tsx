import InfiniteScroll from 'react-infinite-scroll-component';

import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

import { random } from 'lodash';

import MemActionsBar from '@/entities/MemActionsBar';
import TagsBar from '@/entities/TagsBar';
import SimpleError from '@/shared/components/SimpleError';
import SimpleLoader from '@/shared/components/SimpleLoader';
import { GetMemsQuery, useGetMemsQuery } from '@/shared/generated/graphql';
import { CenteredFlexBox } from '@/shared/styled-components/styled';

import SubscriptionDialog from '../../entities/SubscriptionDialog';
import useYMVersion from '../../shared/hooks/useYMVersion';

// Мок, чтобы работало без бекенда
const fetchMore = (...args: any) => ({});
const data: GetMemsQuery = {
  mems: [
    'https://i.ibb.co/1ZKGmdk/aaca8e721499.jpg',
    'https://i.ibb.co/0rv1hkk/565b50f9cac5.jpg',
    'https://i.ibb.co/ZdxfFfL/ade4c4cd934a.jpg',
    'https://sun9-12.userapi.com/impg/35b9H1e9R7clkIwylY3s_2XE7LS_uSEKg_rEOg/v7uU6VvDT1A.jpg?size=900x463&quality=95&sign=28ee74facc2efefa528df036a01ab50a&type=album',
    'https://sun9-65.userapi.com/impg/cgF4UJVkm-mcImtKW0RpP1wk-KgiJGhsQlN2Cg/yVcdc1sdjUg.jpg?size=702x759&quality=95&sign=279de5aca298d9b6dd91e34cacbbfdf5&type=album',
    'https://sun9-9.userapi.com/impg/zerhr43YG69IIBI7ZpJrtN6SNndhE_ATYqbO1A/pxTfRdYVACo.jpg?size=714x716&quality=95&sign=2423950c7082541051cff142d5359776&type=album',
  ].map(displayUrl => ({
    id: crypto.randomUUID(),
    likes: random(23, 200, false),
    dislikes: random(3, 100, false),
    rating: random(23, 100, true),
    text: 'Смешной текст',
    images: [
      {
        title: 'Название картинки',
        displayUrl,
      },
    ],
    tags: ['cool', 'web'],
    isCurrentUserHasSetLike: false,
    isCurrentUserHasSetDislike: false,
  })),
};

function ViewMemes() {
  // const { error, data, fetchMore } = useGetMemsQuery();

  // if (error) return <SimpleError text={error?.message} />;
  // if (!data) return <SimpleLoader />;
  const versionYM = useYMVersion();

  return (
    <CenteredFlexBox flexDirection={'column'}>
      {versionYM == 1 && <SubscriptionDialog />}
      <InfiniteScroll
        style={{ overflowY: 'hidden' }}
        dataLength={data.mems.length}
        next={() => fetchMore({ variables: { limit: 3, offset: data.mems.length } })}
        hasMore={true}
        loader={<SimpleLoader />}
      >
        <ImageList sx={{ margin: 0 }} cols={1} gap={0}>
          {data.mems.map((mem, index) => (
            <ImageListItem key={index}>
              <img src={mem.images[0].displayUrl} />
              <ImageListItemBar
                title={<MemActionsBar mem={mem} />}
                subtitle={<TagsBar mem={mem} />}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </InfiniteScroll>
    </CenteredFlexBox>
  );
}

export default ViewMemes;
