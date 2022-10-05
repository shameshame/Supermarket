import Box from '@mui/material/Box'
import Button  from "@mui/material/Button"
import {useSelector,useDispatch} from "react-redux"
import CartItem from "../cartItem/CartItem.jsx"
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import {useSendOrderMutation} from "../../redux/services/cartApi"
import {toggleCart} from '../../redux/features/cart/cartSlice';
import cartStyle from "./cart.style"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import LocalMallIcon from '@mui/icons-material/LocalMall';

function Cart(props) {
    
    const cart = useSelector(state=>state.cart.cartItems)
    const expanded=useSelector(state=>state.cart.expanded)
    const [trigger,result]=useSendOrderMutation()
    const dispatch=useDispatch() 
    const initialValue=0;
    
    
    let totalItems=cart.reduce((accumulator,current)=>accumulator+current.quantity,
    initialValue)
    let totalPrice=cart.reduce((accumulator,current)=>
                                accumulator+current.quantity*current.price,
                                initialValue)
   
   
    return (
       
        <Accordion sx={{position:"fixed",top:"150px"}}    expanded={expanded}  elevation={0}>
          
        <AccordionSummary
           expandIcon={<ExpandMoreIcon onClick={()=>dispatch(toggleCart(!expanded))}/>}
           aria-controls="panel1a-content"
           style={expanded?cartStyle.expanded:cartStyle.hidden}
           id="panel1a-header"
        >
            <Button style={cartStyle.sendOrderButton} onClick={()=>trigger({cart,totalItems,totalPrice})}>Charge:${totalPrice.toFixed(2)}</Button>
             <Badge badgeContent={totalItems?totalItems:"0"} color="secondary">
              <ShoppingCartSharpIcon style={cartStyle.cartButton} />
            </Badge>
          
        </AccordionSummary>
        <Box  style={cartStyle.general}>
          {/* <AccordionDetails > */}
            
            {!cart.length ?<Box >
                
                  <LocalMallIcon style={cartStyle.bagIcon} sx={{width:"25.5rem",height:"200px"}}/>
                  <Typography sx={{textAlign:"center"}} paragraph>Let's start shopping,buddy...</Typography>
                  </Box>          
                          :cart.map(item=><CartItem key={item} {...item}/>)}
          {/* </AccordionDetails> */}
        </Box>
        </Accordion>
       
    );
}

export default Cart;