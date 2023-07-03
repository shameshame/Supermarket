import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {userApi} from "./userApi"
import {logOut} from "../features/auth/authSlice"
import {BASE} from "../../config/globalVars"



export const authApi = createApi({
    reducerPath : "authApi",
    baseQuery:fetchBaseQuery({
      baseUrl:`${BASE}/api/users`
    }),
    
     tagTypes: ['User'],

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

        invalidatesTags:['User'],

        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            await queryFulfilled;
            await dispatch(userApi.endpoints.getMe.initiate(null));
          } catch (error) {
            
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
        
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            await queryFulfilled;
            dispatch(logOut());
          } catch (error) {console.log(error.message)}
        }
      
      
      })//logoutUser
      ,
    
    })//ENDPOINTS

})//authApi

export const {
  useLoginUserMutation,
  useSignUpMutation,
  useLogoutUserMutation,
  
} = authApi;