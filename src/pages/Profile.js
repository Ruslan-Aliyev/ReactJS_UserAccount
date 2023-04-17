import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth.js';

function Profile() 
{
  const navigate = useNavigate();
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();

    auth.logout();

    navigate('/login');
  };

  return (
    <div>
      Hi {auth.user}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;