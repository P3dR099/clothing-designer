import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React, { Fragment, Component } from 'react';
import authService from '../../../services/auth.service'
import Image from 'react-bootstrap/Image'
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

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Link to="/">
                        <Navbar.Brand href="#home"> <Image src={logo} style={{ width: '54px' }} />
                        </Navbar.Brand>
                    </Link>
                    {this.props.loggedInUser && <Navbar.Text> Signed in as: <a href="#login"> {this.props.loggedInUser.username} </a></Navbar.Text>}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link style={{ color: 'white' }} as={Link} to="/designer">Designer</Nav.Link>
                            {!this.props.loggedInUser && <Nav.Link style={{ color: 'white' }} as={Link} to="/login">Login</Nav.Link>}
                            {this.props.loggedInUser && <div style={{ color: 'white' }} className="nav-link" onClick={this.logoutUser}>Cerrar sesión</div>}
                            {this.props.loggedInUser && <Nav.Link style={{ color: 'white' }} as={Link} to={`/designer/clothingList/${this.props.loggedInUser._id}`}>Lista de prendas</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}