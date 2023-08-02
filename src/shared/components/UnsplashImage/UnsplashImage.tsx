import { ImageListItem } from '@mui/material';

const UnsplashImage = ({ url, key }: { url: string; key: number }) => (
  <ImageListItem key={key}>
    <img src={url} />
  </ImageListItem>
);

export default UnsplashImage;
