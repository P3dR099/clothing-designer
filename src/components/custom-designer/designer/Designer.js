import React, { Component, Fragment } from 'react'
//import ScripTag from 'react-script-tag'
import Canvas from '../canvas/Canvas'
import './designer.css'
import manInvisible from '../img/invisibleman.jpg'
import michel from '../img/michel.jpg'
import tshirt from '../img/crewFront.png'

// Reactstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { SketchPicker } from 'react-color';

import atleti from './img/atleti-icon.png'
// import nike from './img/nike-pek.png'
// import gucci from './img/gucci.png'

import designerService from '../../../services/designer.service'

export default class Designer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            typeOfShirt: tshirt,
            color: '#fff',
            logo: undefined,
            user: this.props.loggedInUser ? this.props.loggedInUser._id : '',
            leftText: 70,
            topText: 100,
            topImg: this.boxWidth,
            leftImg: this.boxHeight
        }

        this.canvas = window.canvas
        this.fabric = window.fabric
        this.designerService = new designerService()
        this.boxWidth = undefined
        this.boxHeight = undefined
    }

    fabricText = (event, text, leftText, topText) => {

        event.preventDefault()
        const textSample = new this.fabric.Text(text, {
            left: leftText,
            top: topText,
            fontFamily: 'helvetica',
            angle: 0,
            fill: '#000000',
            scaleX: 0.5,
            scaleY: 0.5,
            fontWeight: '',
            hasRotatingPoint: true
        });
        this.canvas.add(textSample);
        this.canvas.item(this.canvas.item.length - 1).hasRotatingPoint = true;
    }

    fabricImg = (element, leftImg, topImg, angle, width) => {

        this.fabric.Image.fromURL(element, (image) => {
            image.set({
                left: leftImg,
                top: topImg,
                angle: angle,
                width: width,
                padding: 10,
                //  opacity: opacity,
                hasRotatingPoint: true,
                scaleX: 200 / 600,
                scaleY: 400 / 800

            })
            image.scale(this.getRandomNum(1.1, 1.25)).setCoords()
            this.canvas.add(image)
        })
    }


    componentDidMount = () => {

        var canvas = document.querySelector('canvas');

        canvas.style.width = '100%'
        canvas.style.height = '100%'

        canvas.width = canvas.offsetWidth + 15
        canvas.height = canvas.width * 2 - 30

        this.boxWidth = canvas.width
        this.boxHeight = canvas.height



        this.canvas = new this.fabric.Canvas('tcanvas', {
            hoverCursor: 'pointer',
            selection: true,
            selectionBorderColor: 'blue'
        });


        //     canvas.on({
        //         'object:moving': function (e) {
        //             e.target.opacity = 0.5;
        //         },
        //         'object:modified': function (e) {
        //             e.target.opacity = 1;
        //         },
        //         //           'object:selected': onObjectSelected,
        //         //           'selection:cleared': onSelectedCleared
        //     });
    }


    handleChangeComplete = (color, event) => {

        this.setState({ color: color.hex });
        document.querySelector("#shirtDiv").style.backgroundColor = this.state.color
    };


    handleTshirtText = (event) => {

        const { value } = event.target
        this.setState({ text: value })
    }

    addText = (event) => {

        event.preventDefault()
        const { text } = this.state
        const { leftText } = this.state
        const parseTo = parseInt(this.state.topText)
        this.fabricText(event, text, leftText, parseTo)
    }

    addLogo = (event) => {

        const element = event.target
        const offset = 50;
        const leftLogo = this.fabric.util.getRandomInt(10 + offset, this.boxWidth - 100);
        console.log(leftLogo)

        const topLogo = this.fabric.util.getRandomInt(10 + offset, this.boxHeight - 100);
        console.log(topLogo)

        const angle = this.fabric.util.getRandomInt(-20, 60);
        const width = this.fabric.util.getRandomInt(100, 200);

        var opacity = ((min, max) => {
            return Math.random() * (max - min) + min;
        })(0.5, 1);

        this.setState({ leftImg: leftLogo, topImg: topLogo })
        console.log(this.state)

        this.setState({ logo: element.src })
        this.fabricImg(element.src, leftLogo, topLogo, 0, 300)
        console.log('-left ->', this.state.leftImg, '--- top ->', topLogo)
    }

    deleteLogo = () => {

        const activeObject = this.canvas.getActiveObject()
        this.canvas.getActiveObject() === undefined ? alert('Please select the element to remove') : this.canvas.remove(activeObject);
    }

    changeTypeOfShirt = (event) => {

        event.preventDefault()
    }

    getRandomNum = (min, max) => Math.random() * (max - min) + min


    handletextPosition = (event) => {

        this.setState({ topText: event.target.value })
    }

    handleImgPosition = (event) => {

        this.setState({ topImg: event.target.value })
    }


    render() {

        return (
            <Fragment>
                <Container>
                    <Row style={{ alignItems: 'center', marginTop: '3%' }}>
                        <Col xs={10} lg={4} className="page" id="shirtDiv">
                            <div className='img-container'>
                                <div id="drawingArea" >
                                    <Canvas id="tcanvas" />
                                </div>
                                <img id="tshirtFacing" src={tshirt} alt="camiseta de manga corta"></img>
                            </div>
                        </Col >

                        <Col xs={12} md={8}>
                            <Row xs={10} className="well" id="avatarlist">

                                <Col xs={9} md={4} lg={3}>
                                    <h3 style={{ padding: '10px' }}>Color de la camiseta</h3>
                                    <SketchPicker width='80%' style={{ padding: '0px' }}
                                        color={this.state.color} onChangeComplete={this.handleChangeComplete} />
                                    <br />
                                    <br />

                                </Col>

                                <Col>
                                    <h3> Añade un logo</h3>
                                    <br />
                                    <img onClick={this.addLogo} style={{ 'cursor': 'pointer' }} className="img-polaroid" src={manInvisible} alt="invisibleman logo" />
                                    <img onClick={this.addLogo} style={{ 'cursor': 'pointer', 'width': '85px' }} className="img-polaroid" src={michel} alt="miguel anguel pintura logo" />
                                    <img onClick={this.addLogo} style={{ 'cursor': 'pointer', 'width': '85px' }} className="img-polaroid" src={atleti} alt="miguel anguel pintura logo" />

                                    <Button style={{ margin: '3px' }} onClick={this.deleteLogo} variant="dark" type="submit">Borrar logo</Button>

                                    <Form onSubmit={this.addText} className="well" style={{ margin: 20 }}>

                                        <label htmlFor="field2">Añadir texto</label>
                                        <input className="span2" id="text-string" type="text" onChange={this.handleTshirtText} value={this.state.value} />
                                        <Button variant="dark" type="submit" name="submit">Añadir</Button>


                                        <Button style={{ margin: '3px' }} onClick={() => {
                                            this.designerService
                                                .addNewShirt(this.state)
                                                .then((res) => this.props.history.push('/'))
                                                .catch((err) => console.log('ERROR: ', err))
                                        }
                                        } variant="dark" type="submit">Crear camieta personalizada</Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment >
        )
    }
}