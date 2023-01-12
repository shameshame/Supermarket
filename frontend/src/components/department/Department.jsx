import Category from "@mui/icons-material/Category";
import {createTheme,ThemeProvider} from "@mui/material/styles"
import Menu from "@mui/material/Menu";
import Paper from "@mui/material/Paper"
import  MenuItem  from "@mui/material/MenuItem";
import shopDepartments from "../../config/shopDepartments";
import departmentStyle from "./department.style";
import Button from "@mui/material/Button"
import  Box  from "@mui/system/Box";
import MenuUnstyled from '@mui/base/MenuUnstyled';
import {useState,useRef} from "react"


function Department(props) {
    const {name}=props
    const [state,setState]= 
    useState({anchorEl:undefined,openDepartment:false,buttonOnHover:false})
    const {anchorEl,openDepartment,buttonOnHover}=state
    const categories=shopDepartments.find(item=>item.department===name).categories
    const node = useRef()
    const tabOnHover = {...departmentStyle.tabsGeneral,...departmentStyle.tabsMouseOver}
    const tabStyle={...departmentStyle.tabsGeneral,...departmentStyle.tabsMouseOut}

    
    const theme = createTheme({
      components:{
        MuiMenu:{
            defaultProps:{
                onMouseLeave: (e) => {
                    handleClose(e);
                },
            }
        }
      }
    })

  const handleOpen = (event) => {
   setState({openDepartment:true,anchorEl:event.currentTarget,buttonOnHover:true})
  };

  const handleClose=(e)=>{
    
        const menu = node.current;
        
        if (e.currentTarget.localName !== "ul") {
        const menuBoundary = {
          left: menu.offsetLeft,
          top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
          right: menu.offsetLeft + menu.offsetWidth,
          bottom: menu.offsetTop + menu.offsetHeight
        };
        
        
        if (!(e.screenX >= menuBoundary.left &&
            e.screenX <= menuBoundary.right &&
            e.screenY <= menuBoundary.bottom &&
            e.screenY >= menuBoundary.top
        )) {
            setState({openDepartment:false,anchorEl:undefined,buttonOnHover:false})
        }
      }

        // setState({anchorEl:undefined,openDepartment:false,buttonOnHover:false})
    }

  
    
    return (
        
        <ThemeProvider theme={theme}>
        <Box >
         
          <Button 
             aria-haspopup="true"
             aria-owns={openDepartment ? {name} : null}
             sx={buttonOnHover ?tabOnHover:tabStyle}
             onMouseOver={(event)=>handleOpen(event)} 
             onMouseLeave={(event)=>handleClose(event)}
           >
             {name}
           </Button>
        
        <Menu
          id={name}
          ref={node}
          anchorEl={anchorEl}
          open={openDepartment}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          transitionDuration={1200}
          disableScrollLock
          
        >
            {categories?.map(category=>
               <MenuItem  onClick={(event)=>handleClose(event)} key={category}>
                  {category}
               </MenuItem>
            )}

           
         
        </Menu>
       
        
        </Box>
        
        </ThemeProvider>
    );
}

export default Department;