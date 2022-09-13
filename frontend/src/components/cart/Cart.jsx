import React from 'react';
import axios from "axios"
import Box from '@mui/material/Box'
import Button  from "@mui/material/Button"
import {useSelector} from "react-redux"
import CartItem from "../cartItem/CartItem.jsx"


function Cart(props) {
    
    const cart = useSelector(state=>state.cart.cartItems)

    
    
    function stam(){
      const response=  axios.trace('http://localhost/api/users/stam')
      console.log(response)
    }
    
    
    
    return (
        <Box>
            {!cart.length ?<h1>Your cart is empty</h1>:cart.map(item=><CartItem {...item}/>)}
            <Button onClick={stam}>Send</Button>
        </Box>
    );
}

export default Cart;