import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";


export default function CardComponent({ item,handleAddToFav }) {
  const { name, price, description, shippingMethod, isFavorite, imageUrl } = item;

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
          image={imageUrl}
          title="green iguana"
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="subtitle2">{price}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Typography variant="body2" color="text.secondary">
          {shippingMethod}
        </Typography>
      </CardActions>
    </Card>
  );
}
