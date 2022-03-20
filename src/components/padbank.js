import React from "react";
import Drumpad from "./drumpad";
import "bootstrap/dist/css/bootstrap.min.css";

/*
padbank will be passed down with an array of object
sample object to be rendered
{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
*/

class PadBank extends React.Component{
    renderRow(j){
        /*
        this function will be used for generating a grid of drumpads
        the number of drumpads will be 3x3 or will be changed somewhere in the future
        we will be using an empty list and then push with a for loop
         */
        let row = []
        let objArray = this.props.objArray;
        for (let i=j*3; i<3*j+3; i++){
            let objElement = objArray[i]; // get the current object and render it on screen
            row.push(
                <Drumpad 
                key={objElement.id}
                keyCode={objElement.keyCode}
                keyTrigger={objElement.keyTrigger}
                url={this.props.power? objElement.url: "#"}
                soundId={objElement.id}
                onClick={this.props.changeDisplay}
                />
            )
        }
        return (
            <div key={"row "+ j} className="row">
                {row}
            </div>
        );
    }

    renderLaunchPad(){
        let bigRow = [];
        for (let i=0; i<3; i++) {
            bigRow.push(this.renderRow(i));
        }
        return bigRow;
    }

    render(){
        return(
            <div className="button-container">
                {this.renderLaunchPad()}
            </div>
        )
    }
}

export default PadBank;