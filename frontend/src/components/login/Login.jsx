import FormTemplate from "../formTemplate/FormTemplate";
import loginFields from "./loginFields.js"
import { useLoginUserMutation } from "../../redux/services/authApi";
import {useLocation} from "react-router-dom"

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
        fieldsToFill:loginFields
     }
    
    
    return (<FormTemplate {...attributes}/>);
}

export default Login;