import React, { Component, Fragment } from 'react'
//import Canvas from '../../custom-designer/canvas/Canvas'
//import Designer from '../../custom-designer/designer/Designer'
import designerService from '../../../services/designer.service'
import Button from 'react-bootstrap/Button'
// import Designer from '../../custom-designer/designer/Designer'
import atleti from '../../custom-designer/designer/img/atleti-icon.png'

import Canvas from '../../custom-designer/canvas/Canvas'

import Container from 'react-bootstrap/Container'
import ClothingCard from './ClothingCard'
import { Row } from 'react-bootstrap'
// import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'

export default class ClothingList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clothes: [],
            user: this.props.loggedInUser ? this.props.loggedInUser._id : ''
        }
        this.fabric = window.fabric
        this.canvas = undefined
        this.designerService = new designerService
    }

    fabricImg = (element, imgX, imgY, angle, width) => {

        this.fabric.Image.fromURL(element, (image) => {
            image.set({
                left: imgX,
                top: imgY,
                angle: angle,
                width: width,
                padding: 10,
                //  opacity: opacity,
                hasRotatingPoint: true,
                // scaleX: 50 / 300,
                // scaleY: 400 / 256

            })
            // this.setState({ scaleImgX: 100 / this.canvas.width, scaleImgY: 100 / this.canvas.height })

            this.canvas.add(image)
        })
    }

    addLogo = () => {
        this.state.clothes.map(el => this.fabricImg(el.logo, el.imgX, 50, 0, 300))
        // this.fabricImg()
    }


    componentDidMount = () => {

        this.canvas = new this.fabric.Canvas('tcanvas', {
            hoverCursor: 'pointer',
            selection: true,
            selectionBorderColor: 'blue'
        });

        this.getClothes()
    }


    getClothes = () => {
        this.designerService.viewMyShirts(this.state.user)
            .then(res => {
                this.setState({ clothes: res.data })
                this.addLogo()

            })
            .catch(err => console.log('Error: ', err))
    }

    render() {

        return (
            <Fragment>
                <Container style={{ position: 'relative' }}>
                    <Row style={{ justifyContent: 'space-between' }}>
                        {this.state.clothes !== undefined ? this.state.clothes.map((el, index) => {
                            return (
                                <Fragment>
                                    <ClothingCard key={index} _id={el._id} imgX={el.imgX} imgY={el.imgY} scaleImgX={el.scaleImgX} scaleImgY={el.scaleImgY} logo={el.logo}
                                        imageUrl={el.typeOfShirt} color={el.color} loggedInUser={this.props.loggedInUser} />
                                </Fragment>
                            )
                        }
                        ) : null}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

