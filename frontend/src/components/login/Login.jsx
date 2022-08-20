import FormTemplate from "../formTemplate/FormTemplate";
import loginFields from "./loginFields.js"

function Login(props) {
    
    
    return (
        <FormTemplate buttonText="Login" fieldsToFill={loginFields}/>
    );
}

export default Login;