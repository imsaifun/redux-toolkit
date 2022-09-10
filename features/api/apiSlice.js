import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server } from '../../config';

export const apiSlice = createApi({
    reducerPath: "api",
    // baseQuery: fetchBaseQuery({
    //     baseUrl: "https://server-imsaifun.vercel.app/",
    // }),
    baseQuery: async () => {
        const response = await fetch(`${server}/db.json`)
        return {data: await response.json()}
      },
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => "/videos",
        }),
        getVideo: builder.query({
            query: (id) => `/videos/${id}`,
        }),
    }),
});

export const { useGetVideosQuery,useGetVideoQuery } = apiSlice;