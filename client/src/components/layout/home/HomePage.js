import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {

    render() {

        return (
            <Fragment>
                <h1>home!</h1>
                <br />
                <Link to="/designer">Diseñador</Link>
                <br />
                <Link to="/login">Login</Link>
                <br />
                <Link to="/designer/viewDesign">View Design</Link>
                <br />
                <Link to="/designer/ClothingList">Lista de prendas</Link>

            </Fragment>
        )
    }
}