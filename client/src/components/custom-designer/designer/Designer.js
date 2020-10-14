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
//
import designerService from '../../../services/designer.service'

//let canvas

export default class Designer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            typeOfShirt: tshirt,
            color: undefined,
            logo: undefined,
            user: this.props.loggedInUser ? this.props.loggedInUser._id : '',
            left: 100,
            top: 200
        }
        this.canvas = window.canvas
        this.fabric = window.fabric
        this.designerService = new designerService()
    }

    fabricText = (event, text, leftRandom, topRandom) => {

        console.log(this.fabric.Textbox)
        event.preventDefault()
        const textSample = new this.fabric.Textbox(text, {
            left: leftRandom,
            top: topRandom,
            fontFamily: 'helvetica',
            angle: 0,
            fill: '#000000',
            scaleX: 0.7,
            scaleY: 0.7,
            fontWeight: '',
            hasRotatingPoint: true
        });

        console.log(textSample)
        this.canvas.add(textSample);
        this.canvas.item(this.canvas.item.length - 1).hasRotatingPoint = true;

    }

    fabricImg = (element, left, top, angle, width) => {

        this.fabric.Image.fromURL(element, (image) => {
            image.set({
                left: left,
                top: top,
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

        //   console.log(this.canvas)
        this.canvas = new this.fabric.Canvas('tcanvas', {
            hoverCursor: 'pointer',
            selection: true,
            selectionBorderColor: 'blue'
        });

        this.saveShirt()

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

    changeColor = (event) => {

        this.setState({ color: event })
        document.querySelector("#shirtDiv").style.backgroundColor = event
    }


    handleTshirtText = (event) => {

        const { value } = event.target
        this.setState({ text: value })

    }

    addText = (event) => {

        event.preventDefault()
        const { text } = this.state

        this.setState({ left: Math.floor(Math.random() * 201) })
        this.setState({ top: Math.floor(Math.random() * 401) })


        console.log('\nleft', this.state.left)
        console.log('\ntop', this.state.top)

        this.fabricText(event, text, this.state.left, this.state.top)

    }

    addLogo = (event) => {

        const element = event.target
        console.log(element.src)
        const offset = 50;
        const left = this.fabric.util.getRandomInt(0 + offset, 200 - offset);
        const top = this.fabric.util.getRandomInt(0 + offset, 400 - offset);
        const angle = this.fabric.util.getRandomInt(-20, 40);
        const width = this.fabric.util.getRandomInt(30, 50);

        var opacity = ((min, max) => {
            return Math.random() * (max - min) + min;
        })(0.5, 1);

        this.setState({ logo: element.src })

        this.fabricImg(element.src, left, top, angle, width)


    }

    // onChangeShirt = (event) => {    /// POR HACER

    //     canvas.clear()
    //     const value = event.target.value
    //     //this.setState({ typeShirt: event.target.value })
    //     console.log(value)
    //     console.log(canvas)
    // }

    changeTypeOfShirt = (event) => {

        event.preventDefault()

    }


    // handleInputImg = (event) => {

    //     // let readerImg
    //     const file = event.target.files[0]
    //     //console.log(document.querySelector('input[type=file]').files[0])

    //     //  console.log(file)

    //     // const reader = new FileReader()
    //     // if (file) {
    //     //     readerImg = reader.readAsDataURL(file)
    //     // }
    //     // Hay que leer img como url
    // }

    saveShirt = () => {
        console.log(this.state)

        this.designerService
            .addNewShirt(this.state)
            .then((res) => console.log(res))
            .catch((err) => console.log('ERROR: ', err))


    }


    getRandomNum = (min, max) => Math.random() * (max - min) + min

    render() {

        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col xs="auto" md="auto" className="page" id="shirtDiv">
                            <div className='img-container'>
                                <div id="drawingArea" >
                                    <Canvas id="tcanvas" className="img-responsive" width="200px" height="400px" />
                                </div>
                                <img id="tshirtFacing" src={tshirt} alt="camiseta de manga corta"></img>
                            </div>
                        </Col >

                        <Col xs="auto" md="auto" className="well">
                            <ul className="nav">
                                <li className="color-preview" title="White" style={{ 'backgroundColor': '#fffff' }} onClick={() => this.changeColor('White')} ></li>
                                <li className="color-preview" title="Gray" style={{ 'backgroundColor': '#f0f0f0' }} onClick={() => this.changeColor('Gray')}></li>

                                <li className="color-preview" title="Heather Orange" style={{ 'backgroundColor': 'Orange' }} onClick={() => this.changeColor('Orange')}></li>
                                <li className="color-preview" title="Salmon" style={{ 'backgroundColor': '#eead91' }} onClick={() => this.changeColor('Salmon')}></li>

                                <li className="color-preview" title="Dark Chocolate" style={{ 'backgroundColor': '#382d21' }} onClick={() => this.changeColor('rgb(56, 45, 33)')}></li>
                                <li className="color-preview" title="Citrus Yellow" style={{ 'backgroundColor': '#faef93' }} onClick={() => this.changeColor('rgb(250, 239, 147)')}></li>
                                <li className="color-preview" title="Avocado" style={{ 'backgroundColor': '#aeba5e' }} onClick={() => this.changeColor('rgb(174, 186, 94)')}>
                                </li>
                                <li className="color-preview" title="Kiwi" style={{ 'backgroundColor': '#8aa140' }} onClick={() => this.changeColor('rgb(138, 161, 64)')} ></li>
                                <li className="color-preview" title="Irish Green" style={{ 'backgroundColor': '#1f6522' }} onClick={() => this.changeColor('rgb(31, 101, 34 )')}>
                                </li>
                                <li className="color-preview" title="Scrub Green" style={{ 'backgroundColor': '#13afa2' }} onClick={() => this.changeColor('rgb(19, 175, 162 )')} >
                                </li>
                                <li className="color-preview" title="Teal Ice" style={{ 'backgroundColor': '#b8d5d7' }} onClick={() => this.changeColor('rgb( 184, 213, 215)')} >
                                </li>
                                <li className="color-preview" title="Heather Sapphire" style={{ 'backgroundColor': '#15aeda' }} onClick={() => this.changeColor('rgb( 21, 174, 218 )')}></li>
                                <li className="color-preview" title="Sky" style={{ 'backgroundColor': '#a5def8' }} onClick={() => this.changeColor('rgb(165, 222, 248)')} ></li>
                                <li className="color-preview" title="Antique Sapphire" style={{ 'backgroundColor': '#0f77c0' }} onClick={() => this.changeColor('rgb(15, 119, 192)')}></li>
                                <li className="color-preview" title="Heather Navy" style={{ 'backgroundColor': '#3469b7' }} onClick={() => this.changeColor('rgb(52, 105, 183)')}></li>
                                <li className="color-preview" title="Cherry Red" style={{ 'backgroundColor': '#c50404' }} onClick={() => this.changeColor('rgb(197, 4, 4)')}>
                                </li>
                            </ul>
                            <br />

                            <div className="well">
                                <Form onSubmit={this.addText}>
                                    <Row style={{ margin: 20 }}>
                                        <label htmlFor="field2">Añadir texto</label>
                                        <input className="span2" id="text-string" type="text" onChange={this.handleTshirtText} value={this.state.value} />
                                        <Button variant="dark" type="submit" name="submit">Añadir</Button>
                                    </Row>
                                </Form>
                            </div>
                            <Row style={{ margin: 20 }}>
                                <br />
                                <input name="imageInput" type="file" className="" onChange={this.handleInputImg} />
                            </Row>
                            <Row id="avatarlist">
                                <h3> Añade un logo</h3>
                                <br />
                                <br />
                                <img onClick={this.addLogo} style={{ 'cursor': 'pointer' }} className="img-polaroid" src={manInvisible} alt="invisibleman logo" />
                                <img onClick={this.addLogo} style={{ 'cursor': 'pointer', 'width': '85px' }} className="img-polaroid" src={michel} alt="miguel anguel pintura logo" />
                            </Row>
                            <Button onClick={this.saveShirt} variant="dark" type="submit">Crear camiseta personalizada</Button>
                        </Col>
                    </Row>
                </Container>

                <div className="tab-content">
                    <div className="tab-pane " id="tab1">
                        <div className="well">
                            <h3>Tee Styles</h3>
                            <select onChange={this.onChangeShirt} id="">
                                <option value="1">Short Sleeve Shirts</option>
                                <option value="2">Long Sleeve Shirts</option>
                                <option value="3">Hoodies</option>
                                <option value="4">Tank tops</option>
                            </select>
                        </div>
                    </div>


                </div >
            </Fragment >
        )
    }
}