import React from "react";
import "../scss/display.scss";

class DisplaySwitchSound extends React.Component{


    render(){
        return(
            <div className="switch-sound-container">
                <input className="volume" onChange={this.props.changeVolume} type="range" max="100" min="0" step="1" />
                <div className="sound-container">
                    <div className="display-text">CHANGE SOUND</div>
                    <button id="switch-button" className="switch-button" onClick={this.props.changeSound} >{this.props.soundBoard1? "Sound 2": "Sound 1"}</button>
                </div>
                
            </div>
        )
    }
}

export default DisplaySwitchSound;