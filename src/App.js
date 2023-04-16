import { useEffect } from "react";

import Login from './pages/Login.js';
import Profile from './pages/Profile.js';

import Cookies from 'universal-cookie';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() 
{
  const navigate = useNavigate();

  useEffect(() => {
    const cookies = new Cookies();

    if (cookies.get('user') === 'user1' /* Hardcoded user1 */)
    {
      navigate('/profile');
    }
    else
    {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;