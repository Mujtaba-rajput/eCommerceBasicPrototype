import {homeApi} from '../screens/Home/home.api';
import {homeReducer} from '../screens/Home/home.slice';
import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from '../screens/Auth/auth.slice';
import {authApi} from '../screens/Auth/auth.api';
import {cartReducer} from '../screens/Cart/cart.slice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    [homeApi.reducerPath]: homeApi.reducer,
    cart: cartReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([homeApi.middleware, authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
