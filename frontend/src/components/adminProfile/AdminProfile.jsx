import PeopleIcon from '@mui/icons-material/People';
import  Container  from '@mui/system/Container';
import Grid  from '@mui/material/Grid'
import IconButton  from '@mui/material/IconButton'
import {Link} from "react-router-dom";
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import adminWelcomePage from "./admin.style"
import Button from "@mui/material/Button"
import adminMenu from "./adminMenu.js"

function AdminProfile(props) {
    return (
        <Box style={adminWelcomePage.welcome}>
              <Box style={adminWelcomePage.menu}>
                 <Typography  variant="h4">Welcome to Admin Panel</Typography>
                 {adminMenu.map(item=> <Button fullWidth style={adminWelcomePage.menu.button}>{item.label}</Button>)}
              </Box>
               
            
         </Box>
    );
}

export default AdminProfile;