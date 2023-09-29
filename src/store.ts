import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { artworkApi } from "./services/artwork";

export const store = configureStore({
  reducer: {
    [artworkApi.reducerPath]: artworkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(artworkApi.middleware),
});

setupListeners(store.dispatch);
