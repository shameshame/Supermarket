import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const profileMenu = {
    Customer:[
        {label:"My Orders",icon:ShoppingCartIcon},
        {label:"My Profile",icon:AccountCircleIcon},
        {label:"Log Out",icon:LogoutIcon}
       ],

    Admin:[],

    Storekeeper:[]

}

export default profileMenu