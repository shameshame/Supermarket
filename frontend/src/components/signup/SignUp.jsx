import FormTemplate from "../formTemplate/FormTemplate";
import signUpFields from "./signUpFields.js"


function SignUp(props) {
   
    return (
        <FormTemplate  buttonText="SignUp" fieldsToFill={signUpFields}/>
    );
}

export default SignUp;