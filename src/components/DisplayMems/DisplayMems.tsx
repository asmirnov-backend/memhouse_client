import { CircularProgress, ImageList, ImageListItem } from '@mui/material';

import { useGetMemsQuery } from '../../generated/graphql';
import { CenteredFlexBox } from '../styled';

function DisplayMems() {
  const { loading, error, data } = useGetMemsQuery();

  if (loading)
    return (
      <CenteredFlexBox>
        <CircularProgress color="inherit" />
      </CenteredFlexBox>
    );

  if (error || !data) return <p>Error :(</p>;

  return (
    <ImageList sx={{ width: 500 }} cols={1}>
      {data.mems.map((mem, index) => (
        <ImageListItem key={index} style={{ marginBottom: '15px' }}>
          <img src={mem.imgUrls[0]} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default DisplayMems;
