import axios from 'axios'

export default class designService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000/designer',
        })

    }

    designer = user => this.api.get('/newTshirtCustom', user)
    login = user => this.api.post('/login', user)
    isLoggedIn = user => this.api.get('/loggedin', user)


}