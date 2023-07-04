import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {BASE} from "../../config/globalVars"

export const cartApi = createApi({ 
    reducerPath : "cartApi",
    baseQuery:fetchBaseQuery({
      baseUrl: process.env.NODE_ENV==="development" ? `${BASE}/api/orders` : `/api/orders`
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
        }),
     
        getMyOrders:builder.query({
             query(){
                return{
                   url: 'my_orders',
                   method: 'GET',
                   credentials: 'include'
                } 
             },

             
             //Delete this code
             async onQueryStarted(args, { dispatch, queryFulfilled }) {
              try {
                const { data } = await queryFulfilled;
               
              } catch (error) {console.log(error.message)}
            },
        })
     
      })




}) //END OF cartApi

export const {
    useSendOrderMutation,
    useGetMyOrdersQuery
}=cartApi