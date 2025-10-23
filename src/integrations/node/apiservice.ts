import axios from 'axios';

const api = axios.create({
  baseURL:import.meta.env.NODE_URL || 'https://xperia-ijn7.onrender.com/api/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const apiService = {
  // Authentication
  login: async (credentials: {email: string; password:string}) => {
    const response = await api.post('auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  register: async (userData: {name: string; email: string; password: string; phone: string}) => {
    const response = await api.post('auth/register', userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  // Hikes
  getAllHikes: () => api.get('hikes'),
  getHikeById: (id: string) => api.get(`hikes/${id}`),


// items
    getAllItems: () => api.get('items'),
    
//   create: (data) => api.post('trails', data),
//   updateTrail: (id, data) => api.put(`trails/${id}`, data),
//   deleteTrail: (id) => api.delete(`trails/${id}`),

  // Profile
//   updateProfile: (data) => api.put('users/profile', data),
  getProfile: () => api.get('users/profile'),
};

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;