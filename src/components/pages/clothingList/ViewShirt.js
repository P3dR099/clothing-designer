import React, { Component, Fragment } from 'react'
//import Canvas from '../../custom-designer/canvas/Canvas'
//import Designer from '../../custom-designer/designer/Designer'
import designerService from '../../../services/designer.service'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// import Designer from '../../custom-designer/designer/Designer'

import Canvas from '../../custom-designer/canvas/Canvas'

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
        this.canvas = window.canvas
        this.fabric = window.fabric
        this.designerService = new designerService
    }

    // fabricText = (text, leftText, topText) => {

    //     const textSample = new this.fabric.Text(text, {
    //         left: leftText,
    //         top: topText,
    //         fontFamily: 'helvetica',
    //         angle: 0,
    //         fill: '#000000',
    //         scaleX: 0.5,
    //         scaleY: 0.5,
    //         fontWeight: '',
    //         hasRotatingPoint: true
    //     });
    //     this.canvas.add(textSample);
    //     this.canvas.item(this.canvas.item.length - 1).hasRotatingPoint = true;

    // }

    componentDidMount = () => {
        // console.log(this.state)
        this.getOneShirt()
        //        this.fabricText(this.state.shirt.text, 100, 100)

    }


    getOneShirt = () => {
        this.designerService.getOneShirt(this.props.match.params.user_id)
            .then(res => {
                this.setState({ shirt: res.data })
            })  // Puushear a clothes
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

    // fabricImg = (element, leftImg, topImg, angle, width) => {

    //     this.fabric.Image.fromURL(element, (image) => {
    //         image.set({
    //             left: leftImg,
    //             top: topImg,
    //             angle: angle,
    //             width: width,
    //             padding: 10,
    //             //  opacity: opacity,
    //             hasRotatingPoint: true,
    //             scaleX: 200 / 600,
    //             scaleY: 400 / 800

    //         })
    //         image.scale(this.getRandomNum(1.1, 1.25)).setCoords()
    //         canvas.add(image)
    //     })
    // }




    render() {
        // console.log(this.state)

        // this.fabricText('hola', 100, 100)

        // console.log(this.state.clothes !== undefined ? this.state.clothes.map(el => el.color) : null)
        // console.log(this.props.match.params.user_id)
        return (
            <Fragment>
                <Container>
                    {/* <img src={this.state.shirt.typeOfShirt} style={{ backgroundColor: this.state.shirt.color }} /> */}
                    <div className='img-container'>
                        <div id="drawingArea" >
                            <Canvas id="tcanvas" className="img-responsive" width="200px" height="400px" />
                            <Card.Img id="tshirtFacing" src={this.state.shirt.typeOfShirt} alt="camiseta de manga corta" />
                            <img src={this.state.shirt.logo} />
                        </div>
                    </div>



                    <Button onClick={this.deleteShirt} variant="dark" type="submit">Delete Shirt!</Button>

                </Container>
            </Fragment>
        )
    }
}
