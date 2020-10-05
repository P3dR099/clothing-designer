import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import authService from '../../../service/auth.service'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.authService = new authService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {

        e.preventDefault()

        this.authService
            .signup(this.state)
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log('Error:', { err }))
    }


    render() {

        return (

            <Container>
                <main>
                    <Row className="justify-content-center">
                        <Col md={{ span: 5 }}>
                            <h1>Registro de usuario</h1>
                            <Form onSubmit={this.handleFormSubmit}>
                                <Form.Group>
                                    <Form.Label>Correo electrónico</Form.Label>
                                    <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Nombre de usuario</Form.Label>
                                    <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                </Form.Group>

                                <Button variant="dark" type="submit">Registrarme</Button>
                            </Form>
                        </Col>
                    </Row>
                </main>
            </Container>
        )
    }
}

export default Signup