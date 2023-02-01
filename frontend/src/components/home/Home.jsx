import Box from '@mui/material/Box';
import ShopCounter from "../shopCounter/ShopCounter.jsx"
import Grid from '@mui/material/Grid'
import homeStyle from "./home.style"


function Home(props) {
    
    return (
        <Grid style={homeStyle}  container>
           <Grid item md={8}>
              <ShopCounter queryString="sortBy=itemsSold_desc&limit=20"/>
           </Grid>
        </Grid>
    );
}

export default Home;