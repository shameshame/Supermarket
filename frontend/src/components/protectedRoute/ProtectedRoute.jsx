import { useCookies } from 'react-cookie';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { userApi } from '../../redux/services/userApi.js';


function ProtectedRoute({allowedRoles}) {
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
    return <h1>Loading....</h1>;
  }
           //Check if you can omit an OR statement (since currentUser is checked twice)
  return (cookies.logged_in || currentUser) &&
    allowedRoles.includes(currentUser?.role) ? (
    <Outlet />
  ) : cookies.logged_in && currentUser ? (
    <Navigate to='/unauthorized' state={{ from: location }} replace />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};



export default ProtectedRoute;