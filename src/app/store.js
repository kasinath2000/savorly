
import { configureStore } from "@reduxjs/toolkit";

import { recipeApi } from "@/redux/recipesApi";

export const store = configureStore({
  reducer: {
    [recipeApi.reducerPath]: recipeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      recipeApi.middleware,
    ),
});
