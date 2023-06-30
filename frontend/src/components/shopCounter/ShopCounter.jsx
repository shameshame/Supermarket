import {useEffect,useState} from "react"
import Grid from '@mui/material/Grid'
import InventoryItem from "../item/InventoryItem.jsx"
import {useSelector} from "react-redux"
import shopCounter from "./shopCounter.style"
import Box from '@mui/material/Box'
import ShopNav from "../shopNav/ShopNav.jsx"
import useMediaQuery from '@mui/material/useMediaQuery';
import productApi from "../../redux/services/productApi"
import {createTheme} from "@mui/material/styles"
import Divider from '@mui/material/Divider';
import {useParams } from "react-router-dom"
import ProductSearch from "../productSearch/ProductSearch.jsx"


function ShopCounter(props) {
    
    const {category} = useParams();
    const queryString= category ? `category=${category}` : "sortBy=itemsSold_desc&limit=20"
    const [loadProducts]=productApi.useLazySearchProductsQuery()
    const [products,setProducts]= useState()
    const expanded=useSelector(state=>state.cart.expanded)

    const theme=createTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const putProductsOnTheCounter = async ()=>{
        const productList= await loadProducts(queryString).unwrap()
        setProducts(productList)
    }

    
    //Replace with useCallback
    useEffect(()=>{
        putProductsOnTheCounter() 
        
    },[category])

    
    return( <Box>
              {!isMobile && <ShopNav/>}
              
              <ProductSearch setFoundProducts={setProducts}/>
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