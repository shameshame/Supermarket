import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {useState} from "react"
import {useDispatch} from "react-redux"
import Grid from '@mui/material/Grid'
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';
import {removeFromCart} from "../../redux/features/cart/cartSlice"

function CartItem(props) {
    const {_id,price,description,quantity}=props
    const [hover,setHover]=useState(false);
    const dispatch=useDispatch()
    
    return (
        <Grid onMouseOver={()=>setHover(true)} 
              onMouseOut={()=>setHover(false)} 
         container>
            <Grid item xs={9}><Typography variant="h6">{description}</Typography></Grid>
            <Grid item xs={2}><Typography variant="h6">{quantity}</Typography></Grid>
            <Grid item xs={1}><Typography variant="h6">{price}</Typography></Grid>

            {hover && <ClearIcon onClick={()=>dispatch(removeFromCart(_id))} color="primary"/>}
        </Grid>
    );
}

export default CartItem;