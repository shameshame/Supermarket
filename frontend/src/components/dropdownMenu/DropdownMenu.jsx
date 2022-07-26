import {useState} from "react"
import Select from '@mui/material/Select'
import  MenuItem  from "@mui/material/MenuItem";


function DropdownMenu(props) {
    const {options}=props

    const [currentValue, setCurrentValue] = useState('');
    
    const handleChange = (event) => {
        setCurrentValue(event.target.value);
      };
    
    return (
        <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={currentValue}
           label="Choose option"
           onChange={handleChange}
        >
        {options.map((option,index)=><MenuItem key={index} value={option}>{option}</MenuItem>)}
      </Select>
    );
}

export default DropdownMenu;