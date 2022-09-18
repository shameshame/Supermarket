import {createSlice} from "@reduxjs/toolkit"

const initialState = {cartItems:[]}


const cartSlice=createSlice({
    name:'cart',
    initialState ,

    reducers:{
        
        addToCart:(state,action)=>{
          const itemInCart = state.cartItems.find((item) => item._id === action.payload._id);
          itemInCart ? itemInCart.quantity+=action.payload.quantity
                     : state.cartItems.push(action.payload)
        
        },

        removeFromCart: (state, action) => {
            const afterRemoval = state.cartItems.filter((item) => item._id !== action.payload);
            state.cartItems = afterRemoval;
        },

        emptyCart:()=>initialState
    }

})

export const cartReducer = cartSlice.reducer;
export const getCartItems =state=>state.cart.cartItems
export const {
  addToCart,
  removeFromCart,
  emptyCart
} = cartSlice.actions;