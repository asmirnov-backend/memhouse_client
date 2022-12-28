import InfiniteScroll from 'react-infinite-scroll-component';

import { ImageList, ImageListItem } from '@mui/material';

import { t } from 'i18next';
import { isEmpty } from 'lodash';

import SimpleError from '../../components/SimpleError';
import SimpleLoader from '../../components/SimpleLoader';
import { CenteredFlexBox } from '../../components/styled';
import { useGetBestMemsQuery } from '../../generated/graphql';

function ViewBestMemes() {
  const { error, data, fetchMore } = useGetBestMemsQuery();

  if (error) return <SimpleError text={error?.message} />;
  if (!data) return <SimpleLoader />;
  if (isEmpty(data.bestMems)) return <SimpleError text={t('mems end')} />;

  return (
    <CenteredFlexBox flexDirection={'column'}>
      <InfiniteScroll
        style={{ overflowY: 'hidden' }}
        dataLength={data.bestMems.length}
        next={() => fetchMore({ variables: { limit: 3, offset: data.bestMems.length } })}
        hasMore={true}
        loader={<SimpleLoader />}
      >
        <ImageList sx={{ margin: 0 }} cols={1} gap={0}>
          {data.bestMems.map((mem, index) => (
            <ImageListItem key={index}>
              <img src={mem.images[0].displayUrl} />
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
    </CenteredFlexBox>
  );
}

export default ViewBestMemes;
