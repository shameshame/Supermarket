
import {useState} from "react"
import {useDispatch} from "react-redux"
import Grid from '@mui/material/Grid'
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import IconButton  from '@mui/material/IconButton'
import  CardContent  from '@mui/material/CardContent';
import  CardMedia  from '@mui/material/CardMedia';
import cartItemStyle from './cartItem.style';
import { createTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useCounter from "../../customHooks/useCounter"
import Counter from '../counter/Counter.jsx';
import {addToCart,removeFromCart,removeSingleItem} from '../../redux/features/cart/cartSlice';


function CartItem(props) {
    const {_id,price,description,quantity,image}=props
    const [hover,setHover]=useState(false);
    const dispatch=useDispatch()
    const theme=createTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    const [count, increment, decrement]=useCounter(quantity,1)

    const onIncrement= ()=>{
        dispatch(addToCart({_id,quantity:1}))
        increment()
    }

    const onDecrement = ()=>{
        dispatch(removeSingleItem(_id))
        decrement()
    }

    
    return (
        
        <Card  style={cartItemStyle.general}>
           <Grid   container alignItems="center" onMouseOver={()=>setHover(true)} 
                 onMouseOut={()=>setHover(false)} 
                 columnSpacing={1}
            >
            <Grid item xs={3} lg={2}><CardMedia  component="img" image={image}/></Grid>
            <Grid item xs={2} lg={6}>
              <CardContent > <Typography paragraph>{description}</Typography></CardContent>
           </Grid>
           {isMobile && <Grid item xs={5}>
              <Counter noBorder count={quantity} decrement={onDecrement} increment={onIncrement}/>
           </Grid>}
            
            <Grid item xs={1}><Typography variant="p">${price}</Typography></Grid>
            {(hover || isMobile)&& <IconButton style={cartItemStyle.deleteButton} onClick={()=>dispatch(removeFromCart(_id))} > <ClearIcon   color="primary"/></IconButton>}
        </Grid>
          
        </Card>
        
       
    );
}

export default CartItem;