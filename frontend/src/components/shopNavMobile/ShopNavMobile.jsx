import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box'
import {useState} from "react"
import shopDepartments from '../../config/shopDepartments';
import  Typography  from '@mui/material/Typography';

function ShopNavMobile(props) {
    
    const [anchorEl,setAnchorEl]=useState(false);
    let  shopMenuOpen= Boolean(anchorEl)

    function openShopMenu(event){
      setAnchorEl(event.currentTarget)
    }
  
    return (
        <Box>
          <IconButton sx={{color:"#392F5A"}} onClick={(event)=>openShopMenu(event)}>
             <MenuIcon/>
          </IconButton>
          {}
        </Box>
    );
}

export default ShopNavMobile;