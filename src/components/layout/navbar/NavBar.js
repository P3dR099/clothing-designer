import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



const NavBar = () => {

    return (
        <Fragment>
            <Navbar bg="dark" variant="dark">
                <Link to="/">
                    <Navbar.Brand> Home</Navbar.Brand>
                </Link>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/designer">Designer</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                </Nav>
            </Navbar>
        </Fragment>
    )
}

export default NavBar