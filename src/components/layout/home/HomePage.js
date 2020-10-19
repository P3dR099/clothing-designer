import React, { Component, Fragment } from 'react'
import { Link, rou } from 'react-router-dom'
import Signup from '../../pages/signup/Signup'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/esm/Row'
import background from './pic-back2.jpeg'

import './home.css'

export default class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = { user: this.props.loggedInUser ? this.props.loggedInUser._id : '' }
    }

    render() {

        return (
            <Fragment>
                <Container style={{
                    background: 'url(' + background + ')', maxWidth: '100%', backgroundColor: 'white',
                    backgroundSize: '100%',
                    height: '700px',
                }}>
                    <br />

                    <Row style={{ justifyContent: 'center' }}>

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