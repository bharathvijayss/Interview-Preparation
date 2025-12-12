import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            // console.log(current(state), action);
            return {
                items: state.items.filter(item => item.info.id !== action.payload)
            }
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})

export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;