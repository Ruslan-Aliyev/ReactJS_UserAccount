import Login from './pages/Login.js';
import Profile from './pages/Profile.js';
import Nav from './components/Nav.js';

import { Routes, Route } from 'react-router-dom';

import { AuthProvider, RequireAuth } from './utils/auth.js';

function App() 
{
  // Cant use const auth = useAuth(); and auth.user here. Because auth is nothing here

  return (
    <AuthProvider>
      <Nav />
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;