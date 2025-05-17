import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_API,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },    
    (error) => {
        return Promise.reject(error);
    }
);

export default api;