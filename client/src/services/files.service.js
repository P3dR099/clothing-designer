import axios from 'axios'

export default class FileService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000/api/files',
            withCredentials: true
        })
    }

    uploadImage = imageForm => this.api.post('/upload', imageForm)
    deleteImage = imageForm => this.api.post('/delete', imageForm)
}