import {useSelector} from "react-redux"
import {getCartItems} from "../../redux/features/cart/cartSlice"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

export const orderSummary={totalItems:0,totalPrice:0}


export default function Total() {
    const cart= useSelector(getCartItems)
    const initialValue=0;
    let {totalItems,totalPrice}=orderSummary
    
    totalItems=cart.reduce((accumulator,current)=>accumulator+current.quantity,
    initialValue)
    totalPrice=cart.reduce((accumulator,current)=>
                                accumulator+current.quantity*current.price,
                                initialValue)
    
    
    
    return (
        <Box>
            <Typography variant="h6">Total Items: {totalItems}</Typography>
            <Typography variant="h6">Total Price: {totalPrice.toFixed(2)}</Typography>
        </Box>
    );
}



