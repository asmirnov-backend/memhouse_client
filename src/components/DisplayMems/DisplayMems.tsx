import InfiniteScroll from 'react-infinite-scroll-component';

import { CircularProgress, ImageList, ImageListItem } from '@mui/material';

import { useGetMemsQuery } from '../../generated/graphql';
import { CenteredFlexBox } from '../styled';

function DisplayMems() {
  const { error, data, fetchMore } = useGetMemsQuery();

  if (error || !data) return <p>Error :(</p>;

  return (
    <InfiniteScroll
      dataLength={data.mems.length}
      next={() => fetchMore({ variables: { limit: 3, offset: data.mems.length + 1 } })}
      hasMore={true}
      loader={
        <CenteredFlexBox>
          <CircularProgress color="inherit" />
        </CenteredFlexBox>
      }
    >
      <ImageList sx={{ width: 500 }} cols={1}>
        {data.mems.map((mem, index) => (
          <ImageListItem key={index} style={{ marginBottom: '15px' }}>
            <img src={mem.imgUrls[0]} />
          </ImageListItem>
        ))}
      </ImageList>
    </InfiniteScroll>
  );
}

export default DisplayMems;
