import InfiniteScroll from 'react-infinite-scroll-component';

import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

import MemActionsBar from '@/entities/MemActionsBar';
import TagsBar from '@/entities/TagsBar';
import SimpleError from '@/shared/components/SimpleError';
import SimpleLoader from '@/shared/components/SimpleLoader';
import { useGetMemsQuery } from '@/shared/generated/graphql';
import { CenteredFlexBox } from '@/shared/styled-components/styled';

function ViewMemes() {
  const { error, data, fetchMore } = useGetMemsQuery();

  if (error) return <SimpleError text={error?.message} />;
  if (!data) return <SimpleLoader />;

  return (
    <CenteredFlexBox flexDirection={'column'}>
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
