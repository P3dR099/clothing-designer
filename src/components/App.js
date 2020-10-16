import React, { Component, Fragment } from 'react';

import Designer from './custom-designer/designer/Designer'
import Home from '../components/layout/home/HomePage'
import NavBar from '../components/layout/navbar/NavBar'

import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
// import ViewShirt from './pages/showClothing/ViewShirt'
import { Route } from 'react-router-dom'
import ViewShirt from './pages/clothingList/ViewShirt'
import ClothingList from './pages/clothingList/ClothingList'


import Footer from './layout/footer/Footer'

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
            .then(response => {
                this.setState({ loggedInUser: response.data })
                console.log(this.state)

            })
            .catch(err => this.setState({ loggedInUser: null }))

    }


    render() {
        return (
            <Fragment>
                <NavBar loggedInUser={this.state.loggedInUser} setTheUser={this.setTheUser} />
                <div className="App" >
                    <Route exact path="/" render={(props) => <Home loggedInUser={this.state.loggedInUser} {...props} />} />
                    <Route path="/login" render={(props) => <Login setTheUser={this.setTheUser}  {...props} />} />
                    <Route path="/signup" render={(props) => <Signup setTheUser={this.setTheUser} {...props} />} />
                    <Route exact path="/designer" render={(props) => <Designer loggedInUser={this.state.loggedInUser} {...props} />} />
                    <Route exact path="/designer/viewShirt/:user_id" render={(props) => < ViewShirt loggedInUser={this.state.loggedInUser} {...props} />} />
                    <Route exact path="/designer/clothingList/:user_id" render={(props) => < ClothingList loggedInUser={this.state.loggedInUser} {...props} />} />
                </div>
            </Fragment >

        );
    }
}

export default App;
