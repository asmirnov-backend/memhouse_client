import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const SubscriptionCard = (props: { image: string; name: string; price: string }) => {
  return (
    <Card
      sx={{
        width: 380,
      }}
    >
      <CardMedia sx={{ height: 450 }} image={props.image} />
      <CardContent>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <CardActions>
          <Button
            onClick={() => {
              alert('Спасибо за готовность купить подписку!');
            }}
            variant="contained"
            size="large"
          >
            Купить за {props.price} рублей
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default SubscriptionCard;
