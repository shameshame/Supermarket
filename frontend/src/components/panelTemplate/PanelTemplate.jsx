import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button"
import welcomePage from "./panelTemplate.style"
import {useNavigate} from "react-router-dom";
import labelLinkMap from "../../config/labelLinkMap.js"


function PanelTemplate(props) {
    const {features,role}=props
    const navigate= useNavigate()
    
    return (
        <Box style={welcomePage.general}>
              <Box style={welcomePage.menu}>
                 <Typography  variant="h4">Welcome to {role} Panel</Typography>
                 {features.map(item=> <Button onClick={()=>navigate(`${labelLinkMap[item.label]}`)} fullWidth style={welcomePage.menu.button}>{item.label}</Button>)}
              </Box>
        </Box>
    );
}

export default PanelTemplate;