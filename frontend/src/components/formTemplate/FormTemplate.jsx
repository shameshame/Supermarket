import {useLocation} from "react-router-dom";
import {useState} from "react";
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import customValidationFields from "./customValidationFields.js"

function FormTemplate(props) {
    
    const {fieldsToFill,buttonText}=props
    const [inputFields, setInputFields] = useState({})
    
    
    const {
        register,watch,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    const handleFormChange = (event) => {
       setInputFields({...inputFields,[event.target.name]:event.target.value})
    }

    const onSubmit = (event)=>{
        // event.preventDefault()
        setInputFields([])
    }

    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
           {fieldsToFill?.map((field,index)=>{
            const {name,type,label,pattern}=field
            return <Box>
                    <TextField key={index} type={type} label={label} 
                               
                     {...register(name, {required:`${name} is required`,
                                         pattern,
                                         validate:name==="confirm-password" ?(value)=>watch('password') === value || "Passwords don't match":undefined,
                                         onChange:event => handleFormChange(event)
                                        })
                     } 
                     variant="outlined"  autoFocus={!index} error={!!errors?.[name]}
                     helperText={errors?.[name]? errors[name].message : null} 
                    />
                   
                </Box>
            })}
            <Button type="submit" variant="contained" color="primary" >
                {buttonText}
           </Button> 
           
        </form>
    );
}

export default FormTemplate;