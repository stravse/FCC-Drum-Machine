import React from "react";

class DisplaySound extends React.Component{
    render(){
        return(
            <div id="display">{this.props.display}</div>
        )
    }
}

export default DisplaySound;