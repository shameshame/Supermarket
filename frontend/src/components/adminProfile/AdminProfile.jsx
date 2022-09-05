import PeopleIcon from '@mui/icons-material/People';
import  Container  from '@mui/system/Container';
import Grid  from '@mui/material/Grid'
import IconButton  from '@mui/material/IconButton'
import {Link} from "react-router-dom";

function AdminPage(props) {
    return (
        <Container maxWidth="lg">
           <Grid container>
             <Grid item>
               <IconButton component={Link} to="/login">
                 <PeopleIcon/>
               </IconButton>
             </Grid>
 
             <Grid item>

             </Grid>


           </Grid>

            {/*  Add new product,
               Get all users -(each user will have delete and update permissions buttons)
            */}
            
            Admin Profile
        </Container>
    );
}

export default AdminPage;