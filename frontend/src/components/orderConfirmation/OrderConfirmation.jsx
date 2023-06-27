import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button"
import {useNavigate,useLocation} from "react-router-dom"
import orderConfirmationStyle from "./orderConfirmation.style"

function OrderConfirmation(props) {
    const navigate=useNavigate()
    const {state} = useLocation();
    const {orderId}=state
    
    return (
        <Box style={orderConfirmationStyle.general}>
           <Typography variant="h5" component="h5">
              Your order has been received
            </Typography> 

            <Typography style={orderConfirmationStyle.orderId} paragraph>
                Your order ID : {orderId}
            </Typography>

            <Button style={orderConfirmationStyle.backToHome} onClick={()=>navigate("/")}>
                Back to Home
            </Button>
        </Box>
    );
}

export default OrderConfirmation;