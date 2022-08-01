import Select from '@mui/material/Select'
import  MenuItem  from "@mui/material/MenuItem";


function DropdownMenu(props) {
    const {options,handleChange,currentValue}=props

    return (
        <Select
           name={props.name}
           id="demo-simple-select"
           value={currentValue || ''}
           label="Choose option"
           onChange={handleChange}
        >
        {options.map((option,index)=><MenuItem key={index} value={option}>{option}</MenuItem>)}
      </Select>
    );
}

export default DropdownMenu;