import { useState } from "react";

import Login from './pages/Login.js';
import Profile from './pages/Profile.js';

function App() 
{
  const [loginSuccessful, setLoginSuccessful] = useState(false);

  const updateLogin = (status) => {
    setLoginSuccessful(status);
  };

  return (
    <div>
      {loginSuccessful ? <Profile /> : <Login handleSubmitParent={updateLogin} />}
    </div>
  );
}

export default App;