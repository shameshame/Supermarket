import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './services/authApi';
import { userApi } from './services/userApi';
import authReducer from './features/auth/authSlice';
import { productApi } from './services/productApi';

export const store = configureStore({
  reducer: {
    //API reducers
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    
    //Reducers to update state
    user: authReducer
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([authApi.middleware, userApi.middleware,productApi.middleware]),
});


