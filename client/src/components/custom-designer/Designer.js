import React, { Component } from 'react'
//import ScripTag from 'react-script-tag'
import Canvas from './canvas/Canvas'
import './designer.css'
import manInvisible from './img/invisibleman.jpg'
import michel from './img/michel.jpg'
const fabric = window.fabric
let canvas

export default class Designer extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
    }


    componentDidMount = () => {

        canvas = new fabric.Canvas('tcanvas', {
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


    handleColor = (color) => {

        document.querySelector("#shirtDiv").style.backgroundColor = color
    }

    handleTshirtText = (event) => {

        const { value } = event.target
        this.setState({ value: value })
    }

    addText = (event) => {

        const { value } = this.state
        event.preventDefault()
        var textSample = new fabric.Text(value, {
            left: fabric.util.getRandomInt(0, 200),
            top: fabric.util.getRandomInt(0, 400),
            fontFamily: 'helvetica',
            angle: 0,
            fill: '#000000',
            scaleX: 0.5,
            scaleY: 0.5,
            fontWeight: '',
            hasRotatingPoint: true
        });

        canvas.add(textSample);
        canvas.item(canvas.item.length - 1).hasRotatingPoint = true;

    }

    getRandomNum = (min, max) => {

        return Math.random() * (max - min) + min
    }

    addLogo = (event) => {

        const element = event.target
        const offset = 50;
        const left = fabric.util.getRandomInt(0 + offset, 200 - offset);
        const top = fabric.util.getRandomInt(0 + offset, 400 - offset);
        const angle = fabric.util.getRandomInt(-20, 40);
        const width = fabric.util.getRandomInt(30, 50);

        var opacity = ((min, max) => {
            return Math.random() * (max - min) + min;
        })(0.5, 1);

        fabric.Image.fromURL(element.src, (image) => {
            image.set({
                left: left,
                top: top,
                angle: angle,
                width: width,
                padding: 10,
                //  opacity: opacity,
                hasRotatingPoint: true
            })
            image.scale(this.getRandomNum(1.1, 1.25)).setCoords()
            canvas.add(image)
        })
        console.log(element)

    }

    render() {

        return (
            <div>
                <Canvas width="200" height="400" />
                <div className="tab-content">
                    <div className="tab-pane active" id="tab1">
                        <div className="well">
                            <h3>Tee Styles</h3>
                            <select id="">
                                <option value="1">Short Sleeve Shirts</option>
                                <option value="2">Long Sleeve Shirts</option>
                                <option value="3">Hoodies</option>
                                <option value="4">Tank tops</option>
                            </select>
                        </div>

                        <div className="well">
                            <ul className="nav">
                                <li className="color-preview" title="White" style={{ 'backgroundColor': '#fffff' }} onClick={() => this.handleColor('White')} ></li>
                                <li className="color-preview" title="Gray" style={{ 'backgroundColor': '#f0f0f0' }} onClick={() => this.handleColor('Gray')}></li>

                                <li className="color-preview" title="Heather Orange" style={{ 'backgroundColor': 'Orange' }} onClick={() => this.handleColor('Orange')}></li>
                                <li className="color-preview" title="Salmon" style={{ 'backgroundColor': '#eead91' }} onClick={() => this.handleColor('Salmon')}></li>

                                <li className="color-preview" title="Dark Chocolate" style={{ 'backgroundColor': '#382d21' }} onClick={() => this.handleColor('rgb(56, 45, 33)')}></li>
                                <li className="color-preview" title="Citrus Yellow" style={{ 'backgroundColor': '#faef93' }} onClick={() => this.handleColor('rgb(250, 239, 147)')}></li>
                                <li className="color-preview" title="Avocado" style={{ 'backgroundColor': '#aeba5e' }} onClick={() => this.handleColor('rgb(174, 186, 94)')}>
                                </li>
                                <li className="color-preview" title="Kiwi" style={{ 'backgroundColor': '#8aa140' }} onClick={() => this.handleColor('rgb(138, 161, 64)')} ></li>
                                <li className="color-preview" title="Irish Green" style={{ 'backgroundColor': '#1f6522' }} onClick={() => this.handleColor('rgb(31, 101, 34 )')}>
                                </li>
                                <li className="color-preview" title="Scrub Green" style={{ 'backgroundColor': '#13afa2' }} onClick={() => this.handleColor('rgb(19, 175, 162 )')} >
                                </li>
                                <li className="color-preview" title="Teal Ice" style={{ 'backgroundColor': '#b8d5d7' }} onClick={() => this.handleColor('rgb( 184, 213, 215)')} >
                                </li>
                                <li className="color-preview" title="Heather Sapphire" style={{ 'backgroundColor': '#15aeda' }} onClick={() => this.handleColor('rgb( 21, 174, 218 )')}></li>
                                <li className="color-preview" title="Sky" style={{ 'backgroundColor': '#a5def8' }} onClick={() => this.handleColor('rgb(165, 222, 248)')} ></li>
                                <li className="color-preview" title="Antique Sapphire" style={{ 'backgroundColor': '#0f77c0' }} onClick={() => this.handleColor('rgb(15, 119, 192)')}></li>
                                <li className="color-preview" title="Heather Navy" style={{ 'backgroundColor': '#3469b7' }} onClick={() => this.handleColor('rgb(52, 105, 183)')}></li>
                                <li className="color-preview" title="Cherry Red" style={{ 'backgroundColor': '#c50404' }} onClick={() => this.handleColor('rgb(197, 4, 4)')}>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="tab-pane" id="tab2">
                        <div className="well">
                            <form onSubmit={this.addText}>
                                <input className="span2" id="text-string" type="text" onChange={this.handleTshirtText} value={this.state.value} />
                                <input type="submit" name="submit" onSubmit={this.addText}></input>
                                <hr />
                            </form>
                            <br />
                            <div id="avatarlist">
                                <img onClick={this.addLogo} style={{ 'cursor': 'pointer' }} className="img-polaroid" src={manInvisible} alt="invisibleman logo" />
                                <img onClick={this.addLogo} style={{ 'cursor': 'pointer', 'width': '85px' }} className="img-polaroid" src={michel} alt="miguel anguel pintura logo" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}