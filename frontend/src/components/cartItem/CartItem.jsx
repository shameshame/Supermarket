import Stack from '@mui/material/Stack';
import Product from "../product/Product.jsx"
import ClearIcon from '@mui/icons-material/Clear';

function CartItem(props) {
    return (
        <Box>
            <Product/>
            <ClearIcon/>
        </Box>
    );
}

export default CartItem;