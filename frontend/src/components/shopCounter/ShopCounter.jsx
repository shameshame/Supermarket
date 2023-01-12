import {useEffect,useState} from "react"
import axios from "axios"
import Grid from '@mui/material/Grid'
import InventoryItem from "../item/InventoryItem.jsx"
import {useSelector} from "react-redux"
import shopCounter from "./shopCounter.style"
import Box from '@mui/material/Box'
import ShopNav from "../shopNav/ShopNav.jsx"
import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme} from "@mui/material/styles"
import Divider from '@mui/material/Divider';
import  Fab from "@mui/material/Fab"
import Logo from "../logo/Logo.jsx"
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';


function ShopCounter(props) {
    const {queryString}=props
    const [products,setProducts]= useState()
    const [displaySearch,setDisplaySearch]=useState(false)
    const expanded=useSelector(state=>state.cart.expanded)

    const theme=createTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    //Replace it with RTK api call
    const putProductsOnTheCounter = async ()=>{
        const response= await axios.get(`http://localhost:5000/api/inventory/search?${queryString}`)
        setProducts(response.data)
    }

    useEffect(()=>{
        putProductsOnTheCounter() 
        
    },[])

    
    return( <Box>
              {!isMobile && <ShopNav/>}
              {isMobile && 
                  <Fab style={shopCounter.searchIconMobile} onClick={()=>setDisplaySearch(!displaySearch)} 
                   color="primary" aria-label="add"
                  >
                    <SearchIcon />
                  </Fab>}
                  {displaySearch && <TextField fullWidth style={shopCounter.searchFieldMobile}   placeholder="Enter category or name" sx={{mt:2}}/>
                }
              <Grid    style={shopCounter.general}  container  >
                 <Grid item lg={expanded?8:12}>
                   <Grid style={shopCounter.row}  container spacing={isMobile?3:0}>{products?.map(product=>
                            <Grid key={product._id} item xs={12} lg={4}>
                               <InventoryItem  {...product}/>
                               {!isMobile && <Divider/>}
                            </Grid> )}
                    </Grid>
                    
                  </Grid> 
                  
               </Grid>
            </Box>
    );          
          
}

export default ShopCounter;