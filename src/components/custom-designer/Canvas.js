import React from 'react'
import './canvas.css'
import imgfont from './img/crewFront.png'

const Canvas = props => {

    return (
        <div id="shirtDiv" className="page">
            <img id="tshirtFacing" src={imgfont}></img>
            <div id="drawingArea" >
                <canvas id="tcanvas" width="200" height="400" className="hover"></canvas>
            </div>
        </div >
    )
}

export default Canvas