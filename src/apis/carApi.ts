import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const carApi = createApi({
  reducerPath: 'carApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://freetestapi.com/api/v1/cars' }),
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => '',
    }),
    getCar: builder.query({
      query: (carId: string) => `/${carId}`
    })
  }),
})

export const { useGetCarsQuery, useGetCarQuery } = carApi