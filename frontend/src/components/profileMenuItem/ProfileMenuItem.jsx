import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";
import {useLogoutUserMutation} from "../../redux/services/authApi"
import labelLinkMap from "../../config/labelLinkMap.js"


function ProfileMenuItem(props) {
    
    const {icon,label,resetMenu} = props
    const TheIcon = icon
    const [logoutUser]=useLogoutUserMutation();

    function handleLogout(label){
        if(label ==="Log Out") {
           logoutUser();
           resetMenu(undefined)
        }
    }  
    

    function getPath(label){
       return label==="Home" || label==="Log Out" ?"/":`/${label.toLowerCase()}`
    }

    
    return (<MenuItem  component={Link} to={`${labelLinkMap[label]}`} onClick={()=>handleLogout(label)}>
                <TheIcon/>
                {label}
            </MenuItem>
    );
}

export default ProfileMenuItem;