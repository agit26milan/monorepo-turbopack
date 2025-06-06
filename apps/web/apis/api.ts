import { getCookieData } from '@/utils';
import axios from 'axios';

export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {'content-type': 'application/json'},
});

api.interceptors.request.use(
  async config => {
    const token = getCookieData('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  response => response,
  async error => {
    if (error?.response?.status === 401) {
     document.cookie = ''
    }
    return Promise.reject(error);
  },
);

export default api;
