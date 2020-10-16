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

    fabricText = (text, leftText, topText) => {

        const canvas = new this.fabric.Canvas('tcanvas')
        const textSample = new this.fabric.Text(text, {
            left: leftText,
            top: topText,
            fontFamily: 'Pacifico',
            angle: 0,
            fill: '#000000',
            scaleX: 0.5,
            scaleY: 0.5,
            fontWeight: '',
            hasRotatingPoint: true
        });
        console.log(textSample)
        canvas.add(textSample);
        canvas.item(canvas.item.length - 1).hasRotatingPoint = true;
    }

    addText = () => {

        const { text } = this.state.shirt
        this.fabricText(text, 70, 100)
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

    addLogo = () => {

        const { logo } = this.state.shirt
        const offset = 50;
        const angle = 0
        const width = this.fabric.util.getRandomInt(100, 200);

        var opacity = ((min, max) => {
            return Math.random() * (max - min) + min;
        })(0.5, 1);

        console.log(this.state.shirt)

        this.fabricImg(this.state.shirt.logo, 57, 40, angle, 100)

        console.log(this.state)


    }


    addColor = () => {
        const color = document.querySelector('#shirtDiv').style.backgroundColor = this.state.shirt.color
    }


    componentDidMount = () => {
        this.getOneShirt()
    }


    getOneShirt = () => {

        this.designerService.getOneShirt(this.props.match.params.user_id)
            .then(res => {
                console.log(res.data)

                this.setState({ shirt: res.data })
                this.addColor()
                this.addLogo()

                // console.log(this.state.shirt.logo)
            }).then(() => {

            }).then(() => this.addText())
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
                    <Button onClick={this.addLogo} variant="dark" type="submit">Delete Shirt!</Button>
                    {() => this.addLogo()}


                </Container>
            </Fragment>
        )
    }
}
