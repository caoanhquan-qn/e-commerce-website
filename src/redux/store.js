import { configureStore } from '@reduxjs/toolkit';
import { userReducer, cartReducer, collectionsReducer } from './reducer';
export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    collections: collectionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
