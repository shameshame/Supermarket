
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import ProfileNavTemplate from "../profileTemplate/ProfileNavTemplate";
import ShopNavMobile from "../shopNavMobile/ShopNavMobile.jsx"
import MobileCart from "../mobileCart/MobileCart.jsx";
import Box from '@mui/material/Box'
import Logo from "../logo/Logo.jsx"
import navbar from "./navbar.style";
import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme} from "@mui/material/styles"


function Navbar(props) {
    
    const theme=createTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    
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