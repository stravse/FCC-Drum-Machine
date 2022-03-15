import React from "react";
import Drumpad from "./drumpad";
import "bootstrap/dist/css/bootstrap.min.css";

class PadBank extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const objArray = this.props.objArray.map((obj, index) => {
            return(<Drumpad />)
        })
        return(
            <div>

            </div>
        )
    }
}