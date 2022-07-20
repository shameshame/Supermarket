import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Menu from "./components/Menu"



function App() {
  return (
    <BrowserRouter>
             <Navbar/>
             <Menu/>
              {/* <Routes>
                <Route path="/">
                  <Route path="/" element={<Home />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/register" element={<SignUp />}/>
                  <Route path="/profile" element={<PrivateRoute ><Profile/></PrivateRoute>}/>
                </Route>
              </Routes> */}
            </BrowserRouter>
  );
}

export default App;
