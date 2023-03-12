import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { addToFav, getCardData, showFav } from "features/counter/counterSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "./CardComponent";

function Content() {
  const dispatch = useDispatch();

  const { cardItems, fav, isShowFav } = useSelector((state) => {
    return state.counter
  });
  const [sliceNumber, setSliceNumber] = useState(4);
  const handleClick = () => {
    setSliceNumber((prev)=> prev + 4)
  };

    const handleShowFavorite = () => {
      dispatch(showFav())
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
            ? cardItems && cardItems.slice(0,sliceNumber).map((item) => (
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
            display: sliceNumber > cardItems.length || isShowFav ? "none" : "inline-flex",
          }}
        >
          Daha Fazla
        </Button>
      </Grid>
    </Grid>
  );
}

export default Content;
