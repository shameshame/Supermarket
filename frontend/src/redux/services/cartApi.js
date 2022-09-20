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
        }),
     
        getMyOrders:builder.query({
             query(){
                return{
                   url: 'my_orders',
                   method: 'GET',
                   credentials: 'include'
                } 
             },

             async onQueryStarted(args, { dispatch, queryFulfilled }) {
              try {
                const { data } = await queryFulfilled;
                console.log("My orders :",data)
              } catch (error) {console.log(error.message)}
            },
        })
     
      })




}) //END OF cartApi

export const {
    useSendOrderMutation,
    useGetMyOrdersQuery
}=cartApi