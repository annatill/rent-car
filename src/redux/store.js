import { configureStore } from '@reduxjs/toolkit';
import { rentCarApi } from './rentCarApi';

export const store = configureStore({
  reducer: {
    [rentCarApi.reducerPath]: rentCarApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rentCarApi.middleware),
});
