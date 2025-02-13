import axios from 'axios';
import { getEnvVariables } from '../shared';

const { VITE_API_URL } = getEnvVariables();

const calendarApi = axios.create ( {
    baseURL: VITE_API_URL
});

// configuración de interceptores
calendarApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': sessionStorage.getItem('token')
    };

    return config;
});

export default calendarApi;