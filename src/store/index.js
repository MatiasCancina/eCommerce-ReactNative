import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/CounterSlice";
import ShopSlice from "../features/ShopSlice";
import { shopApi } from "../services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        counter: CounterSlice,
        shop: ShopSlice,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch)

export default store