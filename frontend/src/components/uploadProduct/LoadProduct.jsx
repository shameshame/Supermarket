import Box from '@mui/material/Box'
import {useNewProductMutation} from "../../redux/services/productApi"
import loadProductFields from "./loadProductFields.js"
import FormTemplate from "../formTemplate/FormTemplate";
import {useLocation} from "react-router-dom"


function LoadProduct(props) {
  
    const [newProduct, { isLoading, isSuccess, error, isError,data }] =
    useNewProductMutation();
    const location = useLocation();
    
    const attributes= {
        isLoading, isSuccess, error, isError,data,
        redirect:'/admin',
        submitHandler:inputs=>newProduct(inputs),
        message:"New product uploaded successfully",
        buttonText:"Upload",
        formTitle:"Load Product",
        fieldsToFill:loadProductFields
     }
    
    
    return (
            <FormTemplate {...attributes}/>
            
          
        
    );
}

export default LoadProduct;