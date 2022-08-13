import Box from "@mui/material/Box"
import  Button  from "@mui/material/Button"
import Product from "../product/Product.jsx"
import Counter from "../counter/Counter.jsx"
import {useEffect,useState} from "react"
import axios from "axios"
import Grid from '@mui/material/Grid'
import shopCounter from "./shopCounter.style"

function ShopCounter(props) {
    const {queryString}=props
    const [products,setProducts]= useState()
    

    const putProductsOnTheCounter = async ()=>{
        const response= await axios.get(`http://localhost:5000/api/inventory/search?${queryString}`)
        setProducts(response.data)
    }

    useEffect(()=>{
        putProductsOnTheCounter() 
        
    },[])

    
    return(<Grid container spacing={2}>{products?.map(product=>
                               <Grid item >
                                    <Product  {...product} />
                                    <Counter/> 
                                    <Button color="secondary">ADD TO CART</Button>
                                </Grid> )}
           </Grid>
    );
}

export default ShopCounter;