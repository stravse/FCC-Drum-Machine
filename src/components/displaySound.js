import React from "react";
import "../scss/index.scss";

class DisplaySound extends React.Component{
    render(){
        return(
            <div className="display-text display-clip" id="display">{this.props.power? this.props.display: "MIXER OFF"}</div>
        )
    }
}

export default DisplaySound;