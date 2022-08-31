import { useCookies } from 'react-cookie';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { userApi } from '../../redux/services/userApi.js';


function ProtectedRoute({allowedRoles}) {
    //Check if you need logged_in cookie
    const [cookies] = useCookies(['logged_in']);
    const location = useLocation();

  const { isLoading, isFetching } = userApi.endpoints.getMe.useQuery(null, {
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  const loading = isLoading || isFetching;

  const currentUser = userApi.endpoints.getMe.useQueryState(null, {
    selectFromResult: ({ data }) => data,
  });

  if (loading) {
    return <h1>Loading....</h1>; //Replace it with Circular Loader MUI
  }
           
  return !(cookies.logged_in && currentUser) 
         ? <Navigate to='/login' state={{ from: location }} replace />
         :(!allowedRoles.includes(currentUser?.role) 
            ?<Navigate to='/unauthorized' state={{ from: location }} replace />
            :<Outlet />
          )
};



export default ProtectedRoute;