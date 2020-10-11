import axios from 'axios'

export default class designService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000/designer',
            // withCredentials: true
        })

    }

    addNewShirt = text => this.api.post('/newTshirtCustom', text)
    getAllClothing = text => this.api.get('/viewAllClothing', text)

    //    isLoggedIn = user => this.api.get('/loggedin', user)

}