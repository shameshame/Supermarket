import {useNavigate} from "react-router-dom";
import {useState,useEffect} from "react";
import {FormProvider, useForm,useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import {toast } from 'react-toastify';

import Box from '@mui/material/Box'
import customValidationFields from "./customValidationFields.js"
import LoadingButton from '@mui/lab/LoadingButton'

function FormTemplate(props) {
    
    const {fieldsToFill,buttonText,submitHandler,redirect,message,
           isLoading, isSuccess, error, isError
          }=props
    const [inputFields, setInputFields] = useState({})
    const navigate = useNavigate();

    

    //Functions to run after loading
    const redirectIfSuccess=()=>{
        
        redirect ? navigate(redirect):navigate("/");
        toast.success(message);
    }

    const errorStack=()=>{
        if (isError) {
            Array.isArray(error?.data.error)
                  ? error?.data.error.forEach((element) =>
                     toast.error(element.message, {
                     position: 'top-right',
                    }))
                  
                  :toast.error(error?.data.message, {position: 'top-right',});
        }
    }

    const methods=useForm();
    const {
        watch,register,
        handleSubmit,
        reset,
        formState: { errors,isSubmitSuccessful},
    } =methods;

    // const {register}=useFormContext()
    useEffect(() => {
        if (isSubmitSuccessful)  reset();
    }, [isSubmitSuccessful]);

    useEffect(() => {
        console.log("IsSussess:",isSuccess);
        isSuccess? redirectIfSuccess():errorStack()
    }, [isLoading]);
    
    
    const handleFormChange = (event) => {
       setInputFields({...inputFields,[event.target.name]:event.target.value})
    }

    

    
    return ( 
        <FormProvider {...methods}>
          <Box component="form" onSubmit={handleSubmit(()=>submitHandler(inputFields))}>
           {fieldsToFill?.map((field,index)=>
           <TextField key={index} type={field.type} label={field.label} 
                    {...register(field.name, {required:`${field.name} is required`,
                                         pattern:field.pattern,
                                         // Check if you  can change this line by passing useFormContext
                                         validate:field.name==="confirm-password" 
                                                 ?(value)=>watch('password') === value || "Passwords don't match"
                                                 :undefined,
                                         onChange:event => handleFormChange(event)
                                        })
                     } 
                     variant="outlined"  autoFocus={!index} error={!!errors?.[field.name]}
                     helperText={errors?.[field.name]? errors[field.name].message : null} 
            />
            )}
            <LoadingButton type="submit"  loading={isLoading} variant="contained" color="primary" >
                {buttonText}
           </LoadingButton> 
          
        </Box>
       
        </FormProvider>
    );
}

export default FormTemplate;