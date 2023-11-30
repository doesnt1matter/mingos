import axiosInstance, {endpoints} from "../axios/axios";

export default class UserService {
    static async registration(name, surname, patronymic, telephone, email, password) {
        return await axiosInstance.post(endpoints.auth.registration, {name, surname, patronymic, telephone, email, password});
    }

    static async login(login, password) {
        return await axiosInstance.post(endpoints.auth.login, {login, password});
    }

    static async logout() {
        return await axiosInstance.post(endpoints.auth.logout);
    }

    static async checkAuth() {
        return await axiosInstance.get(endpoints.auth.refresh);
    }

    static async getAll() {
        return await axiosInstance.get(endpoints.user.all,);
    }
}