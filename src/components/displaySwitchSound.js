import React from "react";
import "../scss/display.scss";

class DisplaySwitchSound extends React.Component{
    render(){
        return(
            <div className="switch-sound-container">
                <div className="display-text">CHANGE SOUND</div>
                <button className="switch-button" onClick={this.props.changeSound} >{this.props.soundBoard1? "Sound 2": "Sound 1"}</button>
            </div>
        )
    }
}

export default DisplaySwitchSound;