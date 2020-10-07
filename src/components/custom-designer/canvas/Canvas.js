import React, { useEffect, useRef } from 'react'
import './canvas.css'
import imgfont from '../img/crewFront.png'

const Canvas = props => {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
    }, [])


    return (
        <div id="shirtDiv" className="page">
            <img id="tshirtFacing" src={imgfont} alt="camiseta de manga corta"></img>
            <div id="drawingArea" >
                <canvas id="tcanvas" ref={canvasRef} {...props} className="hover"></canvas>
            </div>
        </div >
    )
}

export default Canvas