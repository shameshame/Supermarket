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
import  Collapse  from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import  Accordion  from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// import { keyframes } from '@mui/system'
import Logo from '../logo/Logo.jsx';


function ShopNavMobile(props) {
    const [shopMenuOpen,setShopMenuOpen]=useState(false)
    const [rotate, setRotate]=useState(false)
    const [openDepartment,setOpenDepartment]=useState(false)
    const [expanded,setExpanded]=useState(false)
    const {menuButtonOnClick,menuButton,closeButton}=shopNavMobileStyle
     
    const closeMenu = ()=>{
      setShopMenuOpen(false)
    }
    
    const handleChange = (department) => (event, isExpanded) => {
      setExpanded(isExpanded ? department : false);
    };
    

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
                 {shopDepartments?.map(item=>
                  <Accordion expanded={expanded===item.department} onChange={handleChange(item.department)}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                       {item.department} 
                      </AccordionSummary>
        <AccordionDetails>
                      {item.categories.map(category=>
                                    <ListItemButton>
                                      <ListItemText primary={category}/>
                                    </ListItemButton>)}
        </AccordionDetails>
      </Accordion>
                 )}
               </List>
               
          </Drawer>
        </Box>
    );
}

export default ShopNavMobile;