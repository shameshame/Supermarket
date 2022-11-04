import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'


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
        }


        }

export default fieldInputMap