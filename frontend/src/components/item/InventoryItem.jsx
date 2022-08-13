import Product from "../product/Product.jsx"
import Counter from "../counter/Counter.jsx"
import Box from '@mui/material/Box';
import  Button  from "@mui/material/Button"

function InventoryItem(props) {
    
    return (
        <Box>
           <Product {...props}/>
           <Counter/> 
           <Button color="secondary">ADD TO CART</Button>
        </Box>
    );
}

export default InventoryItem;