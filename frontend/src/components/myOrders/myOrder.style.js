import { tableCellClasses } from "@mui/material/TableCell";


const lastOrders={
   general:{
    //  position:"relative",
    //  top:"50%"

    marginTop:"100px"
   },
   
    headline:{
      backgroundColor:"#E52210",
      textAlign:"center",
      color:"white",
      height:"3rem"
   },

   table:{
    [`& .${tableCellClasses.root}`]: {
        border:"none",
        borderBottom: 1
    },
   
   }

}

export default lastOrders