import React, { Component, Fragment } from 'react'
import Canvas from '../../custom-designer/canvas/Canvas'
import designerService from '../../../services/designer.service'
import Button from 'react-bootstrap/Button'
import tshirt from '../../custom-designer/img/crewFront.png'
import { SketchPicker } from 'react-color';
import manInvisible from '../../custom-designer/img/invisibleman.jpg'
import michel from '../../custom-designer/img/michel.jpg'

// Reactstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import atleti from '../../custom-designer/designer/img/atleti-icon.png'


export default class ViewMyShirts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            shirt: {},
            user: this.props.loggedInUser ? this.props.loggedInUser._id : ''
        }

        this.fabric = window.fabric
        this.designerService = new designerService()
        this.canvas = undefined
        this.boxWidth = undefined
        this.boxHeight = undefined
    }

    getRandomNum = (min, max) => Math.random() * (max - min) + min

    fabricImg = (element, imgX, imgY, angle, width) => {

        this.fabric.Image.fromURL(element, (image) => {
            image.set({
                left: imgX,
                top: imgY,
                angle: angle,
                width: width,
                padding: 10,
                hasRotatingPoint: true,
            })

            image.scale(this.state.shirt.scaleImgX, this.state.shirt.scaleImgY).setCoords()
            this.canvas.add(image)
        })
    }

    addLogo = () => {

        const { imgX } = this.state.shirt
        const { imgY } = this.state.shirt
        this.fabricImg(this.state.shirt.logoUrl || this.state.shirt.imageUrl, imgX, imgY, 0, 300 * 2)
    }

    addColor = () => { const color = document.querySelector('#shirtDiv').style.backgroundColor = this.state.shirt.color }


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
        this.getOneShirt()
    }


    getOneShirt = () => {

        this.designerService.getOneShirt(this.props.match.params.user_id)
            .then(res => {

                this.setState({ shirt: res.data })
                this.addColor()
                this.addLogo()
            })
            .catch(err => console.log('Error: ', err))
    }

    deleteShirt = () => {
        this.designerService.deleteOneShirt(this.props.match.params.user_id)
            .then(res => {
                console.log(this.props.match.history('/'))
                console.log('BORRADOO!: ', res)
            })
            .catch(err => console.log(err))
    }

    render() {

        console.log(this.state.shirt)
        return (
            <Fragment>
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
                                            <Button style={{ margin: '3px' }} onClick={this.deleteShirt} variant="dark" type="submit">Borrar camiseta personalizada</Button>
                                            <Button style={{ margin: '3px' }} onClick={this.saveShirt} variant="dark" type="submit">Crear camieta personalizada</Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Fragment >
            </Fragment>
        )
    }
}