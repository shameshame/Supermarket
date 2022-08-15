import React from 'react';
import axios from "axios"
import Button  from "@mui/material/Button"

function Cart(props) {
    function stam(){
      const response=  axios.trace('http://localhost/api/users/stam')
      console.log(response)
    }
    
    
    
    return (
        <div>
            <Button onClick={stam}>Send</Button>
        </div>
    );
}

export default Cart;