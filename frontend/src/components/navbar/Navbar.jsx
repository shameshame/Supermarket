import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import navbar from "./navbar.style";

function Navbar(props) {
    return (
        <AppBar sx={navbar.app}  position="static">
            <CssBaseline />
          <Toolbar sx={navbar.toolbar}>
            <Typography sx={navbar.logo} variant="h4" component={Link} to="/" >
                Eategy
           </Typography>
           <TextField size="small"
                    // onChange={(event)=> setSearchInput(event.target.value)}
                    id="standard-search"
                    InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                         <SearchIcon/>
                      </InputAdornment>),
                    }}
                    variant="outlined"
            />

<Typography  variant="h4" component={Link} to="/new_product" >
                Add
           </Typography>

            <IconButton>
                <AccountCircleIcon/>
                Login
            </IconButton>
          </Toolbar>
       </AppBar>
    );
}

export default Navbar;