import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Restaurante } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type CheckoutPayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getRestaurantsList: builder.query<Restaurante[], void>({
      query: () => 'restaurantes', // Home
    }),
    getRestaurantDetails: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`, // Restaurante
    }),
    purchase: builder.mutation<any, CheckoutPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetRestaurantsListQuery,
  useGetRestaurantDetailsQuery,
  usePurchaseMutation,
} = api

export default api
