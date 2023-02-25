import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  fav: [],
  cardItems: [],
  isShowFav: false,
  slicedItems:[]
};
export const getCardData = createAsyncThunk('getCardData', async () => {
  try {
    const response = await axios.get("https://honey-badgers-ecommerce.glitch.me/products");
    console.log(response);
    return response.data
  } catch (error) {
    
  }
})

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      state.fav = state.fav.find((item) => item.id === action.payload.id)
        ? state.fav.filter((item) => item.id !== action.payload.id)
        : [...state.fav, { ...action.payload, isFavorite: true }];

      state.cardItems = state.cardItems.map((item) => {
        return item.id === action.payload.id
          ? { ...item, isFavorite: !item.isFavorite }
          : { ...item, isFavorite:false };
      });
      if(state.fav.length === 0 ) state.isShowFav = false

    },
    showFav: (state) => {
      state.isShowFav = !state.isShowFav;
    },

  },
  extraReducers:{
    [getCardData.fulfilled]: (state, action) => {
     state.cardItems = action.payload
    }
  }
});
export const { addToFav,showFav } = counterSlice.actions;
export default counterSlice.reducer;
