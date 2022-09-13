import Box from '@mui/material/Box';
import ShopCounter from "../shopCounter/ShopCounter.jsx"
import Cart from "../cart/Cart.jsx"
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'





function Home(props) {
    
    
    
    
    return (
        <Grid  container>
           <Grid item md={4}>
              <Cart/>
           </Grid>
           <Grid item md={8}>
              <ShopCounter queryString="sortBy=itemsSold_desc&limit=20"/>
           </Grid>
        </Grid>
    );
}

export default Home;