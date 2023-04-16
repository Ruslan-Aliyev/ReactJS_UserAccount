import Cookies from 'universal-cookie';

function Login() 
{
  const cookies = new Cookies();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = document.forms[0];

    if (username.value === 'user1' && password.value === 'pass1') 
    { // Mimic backend check
      cookies.set('user', username.value); // In real life, this should be session ID
      
      window.location.reload();
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
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

export default Login;