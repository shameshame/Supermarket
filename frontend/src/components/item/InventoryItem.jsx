import Product from "../product/Product.jsx"
import Counter from "../counter/Counter.jsx"
import Box from '@mui/material/Box';
import  Button  from "@mui/material/Button"
import { useDispatch } from 'react-redux';
import useCounter from "../../customHooks/useCounter"
import {addToCart} from '../../redux/features/cart/cartSlice'; 
import inventoryItemStyle from "./inventoryItem.style.js";
import amber from "@mui/material/colors/amber"
import {useState} from "react"
import {createTheme,ThemeProvider} from "@mui/material/styles"



function InventoryItem(props) {
    const [count, increment, decrement]=useCounter(1,1)
    const dispatch=useDispatch() 
    const {_id,description,brand,price,image,category,itemsSold}=props
    const propsForCart= {_id,description,brand,price}
   const [hover,setHover]=useState(false)
    return (
        <Box sx={inventoryItemStyle.general} onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} border={1} >
           <Product {...props}/>
           {hover && 
           <Box sx={{display:"flex",justifyContent:"space-between",mt:2}} > 
            <Counter count={count} decrement={decrement} increment={increment}/> 
            <Button sx={{px:3}} variant="contained" onClick={()=>dispatch(addToCart({image,quantity:count,...propsForCart}))} color="error">ADD</Button>
           </Box>}
           
        </Box>
    );
}

export default InventoryItem;