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
    let  dropdownList=[]

    const [anchorEl,setAnchorEl]=useState(undefined);
    const userMenuOpen=Boolean(anchorEl)
    const navigate=useNavigate();
    const loggedIn=useSelector((state)=>state.user.loggedIn)

    function clickAccountIcon(event){
          loggedIn?.name ? setAnchorEl(event.currentTarget):navigate("/login")
    }
    function handleClose(){
        setAnchorEl(undefined)
    }

    return (
        <Box >
            <IconButton id="account-button" 
                        
                        onClick={(event)=>clickAccountIcon(event)}
                        aria-haspopup ='true' 
                        aria-expanded={userMenuOpen ? "true":undefined}>
                 <AccountCircleIcon  />
                  {loggedIn?.name? loggedIn.name: `Sign In`}
            </IconButton>
            <Menu open={userMenuOpen} 
              anchorEl={anchorEl} 
              id="account-menu" 
              MenuListProps={{"aria-labelledby":"account-button",}}
              PaperProps={{sx:profilePaper}}
              onClose={handleClose}
              anchorOrigin={{
                vertical:"bottom",
                horizontal:"right"
              }}

              transformOrigin={{
                  vertical:"top",
                  horizontal:"right"
              }}
            >
                  {profileMenu[loggedIn?.role]?.map((item)=><ProfileMenuItem {...item}/>)}
            </Menu>
        </Box>
       
    );
}

export default ProfileNavTemplate;