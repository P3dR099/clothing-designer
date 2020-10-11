import React, { useEffect, useRef } from 'react'
import './canvas.css'

const Canvas = props => {

    const canvasRef = useRef(null)


    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

    }, [])

    return (
        <canvas id="tcanvas" ref={canvasRef} {...props}></canvas>
    )
}

export default Canvas 