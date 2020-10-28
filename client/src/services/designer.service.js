import axios from 'axios'

export default class designService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000/api',
            //withCredentials: true
        })

    }

    addNewShirt = text => this.api.post('/newTshirtCustom', text)
    //  getAllClothing = text => this.api.get('/viewAllClothing', text)
    viewMyShirts = id_user => this.api.get(`/viewMyShirts/${id_user}`)
    getOneShirt = id_shirt => this.api.get(`/viewShirt/${id_shirt}`)
    deleteOneShirt = id_shirt => this.api.delete(`/deleteShirt/${id_shirt}`)
    uploadImage = imageForm => this.api.post('/upload', imageForm)
}