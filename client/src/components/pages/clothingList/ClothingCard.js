import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/esm/Row'
import Canvas from '../../custom-designer/canvas/Canvas'

import './clothingCard.css'

const ClothingCard = ({ _id, title, imageUrl, loggedInUser, user, color }) => {


    return (
        <Col md={4}>
            <Card className="coaster-card">
                <Col xs="auto" md="auto" className="page" id="shirtCard" style={{ 'backgroundColor': color }}>
                    <div className='img-container'>
                        <div id="drawingArea" >
                            <Canvas id="tcanvas" className="img-responsive" width="200px" height="400px" />
                        </div>
                        <Card.Img id="tshirtFacing" src={imageUrl} alt="camiseta de manga corta" />
                    </div>
                </Col >
                <Card.Body>
                    <h4>{title}</h4>

                    {loggedInUser && loggedInUser._id === user
                        ?
                        <ButtonGroup style={{ width: '100%' }}>
                            <Button className="btn btn-dark btn-sm" onClick={() => alert('TE LO CURRAS')}>Editar</Button>
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