import axiosInstance, {endpoints} from "../axios/axios";

export default class UserService {
    static async login(login, password) {
        return await axiosInstance.post(endpoints.auth.login, {login, password});
    }

    static async logout() {
    }
}