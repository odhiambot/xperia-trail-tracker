import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://xperia-ijn7.onrender.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiService = {
  // AUTH
  register: async (userData) => {
    const response = await api.post('auth/register', userData);
    if (response.data?.data?.token) {
      localStorage.setItem('token', response.data.data.token);
    }
    return response.data;
  },

  login: async (credentials) => {
    const response = await api.post('auth/login', credentials);
    if (response.data?.data?.token) {
      localStorage.setItem('token', response.data.data.token);
    }
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get('auth/me');
    return response.data;
  },

  updateProfile: async (data) => {
    const response = await api.put('auth/profile', data);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  // Add future endpoints
  // getAllHikes: () => api.get('hikes'),
  // getAllItems: () => api.get('items'),
};

export default api;
