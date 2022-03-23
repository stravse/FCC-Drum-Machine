import React from "react";
import "../scss/index.scss";

class DisplaySwitchSound extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        const switchButton = document.getElementById("switch-button");
        this.props.changeSound();
        if(switchButton.classList.contains("switch-on")){
            switchButton.classList.replace('switch-on', "switch-off");
        } else {
            switchButton.classList.replace('switch-off', 'switch-on');
        }
        
    }

    render(){
        return(
            <div className="switch-sound-container">
                <input className="volume" onChange={this.props.changeVolume} type="range" max="100" min="0" step="1" value={this.props.volume} />
                <div className="sound-container">
                    <div className="display-text">CHANGE SOUND</div>
                    <button id="switch-button" className="switch-button switch-on" onClick={this.handleClick} >{this.props.soundBoard1? "Sound 2": "Sound 1"}</button>
                </div>
                
            </div>
        )
    }
}

export default DisplaySwitchSound;