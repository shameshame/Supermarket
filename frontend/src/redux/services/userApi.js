import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials } from '../features/auth/authSlice';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
      baseUrl: `http://localhost:5000/api/users/`,
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

      })
    
    
    }),
  });
  
  export const {useGetMeQuery,useGetAllUsersQuery}=userApi