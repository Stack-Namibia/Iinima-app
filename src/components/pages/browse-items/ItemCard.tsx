import Card from "@mui/material/Card";
import {
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

interface Props {
  item: {
    id: string;
    name: string;
    images: string[];
    location: string;
    price: number;
    description: string;
    category: string;
    likes: number;
    user: {
      name: string;
      avatar: string;
      id: string;
    };
    liked: boolean;
  };
}

export default function ItemCard({ item }: Props) {
  return (
    <Link to={`/item/browse/`}>
      <Card
        sx={{
          minHeight: 385,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardActionArea>
          <CardMedia
            component='img'
            image={item.images[0]}
            alt={item.name}
            sx={{
              height: 150,
            }}
          />
          <CardContent
            sx={{
              textAlign: "left",
              height: 200,
            }}
          >
            <Typography gutterBottom variant='h5' component='div'>
              {item.name}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            justifyContent: "space-between",
            padding: "0 16px",
          }}
          disableSpacing
        >
          <Typography color='primary'>{item.location}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon color={item.liked ? "error" : "disabled"} />
            </IconButton>
            <Typography fontSize={12} color='primary'>
              {item.likes} {item.likes === 1 ? "Like" : "Likes"}
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </Link>
  );
}
