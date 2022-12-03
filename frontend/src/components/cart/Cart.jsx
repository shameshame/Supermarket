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
import  AccordionDetails  from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { totalItems,totalPrice } from '../../js/orderSummary.js';
import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme} from "@mui/material/styles"
import ScrollToBottom from 'react-scroll-to-bottom';
import mobileCartStyle from '../mobileCart/mobileCart.style.js';




export const SendOrderButton = ()=> {
  const cart = useSelector(state=>state.cart.cartItems)
  const [trigger,result]=useSendOrderMutation()
  let itemsInCart=totalItems(cart)
  let priceInTotal=totalPrice(cart)
  const theme=createTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const generalPlusMobileStyle = {...cartStyle.sendOrderButton,
                                  ...mobileCartStyle.orderButton
                                 }
  
  return (<Button fullWidth={isMobile} 
           style={isMobile?generalPlusMobileStyle:cartStyle.sendOrderButton} 
           onClick={()=>trigger({cart,totalItems:itemsInCart,
                                 totalPrice:priceInTotal})}
          >
              Charge:${priceInTotal.toFixed(2)}
          </Button>)

}

export const CartContent=()=>{
  const cart = useSelector(state=>state.cart.cartItems)
  const theme=createTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  

  return (
    <Box  >
       {!cart.length 
          ?<Box >
            <LocalMallIcon  style={cartStyle.bagIcon} />
            <Typography sx={{textAlign:"center"}} paragraph>Let's start shopping,buddy...</Typography>
           </Box>
                    
        :<ScrollToBottom><Box   style={!isMobile?cartStyle.general:mobileCartStyle.cartContent}>
                       {/* Key collision if 2 items of the same product are in the cart */}
            {cart.map(item=><CartItem  key={item._id} {...item}/>)}
          </Box>
          </ScrollToBottom>
        }
    
    </Box>
  )

}

export const CartButton = ()=>{
  const cart = useSelector(state=>state.cart.cartItems)
  let  itemsInCart=totalItems(cart)

  return (<Badge badgeContent={itemsInCart ?itemsInCart:"0"} color="secondary">
              <ShoppingCartSharpIcon style={cartStyle.cartButton} />
            </Badge>
          )
}


export default function Cart(props) {
    
    const expanded=useSelector(state=>state.cart.expanded)
    const dispatch=useDispatch() 
    
    
    return (
      
      <Accordion    sx={{...cartStyle.accordion}} expanded={expanded}  elevation={0}>
          
        <AccordionSummary 
           expandIcon={<ExpandMoreIcon onClick={()=>dispatch(toggleCart(!expanded))}/>}
           aria-controls="panel1a-content"
           sx={cartStyle.accordionSummary}
           style={
            expanded?cartStyle.expanded:cartStyle.hidden}
           id="panel1a-header"
           
        >
          <AccordionDetails >
            <SendOrderButton/>
            <CartButton/>
          </AccordionDetails>
        </AccordionSummary>
        <CartContent/>
      </Accordion>
     
      
    );
}

 