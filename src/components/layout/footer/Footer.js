// import { Link } from 'react-router-dom'
import React, { Fragment, Component } from 'react';

import './footer.css'

export default class Footer extends Component {

    constructor(props) {
        super(props)
        this.state = { user: this.props.loggedInUser ? this.props.loggedInUser._id : '' }
    }




    // display: flex;
    // flex - direction: row;


    render() {

        console.log(this.state)

        return (
            <Fragment>

                <footer className="footer" />

            </Fragment>
        )
    }
}