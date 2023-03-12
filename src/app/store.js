import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsReducer';

export const store = configureStore({
  reducer: {
    productsReducer: productsReducer,
  },
});
