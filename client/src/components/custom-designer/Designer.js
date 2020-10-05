import React, { Component } from 'react'
import Canvas from './Canvas'
import './designer.css'

export default class Designer extends Component {


    componentDidMount = () => this.handleColor()




    handleColor = (color) => {
        document.getElementById("shirtDiv").style.backgroundColor = color

        const script = document.createElement('script')
        const script2 = document.createElement('script')
        const script3 = document.createElement('script')
        const script4 = document.createElement('script')

        script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"
        //  script2.src = fabric
        //  console.log(script2)
        // script3.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" >
        // script4.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" >
        // script4.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" >


    }


    render() {

        return (
            <div>
                <Canvas {...this.props} />
                <div className="tab-content">
                    <div className="tab-pane active" id="tab1">
                        <div className="well">
                            <h3>Tee Styles</h3>
                            <select id="">
                                <option value="1" value="selected">Short Sleeve Shirts</option>
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
                            <div className="input-append">
                                <input className="span2" id="text-string" type="text" placeholder="add text here..." /><button id="add-text" className="btn" title="Add text"><i className="icon-share-alt">add text!</i></button>
                                <hr />
                            </div>
                            <div id="avatarlist">
                                <img style={{ 'cursor': 'pointer' }} className="img-polaroid" src="img/invisibleman.jpg" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}