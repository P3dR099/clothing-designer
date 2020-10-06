import React, { Component } from 'react'
//import ScripTag from 'react-script-tag'
import Canvas from './canvas/Canvas'
import './designer.css'
import manInvisible from './img/invisibleman.jpg'
const fabric = window.fabric
let canvas
//const canvas = window.canvas

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
        canvas.on({
            'object:moving': function (e) {
                e.target.opacity = 0.5;
            },
            'object:modified': function (e) {
                e.target.opacity = 1;
            },
            //           'object:selected': onObjectSelected,
            //           'selection:cleared': onSelectedCleared
        });

        this.handleColor()
    }

    handleColor = (color) => {
        document.querySelector("#shirtDiv").style.backgroundColor = color
    }

    handleTshirtText = (event) => {
        //const text = document.querySelector('#add-text')
        //this.setState({ value: event })
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

    addLogo = (event) => {
        const el = event.target
        console.log(el)
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

                                <li className="color-preview" title="Heather Orange" style={{ 'background-color': 'Orange' }} onClick={() => this.handleColor('Orange')}></li>
                                <li className="color-preview" title="Salmon" style={{ 'background-color': '#eead91' }} onClick={() => this.handleColor('Salmon')}></li>

                                <li className="color-preview" title="Dark Chocolate" style={{ 'background-color': '#382d21' }} onClick={() => this.handleColor('rgb(56, 45, 33)')}></li>
                                <li className="color-preview" title="Citrus Yellow" style={{ 'background-color': '#faef93' }} onClick={() => this.handleColor('rgb(250, 239, 147)')}></li>
                                <li className="color-preview" title="Avocado" style={{ 'background-color': '#aeba5e' }} onClick={() => this.handleColor('rgb(174, 186, 94)')}>
                                </li>
                                <li className="color-preview" title="Kiwi" style={{ 'background-color': '#8aa140' }} onClick={() => this.handleColor('rgb(138, 161, 64)')} ></li>
                                <li className="color-preview" title="Irish Green" style={{ 'background-color': '#1f6522' }} onClick={() => this.handleColor('rgb(31, 101, 34 )')}>
                                </li>
                                <li className="color-preview" title="Scrub Green" style={{ 'background-color': '#13afa2' }} onClick={() => this.handleColor('rgb(19, 175, 162 )')} >
                                </li>
                                <li className="color-preview" title="Teal Ice" style={{ 'background-color': '#b8d5d7' }} onClick={() => this.handleColor('rgb( 184, 213, 215)')} >
                                </li>
                                <li className="color-preview" title="Heather Sapphire" style={{ 'background-color': '#15aeda' }} onClick={() => this.handleColor('rgb( 21, 174, 218 )')}></li>
                                <li className="color-preview" title="Sky" style={{ 'background-color': '#a5def8' }} onClick={() => this.handleColor('rgb(165, 222, 248)')} ></li>
                                <li className="color-preview" title="Antique Sapphire" style={{ 'background-color': '#0f77c0' }} onClick={() => this.handleColor('rgb(15, 119, 192)')}></li>
                                <li className="color-preview" title="Heather Navy" style={{ 'background-color': '#3469b7' }} onClick={() => this.handleColor('rgb(52, 105, 183)')}></li>
                                <li className="color-preview" title="Cherry Red" style={{ 'background-color': '#c50404' }} onClick={() => this.handleColor('rgb(197, 4, 4)')}>
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
                                <img style={{ 'cursor': 'pointer' }} className="img-polaroid" src={manInvisible} alt="invisibleman logo" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}