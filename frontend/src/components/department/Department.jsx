import Menu from "@mui/material/Menu";
import  MenuItem  from "@mui/material/MenuItem";
import shopDepartments from "../../config/shopDepartments";
import departmentStyle from "./department.style";
import Button from "@mui/material/Button"
import  Box  from "@mui/system/Box";
import { useNavigate } from "react-router-dom";
import {useState} from "react"


function Department(props) {
    const {name}=props
    const navigate = useNavigate()
    const [state,setState]=useState({anchorEl:undefined,buttonOnHover:false})
    const {anchorEl,buttonOnHover}=state
    let menuOnHover = false;
    
    const categories=shopDepartments.find(item=>item.department===name).categories
    const {tabsGeneral,tabsMouseOver,tabsMouseOut}=departmentStyle
    const tabOnHover = {...tabsGeneral,...tabsMouseOver}
    const tabStyle={...tabsGeneral,...tabsMouseOut}

    const buttonOnHoverHandler = (event) => {
        if(anchorEl!==event.currentTarget){
          setState({buttonOnHover:true,anchorEl:event.currentTarget})
        }
    };

    const menuOnHoverHandler = ()=>{
      menuOnHover = true;
    }

  const menuHandleClick = (event,category)=>{
    setState({buttonOnHover:false,anchorEl:undefined})
    if(category) navigate(`/shop/${category.replace(/ /g,'%20')}`)
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
             sx={buttonOnHover?tabOnHover:tabStyle}
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
               <MenuItem   onClick={(event)=>menuHandleClick(event,category)} key={category}>
                  {category}
               </MenuItem>
            )}
        </Menu>
      </Box>
        
        
    );
}

export default Department;