import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Signup from '../../pages/signup/Signup'
import ParticlesBg from 'particles-bg'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/esm/Row'
import './home.css'

export default class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = { user: this.props.loggedInUser ? this.props.loggedInUser._id : '' }
    }

    render() {

        return (
            <Fragment>
                <Container>
                    <ParticlesBg type="lines" bg={true} />
                    <Row style={{ justifyContent: 'center', margin: '100px' }}>

                        {!this.props.loggedInUser && <Signup loggedInUser={this.state.loggedInUser} {...this.props} />}

                        <Link to="/designer">
                            <Button style={{ margin: 10, backgroundColor: 'gray', borderColor: 'gray' }} color="secondary" size="lg" active> Go to Designer</Button>
                        </Link>
                    </Row>
                    <br />
                </Container>
            </Fragment >
        )
    }
}