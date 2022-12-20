import { tableCellClasses } from "@mui/material/TableCell";

const orderDetailsStyle = {
     
    container:{
        position:"relative",
        top:"100px",
        // height:"100vh"
    },
    
    
    general:{
        
        
        
       
        [`& .${tableCellClasses.root}`]: {
            border:"none",
            margin:"0"
        },
        
     }

}

export default orderDetailsStyle