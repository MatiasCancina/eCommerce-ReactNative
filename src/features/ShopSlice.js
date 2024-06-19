import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name: 'Shop',
    initialState: {
        value: {
            categorySelected: '',
            itemSelected: ''
        }
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.value.categorySelected = action.payload
        },
        setItemSelected: (state, action) => {
            state.value.itemSelected = action.payload
        }
    }
})

export const { setCategorySelected, setItemSelected } = shopSlice.actions
export default shopSlice.reducer