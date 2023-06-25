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
import OrderConfirmation from "./components/orderConfirmation/OrderConfirmation.jsx"
import NotFoundPage from "./components/notFoundPage/NotFoundPage.jsx";
import CheckOut from './components/checkOut/CheckOut.jsx';


function App() {
  
  
  return (<BrowserRouter >
             <Navbar/>
             <Routes>
                <Route path="/">
                      {/* Public routes */}
                  <Route path="/" element={<ShopCounter /> }/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/register" element={<SignUp />}/>
                  <Route path="/unauthorized" element = {<Unauthorized/>}/>
                  <Route path="/shop/:category" element={<ShopCounter />}/>
                      {/* Protected routes */}
                  <Route path="/customer"  element={<ProtectedRoute allowedRoles={["Customer","Admin"]}/>}>
                    <Route path="/customer"  element={<CustomerProfile/>}/>
                    <Route path="my_orders" element={<MyOrders/>}/>
                    <Route path="order_summary" element={<OrderDetails/>}/>
                    <Route path="check_out" element={<CheckOut/>}/>
                    <Route path="order_sent" element ={<OrderConfirmation/>}/>
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
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </BrowserRouter>
    );
}

export default App;
