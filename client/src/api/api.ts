import axios from "axios";

const instance = axios.create({
	baseURL: "",
});

export interface Item {
	type: "file" | "folder";
	title: string;
}

class Api {
	url = "http://78409c237dac.vps.myjino.ru";

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
}

export default new Api();
