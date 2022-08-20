import loginFields from '../login/loginFields';


const setConfirmPassword=()=>{
  
    
  
  
    const confirmPassword={
          name:"confirm-password",
          type:"password",
          label:"Confirm Password",
          
    }
  
    return confirmPassword
}

const username = {
    name:"username",
    type:"text",
    pattern: {
        value: /^[a-z0-9]{3,}$/i,
        message: "Invalid username"
    }
}

const signUpFields = [username,...loginFields,setConfirmPassword()]

export default signUpFields