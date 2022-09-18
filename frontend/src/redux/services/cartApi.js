import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({ 
    reducerPath : "cartApi",
    baseQuery:fetchBaseQuery({
      baseUrl:`http://localhost:5000/api/orders`
    }),

    endpoints: (builder) => ({

        sendOrder:builder.mutation({
           query(cart){
             return{
                url: 'new_order',
                method: 'POST',
                body: cart,
                credentials: 'include'
             } 
            
           }

        })
    })




}) //END OF cartApi

export const {
    useSendOrderMutation
}=cartApi