import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

export const recipesApi = createApi({
  reducerPath: "recipesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["Recipes"],

  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => "",
      transformResponse: (response) => {
        if (!response.success) {
          throw new Error(response.message || "Failed to load recipes");
        }

        return response.data;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Recipes", id })),
              { type: "Recipes", id: "LIST" },
            ]
          : [{ type: "Recipes", id: "LIST" }],
    }),

    getRecipeById: builder.query({
      query: (id) => `?id=${encodeURIComponent(id)}`,
      transformResponse: (response) => {
        if (!response.success) {
          throw new Error(response.message || "Recipe not found");
        }

        return response.data;
      },
      providesTags: (_result, _error, id) => [{ type: "Recipes", id }],
    }),

    createRecipe: builder.mutation({
      query: (recipe) => ({
        url: "",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams({
          payload: JSON.stringify({ action: "create", recipe }),
        }),
      }),
      invalidatesTags: [{ type: "Recipes", id: "LIST" }],
    }),

    updateRecipe: builder.mutation({
      query: ({ id, ...recipe }) => ({
        url: "",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams({
          payload: JSON.stringify({
            action: "update",
            id,
            recipe: { ...recipe, id },
          }),
        }),
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Recipes", id },
        { type: "Recipes", id: "LIST" },
      ],
    }),

    deleteRecipe: builder.mutation({
      query: (id) => ({
        url: "",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams({
          payload: JSON.stringify({ action: "delete", id }),
        }),
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Recipes", id },
        { type: "Recipes", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useGetRecipeByIdQuery,
  useCreateRecipeMutation,
  useUpdateRecipeMutation,
  useDeleteRecipeMutation,
} = recipesApi;
