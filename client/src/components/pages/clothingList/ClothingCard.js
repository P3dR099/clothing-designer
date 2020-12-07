import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './clothingCard.css'


export default class ClothingCard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.fabric = window.fabric
        this.canvas = undefined
        this.x = undefined
        this.y = undefined
    }

    componentDidMount = () => {

        this.x = window.screen.width
        this.y = window.screen.height

        document.querySelectorAll('#card-logo').forEach(el => {

            if (this.x > 500) {
                if (el.naturalWidth > 100) {
                    el.style.width = `${el.naturalWidth / 3}px`
                } else {
                    el.style.width = '40px'
                    el.style.transform = `translateX(25px) translateY(25px)`
                }
            }
            else {

                if (el.naturalWidth > 100) {
                    el.style.width = `20px`
                    el.style.transform = `translateX(0px) translateY(0px)`
                } else {
                    el.style.width = '20px'
                    el.style.transform = `translateX(1px) translateY(1px)`
                    console.log(el.naturalWidth)
                }
            }
        })
    }

    render() {

        return (
            <Col md={3} sm xs={3} style={{ margin: '20px' }}>
                <Card style={{ alignItems: 'center' }}>
                    <div className='img-container' style={{ 'backgroundColor': this.props.color }} >
                        <div id="drawingArea" style={{ overflow: 'hidden' }}>
                            <img id="card-logo" style={this.styles} src={this.props.logo || this.props.imageUrl} alt="logo de camiseta"></img>
                        </div>
                        <img id="tshirtFacing" src={this.props.typeOfShirt} alt="camiseta de manga corta"></img>
                    </div>
                    <Card.Body>
                        <h4>{this.props.title}</h4>

                        {this.props.loggedInUser && this.props.loggedInUser._id === this.props.user
                            ?
                            <ButtonGroup style={{ width: '100%' }}>
                                <Link to={`/designer/viewShirt/${this.props._id}`} className="btn btn-dark btn-sm">Detalles</Link>
                            </ButtonGroup>
                            :
                            <Link to={`/designer/viewShirt/${this.props._id}`}>
                                <Button variant="dark" size="sm" block>Detalles</Button>
                            </Link>
                        }
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}