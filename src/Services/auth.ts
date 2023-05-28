// axiosConfig.js

import axios from 'axios';
import { getLocalStorage, setLocalStorage } from '../Utills';

axios.interceptors.request.use(
    async (config) => {
        const token = getLocalStorage('accessToken');
        if (token) {
            config.headers['x-access-token'] = token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        // If the response status is 401 (Unauthorized) and the original request doesn't have a retry flag
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // Call the server to refresh the access token
                const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/refresh-token`, {
                    refreshToken: getLocalStorage('refreshToken'),
                });

                const { accessToken, refreshToken } = response.data;

                // Update the access token and refresh token
                setLocalStorage('accessToken', accessToken);
                setLocalStorage('refreshToken', refreshToken);

                // Retry the original request with the new access token
                originalRequest.headers['x-access-token'] = accessToken;
                return axios(originalRequest);
            } catch (refreshError) {
                // Handle refresh error or redirect to login
            }
        }

        return Promise.reject(error);
    }
);
