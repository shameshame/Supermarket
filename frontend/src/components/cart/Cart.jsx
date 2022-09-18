import React from 'react';
import Box from '@mui/material/Box'
import Button  from "@mui/material/Button"
import {useSelector} from "react-redux"
import CartItem from "../cartItem/CartItem.jsx"
import Typography from '@mui/material/Typography';
import {useSendOrderMutation} from "../../redux/services/cartApi"



function Cart(props) {
    
    const cart = useSelector(state=>state.cart.cartItems)
    const [trigger,result]=useSendOrderMutation()
    const initialValue=0;
    
    let totalItems=cart.reduce((accumulator,current)=>accumulator+current.quantity,
    initialValue)
    let totalPrice=cart.reduce((accumulator,current)=>
                                accumulator+current.quantity*current.price,
                                initialValue)
   
   
    return (
        <Box>
            {!cart.length ?<h1>Your cart is empty</h1>:cart.map(item=><CartItem {...item}/>)}
            <Typography variant="h6">Total Items: {totalItems}</Typography>
            <Typography variant="h6">Total Price: {totalPrice.toFixed(2)}</Typography>
            <Button onClick={()=>trigger({cart,totalItems,totalPrice})}>Send</Button>
        </Box>
    );
}

export default Cart;