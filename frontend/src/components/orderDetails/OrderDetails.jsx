import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack"
import Button from '@mui/material/Button';
import Table from "@mui/material/Table";
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow';
import TableContainer  from "@mui/material/TableContainer";
import TableBody from '@mui/material/TableBody'
import TableCell from "@mui/material/TableCell";
import {useNavigate,useLocation} from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme} from "@mui/material/styles" 
import orderDetailsStyle from "./orderDetails.style"
import Typography from '@mui/material/Typography';
import lastOrders from "../myOrders/myOrder.style"


function OrderDetails(props) {
   
    const {state} = useLocation();
    const location = useLocation();
    const navigate = useNavigate()
    const {products}=state;
    const orderSummary= location.pathname==="/customer/order_summary"
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
               <Stack direction={isMobile ? "column" :"row"} style={orderDetailsStyle.buttonPanel}>
                  <Button variant="contained" onClick={()=>navigate(orderSummary? '/': '/customer/my_orders')} 
                        style={orderDetailsStyle.button}  
                  >
                        {orderSummary ?"Cancel"  : "Back To My Orders"}
                  </Button>
                  {orderSummary && <Button variant="contained" color="error" style={orderDetailsStyle.button} onClick={()=>navigate("/customer/check_out")}>Check Out</Button>}
              </Stack>
              </TableContainer>
        </Box>
        
    );
}

export default OrderDetails;