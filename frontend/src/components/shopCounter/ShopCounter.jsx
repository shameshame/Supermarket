import {useEffect,useState} from "react"
import axios from "axios"
import Grid from '@mui/material/Grid'
import InventoryItem from "../item/InventoryItem.jsx"
import {useSelector} from "react-redux"
import shopCounter from "./shopCounter.style"

function ShopCounter(props) {
    const {queryString}=props
    const [products,setProducts]= useState()
    const expanded=useSelector(state=>state.cart.expanded)
    
    //Replace it with RTK api call
    const putProductsOnTheCounter = async ()=>{
        const response= await axios.get(`http://localhost:5000/api/inventory/search?${queryString}`)
        setProducts(response.data)
    }

    useEffect(()=>{
        putProductsOnTheCounter() 
        
    },[])

    
    return( <Grid    style={shopCounter}  container  >
               <Grid item md={expanded?8:12}>
                   <Grid  container spacing={3}>{products?.map(product=>
                            <Grid key={product._id} item md={4}>
                               <InventoryItem  {...product}/>
                            </Grid> )}
                    </Grid>
                </Grid> 
            </Grid>
    );          
          
}

export default ShopCounter;