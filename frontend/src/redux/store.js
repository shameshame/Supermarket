import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authApi } from './services/authApi';
import { userApi } from './services/userApi';
import { cartApi } from './services/cartApi';
import { productApi } from './services/productApi';
import { cartReducer } from "./features/cart/cartSlice";
import authReducer from './features/auth/authSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    //API reducers
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    
    //Reducers to update state
    user: authReducer,
    cart:persistedReducer
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
                serializableCheck: {
                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
                immutableCheck:false
               })
              .concat([authApi.middleware, userApi.middleware,productApi.middleware,cartApi.middleware]),
});

export const persistor = persistStore(store)

