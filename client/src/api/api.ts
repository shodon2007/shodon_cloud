import axios from "axios";

const instance = axios.create({
	baseURL: "",
});

export interface Item {
	isFile: boolean;
	title: string;
}

class Api {
	url = "https://cloud-server.shodon.ru";
	// url = 'http://localhost:4000';

	sendFile(file: File) {
		const formData = new FormData();
		formData.append("file", file);

		instance.post(`${this.url}/upload`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
	}

	async getType() {
		const res = await axios.get<Item[]>(`${this.url}/dir`);
		console.log(res.data);
		return res.data;
	}

	async goFolder(foldername: string) {
		console.log(foldername);
	}
}

export default new Api();
