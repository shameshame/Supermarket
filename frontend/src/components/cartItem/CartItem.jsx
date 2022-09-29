import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {useState} from "react"
import {useDispatch} from "react-redux"
import Grid from '@mui/material/Grid'
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';
import {removeFromCart} from "../../redux/features/cart/cartSlice"
import Card from '@mui/material/Card';
import IconButton  from '@mui/material/IconButton'
import  CardContent  from '@mui/material/CardContent';
import  CardMedia  from '@mui/material/CardMedia';
import cartItemStyle from './cartItem.style';

function CartItem(props) {
    const {_id,price,description,quantity,image}=props
    const [hover,setHover]=useState(false);
    const dispatch=useDispatch()
    
    return (
        <Card style={cartItemStyle.general}>
           <Grid container alignItems="center" onMouseOver={()=>setHover(true)} 
                 onMouseOut={()=>setHover(false)} 
                  columnSpacing={2}
            >
            <Grid item xs={3}><CardMedia  component="img" image={image}/></Grid>
            <Grid item xs={6}>
              <CardContent> <Typography paragraph>{description}</Typography></CardContent>
           </Grid>
            
            <Grid item xs={1}><Typography variant="h6">${price}</Typography></Grid>
            {hover && <IconButton sx={{position:"relative"}}> <ClearIcon style={cartItemStyle.deleteButton} onClick={()=>dispatch(removeFromCart(_id))} color="primary"/></IconButton>}
        </Grid>
          
        </Card>
       
    );
}

export default CartItem;