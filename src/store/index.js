import { configureStore } from "@reduxjs/toolkit";

import { shopApi } from "../services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";

import CounterSlice from "../features/CounterSlice";
import ShopSlice from "../features/ShopSlice";
import CartSlice from "../features/CartSlice";
import { authApi } from "../services/authServices";
import AuthSlice from "../features/UserSlice";

const store = configureStore({
    reducer: {
        counter: CounterSlice,
        shop: ShopSlice,
        cart: CartSlice,
        auth: AuthSlice,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(shopApi.middleware)
            .concat(authApi.middleware)
})

setupListeners(store.dispatch)

export default store