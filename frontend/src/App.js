import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import LoadProduct from "./components/uploadProduct/LoadProduct";
import SignUp from "./components/signup/SignUp.jsx"
import Login from "./components/login/Login.jsx"
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute.jsx"
import CustomerProfile from "./components/customerProfile/CustomerProfile.jsx"
import AdminProfile from "./components/adminProfile/AdminProfile.jsx"
import Unauthorized from "./components/unauthorizedPage/Unauthorized.jsx"
import MyOrders from "./components/myOrders/MyOrders.jsx"
import UserList from "./components/userList/UserList";
import ShopCounter from "./components/shopCounter/ShopCounter.jsx"
import OrderDetails from './components/orderDetails/OrderDetails';
// import "../src/components/userList/UserList.css"

function App() {
  
  
  return (<BrowserRouter >
             <Navbar/>
             <Routes>
                <Route path="/">
                      {/* Public routes */}
                  <Route path="/" element={<ShopCounter queryString="sortBy=itemsSold_desc&limit=20"/> }/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/register" element={<SignUp />}/>
                  <Route path="/unauthorized" element = {<Unauthorized/>}/>
                      {/* Protected routes */}
                  <Route path="/customer"  element={<ProtectedRoute allowedRoles={["Customer","Admin"]}/>}>
                    <Route path="/customer"  element={<CustomerProfile/>}/>
                    <Route path="my_orders" element={<MyOrders/>}/>
                    <Route path="check_out" element={<OrderDetails/>}/>
                    <Route path="my_orders/order_details" element={<OrderDetails/>}/>
                  </Route>
                  
                  
                  <Route path="/admin" element={<ProtectedRoute allowedRoles={["Admin"]}/>}>
                    <Route path="/admin" element={<AdminProfile/>}/>
                    <Route path="user_list" element={<UserList/>}/>
                  </Route>
                  <Route element={<ProtectedRoute allowedRoles={["Admin","Storekeeper"]}/>}>
                    <Route path="/new_product" element = {<LoadProduct/>}/>
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
    );
}

export default App;
