import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/esm/Row'
import Canvas from '../../custom-designer/canvas/Canvas'

import './clothingCard.css'

const ClothingCard = ({ _id, title, imageUrl, loggedInUser, user, color, logo }) => {

    return (
        <Col md={3} sm xs={4} style={{ margin: '20px' }}>
            <Card style={{ alignItems: 'center' }}>
                <div className='img-container' style={{ 'backgroundColor': color }} >
                    <div id="canvasCard" >
                        <Canvas id="tcanvas" className="img-responsive" width="70%" height="70%" />
                    </div>
                    <div>
                        <Card.Img id="tshirtFacing" src={imageUrl} alt="camiseta de manga corta">
                        </Card.Img>
                    </div>
                </div>

                <Card.Body>
                    <h4>{title}</h4>

                    {loggedInUser && loggedInUser._id === user
                        ?
                        <ButtonGroup style={{ width: '100%' }}>
                            <Link to={`/designer/viewShirt/${_id}`} className="btn btn-dark btn-sm">Detalles</Link>
                        </ButtonGroup>
                        :
                        <Link to={`/designer/viewShirt/${_id}`}>
                            <Button variant="dark" size="sm" block>Detalles</Button>
                        </Link>
                    }

                </Card.Body>
            </Card>
        </Col>
    )
}

export default ClothingCard