import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'
import DropdownMenu from "../components/dropdownMenu/DropdownMenu.jsx"
import {categories} from "../js/categories.js"


const fieldInputMap={
    role:{ 
            input:(handleChange,option)=> 
                   <Select label="Role" name="role" value={option} onChange={(event)=>handleChange(event)}>
                     <MenuItem value={"Customer"}>Customer</MenuItem>
                     <MenuItem value={"Admin"}>Admin</MenuItem>
                     <MenuItem value={"Storekeeper"}>Storekeeper</MenuItem>
                  </Select>,

            label:"Role"
          },
    
    name:{
      label:"Name"

    },

    email:{
      label:"E-mail"
    },

    lastLogin:{
      label:"Last Seen"
    },

    category:{
      label:"Category",
      input:(handleChange,current="Dairy")=> 
             <DropdownMenu name="category" label="Category" handleChange={handleChange} current={current} options={categories}/>
    },

    image:{

    }

    
        
  
  }

export default fieldInputMap