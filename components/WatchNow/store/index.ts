import React from 'react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const ShowsByIdApi= createApi({
    reducerPath: 'ShowsByIdApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.tvmaze.com',
    }),
    tagTypes: ['ShowsByIdApi'],
    endpoints: (builder) => ({
      GetShowsById: builder.query({
        query: ({id}) => `/shows/${id}?embed=cast`,
      }),
    }),
}) 

export const {useGetShowsByIdQuery}=ShowsByIdApi