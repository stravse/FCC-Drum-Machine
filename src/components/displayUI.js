import React from "react";
import DisplayPower from "./displayPower";
import DisplaySound from "./displaySound";
import DisplaySwitchSound from "./displaySwitchSound";

class DisplayUI extends React.Component{
    render(){
        return(
            <div className="display-container">
                <DisplayPower changePower={this.props.changePower} power={this.props.power} />
                <DisplaySound power={this.props.power} display={this.props.display} />
                <DisplaySwitchSound changeSound={this.props.changeSound} soundBoard1={this.props.soundBoard1} />
            </div>
        )
    }
}

export default DisplayUI;