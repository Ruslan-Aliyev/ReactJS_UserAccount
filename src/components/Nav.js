import { Link } from 'react-router-dom';
import { useAuth } from '../utils/auth.js';

function Nav() 
{
  const auth = useAuth();

  return (
    <div>
      {!auth.user && <Link to="/login">Login</Link>}
      {!auth.user && <Link to="/register">Register</Link>}
      {auth.user && <Link to="/profile">Profile</Link>}
    </div>
  );
}

export default Nav;
