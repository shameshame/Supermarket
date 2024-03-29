import {useNavigate} from "react-router-dom";
import {useState,useEffect} from "react";
import {FormProvider, useForm} from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ImageLoader from "../imageLoader/ImageLoader.jsx"
import LoadingButton from '@mui/lab/LoadingButton'
import formStyle from "./formTemplate.style.js";
import fieldInputMap from "../../config/fieldInputMap.js"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme} from "@mui/material/styles"


function FormTemplate(props) {
    
    const {fieldsToFill,buttonText,submitHandler,redirect,message,
           isLoading, isSuccess, error, isError,data, formTitle,
          }=props
    const [inputFields, setInputFields] = useState({})
    const navigate = useNavigate();
    const [showErrorMessage,setShowErrorMessage]=useState(false)
    const theme=createTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    const {errorMessage:{alignToMobile,alignToDesktop,positionMobile},title,general}=formStyle
    

    //Functions to run after loading
    const redirectIfSuccess=()=>{
       
        redirect ? navigate(redirect):navigate(`/${data.role}`);
        
    }

    const errorStack=()=>{
        if (isError) {
          setShowErrorMessage(true)
           
        }
    }

    const methods=useForm();
    const {
        watch,register,
        handleSubmit,
        reset,
        formState: { errors,isSubmitSuccessful},
    } =methods;

    
    useEffect(() => {
        if (isSubmitSuccessful)  reset();
    
    }, [isSubmitSuccessful]);

    useEffect(() => {

       isSuccess ? redirectIfSuccess() :errorStack()
    }, [isLoading]);

    
    const handleFormChange = (event) => {
      const {name,value}=event.target
      setInputFields({...inputFields,[name]:value})
    }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setShowErrorMessage(false);
    };
  

    return ( 
        <FormProvider {...methods}>
          <Container style={general} component="form" onSubmit={handleSubmit(()=>submitHandler(inputFields))} maxWidth="xs">
            <Typography style={title} variant="h4">{formTitle}</Typography>
           {fieldsToFill?.map((field,index)=>
             field.name==="image" 
                ? <ImageLoader key={index} state={inputFields} setState={setInputFields}
                  /> 
                :
                (fieldInputMap[field.name]?.input 
               ? fieldInputMap[field.name].input
                (handleFormChange,{[field.name]:inputFields[field.name],
                 category:inputFields.category}) 
               :<TextField style={formStyle.textField} fullWidth key={field.name} type={field.type} label={field.label} 
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
               />)
            
            )}
             
            <LoadingButton  fullWidth style={formStyle.loadingButton} type="submit"   loading={isLoading} variant="contained" color="primary" >
                {buttonText}
           </LoadingButton> 
           
           <Snackbar open={showErrorMessage}   anchorOrigin={isMobile ? alignToMobile :alignToDesktop}  autoHideDuration={6000} onClose={handleClose}>
               <Alert severity="error" variant="filled" sx={isMobile?positionMobile:null}>{error?.data.message}</Alert>
           </Snackbar>
         </Container>
      
       
        </FormProvider>
    );
}

export default FormTemplate;