import axios from "axios";
import { Api } from "./api";

class AuthApi extends Api {
    async auth(login: string, password: string) {
		const result = await axios.post(`${this.url}/auth`, {
			login,
			password,
		});

		return result;
	}
}

export {
    AuthApi
}
export default new AuthApi();