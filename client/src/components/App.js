import React, { Component, Fragment } from 'react';

import Designer from './custom-designer/designer/Designer'
import Home from '../components/layout/home/HomePage'
import NavBar from '../components/layout/navbar/NavBar'

import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import ViewShirt from './pages/showClothing/ViewShirt'
import { Route } from 'react-router-dom'
import ClothingList from '../components/pages/clothingList/ClothingList'

import authService from '../services/auth.service'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'


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
                    <Route path="/login" render={(props) => <Login setTheUser={this.setTheUser}  {...props} />} />
                    <Route path="/signup" render={(props) => <Signup setTheUser={this.setTheUser} {...props} />} />
                    <Route exact path="/designer" render={() => <Designer />} />
                    <Route exact path="/designer/ClothingList" render={(props) => < ClothingList {...props} />} />
                    <Route exact path="/designer/viewDesign" render={(props) => < ViewShirt {...props} />} />
                </div>
            </Fragment>

        );
    }
}

export default App;
