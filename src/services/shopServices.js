import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../database/realTimeDatabase";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['profileImageGet', 'locationGet'],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories.json`,
    }),
    getProductsByCategory: builder.query({
      query: (category) =>
        `products.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: (res) => {
        const transformedResponse = Object.values(res);
        return transformedResponse
      },
    }),
    getProductById: builder.query({
      query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
      transformResponse: (res) => {
        const transformedResponse = Object.values(res);
        if (transformedResponse.length) return transformedResponse[0];
      },
    }),
    postOrder: builder.mutation({
      query: ({ ...order }) => ({
        url: "order.json",
        method: "POST",
        body: order
      })
    }),
    getOrdersByUser: builder.query({
      query: (user) => `order.json?orderBy="user"&equalTo="${user}"`,
      transformResponse: (res) => {
        const transformedResponse = Object.values(res);
        return transformedResponse;
      },
    }),

    getProfileImage: builder.query({
      query: (localId) => `profileImages/${localId}.json`,
      providesTags: ['profileImageGet']

    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: 'PUT',
        body: {
          image: image
        }
      }),
      invalidatesTags: ['profileImageGet']
    }),
    getLocation: builder.query({
      query: (localId) => `locations/${localId}.json`,
      providesTags: ["locationGet"],
    }),
    postLocation: builder.mutation({
      query: ({ location, localId }) => ({
        url: `locations/${localId}.json`,
        method: "PUT",
        body: {
          latitude: location.latitude,
          longitude: location.longitude,
          address: location.address,
          updatedAt: location.updatedAt,
        },
      }),
      invalidatesTags: ["locationGet"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
  usePostOrderMutation,
  useGetOrdersByUserQuery,
  useGetProfileImageQuery,
  usePostProfileImageMutation,
  useGetLocationQuery,
  usePostLocationMutation,
} = shopApi;