import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
        timeout: 10000,
        withCredentials: true,
        // headers: {
        //     "Content-Type": "application/json"
        // }
    }
);

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("jwt");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);


export default apiClient;