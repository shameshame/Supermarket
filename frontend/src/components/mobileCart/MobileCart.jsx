import {useState} from "react"
import IconButton from '@mui/material/IconButton';
import {CartButton,CartContent,CheckOutButton} from "../cart/Cart.jsx"
import Box from '@mui/material/Box'
import mobileCartStyle from "./mobileCart.style"




function MobileCart(props) {
    const [openCart,setOpenCart]=useState(false);
    

    
    
    return (<Box>
            <IconButton id="cart-mobile-button"
              onClick={()=>setOpenCart(!openCart)}
                        aria-haspopup ='true' 
                        aria-expanded={openCart ? "true":undefined}
            >     
            <CartButton/>
            </IconButton>
         {openCart &&
              <Box sx={mobileCartStyle.general}> 
                 <CartContent />
                 <CheckOutButton setOpenCart={setOpenCart}/>
              </Box>
          } 
          </Box>
    )
}

export default MobileCart;