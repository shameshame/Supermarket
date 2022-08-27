import FormTemplate from "../formTemplate/FormTemplate";
import signUpFields from "./signUpFields.js"
import { useSignUpMutation } from "../../redux/services/authApi";



function SignUp(props) {
   
    const [signUp, { isLoading, isSuccess, error, isError }] =
    useSignUpMutation();
    
    const attributes= {
                         isLoading, isSuccess, error, isError,
                         redirect:"/",
                         submitHandler:inputs=>signUp(inputs),
                         message:"User registered successfully",
                         buttonText:"SignUp",
                         fieldsToFill:signUpFields
                      }
    return (<FormTemplate {...attributes}/>);
}

export default SignUp;