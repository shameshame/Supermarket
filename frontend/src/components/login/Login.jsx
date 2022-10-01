import FormTemplate from "../formTemplate/FormTemplate";
import Box from '@mui/material/Box'
import loginFields from "./loginFields.js"
import { useLoginUserMutation } from "../../redux/services/authApi";
import {useLocation,Link} from "react-router-dom"
import Typography from '@mui/material/Typography';
import loginStyle from "./login.style"

function Login(props) {
    
    const location=useLocation();
    const [loginUser, { isLoading, isSuccess, error, isError,data }] =
    useLoginUserMutation();
    
    const attributes= {
        isLoading, isSuccess, error, isError,data,
        redirect:location.state?.from.pathname,
        submitHandler:inputs=>loginUser(inputs),
        message:"You are logged in",
        buttonText:"Login",
        formTitle:"Welcome back",
        fieldsToFill:loginFields
     }
    
    
    return (<Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
              <FormTemplate {...attributes}/>
              <Typography style={loginStyle.link}  paragraph component={Link} to="/register">Still don't have account ? Sign up</Typography>
            </Box>);
}

export default Login;