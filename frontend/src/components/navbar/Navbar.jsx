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
import ShopNav from  "../shopNav/ShopNav"
import MobileCart from "../mobileCart/MobileCart.jsx";
import navbar from "./navbar.style";
import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme} from "@mui/material/styles"

function Navbar(props) {
    
    const theme=createTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
       
        <AppBar sx={navbar.app} >
            <CssBaseline />
          <Toolbar sx={navbar.toolbar}>
            <Typography sx={navbar.logo} variant="h4" component={Link} to="/" >
                Eategy
           </Typography>
           {isMobile ? <MobileCart/> :<TextField size="small"
                    // onChange={(event)=> setSearchInput(event.target.value)}
                    id="standard-search"
                    InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                         <SearchIcon/>
                      </InputAdornment>),
                    }}
                    variant="outlined"
            />}

           
          <ProfileNavTemplate />
        
          </Toolbar>
          
        </AppBar>

       
       
    );
}

export default Navbar;