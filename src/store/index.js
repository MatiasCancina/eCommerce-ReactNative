import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/CounterSlice";
import ShopSlice from "../features/ShopSlice";

export default configureStore({
    reducer: {
        counter: CounterSlice,
        shop: ShopSlice
    }
})