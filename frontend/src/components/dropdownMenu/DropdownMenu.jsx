import Select from '@mui/material/Select'
import  MenuItem  from "@mui/material/MenuItem";


function DropdownMenu(props) {
    const {options,handleChange,current,name}=props

    return (
        <Select
           fullWidth
           name={name}
           id="demo-simple-select"
           value={current}
           label="Choose option"
           onChange={event=>handleChange(event)}
           sx={{mb:2}}
        >
        {options.map((option)=><MenuItem  key={option} value={option}>{option}</MenuItem>)}
      </Select>
    );
}

export default DropdownMenu;