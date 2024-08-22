import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Prato, Restaurante } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/',
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurant: builder.query<Restaurante, void>({
      query: () => 'restaurante',
    }),
    getRestaurantsList: builder.query<Restaurante[], void>({
      query: () => 'restaurantes',
    }),
    getRestaurantDetails: builder.query<Prato[], void>({
      query: () => 'restaurante',
    }),
  }),
})

export const {
  useGetFeaturedRestaurantQuery,
  useGetRestaurantsListQuery,
  useGetRestaurantDetailsQuery,
} = api
export default api
