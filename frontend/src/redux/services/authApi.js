import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {userApi} from "./userApi"

console.log(process.env.REACT_APP_SERVER)

export const authApi = createApi({
    reducerPath : "authApi",
    baseQuery:fetchBaseQuery({
      baseUrl:`http://localhost:5000/api/users`
    }),
    
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        headers.set("")
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },

    endpoints:(builder)=>({
      signUp:builder.mutation({
         query(newUser){
           return {
             url: 'signup',
             method: 'POST',
             body: newUser,
           };
         }
      }),
      
      loginUser: builder.mutation({
        query(userCredentials) {
          return {
            url: 'login',
            method: 'POST',
            body: userCredentials,
            credentials: 'include',
            
          };
        },

        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            const {data}=await queryFulfilled;
            console.log(data)
            await dispatch(userApi.endpoints.getMe.initiate(null));//Won't work in current state
          } catch (error) {
            console.log(error.message)
          }
        },
      }),

      logoutUser: builder.mutation({
        query() {
          return {
            url: 'logout',
            credentials: 'include',
          };
        },
      }),
    
    })//ENDPOINTS

})//authApi

export const {
  useLoginUserMutation,
  useSignUpMutation,
  useLogoutUserMutation,
  
} = authApi;