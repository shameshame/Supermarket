import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Menu from "./components/Menu"
import LoadProduct from "./components/uploadProduct/LoadProduct";
import Home from "./components/home/Home"
import SignUp from "./components/signup/SignUp.jsx"
import Login from "./components/login/Login.jsx"
import Cart from "./components/cart/Cart.jsx"
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute.jsx"
import CustomerProfile from "./components/customerProfile/CustomerProfile.jsx"
import AdminProfile from "./components/adminProfile/AdminProfile.jsx"
import Unauthorized from "./components/unauthorizedPage/Unauthorized.jsx"

function App() {
  return (<BrowserRouter>
             <Navbar/>
             <Menu/>
             <Routes>
                <Route path="/">
                      {/* Public routes */}
                  <Route path="/" element={<Home />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/register" element={<SignUp />}/>
                  <Route path="/unauthorized" element = {<Unauthorized/>}/>
                      {/* Protected routes */}
                  <Route element={<ProtectedRoute allowedRoles={["Customer","Admin"]}/>}>
                    <Route path="/customer" element={<CustomerProfile/>}/>
                  </Route>
                  <Route element={<ProtectedRoute allowedRoles={["Admin"]}/>}>
                    <Route path="/admin" element={<AdminProfile/>}/>
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
