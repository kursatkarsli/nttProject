import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/products/productsReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
