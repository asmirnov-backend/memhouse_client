import InfiniteScroll from 'react-infinite-scroll-component';

import { ImageList, ImageListItem } from '@mui/material';

import { useGetMemsQuery } from '../../generated/graphql';
import Error from '../Error/Error';
import SimpleLoader from '../SimpleLoader/SimpleLoader';

function DisplayMems() {
  const { error, data, fetchMore } = useGetMemsQuery();

  if (error || !data) return <Error text={error?.message} />;

  return (
    <InfiniteScroll
      style={{ overflowY: 'hidden' }}
      dataLength={data.mems.length}
      next={() => fetchMore({ variables: { limit: 3, offset: data.mems.length + 1 } })}
      hasMore={true}
      loader={<SimpleLoader />}
    >
      <ImageList sx={{ margin: 0 }} cols={1} gap={0}>
        {data.mems.map((mem, index) => (
          <ImageListItem key={index}>
            <img src={mem.imgUrls[0]} />
            <div
              style={{
                width: '100%',
                height: '7px',
                margin: 'auto',
                background: '#181955',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </InfiniteScroll>
  );
}

export default DisplayMems;
