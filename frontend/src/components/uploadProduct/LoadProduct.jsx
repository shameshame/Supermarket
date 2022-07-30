import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import DropdownMenu from '../dropdownMenu/DropdownMenu'
import Fab from '@mui/material/Fab';
import newProductForm from "./loadProduct.style"
import axios from "axios"
import {categories} from "../../js/categories"
import AddIcon from '@mui/icons-material/Add';
import {useState,useRef} from "react"

function LoadProduct(props) {
    const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')
    const [price,setPrice]= useState('0.0')
    const [form,setForm]= useState({})
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        let reader = new FileReader();
        reader.readAsDataURL(image.data);
        reader.onloadend = ()=>  setForm({...form,file:reader.result})

        const response = 
              await axios.post('http://localhost:5000/api/inventory/new_product',form)

        if (response) {
            setStatus(response.statusText)
            console.log(response.statusText)
        }
        
       
       
    }

     const handleFileChange = (event) => {
        const img = {
          preview: URL.createObjectURL(event.target.files[0]),
          data: event.target.files[0],
        }
      
        setImage(img)
    }

    const handleFormChange= (event) => {
       if(event.target.name!=="uploaded-photo") 
         setForm({...form,[event.target.name]:event.target.value})
    }

    
    return (<Box>
            
            {image.preview && <img src={image.preview} width='100' height='100' />}
            <hr/>
           
             <form onChange={handleFormChange} >
             
               <input onChange={handleFileChange} style={{ display: 'none' }} id="upload-photo" name="uploaded-photo" type="file" />
               <label htmlFor="upload-photo">
                <Fab color="secondary" size="small" component="span" aria-label="add" variant="extended">
                    <AddIcon /> Upload photo
                </Fab>
               </label>            
               
               
               
                <TextField name="description" label="Description" />
                <TextField name="brand" label="Brand"/>
                <DropdownMenu options={categories}/>
                <TextField  type="number" label="Quantity" name="quantity"/>
                <TextField type="number" onChange={setPrice}  name="price" label="Price"/>
                <Button onClick={handleSubmit}>Submit</Button>
                
              </form>
              {console.log(form)}
              
            </Box>
        
    );
}

export default LoadProduct;