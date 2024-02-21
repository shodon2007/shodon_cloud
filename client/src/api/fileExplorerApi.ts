import { Api } from "./api";

export interface Item {
	isFile: boolean;
	title: string;
}

class FileExplorerApi extends Api {
	sendFile(file: File) {
		const formData = new FormData();
		formData.append("file", file);

		this.api.post(`${this.url}/upload`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
	}

	async getType() {
		const res = await this.api.get<Item[]>(`/dir`);
		console.log(res.data);
		return res.data;
	}

	async goFolder(foldername: string) {
		await this.api.get(`/goDir`, {
			params: {
				dirname: foldername,
			}
		});

		return true;
	}

	async backFolder() {
		const result = await this.api.get(`/back`);
		return result;
	}
}

export {
    FileExplorerApi
}

export default new FileExplorerApi();
