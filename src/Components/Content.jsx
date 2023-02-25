import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { addToFav, showFav } from "features/counter/counterSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "./CardComponent";

function Content() {
  const dispatch = useDispatch();

  const { cardItems, fav, isShowFav } = useSelector((state) => state.counter);
  const [items, setItems] = useState(cardItems.slice(0, 4));
  const handleClick = () => {
    setItems(cardItems);
  };
  useEffect(() => {
    if (items.length < 8) setItems(cardItems.slice(0, 4));
    else setItems(cardItems);
  }, [cardItems]);
    const handleShowFavorite = () => {
      dispatch(showFav())
    setItems(fav);
  };

  return (
    <Grid container padding={"1rem 7rem;"} display={"flex"} flexWrap={"wrap"}>
      <Grid item xs={12}>
        <Grid container display={"flex"} justifyContent={"space-between"}>
          <Grid item>
            <Typography variant="h4">Title</Typography>
          </Grid>
          <Grid item>
            <Box display={"flex"} gap={1} alignItems={"center"}>
              <Typography>{fav.length} Ürün</Typography>
              <Button variant="contained" onClick={handleShowFavorite}>
                Beğenilenler
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} marginTop={2}>
        <Grid
          container
          display={"flex"}
          gap={2}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          {!isShowFav
            ? items.map((item) => (
                <CardComponent
                  item={item}
                  handleAddToFav={() => dispatch(addToFav(item))}
                />
              ))
            : fav.map((item) => (
                <CardComponent
                  item={item}
                  handleAddToFav={() => dispatch(addToFav(item))}
                />
              ))}
        </Grid>
      </Grid>
      <Grid item xs={12} marginTop={4} textAlign={"center"}>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            display: items.length === 8 || isShowFav ? "none" : "inline-flex",
          }}
        >
          Daha Fazla
        </Button>
      </Grid>
    </Grid>
  );
}

export default Content;
