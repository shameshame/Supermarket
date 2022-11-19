import Product from "../product/Product.jsx"
import Counter from "../counter/Counter.jsx"
import Box from '@mui/material/Box';
import  Button  from "@mui/material/Button"
import { useDispatch } from 'react-redux';
import useCounter from "../../customHooks/useCounter"
import {addToCart} from '../../redux/features/cart/cartSlice'; 
import inventoryItemStyle from "./inventoryItem.style.js";
import amber from "@mui/material/colors/amber"
import Stack from '@mui/material/Stack';
import {useState} from "react"
import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme} from "@mui/material/styles"



function InventoryItem(props) {
    const [count, increment, decrement]=useCounter(1,1)
    const dispatch=useDispatch() 
    const {_id,description,brand,price,image,category,itemsSold}=props
    const propsForCart= {_id,description,brand,price}
    const [hover,setHover]=useState(false)
    const theme=createTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
   return (
        <Box sx={inventoryItemStyle.general} onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} border={1} >
           <Product {...props}/>
           {(hover || isMobile) && <Stack direction={isMobile ?"column":"row"}>
           
             <Counter count={count} decrement={decrement} increment={increment}/> 
             <Button  sx={{px:3}} variant="contained" onClick={()=>dispatch(addToCart({image,quantity:count,...propsForCart}))} color="error">ADD</Button>
             </Stack>  
            }
           
           
            
           
        </Box>
    );
}

export default InventoryItem;