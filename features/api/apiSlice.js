import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server } from '../../config'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${server}/api/`,
    }),
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => "/videos",
        }),
    }),
});

export const { useGetVideosQuery } = apiSlice;