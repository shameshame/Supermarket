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

import {useState} from "react"


function ShopNav(props) {
    
    const [value, setValue] = useState('1');
    const cart = useSelector(state=>state.cart.cartItems)

    const handleChange = (event, newValue) => {
        setValue(newValue);
     };
    
    
    return (
        <Grid style={shopNavStyle.general}   columnSpacing={2} sx={{mt:5}} container>
            <Grid item lg={8}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                       <Tab label="Item One" value="1" style={{minWidth:"25%"}} />
                       <Tab label="Item Two" value="2" style={{minWidth:"25%"}}/>
                       <Tab label="Item Three" value="3" style={{minWidth:"25%"}}/>
                       <Tab label="Item Four" value="4" style={{minWidth:"25%"}}/>
                    </TabList>
                </Box>
                   
                </TabContext>
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