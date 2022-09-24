import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import productStyle from "./product.style"



function Product(props) {
    const {image,description,price}=props
    
    return (
        <Box style={productStyle}>
           <Box sx={{width:"200px",height:"200px"}}  component="img"  src={image}/> 
           <Typography variant="p" component="p">{description}</Typography>
           <Typography variant="h5" component="h5">${price}</Typography>
        </Box>
    );
}

export default Product;