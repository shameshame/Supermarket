import {useEffect} from "react"
import {useGetMyOrdersQuery} from "../../redux/services/cartApi"
import formatDate from "../../js/formatDate.js"
import Box from '@mui/material/Box'
import lastOrders from "./myOrder.style"
import Typography from '@mui/material/Typography';
import Button  from "@mui/material/Button"
import Table from "@mui/material/Table";
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow';
import TableContainer  from "@mui/material/TableContainer";
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import OrderDetails from "../orderDetails/OrderDetails"
import {useNavigate} from "react-router-dom"
import "../userList/UserList.css"





function MyOrders(props) {
    
   const {data,isSuccess,isFetching} = useGetMyOrdersQuery(null)
   const navigate = useNavigate();
  //if(isSuccess) console.log(data)
   
    
    
    
    return (
        <Box style={lastOrders.general}>
          <Box >
            <Typography style={lastOrders.headline} variant="h6">My Orders</Typography>
            <TableContainer style={lastOrders.table}>
              <Table >
                <TableHead>
                  <TableRow>
                    <TableCell label="Code">Code</TableCell>
                    <TableCell label="Date">Date</TableCell>
                    <TableCell label="Status">Status</TableCell>
                    <TableCell label="Details">Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                   {data?.map(order=>
                      <TableRow key={order._id}>
                         <TableCell label="Code">
                           {order._id.slice(order._id.length-4)}
                         </TableCell>
                         <TableCell label="Date">
                            {formatDate(order.createdAt)}
                         </TableCell>
                         <TableCell label="Status">
                            {order.status}
                         </TableCell>
                         <TableCell label="Details">
                          <Button onClick={()=> navigate("/customer/my_orders/order_details",
                            { state: {products:order.products }})}
                          >
                              View Details
                          </Button>
                         </TableCell>
                       </TableRow>)
                    }
                   
                   
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
            
        </Box>
    );
}

export default MyOrders;