import { useState } from "react";

function App() 
{
  const [loginSuccessful, setLoginSuccessful] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = document.forms[0];

    if (username.value === 'user1' && password.value === 'pass1') 
    { // Mimic backend check
      setLoginSuccessful(true);
    }
  };

  const renderForm = (

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

  return (
    <div>
      <div>
        <div>Sign In</div>
        {loginSuccessful ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;