import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'
import DropdownMenu from "../components/dropdownMenu/DropdownMenu.jsx"
import shopDepartments from './shopDepartments.js';
import {categories} from "../js/categories.js"


const fieldInputMap={
    role:{ 
            input:(handleChange,{role})=> 
                   
                   //Replace it with DropdownMenu component
                   <Select label="Role" name="role" value={role} onChange={(event)=>handleChange(event)}>
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

    date:{
      label:"Date"
    },

    department:{
        label:"Department",
        input:(handleChange,{department,category})=><> 
                
               <DropdownMenu name="department" label="Department" handleChange={handleChange} current={department} options={shopDepartments.map(item=>item.department)}/>
               <DropdownMenu  name="category" label="Category" handleChange={handleChange} current={category} options={shopDepartments.find(item=>item.department===department)?.categories}/>
             </>
    },

    image:{

    },

    _id:{
      label:"Code"
    },
    

    status:{
      label:"Status"
    }

    
        
  
  }

export default fieldInputMap