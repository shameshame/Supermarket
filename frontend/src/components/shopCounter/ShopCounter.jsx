import {useEffect,useState} from "react"
import axios from "axios"
import Grid from '@mui/material/Grid'
import InventoryItem from "../item/InventoryItem.jsx"
import shopCounter from "./shopCounter.style"

function ShopCounter(props) {
    const {queryString}=props
    const [products,setProducts]= useState()
    
    //Replace it with RTK api call
    const putProductsOnTheCounter = async ()=>{
        const response= await axios.get(`http://localhost:5000/api/inventory/search?${queryString}`)
        setProducts(response.data)
    }

    useEffect(()=>{
        putProductsOnTheCounter() 
        
    },[])

    
    return(<Grid container spacing={3}>{products?.map(product=>
                               <Grid item md={4}>
                               <InventoryItem {...product}/>
                                </Grid> )}
           </Grid>
    );
}

export default ShopCounter;