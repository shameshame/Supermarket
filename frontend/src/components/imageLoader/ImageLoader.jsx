import {useState} from "react"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import imageLoaderStyle from "./imageLoader.style"
import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme} from "@mui/material/styles"




function ImageLoader(props) {
    const [image, setImage] = useState({ preview: '', data: '' })
    const {state,setState}=props
    const theme=createTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
    
    
    const handleFileChange = (event) => {
        const img = {
          preview: URL.createObjectURL(event.target.files[0]),
          data: event.target.files[0],
        }
        setImage(img)
    }
    
    const encodeToBase64=(event)=>{
        const reader = new FileReader();
        const {files}=event.target
        const filename = files[0].name.split('.')[0];
        reader.readAsDataURL(files[0]);
        reader.onloadend = ()=>setState({...state, filename,file:reader.result})
        
    }
    
    
    
    return (
        <Stack style={isMobile?imageLoaderStyle.generalmobile:imageLoaderStyle.general}  onChange={(event)=>encodeToBase64(event)}>

         
         {image.preview && <img style={isMobile?imageLoaderStyle.imageMobile:null}  src={image.preview} width={isMobile?150:200} height={isMobile?100:150} />}
         
         <input onChange={handleFileChange} style={{ display: 'none' }} id="upload-photo" name="uploaded-photo" type="file" />
         <label htmlFor="upload-photo">
           <Fab style={imageLoaderStyle.button} color="secondary" size="small" component="span" aria-label="add" variant="extended">
               <AddIcon /> Upload photo
           </Fab>
         </label> 
        
        </Stack>
    );
}

export default ImageLoader;