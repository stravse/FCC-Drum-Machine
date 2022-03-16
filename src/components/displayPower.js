import React from "react";

class DisplayPower extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            switchOn: true,
        }
        this.handlePower = this.handlePower.bind(this);
    }
    handlePower(){
        this.props.changePower();
        this.setState(state =>{return{
            switchOn: !state.switchOn,
        }})
    }
    render(){
        return(
            <div className="power-container">
                <div className="power-text">Power</div>
                <button className="power-button" onClick={this.handlePower} >{this.state.switchOn? "Off": "On"}</button>
            </div>
        )
    }
}

export default DisplayPower;