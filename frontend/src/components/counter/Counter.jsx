import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import countStyle from "./counter.style"
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';



function Counter(props) {
    const {count, increment, decrement,noBorder}=props

   

    return (
        <Grid container  className='product-quantity' style={countStyle.general}>
          <Grid item xs={3}>
           <IconButton onClick={decrement}>
             <RemoveIcon sx={{me:2}} style={countStyle.button}   />
           </IconButton>
          </Grid>
          <Grid item xs={3}>
           <Typography style={noBorder ? countStyle.countNoBorder: {...countStyle.countNoBorder,...countStyle.countWithBorder}} variant="p">{count}</Typography>
          </Grid>
           
            <Grid item xs={1}>
              <IconButton onClick={increment}>
                <AddIcon sx={{ms:2}}  style={countStyle.button}  />
              </IconButton>
            </Grid>
        </Grid >
    );
}

export default Counter;