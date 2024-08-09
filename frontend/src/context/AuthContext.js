import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  useEffect(() => {
    if (cookies.token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${cookies.token}`;
      axios.get('http://localhost:5000/api/auth/me')
        .then(response => setUser(response.data))
        .catch(() => removeCookie('token'));
    }
  }, [cookies.token, removeCookie]);

  const login = async (email, password) => {
    const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
    setCookie('token', response.data.token);
    setUser(response.data.user);
  };

  const register = async (email, password) => {
    const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });
    setCookie('token', response.data.token);
    setUser(response.data.user);
  };

  const logout = () => {
    removeCookie('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
