import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Restaurante } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurant: builder.query<Restaurante, void>({
      query: () => 'restaurantes', //RestaurantHeader
    }),
    getRestaurantsList: builder.query<Restaurante[], void>({
      query: () => 'restaurantes', //Home
    }),
    getRestaurantDetails: builder.query<Restaurante[], string>({
      query: (id) => `restaurantes/${id}`, //CardapioRestaurante
    }),
  }),
})

export const {
  useGetFeaturedRestaurantQuery,
  useGetRestaurantsListQuery,
  useGetRestaurantDetailsQuery,
} = api
export default api
