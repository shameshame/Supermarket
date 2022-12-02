import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme} from "@mui/material/styles"
import {Link} from "react-router-dom";
import logo from "./logo.style"

function Logo(props) {
    const theme=createTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const {mobileView,general}=logo
    
    return (
           <Box style={isMobile ?{...mobileView,...general} :general}>
               <Typography style={logo.ownerName}  variant="h5" component={Link} to="/" >
                   TSYPKIN
               </Typography>
               <Typography color="primary" style={logo.restOfBrand}  variant="h5" component={Link} to="/" >
                   &SONS
               </Typography>
            </Box>
    );
}

export default Logo;