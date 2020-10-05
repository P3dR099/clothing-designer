import axios from 'axios'

export default class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000/api/auth',
        })

    }

    signup = user => this.api.post('/signup', user)
    login = user => this.api.post('/login', user)

}