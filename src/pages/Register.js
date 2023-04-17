import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth.js';
import { useEffect } from 'react';

function Register() 
{
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (auth.user === 'user1')
    {
      navigate('/profile');
    }
  }, [auth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = document.forms[0];

    // Various checks

    auth.login(username.value); // In real life, this should be session ID

    navigate('/profile');
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        Register
        <div>
          <label>Username </label>
          <input type="text" name="username" required />
        </div>
        <div>
          <label>Password </label>
          <input type="password" name="password" required />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Register;