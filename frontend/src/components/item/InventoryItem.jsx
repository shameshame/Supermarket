import Product from "../product/Product.jsx"
import Counter from "../counter/Counter.jsx"
import Box from '@mui/material/Box';
import  Button  from "@mui/material/Button"
import { useDispatch } from 'react-redux';
import useCounter from "../../customHooks/useCounter"
import {addToCart} from '../../redux/features/cart/cartSlice'; 

function InventoryItem(props) {
    const [count, increment, decrement]=useCounter(1,1)
    const dispatch=useDispatch() 
    const {_id,description,brand,price,image,category,itemsSold}=props
    const propsForCart= {_id,description,brand,price}
   
    return (
        <Box>
           <Product {...props}/>
           <Counter count={count} decrement={decrement} increment={increment}/> 
           <Button onClick={()=>dispatch(addToCart({quantity:count,...propsForCart}))} color="secondary">
                        ADD TO CART
           </Button>
           
        </Box>
    );
}

export default InventoryItem;