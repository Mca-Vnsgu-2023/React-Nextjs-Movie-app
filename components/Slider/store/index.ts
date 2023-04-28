
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const TrendingApi= createApi({
    reducerPath: 'TrendingApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.tvmaze.com',
    }),
    tagTypes: ['Trending'],
    endpoints: (builder) => ({
      GetAllTrending: builder.query({
        query: () => "/shows",
      }),
    }),
}) 

export const {useGetAllTrendingQuery}=TrendingApi