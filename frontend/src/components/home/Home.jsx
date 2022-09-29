import Box from '@mui/material/Box';
import ShopCounter from "../shopCounter/ShopCounter.jsx"
import Cart from "../cart/Cart.jsx"
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import homeStyle from "./home.style"




function Home(props) {
    
    
    
    
    return (
        <Grid sx={{m:2}} columnSpacing={3} style={homeStyle}  container  >
           <Grid item md={7}>
              <ShopCounter queryString="sortBy=itemsSold_desc&limit=20"/>
           </Grid>
           <Grid  item md={4}>
              <Cart/>
           </Grid>
           
        </Grid>
    );
}

export default Home;