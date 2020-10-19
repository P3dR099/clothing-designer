import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React, { useState, Fragment, Component } from 'react';
import authService from '../../../services/auth.service'

import logo from './logo-designex.png'

export default class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = { user: this.props.loggedInUser ? this.props.loggedInUser._id : '' }
        this.authService = new authService()
    }

    logoutUser = () => {
        this.authService
            .logout()
            .then(() => this.props.setTheUser(null))
            .catch(err => console.log('ERRORR!!:', err))
    }

    render() {

        console.log(this.props)

        return (
            <Fragment>
                <Navbar {...this.props} style={{ backgroundColor: '#4e4f44' }}>
                    <Link to="/">
                        <Navbar.Brand>
                            <img style={{ height: 40 }} src={logo}></img>
                        </Navbar.Brand>
                    </Link>
                    <Nav className="mr-auto">
                        <Nav.Link style={{ color: 'white' }} as={Link} to="/designer">Designer</Nav.Link>
                        {!this.props.loggedInUser && <Nav.Link style={{ color: 'white' }} as={Link} to="/login">Login</Nav.Link>}
                        {this.props.loggedInUser && <div style={{ color: 'white' }} className="nav-link" onClick={this.logoutUser}>Cerrar sesión</div>}
                        {this.props.loggedInUser && <Nav.Link style={{ color: 'white' }} as={Link} to={`/designer/ClothingList/${this.props.user}`}>Lista de prendas</Nav.Link>}

                    </Nav>
                </Navbar>
            </Fragment>
        )
    }
}