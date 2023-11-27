import axios from "axios";

//ENDPOINTS
export const serverURL = "http://localhost:5000"
export const endpoints = {
    auth: {
        registration: serverURL + "/auth/registration",
        login: serverURL + "/auth/login",
        logout: serverURL + "/auth/logout",
        refresh: serverURL + "/auth/refresh"
    },
    user: {
        all: serverURL + "/user/all",
        update: serverURL + "/user/update",
        updatePassword: serverURL + "/user/update-password",
        delete: serverURL + "/user/delete"
    }
}

//AXIOS INSTANCE
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: serverURL
})

//INTERCEPTORS
axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("access_token")}`;
    return config;
})

export default axiosInstance;