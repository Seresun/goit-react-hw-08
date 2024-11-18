import { useSelector } from 'react-redux';
import { selectUserIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ component, redirectTo = '/login' }) {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
}
