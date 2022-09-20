import MyOrders from "../myOrders/MyOrders";

function CustomerProfile(props) {
    return (<>
             Customer Profile
            
            {/* User details : e-mail, name 
                Change password
                My orders (table - each line includes order status , )
            
            */}

            <MyOrders/>
           
        </>
    );
}

export default CustomerProfile;