import React, { Component, Fragment } from 'react'
//import Canvas from '../../custom-designer/canvas/Canvas'
//import Designer from '../../custom-designer/designer/Designer'
import designerService from '../../../services/designer.service'
import Button from 'react-bootstrap/Button'
import Designer from '../../custom-designer/designer/Designer'

import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'

export default class ViewMyShirts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clothes: [],
            user: this.props.loggedInUser ? this.props.loggedInUser._id : ''
        }
        this.designerService = new designerService
    }

    componentDidMount = () => {
        // console.log(this.state)
        this.getClothes()
    }


    getClothes = () => {
        this.designerService.viewMyShirts(this.state.user)
            .then(res => {
                this.setState({ clothes: res.data })
                console.log(this.state)
            })  // Puushear a clothes
            .catch(err => console.log('Error: ', err))
    }


    render() {

        console.log(this.state.clothes !== undefined ? this.state.clothes.map(el => el.color) : null)
        return (
            <Fragment>
                <Container>
                    <h1>hey</h1>
                    {/* {this.state.clothes.map(el => { <li> {el.color} </li> })} */}

                    <div class="myShirt-container">
                        {this.state.clothes !== undefined ? this.state.clothes.map((el, index) => {
                            return (
                                <Fragment>
                                    <div style={{ display: 'inline-block', position: 'relative' }}>
                                        <img key={el._id} style={{ 'backgroundColor': el.color }} src={el.typeOfShirt}></img>
                                        <img key={index} style={{ 'backgroundColor': el.color }} src={el.logo}></img>

                                        <h1>{el.text}</h1>
                                    </div>
                                </Fragment>
                            )
                        }
                        ) : null}
                    </div>

                </Container>
            </Fragment>
        )
    }
}
