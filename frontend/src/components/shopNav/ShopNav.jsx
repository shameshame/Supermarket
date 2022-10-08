import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import shopNavStyle from './shopNav.style';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Typography from '@mui/material/Typography';
import Cart from "../cart/Cart"
import {useSelector} from "react-redux"
import Button from "@mui/material/Button"

import {useState} from "react"


function ShopNav(props) {
    
    const [value, setValue] = useState('1');
    const [hover,setHover]=useState(false)
    const cart = useSelector(state=>state.cart.cartItems)

    const handleChange = (event, newValue) => {
        setValue(newValue);
     };
    
    
    return (
        <Grid style={shopNavStyle.general}   columnSpacing={2} sx={{mt:5}} container>
            <Grid sx={{backgroundColor:"primary.main"}}  item lg={8}>
              
              {["Food","Special offers","Cosmetics","Appliances"].map((item,index)=>
                <Button  sx={shopNavStyle.tabs}   >{item}</Button>
              )}
              
              
            </Grid>
            <Grid style={shopNavStyle.cartHeadline}  item lg={4}>
                <Typography variant="p">  My Cart</Typography>
                {cart.length>0 && <Stack direction="row">
                   <IconButton style={shopNavStyle.iconButton}>
                     <SaveAltIcon sx={{fontSize:"2rem"}}/>
                     {/* <Typography paragraph>Save Cart</Typography> */}
                   </IconButton>
                   <IconButton style={shopNavStyle.iconButton}>
                    <DeleteIcon sx={{fontSize:"2rem"}}/>
                    {/* <Typography paragraph>Empty Cart</Typography> */}
                   </IconButton>
                </Stack>}
                <Cart />
            
           </Grid>
           
            
        </Grid>
    );
}

export default ShopNav;