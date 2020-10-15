import React, { Component, Fragment } from 'react'
import Canvas from '../../custom-designer/canvas/Canvas'
import designerService from '../../../services/designer.service'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import Container from 'react-bootstrap/Container'
import ClothingCard from './ClothingCard'
import Designer from '../../custom-designer/designer/Designer'
// import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'


export default class ViewMyShirts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            shirt: {},
            user: this.props.loggedInUser ? this.props.loggedInUser._id : ''
        }

        this.fabric = window.fabric
        this.designerService = new designerService
    }

    fabricImg = (element, leftImg, topImg, angle, width) => {

        const canvas = new this.fabric.Canvas('tcanvas')
        this.fabric.Image.fromURL(element, (image) => {
            image.set({
                left: leftImg,
                top: topImg,
                angle: angle,
                width: width,
                padding: 10,
                //  opacity: opacity,
                hasRotatingPoint: true,
                // scaleX: 200 / 600,
                // scaleY: 400 / 800

            })
            // image.scale(this.getRandomNum(1.1, 1.25)).setCoords()
            canvas.add(image)
        })
    }

    addLogo = (event) => {

        const { logo } = this.state.shirt
        const offset = 50;
        const angle = 0
        const width = this.fabric.util.getRandomInt(100, 200);

        var opacity = ((min, max) => {
            return Math.random() * (max - min) + min;
        })(0.5, 1);

        this.fabricImg(logo, this.state.shirt.leftImg, this.state.shirt.topImg, angle, 100)

        console.log(this.state)


    }


    addColor = () => {
        const color = document.querySelector('#shirtDiv').style.backgroundColor = this.state.shirt.color
        this.addLogo()
    }


    componentDidMount = () => {
        this.getOneShirt()
    }


    getOneShirt = () => {

        this.designerService.getOneShirt(this.props.match.params.user_id)
            .then(res => {

                this.setState({ shirt: res.data })
                this.addColor()
                // console.log(this.state.shirt.logo)
            })
            .catch(err => console.log('Error: ', err))
    }

    deleteShirt = () => {

        this.designerService.deleteOneShirt(this.props.match.params.user_id)
            .then(res => {
                console.log('Borrado!: ', res)
                console.log(this.props.history.push('/'))
            })
            .catch(err => console.log(err))
    }


    render() {

        return (
            <Fragment>
                <Container>
                    <Designer />

                    <Button onClick={this.deleteShirt} variant="dark" type="submit">Delete Shirt!</Button>
                    <Button onClick={this.addColor} variant="dark" type="submit">Add Logo Shirt!</Button>


                </Container>
            </Fragment>
        )
    }
}
