import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Stack from '@mui/material/Stack';
import shopNavStyle from './shopNav.style';
import Typography from '@mui/material/Typography';
import Cart from "../cart/Cart"
import {useSelector,useDispatch} from "react-redux"
import Button from "@mui/material/Button"
import {emptyCart} from '../../redux/features/cart/cartSlice';



function ShopNav(props) {
    
    
    const cart = useSelector(state=>state.cart.cartItems)
    const dispatch= useDispatch()

    
    
    
    return (
        <Grid style={shopNavStyle.general}   columnSpacing={2} sx={{mt:5}} container>
            <Grid sx={{backgroundColor:"primary.main"}}  item lg={8}>
              
              {["Food","Special offers","Cosmetics","Appliances"].map((item,index)=>
                <Button key={item}  sx={shopNavStyle.tabs}   >{item}</Button>
              )}
              
              
            </Grid>
            <Grid style={shopNavStyle.cartHeadline}  item lg={4}>
               
                <Typography variant="p">  My Cart</Typography>
                {cart.length>0 && <Stack direction="row">
                   <IconButton style={shopNavStyle.iconButton}>
                     <SaveAltIcon sx={{fontSize:"2rem"}}/>
                    </IconButton>
                   <IconButton onClick={()=>dispatch(emptyCart())} style={shopNavStyle.iconButton}>
                     <DeleteIcon sx={{fontSize:"2rem"}}/>
                    </IconButton>
                </Stack>}
                <Cart/>
               
                </Grid>
                
            
           </Grid>
           
            
       
    );
}

export default ShopNav;