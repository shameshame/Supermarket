import {createSlice} from "@reduxjs/toolkit"

const initialState = {cartItems:[],expanded:false}


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

        

        removeSingleItem : (state, action)=>{
          const item = state.cartItems.find((item) => item._id === action.payload);
          
          if(item.quantity>1) item.quantity--;
        },

        toggleCart: (state, action)=>{
           state.expanded=action.payload
        },

        emptyCart:(state)=>{
          state.cartItems=[];
          
        }
    }

})

export const cartReducer = cartSlice.reducer;
export const getCartItems =state=>state.cart.cartItems
export const {
  addToCart,
  removeSingleItem,
  removeFromCart,
  emptyCart,
  toggleCart
} = cartSlice.actions;