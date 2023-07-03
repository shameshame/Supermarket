import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials } from '../features/auth/authSlice';
import {BASE} from "../../config/globalVars"

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
      baseUrl: `${BASE}/api/users/`,
    }),
    
    tagTypes: ['User'],
    
    
    endpoints: (builder) => ({
      
      getMe: builder.query({
        query() {
          return {
            url: 'me',
            credentials: 'include',
          };
        },
        invalidatesTags:['User'],
        
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            dispatch(setCredentials(data));
          } catch (error) {console.log(error.message)}
        },
        //END OF getME
      }),

      getAllUsers:builder.query({
        query() {
          return {
            url: '/',
            credentials: 'include'
          };
        }

      }),

      

      updateUserAccount:builder.mutation({
         query(updateData){
          
           return{
             method: 'PUT',
             url:"/update",
             body: updateData,
             credentials: 'include'
           } 
         }
      }),
      
      deleteAccount:builder.mutation({
        query(id) {
          return {
            method: 'DELETE',
            url: `/${id}`,
            credentials: 'include'
          };
        }
      
      }),
    
    
    }),
  });

  export default userApi
  
  export const { useGetMeQuery,useGetAllUsersQuery,
                 useUpdateUserAccountMutation,
                 useDeleteAccountMutation
                }=userApi