import { makeAutoObservable } from "mobx";
import UserService from "../services/UserService";

class UserStore {
    user = null;
    setUser(userDTO) {
        this.user = userDTO;
    }

    isAuth = false;
    setAuth(value) {
        this.isAuth = value;
    }

    isLoading = false;
    setLoading(value) {
        this.isLoading = value;
    }
    
    async registration(name, surname, patronymic, telephone, email, password) {
        try {
            await UserService.registration(name, surname, patronymic, telephone, email, password);
            const result = await UserService.login(telephone, password);

            localStorage.setItem("access_token", result.data.tokens.access);
            this.setUser(result.data.user)
            this.setAuth(true)
        } catch (error) {
            console.log(`STATUS: ${error.response.status}, MESSAGE: ${error.response.data.message}`);
        }
    }

    async login(login, password) {
        try {
            const result = await UserService.login(login, password);

            localStorage.setItem("access_token", result.data.tokens.access);
            this.setUser(result.data.user)
            this.setAuth(true)
        } catch (error) {
            console.log(`STATUS: ${error.response.status}, MESSAGE: ${error.response.data.message}`);
        }
    }

    async logout() {
        try {
            await UserService.logout();

            localStorage.removeItem("access_token");
            this.setUser(null)
            this.setAuth(false)
        } catch (error) {
            console.log(`STATUS: ${error.response.status}, MESSAGE: ${error.response.data.message}`);
        }
    }

    async checkAuth() {
        try {
            const result = await UserService.checkAuth();

            localStorage.setItem("access_token", result.data.tokens.access);
            this.setUser(result.data.user)
            this.setAuth(true)
        } catch (error) {
            console.log(`STATUS: ${error.response.status}, MESSAGE: ${error.response.data.message}`);
        }
    }

    async getAll() {
        try {
            const result = await UserService.getAll();
            console.log(result.data);
            return result.data
        } catch (error) {
            console.log(`STATUS: ${error.response.status}, MESSAGE: ${error.response.data.message}`);
        }
    }

    constructor() {
        makeAutoObservable(this);
    }
}
const store = new UserStore()
export default store;