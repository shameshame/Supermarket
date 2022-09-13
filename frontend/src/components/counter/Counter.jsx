import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField'



function Counter(props) {
    const {count, increment, decrement}=props
    
    return (
        <Stack direction="row" spacing={1}>
            
            <RemoveCircleIcon size="large" onClick={decrement}/>
            <TextField align="middle" sx={{ align:"middle"}} size="small" readOnly type="number"   name="quantity" value={count} />
            <AddCircleIcon size="large" onClick={increment}/>
        </Stack>
    );
}

export default Counter;