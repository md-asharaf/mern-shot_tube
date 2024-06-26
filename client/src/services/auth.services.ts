import Axios from "@/config/request";
import { ILoginForm, IRegisterForm } from "@/interfaces";

class AuthService {
    login = async (data: ILoginForm) => await Axios.post("/users/login", data);
    logout = async () => await Axios.get("/users/logout");
    register = async (data: IRegisterForm) =>
        await Axios.post("/users/register", data);
}

export default new AuthService();
