import {useState} from "react"
import IconButton from '@mui/material/IconButton';
import {CartButton,CartContent,SendOrderButton} from "../cart/Cart.jsx"
import Collapse from '@mui/material/Collapse';
import Drawer from "@mui/material/Drawer"
import Menu from '@mui/material/Menu'
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
                 <SendOrderButton />
              </Box>
          } 
          </Box>
    )
}

export default MobileCart;