import React, { Component, Fragment } from 'react'
//import Canvas from '../../custom-designer/canvas/Canvas'
//import Designer from '../../custom-designer/designer/Designer'
import designerService from '../../../services/designer.service'
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'

export default class ViewShirt extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clothes: []
        }
        this.designerService = new designerService
    }

    componentDidMount = () => {
        this.getClothes()
    }


    getClothes = () => {
        this.designerService.getAllClothing()
            .then(res => this.setState({ clothes: res.data }))
            .catch(err => console.log('Error: ', err))
    }


    render() {

        return (
            <Fragment>
                <Container>
                    <h1>hey</h1>
                    {this.state.clothes.map((el) => <img key={el._id} src={el.logo} style={{ width: '90px', margin: '10px' }} />)}
                    <br />
                    <Button onClick={this.getShirt} variant="dark" type="submit">obtener camisetas</Button>
                </Container>
            </Fragment>
        )
    }
}
