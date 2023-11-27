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
    
    async login(login, password) {
        try {
            const result = await UserService.login(login, password);
            localStorage.setItem("access_token", result.data.tokens.access);
            
            this.setUser(result.data.user)
            this.setAuth(true)
        } catch (error) {
            console.log(`STATUS: ${error.response.status}, MESSAGE: ${error.message}`);
        }
    }

    constructor() {
        makeAutoObservable(this);
    }
}
const store = new UserStore()
export default store;