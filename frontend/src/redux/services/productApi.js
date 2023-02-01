import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const productApi = createApi({
    reducerPath:"productApi",
    baseQuery : fetchBaseQuery({
        baseUrl:`http://localhost:5000/api/inventory`
    }),

    endpoints: (builder) => ({
        mostPopularProducts: builder.query({
            query(queryString) {
                return {
                    url:`/search?${queryString}`
                }
            }
        }),

        

        newProduct:builder.mutation({
           query(product) {
              return {
                 url:`/new_product`,
                 method:'POST',
                 body:product,
                 credentials: 'include'
              }
            }
        })
    })
})

export const {
    useNewProductMutation,
    useMostPopularProductsQuery
}=productApi