import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'



export default class HomePage extends Component {

    render() {

        return (
            <Fragment>
                <h>home!</h>
                <br />
                <Link to="/Designer">Diseñador</Link>
                <br />
                <Link to="/Login">Login</Link>

            </Fragment>
        )

    }

}