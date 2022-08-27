import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Menu from "./components/Menu"
import LoadProduct from "./components/uploadProduct/LoadProduct";
import Home from "./components/home/Home"
import SignUp from "./components/signup/SignUp.jsx"
import Login from "./components/login/Login.jsx"
import Cart from "./components/cart/Cart.jsx"
import { Provider } from 'react-redux';

import {store} from "../src/redux/store.js"


function App() {
  return (
    <Provider store={store}>
     
        <BrowserRouter>
             <Navbar/>
             <Menu/>
             
             <Routes>
                <Route path="/">
                  <Route path="/" element={<Home />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/register" element={<SignUp />}/>
                  {/* <Route path="/profile" element={<PrivateRoute ><Profile/></PrivateRoute>}/> */}
                  <Route path="/new_product" element = {<LoadProduct/>}/>
                </Route>
              </Routes>
              
            </BrowserRouter>
          
    </Provider>
  );
}

export default App;
