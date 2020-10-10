import React, { Component, Fragment } from 'react';
import Designer from './custom-designer/designer/Designer'
import Home from '../components/layout/home/HomePage'
import authService from '../services/auth.service'
import NavBar from '../components/layout/navbar/NavBar'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: undefined
        }
        this.authService = new authService()
    }

    componentDidMount = () => this.fetchUser()

    setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El usuario es', this.state.loggedInUser))

    fetchUser = () => {
        this.authService
            .isLoggedIn()
            .then(response => this.setState({ loggedInUser: response.data }))
            .catch(err => this.setState({ loggedInUser: null }))

    }


    render() {
        return (
            <Fragment>
                <NavBar />
                <div className="App">
                    <Route exact path="/" render={(props) => <Home />} />
                    <Route exact path="/designer" render={(props) => <Designer />} />
                    <Route path="/login" render={(props) => <Login setTheUser={this.setTheUser}  {...props} />} />
                    <Route path="/signup" render={(props) => <Signup setTheUser={this.setTheUser} {...props} />} />
                </div>
            </Fragment>

        );
    }
}

export default App;
