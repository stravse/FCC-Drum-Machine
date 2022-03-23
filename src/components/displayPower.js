import React from "react";
import "../scss/index.scss";

class DisplayPower extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.changePower = this.changePower.bind(this);
    }
    handleClick(){
        this.props.changePower();
        this.changePower();
    }
    changePower(){
        const btn = document.getElementById("power-btn");
        if (this.props.power){
            btn.classList.replace("power-off", "power-on");
        } else{
            btn.classList.replace("power-on", "power-off");
        }
    }
    render(){
        return(
            <div className="power-container">
                <div className="display-text">POWER</div>
                <button id="power-btn" className="power-button power-off" onClick={this.handleClick} >{this.props.power? "Off": "On"}</button>
            </div>
        )
    }
}

export default DisplayPower;