import React from 'react';
import Box from '@mui/material/Box'
import Button  from "@mui/material/Button"
import {useSelector} from "react-redux"
import CartItem from "../cartItem/CartItem.jsx"
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import {useSendOrderMutation} from "../../redux/services/cartApi"
import cartStyle from "./cart.style"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import {useState} from "react"





function Cart(props) {
    
    const cart = useSelector(state=>state.cart.cartItems)
    const [trigger,result]=useSendOrderMutation()
    const initialValue=0;
    const [expanded, setExpanded] =useState(false)
    
    let totalItems=cart.reduce((accumulator,current)=>accumulator+current.quantity,
    initialValue)
    let totalPrice=cart.reduce((accumulator,current)=>
                                accumulator+current.quantity*current.price,
                                initialValue)
   
   
    return (
        <Accordion expanded={expanded} sx={{m:0}} elevation={0}>
        <AccordionSummary
           justifycontent="space-between"
           expandIcon={<ExpandMoreIcon onClick={()=>setExpanded(!expanded)}/>}
           aria-controls="panel1a-content"
           style={expanded?cartStyle.expanded:null}
           id="panel1a-header"
        >
          
             <Button style={cartStyle.sendOrderButton} onClick={()=>trigger({cart,totalItems,totalPrice})}>Charge:${totalPrice.toFixed(2)}</Button>
             <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCartSharpIcon style={cartStyle.cartButton} />
            </Badge>
          
        </AccordionSummary>
        <Box style={cartStyle.general}>
        <AccordionDetails>
            {!cart.length ?<h1>Your cart is empty</h1>:cart.map(item=><CartItem key={item} {...item}/>)}
        </AccordionDetails>
        </Box>
        </Accordion>
    );
}

export default Cart;