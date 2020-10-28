import axios from 'axios'

export default class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://designex-server.herokuapp.com/api/auth',
        })

    }

    signup = user => this.api.post('/signup', user)
    login = user => this.api.post('/login', user)
    logout = () => this.api.post('/logout')
    isLoggedIn = user => this.api.get('/loggedin', user)
}