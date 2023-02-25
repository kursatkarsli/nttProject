import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fav: [],
  cardItems: [
    {
      id: 0,
      title: "Product Name",
      price: 1999,
      content:
        "Lorem ipsum dolor sit amet consectetur. Turpis dolor vulputate velit id sit leo aliquet id at. Vel tellus tempus lacus tristique nulla pretium erat duis.",
      subTitle: "Ücretsiz - Aynı gün kargo",
      isFavorite: false,
    },
    {
      id: 1,

      title: "Product Name",
      price: 1999,
      content:
        "Lorem ipsum dolor sit amet consectetur. Turpis dolor vulputate velit id sit leo aliquet id at. Vel tellus tempus lacus tristique nulla pretium erat duis.",
      subTitle: "Ücretsiz - Aynı gün kargo",
      isFavorite: false,
    },
    {
      id: 2,

      title: "Product Name",
      price: 1999,
      content:
        "Lorem ipsum dolor sit amet consectetur. Turpis dolor vulputate velit id sit leo aliquet id at. Vel tellus tempus lacus tristique nulla pretium erat duis.",
      subTitle: "Ücretsiz - Aynı gün kargo",
      isFavorite: false,
    },
    {
      id: 3,

      title: "Product Name",
      price: 1999,
      content:
        "Lorem ipsum dolor sit amet consectetur. Turpis dolor vulputate velit id sit leo aliquet id at. Vel tellus tempus lacus tristique nulla pretium erat duis.",
      subTitle: "Ücretsiz - Aynı gün kargo",
      isFavorite: false,
    },
    {
      id: 4,

      title: "Product Name",
      price: 1999,
      content:
        "Lorem ipsum dolor sit amet consectetur. Turpis dolor vulputate velit id sit leo aliquet id at. Vel tellus tempus lacus tristique nulla pretium erat duis.",
      subTitle: "Ücretsiz - Aynı gün kargo",
      isFavorite: false,
    },
    {
      id: 5,

      title: "Product Name",
      price: 1999,
      content:
        "Lorem ipsum dolor sit amet consectetur. Turpis dolor vulputate velit id sit leo aliquet id at. Vel tellus tempus lacus tristique nulla pretium erat duis.",
      subTitle: "Ücretsiz - Aynı gün kargo",
      isFavorite: false,
    },
    {
      id: 6,

      title: "Product Name",
      price: 1999,
      content:
        "Lorem ipsum dolor sit amet consectetur. Turpis dolor vulputate velit id sit leo aliquet id at. Vel tellus tempus lacus tristique nulla pretium erat duis.",
      subTitle: "Ücretsiz - Aynı gün kargo",
      isFavorite: false,
    },
    {
      id: 7,

      title: "Product Name",
      price: 1999,
      content:
        "Lorem ipsum dolor sit amet consectetur. Turpis dolor vulputate velit id sit leo aliquet id at. Vel tellus tempus lacus tristique nulla pretium erat duis.",
      subTitle: "Ücretsiz - Aynı gün kargo",
      isFavorite: false,
    },
  ],
  isShowFav: false,
};

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
          : { ...item };
      });
      if(state.fav.length === 0 ) state.isShowFav = false

    },
    showFav: (state) => {
      state.isShowFav = !state.isShowFav;
    },
  },
});
export const { addToFav,showFav } = counterSlice.actions;
export default counterSlice.reducer;
