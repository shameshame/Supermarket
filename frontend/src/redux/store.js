import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorook, useDispatch, useSelector } from 'react-redux';
import { authApi } from './services/authApi';
import { userApi } from './services/userApi';
import authReducer from './features/auth/authSlice';
import { productApi } from './services/productApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    userState: authReducer
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([authApi.middleware, userApi.middleware,productApi.middleware]),
});


