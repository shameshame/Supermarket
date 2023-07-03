import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {BASE} from "../../config/globalVars"


export const productApi = createApi({
    reducerPath:"productApi",
    baseQuery : fetchBaseQuery({
        baseUrl:`${BASE}/api/inventory`
    }),

    endpoints: (builder) => ({
        searchProducts: builder.query({
            query(queryString) {
                return {
                    url:`/search?${queryString}`
                }
            }
        }),

        searchProductsByUserInput : builder.query({
           query(input){
             return{
                 url:`/search_by_input?input=${input}`,
                  
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
    useSearchProductsQuery,
    useSearchProductsByUserInputQuery
}=productApi

export default productApi