import { tableCellClasses } from "@mui/material/TableCell";

const orderDetailsStyle = {
     
    container:{
        position:"relative",
        top:"100px",
        
    },
    
    
    general:{
        
        [`& .${tableCellClasses.root}`]: {
            border:"none",
            margin:"0"
        },
        
    },

    buttonPanel:{
        position:"fixed",
        left: "50%",
        transform: "translateX(-50%)",
        bottom:"2rem"
    },

    button:{
        margin:"0.5rem  2rem",
        borderRadius:"1rem"
    }

}

export default orderDetailsStyle