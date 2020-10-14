import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = { user: this.props.loggedInUser ? this.props.loggedInUser._id : '' }
    }

    render() {

        return (
            <Fragment>
                <h1>home!</h1>
                <br />
                <Link to="/designer">Diseñador</Link>
                <br />
                <Link to="/login">Login</Link>
                <br />
                <Link to={`/designer/viewShirt/${this.state.user}`} >View My Shirts</Link>
                <br />
                <Link to={`/designer/ClothingList/${this.state.user}`}>Lista de prendas</Link>

            </Fragment>
        )
    }
}