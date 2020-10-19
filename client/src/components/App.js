import React, { Component, Fragment } from 'react';

import Designer from './custom-designer/designer/Designer'
import Home from '../components/layout/home/HomePage'
import NavBar from '../components/layout/navbar/NavBar'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
<<<<<<< HEAD:client/src/components/App.js
import { Route } from 'react-router-dom'
import ViewShirt from './pages/clothingList/ViewShirt'
import ClothingList from './pages/clothingList/ClothingList'
=======
// import ViewShirt from './pages/showClothing/ViewShirt'
import { Route } from 'react-router-dom'
import ViewShirt from './pages/clothingList/ViewShirt'
import ClothingList from './pages/clothingList/ClothingList'


>>>>>>> 6aead8e496ab3eb1106688d4e9b6d039b4d8e99a:src/components/App.js
import Footer from './layout/footer/Footer'

import authService from '../services/auth.service'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'

<<<<<<< HEAD:client/src/components/App.js
=======





>>>>>>> 6aead8e496ab3eb1106688d4e9b6d039b4d8e99a:src/components/App.js
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
<<<<<<< HEAD:client/src/components/App.js
                    <Route exact path="/" render={(props) => <Home setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} {...props} />} />
=======
                    <Route exact path="/" render={(props) => <Home loggedInUser={this.state.loggedInUser} {...props} />} />
>>>>>>> 6aead8e496ab3eb1106688d4e9b6d039b4d8e99a:src/components/App.js
                    <Route path="/login" render={(props) => <Login setTheUser={this.setTheUser}  {...props} />} />
                    <Route path="/signup" render={(props) => <Signup setTheUser={this.setTheUser} {...props} />} />
                    <Route exact path="/designer" render={(props) => <Designer loggedInUser={this.state.loggedInUser} {...props} />} />
                    <Route exact path="/designer/viewShirt/:user_id" render={(props) => < ViewShirt loggedInUser={this.state.loggedInUser} {...props} />} />
                    <Route exact path="/designer/clothingList/:user_id" render={(props) => < ClothingList loggedInUser={this.state.loggedInUser} {...props} />} />
                </div>
<<<<<<< HEAD:client/src/components/App.js
                <Footer />
=======
>>>>>>> 6aead8e496ab3eb1106688d4e9b6d039b4d8e99a:src/components/App.js
            </Fragment >

        );
    }
}

export default App;
