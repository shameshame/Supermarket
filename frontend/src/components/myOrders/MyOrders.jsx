import {useEffect} from "react"
import {useGetMyOrdersQuery} from "../../redux/services/cartApi"

function MyOrders(props) {
    
   const {data,isSuccess,isFetching} = useGetMyOrdersQuery(null)
   if(isSuccess) console.log(data)
   
    
    
    
    return (
        <div>
            
        </div>
    );
}

export default MyOrders;