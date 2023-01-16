import Menu from "@mui/material/Menu";
import  MenuItem  from "@mui/material/MenuItem";
import shopDepartments from "../../config/shopDepartments";
import departmentStyle from "./department.style";
import Button from "@mui/material/Button"
import  Box  from "@mui/system/Box";
import {useState} from "react"


function Department(props) {
    const {name}=props
    const [anchorEl, setAnchorEl] = useState(null);
    let menuOnHover = false;
    
    const categories=shopDepartments.find(item=>item.department===name).categories
    const tabOnHover = {...departmentStyle.tabsGeneral,...departmentStyle.tabsMouseOver}
    const tabStyle={...departmentStyle.tabsGeneral,...departmentStyle.tabsMouseOut}

    const buttonOnHoverHandler = (event) => {
  
       if (anchorEl!==event.currentTarget) {
         setAnchorEl(event.currentTarget);
        }
  };

  const menuOnHoverHandler = ()=>{
      menuOnHover = true;
  }

  const menuHandleClick = ()=>{
    setAnchorEl(undefined)
  }

  const  buttonMouseLeaveHandler=()=> {
    menuOnHover = false;
    setTimeout(() => {
      if (!menuOnHover) {
        menuHandleClick();
      }
    }, 50);
  }

  
     return (
        <Box >
          <Button 
             aria-haspopup="true"
             aria-owns={anchorEl ? {name} : null}
             sx={{...tabStyle}}
             onMouseOver={buttonOnHoverHandler} 
             onMouseLeave={buttonMouseLeaveHandler}
           >
             {name}
           </Button>
        
        <Menu
          id={name}
          anchorEl={anchorEl}
          open={Boolean(anchorEl) }
          onClose={menuHandleClick}
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
          MenuListProps={{onMouseOver: menuOnHoverHandler,onMouseLeave: buttonMouseLeaveHandler ,style: { pointerEvents: "auto" }}}
          sx={{pointerEvents:"none"}}
          
        >
            {categories?.map((category)=>
               <MenuItem   onClick={menuHandleClick} key={category}>
                  {category}
               </MenuItem>
            )}
        </Menu>
      </Box>
        
        
    );
}

export default Department;