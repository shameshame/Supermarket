import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu'
import ProfileMenuItem from '../profileMenuItem/ProfileMenuItem.jsx';
import {useState} from "react"
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux"
import {profilePaper} from "./profileTemplate.style"
import profileMenu from "../../config/profileMenu.js"


function ProfileNavTemplate(props) {
    

    const [anchorEl,setAnchorEl]=useState(undefined);
    const userMenuOpen=Boolean(anchorEl)
    const navigate=useNavigate();
    const loggedIn=useSelector((state)=>state.user.loggedIn)

    function clickAccountIcon(event){
          loggedIn? setAnchorEl(event.currentTarget):navigate("/login")
    }
    function handleClose(){
        setAnchorEl(undefined)
    }

    return (
        <Box >
            <IconButton sx={{color:"#392F5A"}} id="account-button" 
                        
                        onClick={(event)=>clickAccountIcon(event)}
                        aria-haspopup ='true' 
                        aria-expanded={userMenuOpen ? "true":undefined}>
                
                  <AccountCircleIcon  />
                  {loggedIn?loggedIn.name: `Sign In`}
                 
            </IconButton>
            <Menu open={userMenuOpen} 
              anchorEl={anchorEl} 
              id="account-menu" 
              MenuListProps={{"aria-labelledby":"account-button",}}
              PaperProps={{sx:profilePaper}}
              onClose={handleClose}
              anchorOrigin={{
                vertical:"bottom",
                horizontal:"center"
              }}

              transformOrigin={{
                  vertical:"top",
                  horizontal:"center"
              }}
            >
                  {profileMenu[loggedIn?.role]?.map((item,index)=><ProfileMenuItem key={index} {...item}
                                                                    resetMenu={item.label==="Log Out" ? setAnchorEl :undefined}
                                                                  />)}
            </Menu>
           
        </Box>
       
    );
}

export default ProfileNavTemplate;