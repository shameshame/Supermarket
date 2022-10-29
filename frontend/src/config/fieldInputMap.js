import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'


const fieldInputMap={
    role:{ 
            input:(handleChange,option)=> 
                   <Select name="role" value={option} onChange={(event)=>handleChange(event)}>
                     <MenuItem value={"Customer"}>Customer</MenuItem>
                     <MenuItem value={"Admin"}>Admin</MenuItem>
                     <MenuItem value={"Storekeeper"}>Storekeeper</MenuItem>
                  </Select>,

            label:"Role"
          },
    
    


        }

export default fieldInputMap