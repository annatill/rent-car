import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rentCarApi = createApi({
  reducerPath: 'rentCarApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65061757ef808d3c66f0d290.mockapi.io',
  }),
  keepUnusedDataFor: 10000,

  endpoints: builder => ({
    getRentCar: builder.query({
      query: () => ({
        url: '/cars/cars',
      }),
    }),
  }),
});

export const { useGetRentCarQuery } = rentCarApi;
