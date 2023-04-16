import Cookies from 'universal-cookie';

function Profile() 
{
  const cookies = new Cookies();

  const logout = (e) => {
    e.preventDefault();

    cookies.remove('user');

    window.location.reload();
  };

  return (
    <div>
      Hi {cookies.get('user')}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;