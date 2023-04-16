import { useState, useEffect } from "react";

import Login from './pages/Login.js';
import Profile from './pages/Profile.js';

import Cookies from 'universal-cookie';

function App() 
{
  const [loginSuccessful, setLoginSuccessful] = useState(false);

  useEffect(() => {
    const cookies = new Cookies();

    if (cookies.get('user') === 'user1' /* Hardcoded user1 */)
    {
      setLoginSuccessful(true);
    }
  }, []);

  return (
    <div>
      {loginSuccessful ? <Profile /> : <Login />}
    </div>
  );
}

export default App;