import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { CircularProgress, ImageList } from '@mui/material';

import axios from 'axios';

import UnsplashImage, { IUnsplashImage } from '../../components/UnsplashImage';
import { CenteredFlexBox } from '../../components/styled';

function ViewMemes() {
  const [images, setImages] = useState([] as IUnsplashImage[]);
  const [loaded, setIsLoaded] = useState(false);

  const fetchImages = (count = 1) => {
    const apiRoot = 'https://api.unsplash.com';
    const accessKey = 'OHMi3IOXNKsIJR6Lbh9jvOtYZcZYamUdZCK94v2K0y0';

    axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`).then((res) => {
      console.log(res.data);

      setImages([...images, ...res.data]);
      setIsLoaded(true);
    });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <CenteredFlexBox flexDirection="column">
        <InfiniteScroll
          dataLength={images.length}
          next={() => fetchImages(1)}
          hasMore={true}
          loader={
            <CenteredFlexBox>
              <CircularProgress color="inherit" />
            </CenteredFlexBox>
          }
        >
          <ImageList sx={{ width: 500 }} cols={1}>
            {loaded
              ? images.map((image, index) => <UnsplashImage url={image.urls.regular} key={index} />)
              : ''}
          </ImageList>
        </InfiniteScroll>
      </CenteredFlexBox>
    </>
  );
}

export default ViewMemes;
