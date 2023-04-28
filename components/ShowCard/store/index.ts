import React from 'react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const ScheduleApi= createApi({
    reducerPath: 'ScheduleApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.tvmaze.com',
    }),
    tagTypes: ['Schedule'],
    endpoints: (builder) => ({
      GetAllSchedule: builder.query({
        query: () => "/schedule",
      }),
    }),
}) 

export const {useGetAllScheduleQuery}=ScheduleApi