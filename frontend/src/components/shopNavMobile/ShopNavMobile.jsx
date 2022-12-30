import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box'
import {useState} from "react"
import shopDepartments from '../../config/shopDepartments';
import shopNavMobileStyle from './shopNavMobile.style';
import Stack  from '@mui/material/Stack';
import  Typography  from '@mui/material/Typography';
import List  from '@mui/material/List';
import  ListItem  from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import { keyframes } from '@mui/system'
import Logo from '../logo/Logo.jsx';


function ShopNavMobile(props) {
    const [shopMenuOpen,setShopMenuOpen]=useState(false)
    const [rotate, setRotate]=useState(false)
    const {menuButtonOnClick,menuButton,closeButton}=shopNavMobileStyle
     
    const closeMenu = ()=>{
      setShopMenuOpen(false)
    }

    const openMenu = ()=>{
      setRotate(false)
      setShopMenuOpen(true)
    }

    return (
        <Box style={shopNavMobileStyle.general}>
          <IconButton 
           sx={rotate ?menuButtonOnClick :menuButton} 
           onClick={shopMenuOpen?closeMenu: ()=>setRotate(true)}
           onAnimationEnd = {openMenu}
          >
             {shopMenuOpen ?<CloseIcon  style={closeButton}/> :<MenuIcon  /> }
          </IconButton>
          
          <Drawer  anchor="right" open={shopMenuOpen} onClose={()=>setShopMenuOpen(false)}
             PaperProps={{sx: { width: "80%" },}} transitionDuration={1000}
          >
              <Logo/>
              <List sx={{mx:"auto"}}>
                 {shopDepartments?.map(department=>
                  <ListItem  key={department}>
                    <ListItemButton>
                      <ListItemText primary={department}/>
                    </ListItemButton>
                  </ListItem>
                 )}
               </List>
               
          </Drawer>
        </Box>
    );
}

export default ShopNavMobile;