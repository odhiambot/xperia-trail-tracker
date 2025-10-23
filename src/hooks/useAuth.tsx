import React, { createContext, useState, useContext, useEffect } from 'react';
import { apiService } from '../integrations/node/apiservice'; // Update the path and name as necessary

const AuthContext = createContext({
  user: null,
  loading: true,
  login: async (email, password) => {},
  register: async (name, email, password, phone) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const userData = await apiService.getProfile();
        setUser(userData.data || userData.data);
      }
    } catch (error) {
      console.error('Error checking user:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const data = await apiService.login({ email, password });
      if(data.user) setUser(data.user);
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (name, email, password, phone) => {
    try {
      const data = await apiService.register({ name, email, password, phone});
      setUser(data.user);
      return data;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);