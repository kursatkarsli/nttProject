import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToFav } from "features/counter/counterSlice";

export default function CardComponent({ item,handleAddToFav }) {
  const { title, price, content, subTitle, isFavorite,  } = item;

  return (
    <Card sx={{ maxWidth: 300, padding: "10px", color: "#00254F" }}>
      <Box sx={{ position: "relative" }}>
        <IconButton sx={{ position: "absolute", right: "10px" }} onClick={ handleAddToFav}>
          {isFavorite ? (
            <Favorite sx={{ color: "red" }} />
          ) : (
            <FavoriteBorderOutlined sx={{ color: "white" }} />
          )}
        </IconButton>
        <CardMedia
          sx={{
            height: 140,
          }}
          image="https://source.unsplash.com/random/"
          title="green iguana"
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle2">{price}</Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
      <CardActions>
        <Typography variant="body2" color="text.secondary">
          {subTitle}
        </Typography>
      </CardActions>
    </Card>
  );
}
