import React from 'react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const SearchApi= createApi({
    reducerPath: 'SearchApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.tvmaze.com',
    }),
    tagTypes: ['Search'],
    endpoints: (builder) => ({
      GetAllSearch: builder.query({
        query: ({searchValue}) => `/search/shows?q=${searchValue}`,
      }),
    }),
}) 

export const {useGetAllSearchQuery}=SearchApi