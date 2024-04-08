
import { useAuth } from '../context/AuthContext';

export default function LogoutComponent() {
    const {logout} = useAuth();
    logout();
  return (
    <div>LogoutComponent</div>
  )
}
