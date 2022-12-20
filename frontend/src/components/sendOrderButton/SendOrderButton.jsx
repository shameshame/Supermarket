import { totalItems,totalPrice } from '../../js/orderSummary.js';
import {useSendOrderMutation} from "../../redux/services/cartApi";
import sendOrderButtonStyle from './sendOrderButton.style.js';
import Button from "@mui/material/Button"
import {useSelector} from "react-redux"

function SendOrderButton(props) {
    const cart = useSelector(state=>state.cart.cartItems)
    const [trigger,result]=useSendOrderMutation()
    let itemsInCart=totalItems(cart)
    let priceInTotal=totalPrice(cart)
    
    const payment=()=>{
        
        trigger({cart,totalItems:itemsInCart,
            totalPrice:priceInTotal}) 
    }
   
    
    return (<Button  
            style={sendOrderButtonStyle} 
            onClick={()=>trigger({cart,totalItems:itemsInCart,
                                  totalPrice:priceInTotal})}
            >
              Charge:${priceInTotal.toFixed(2)}
          </Button>)

}

export default SendOrderButton;