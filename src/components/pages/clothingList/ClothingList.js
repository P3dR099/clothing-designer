import React, { Component, Fragment } from 'react'
//import Canvas from '../../custom-designer/canvas/Canvas'
//import Designer from '../../custom-designer/designer/Designer'
import designerService from '../../../services/designer.service'
import Button from 'react-bootstrap/Button'
// import Designer from '../../custom-designer/designer/Designer'

import Canvas from '../../custom-designer/canvas/Canvas'

import Container from 'react-bootstrap/Container'
import ClothingCard from './ClothingCard'
// import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'

export default class ClothingList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clothes: [],
            user: this.props.loggedInUser ? this.props.loggedInUser._id : ''
        }
        this.designerService = new designerService
    }

    componentDidMount = () => this.getClothes()


    getClothes = () => {
        this.designerService.viewMyShirts(this.state.user)
            .then(res => {
                this.setState({ clothes: res.data })
            })
            .catch(err => console.log('Error: ', err))
    }

    render() {

        console.log(this.state.clothes)
        // console.log(this.state.clothes !== undefined ? this.state.clothes.map(el => el.color) : null)
        return (
            <Fragment>
                <Container>
                    {this.state.clothes !== undefined ? this.state.clothes.map((el, index) => {
                        return (
                            <Fragment>
                                <ClothingCard _id={el._id} logo={el.logo} imageUrl={el.typeOfShirt} color={el.color} loggedInUser={this.props.loggedInUser} {...this.state} />
                            </Fragment>
                        )
                    }
                    ) : null}
                </Container>
            </Fragment>
        )
    }
}

