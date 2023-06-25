import { totalItems,totalPrice } from '../../js/orderSummary.js';
import {useSendOrderMutation} from "../../redux/services/cartApi";
import {emptyCart} from "../../redux/features/cart/cartSlice"
import sendOrderButtonStyle from './sendOrderButton.style.js';
import Button from "@mui/material/Button"
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"

function SendOrderButton(props) {
    const cart = useSelector(state=>state.cart.cartItems)
    const [sendOrderTrigger,result]=useSendOrderMutation()
    const dispatch=useDispatch() 
    let itemsInCart=totalItems(cart)
    let priceInTotal=totalPrice(cart)
    
    const payment= async()=> {
      try{
         await sendOrderTrigger({cart,totalItems:itemsInCart,totalPrice:priceInTotal}).unwrap()
         dispatch(emptyCart())
        
      }catch(error){
        console.log(error.message)
      }  
       
    }
   
    
    return (<Button  
            style={sendOrderButtonStyle} 
            onClick={()=>payment()}
            >
              Charge:${priceInTotal.toFixed(2)}
          </Button>)

}

export default SendOrderButton;