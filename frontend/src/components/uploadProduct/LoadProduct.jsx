import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import DropdownMenu from '../dropdownMenu/DropdownMenu'
import Fab from '@mui/material/Fab';
import newProductForm from "./loadProduct.style"
import axios from "axios"
import {categories} from "../../js/categories"
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react"

function LoadProduct(props) {
    const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')
    const [form,setForm]= useState({})
    
    
    const encodeToBase64=(event)=>{
          const reader = new FileReader();
          const {files}=event.target
          const filename = files[0].name.split('.')[0];
          reader.readAsDataURL(files[0]);
          reader.onloadend = ()=>setForm({...form, filename,file:reader.result})
    }
    
    
    const handleSubmit = async (event) => {
        try{
           event.preventDefault()
           const response = 
                 await axios.post('http://localhost:5000/api/inventory/new_product',form)
           
           if (response) setStatus(response.statusText)
        }catch(error){
          console.log(error.message)
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
       let {name,value}= event.target
       name!=="uploaded-photo" ?setForm({...form,[name]:value})
                               :encodeToBase64(event)
    }

    
    return (<Box>
            
            {image.preview && <img  src={image.preview} width='100' height='100' />}
            <hr/>
           
             <form  onChange={handleFormChange} >
             
               {/* This must be a separate component(till closing label tag) */}
               <input onChange={handleFileChange} style={{ display: 'none' }} id="upload-photo" name="uploaded-photo" type="file" />
               <label htmlFor="upload-photo">
                <Fab color="secondary" size="small" component="span" aria-label="add" variant="extended">
                    <AddIcon /> Upload photo
                </Fab>
               </label>            
                <TextField name="description" label="Description" />
                <TextField name="brand" label="Brand"/>
                <DropdownMenu currentValue={form.category} handleChange={handleFormChange} name="category" options={categories}/>
                <TextField  type="number" label="Quantity" name="quantity"/>
                <TextField type="number"   name="price" label="Price"/>
                <Button onClick={handleSubmit}>Submit</Button>
                
              </form>
              
              
            </Box>
        
    );
}

export default LoadProduct;