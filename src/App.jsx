import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import FriendList from './pages/FriendList';
import AddFriend from './pages/AddFriend';
import UpdateFriend from './pages/UpdateFriend';

axios.defaults.baseURL = 'http://localhost:3000';
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRaw = localStorage.getItem('user');
    console.log("Raw user string from localStorage:", userRaw);

    if (token && userRaw) {
      try {
        const user = JSON.parse(userRaw);
        console.log("Parsed user object:", user);
        setAuthenticated(true);
        if (user?.userName) {
          setUserName(user.userName);
          console.log("userName set to:", user.userName);
        }
      } catch (err) {
        console.error("Failed to parse user JSON:", err);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuthenticated(false);
    setUserName('');
  };

  return (
    <Router>
      <div className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">SAU Friend App</h1>
        {authenticated && (
          <div className="flex items-center gap-4">
            <span className="text-sm">👤 <span className="font-semibold">{userName}</span></span>
            <button
              onClick={logout}
              className="bg-white text-blue-900 px-4 py-1 rounded hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login setAuth={setAuthenticated} setUserName={setUserName} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/friends" element={authenticated ? <FriendList /> : <Navigate to="/login" />} />
        <Route path="/add-friend" element={authenticated ? <AddFriend /> : <Navigate to="/login" />} />
        <Route path="/update-friend/:id" element={authenticated ? <UpdateFriend /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
