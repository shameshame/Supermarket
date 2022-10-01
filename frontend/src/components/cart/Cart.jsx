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
import DeleteIcon from '@mui/icons-material/Delete';
import  IconButton  from '@mui/material/IconButton';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SaveAltIcon from '@mui/icons-material/SaveAlt';






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
        <Accordion  expanded={expanded} sx={{m:0}} elevation={0}>
        <AccordionSummary
           expandIcon={<ExpandMoreIcon onClick={()=>setExpanded(!expanded)}/>}
           aria-controls="panel1a-content"
           style={expanded?cartStyle.expanded:cartStyle.general}
           id="panel1a-header"
        >
            <Button style={cartStyle.sendOrderButton} onClick={()=>trigger({cart,totalItems,totalPrice})}>Charge:${totalPrice.toFixed(2)}</Button>
             <Badge badgeContent={totalItems?totalItems:"0"} color="secondary">
              <ShoppingCartSharpIcon style={cartStyle.cartButton} />
            </Badge>
          
        </AccordionSummary>
        <Box style={cartStyle.general}>
          <AccordionDetails>
            <Box style={cartStyle.headline}>
                <IconButton style={cartStyle.iconButton}>
                  <SaveAltIcon sx={{fontSize:"2.5rem"}}/>
                  <Typography paragraph>Save Cart</Typography>
                </IconButton>
                <IconButton style={cartStyle.iconButton}>
                    <DeleteIcon sx={{fontSize:"2.5rem"}}/>
                    <Typography paragraph>Empty Cart</Typography>
                </IconButton>
            </Box>
            {!cart.length ?<Box>
      
                            <Box  sx={{width:"300px"}}   component="img" src="https://res.cloudinary.com/dk2ezfo5x/image/upload/v1664618913/shopping-bag-rotate_hhqfhz.svg"/>
                            <Typography sx={{textAlign:"center"}} variant="h5">Let's start shopping,buddy</Typography>
                          </Box>
                          :cart.map(item=><CartItem key={item} {...item}/>)}
          </AccordionDetails>
        </Box>
        </Accordion>
    );
}

export default Cart;