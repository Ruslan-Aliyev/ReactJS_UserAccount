import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

function Profile() 
{
  const cookies = new Cookies();
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();

    cookies.remove('user');

    navigate('/login');
  };

  return (
    <div>
      Hi {cookies.get('user')}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;