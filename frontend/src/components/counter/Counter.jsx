import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField'
import countStyle from "./counter.style"
import Box from '@mui/material/Box'



function Counter(props) {
    const {count, increment, decrement}=props
    
    return (
        <Box  className='product-quantity' sx={countStyle.general}>
           <IconButton onClick={decrement}>
             <RemoveIcon style={countStyle.button}  size="large" />
           </IconButton>
            
            <TextField align="middle" sx={{ align:"middle", width:"30%"}} size="small" readOnly type="number"   name="quantity" value={count} />
            <IconButton onClick={increment}>
              <AddIcon  style={countStyle.button} size="large" />
            </IconButton>
        </Box>
    );
}

export default Counter;