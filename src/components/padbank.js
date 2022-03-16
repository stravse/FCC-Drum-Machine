import React from "react";
import Drumpad from "./drumpad";
import "bootstrap/dist/css/bootstrap.min.css";

/*
padbank will be passed down with an array of object
{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
*/

class PadBank extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const objArray = this.props.objArray.map((obj, index) => {
            return(<Drumpad />)
        })
        return(
            <div className="button-container">

            </div>
        )
    }
}