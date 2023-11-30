import axios from "axios";
import UserStore from "../store/UserStore.js"
import {toast} from "react-toastify"

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
    UserStore.setLoading(true)
    const accessToken = localStorage.getItem("access_token")
    config.headers.Authorization = `Bearer ${accessToken ?? ''}`;
    return config;
})

axiosInstance.interceptors.response.use(
    (config) => {
        UserStore.setLoading(false)
        if(config.data.message) toast.success(config.data.message);
        return config
    },
    async (error) => {
        const originalRequest = error.config;

        if (localStorage.getItem("access_token") && error.response.status === 401) {
            try {
                UserStore.setLoading(true)
                const response = await axios.get(endpoints.auth.refresh, { withCredentials: true });
                localStorage.setItem("access_token", response.data.tokens.access);
                return axiosInstance.request(originalRequest)
            } catch (error) {
                localStorage.removeItem("access_token");
                UserStore.setAuth(false);
                UserStore.setUser(null);
                toast.error(error.response.data.message);
                throw error;
            }
            finally {
                UserStore.setLoading(false)
            }
        }

        UserStore.setLoading(false)
        toast.error(error.response.data.message);
        throw error;
    })

export default axiosInstance;