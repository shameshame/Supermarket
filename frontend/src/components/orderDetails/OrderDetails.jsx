import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from "@mui/material/Table";
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow';
import TableContainer  from "@mui/material/TableContainer";
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import SendOrderButton from "../sendOrderButton/SendOrderButton.jsx"
import {useNavigate,useLocation} from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme} from "@mui/material/styles" 
import orderDetailsStyle from "./orderDetails.style"
import ScrollToBottom from 'react-scroll-to-bottom';
import Typography from '@mui/material/Typography';
import lastOrders from "../myOrders/myOrder.style"
import {useEffect} from "react"

function OrderDetails(props) {
   
    const {state} = useLocation();
    const location = useLocation();
    const navigate = useNavigate()
    const {products}=state;
    const checkOut= location.pathname==="/customer/check_out"
    const theme=createTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box sx={orderDetailsStyle.container}>
            <Typography style={lastOrders.headline} variant="h6">Order Summary</Typography>
              <TableContainer >
               <Table sx={orderDetailsStyle.general}>
                 <TableHead>
                  <TableRow >
                    <TableCell label="Name">Name</TableCell>
                    <TableCell label="Quantity">Quantity</TableCell>
                    <TableCell label="Status">Price for one</TableCell>
                    <TableCell label="Details">In total</TableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                    {products?.map(product=>
                      <TableRow  key={product._id}>
                        <TableCell label="Name">{product.description}</TableCell>
                        <TableCell label="Quantity">{product.quantity}</TableCell>
                        <TableCell label="Price">{product.price}</TableCell>
                        <TableCell label="In total">{product.quantity*product.price}</TableCell>
                       </TableRow>)
                     }
                   </TableBody>
                </Table>
               <Box sx={{display:"flex", flexDirection:isMobile? "column":"row",
                    justifyContent:checkOut? "space-evenly" :"center",
                    mt:4
                    }}
                >
                  <Button variant="contained" onClick={()=>navigate(checkOut? '/': '/customer/my_orders')} 
                          sx={{mb:isMobile ? 4 :0,borderRadius:"1rem"}}
                  >
                        {checkOut ?"Cancel"  : "Back To My Orders"}
                  </Button>
                  {checkOut && <SendOrderButton/>}
              </Box>
              </TableContainer>
        </Box>
        
    );
}

export default OrderDetails;