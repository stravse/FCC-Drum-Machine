import React from "react";

class DisplayPower extends React.Component{
    render(){
        return(
            <div className="power-container">
                <div className="power-text">Power</div>
                <button className="power-button" onClick={this.props.changePower} >{this.props.power? "Off": "On"}</button>
            </div>
        )
    }
}

export default DisplayPower;