import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const productApi = createApi({
    reducerPath:"productApi",
    baseQuery : fetchBaseQuery({
        baseUrl:`${process.env.REACT_APP_SERVER}/inventory`
    }),

    endpoints: (builder) => ({
        mostPopularProducts: builder.query({
            query(queryString) {
                return {
                    url:`/search?${queryString}`
                }
            }
        })
    })
})