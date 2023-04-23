import { Card, CardMedia } from '@mui/material';

const ImagesCard = ({ images }: { images: FileList | undefined }) => {
  if (!images) return <></>;

  const cardMedias = [];
  for (const image of images) {
    const imageUrl = URL.createObjectURL(image);
    cardMedias.push(
      <CardMedia
        key={cardMedias.length}
        component="img"
        width="auto"
        height="100%"
        image={imageUrl}
        onLoad={() => {
          URL.revokeObjectURL(imageUrl);
        }}
      />,
    );
  }

  return <Card sx={{ mt: 2 }}>{cardMedias}</Card>;
};

export default ImagesCard;
