import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme} from "@mui/material/styles"
import  Fab from "@mui/material/Fab"
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box' 
import InputAdornment from '@mui/material/InputAdornment';
import {useState} from "react"
import productSearchStyle from './productSearch.style';
import productApi from '../../redux/services/productApi';

function ProductSearch(props) {
    
    const {setFoundProducts}=props
    const theme=createTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [searchState,setSearchState]=useState({displaySearch:false,searchInput:""})
    const {displaySearch,searchInput}=searchState
    const {searchIconMobile,searchFieldMobile,general,searchFieldDeskTop} = productSearchStyle
    const [triggerForSearchByInput] = productApi.useLazySearchProductsByUserInputQuery()
    
    const waitTime = 1000
    let timer;

    
    const handleChange = (event)=>{
      setSearchState({...searchState, searchInput:event.currentTarget.value})
    }
    
    
    const search = async (text)=>{
       try{
           
        let foundProducts= await triggerForSearchByInput(text).unwrap()
        setFoundProducts(foundProducts)
       }catch(error){
         console.log(error)
       }
    }
    
    
    const inputEndHandler = (event)=>{
       
        // Clear timer
        clearTimeout(timer);
       
        // Wait for X ms and then process the request
        timer = setTimeout(() => {
            search(searchInput);
        }, waitTime);
    }

    const clickSearchIconHandler = ()=>{

      if(displaySearch){
         setSearchState({searchInput:'',displaySearch:false})
         search('')
      }
        
      else
         setSearchState({...searchState,displaySearch:true})
    }
    
    
    return (
        <Box>
         {isMobile  ? <Box>
                       <Fab style={searchIconMobile} onClick={clickSearchIconHandler} 
                           color="primary" aria-label="add"
                        >
                          <SearchIcon />
                        </Fab>
                        {displaySearch && <TextField fullWidth style={searchFieldMobile}   
                        onKeyUp={(event)=>inputEndHandler(event)} onChange={(event)=>handleChange(event)}
                        placeholder="Enter category or name" sx={{mt:2}}/>}
                     </Box> 
                    : 
                    <Box sx={general}>
                    <TextField    size="medium"
                    onKeyUp={(event)=>inputEndHandler(event)}
                    onChange={(event)=>handleChange(event)}
                   sx={searchFieldDeskTop}
                    id="standard-search"
                    InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                         <SearchIcon/>
                      </InputAdornment>),
                    }}
                    value={searchInput}
                    />
                    </Box>
          }
            
        </Box>
    );
}

export default ProductSearch;