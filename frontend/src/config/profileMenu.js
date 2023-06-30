import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';


const profileMenu = {
    Customer:[
        {label:"My Orders",icon:ShoppingCartIcon},
        {label:"My Profile",icon:AccountCircleIcon},
        {label:"Log Out",icon:LogoutIcon}
       ],

    Admin:[
        {label:"User List",icon:PeopleIcon},
        {label:"New Product",icon:CategoryIcon},
        {label:"Restock",icon:InventoryIcon},
        {label:"Log Out",icon:LogoutIcon}
    ],

    Storekeeper:[]

}

export default profileMenu