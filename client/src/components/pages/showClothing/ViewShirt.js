import React, { Component, Fragment } from 'react'
//import Canvas from '../../custom-designer/canvas/Canvas'
import Designer from '../../custom-designer/designer/Designer'
import designerService from '../../../services/designer.service'
import Button from 'react-bootstrap/Button'


export default class ViewShirt extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.designerService = new designerService
    }

    getShirt = () => {
        this.designerService.getAllClothing()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    render() {


        return (
            <Fragment>
                <h1>hola</h1>
                <br />
                <Button onClick={this.getShirt} variant="dark" type="submit">obtener camisetas</Button>
            </Fragment>
        )
    }
}
