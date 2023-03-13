import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import ProfileNavTemplate from "../profileTemplate/ProfileNavTemplate";
import ShopNavMobile from "../shopNavMobile/ShopNavMobile.jsx"
import ShopNav from  "../shopNav/ShopNav"
import MobileCart from "../mobileCart/MobileCart.jsx";
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box'
import Logo from "../logo/Logo.jsx"
import Fab from '@mui/material/Fab';
import navbar from "./navbar.style";
import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme} from "@mui/material/styles"
import {useState} from "react"

function Navbar(props) {
    
    const theme=createTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    const [displaySearch,setDisplaySearch]=useState(false)
  
  return (
        <Box>
        <AppBar sx={navbar.app} >
              <CssBaseline />
          {!isMobile 
              //Desktop view
            ?<Box sx={{mx:2,...navbar.toolbar}} >
                 <Logo/>
                 <ProfileNavTemplate />
               </Box>
             //Mobile view
          :<Box style={navbar.toolbarMobile}>
            <Logo/>
            <Box sx={navbar.toolbar}>
              <MobileCart/>
              <ProfileNavTemplate />
              <ShopNavMobile />
            </Box>
            
          </Box>}  
        </AppBar>
              
        </Box>

       
       
    );
}

export default Navbar;