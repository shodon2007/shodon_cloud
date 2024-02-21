import axios from "axios";




class Api {
	url = "https://cloud-server.shodon.ru";
	// url = 'http://localhost:4000';

	api = axios.create({
		baseURL: this.url,
	});
}

export {
	Api
}

export default new Api();
