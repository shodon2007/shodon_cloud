import axios from "axios";


export interface Item {
    type: 'file' | 'folder',
    title: string,
}

class Api {
    url = 'http://localhost:4000';

    sendFile(file: File) {
        const formData = new FormData();
        formData.append('file', file);

        axios.post(`${this.url}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    async getType() {
        const res = await axios.get<Item[]>(`${this.url}/dir`);
        console.log(res.data);
        return res.data;
    }
}


export default new Api();