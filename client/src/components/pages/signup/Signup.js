import React, { Component, Fragment } from 'react'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import { Button, Modal } from 'react-bootstrap';

import authService from '../../../services/auth.service'
class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            show: false
        }
        this.authService = new authService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    componentDidMount = () => {
        this.getUser()
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.componentWillUnmount()
        this.getUser()
    }

    getUser = () => {
        this.authService
            .signup(this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.history.push('/')
                this.handleClose()
            })
            .catch(err => console.log('Loggeate'))
    }

    handleShow = () => this.setState({ show: true })


    handleClose = () => this.setState({ show: false })

    componentWillUnmount = () => {
        this.getUser()
    }

    render() {

        return (
            <Fragment>
                <Button style={{ margin: 10, backgroundColor: 'gray', borderColor: 'gray' }}
                    color="secondary" size="lg" active onClick={this.handleShow}> Regístrate</Button>
                <Modal
                    show={this.state.show}
                    backdrop="static"
                    keyboard={false}
                    onHide={this.handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Registro de usuario</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                            </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}

export default Signup