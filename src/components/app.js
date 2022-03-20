import React from "react";
import PadBank from "./padbank"
import { soundBoard1, soundBoard2 } from "./soundBoards";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayUI from "./displayUI";



  


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            soundBoard1: true,
            currentDisplay: " ",
            power: true,
        }
        this.changeDisplay = this.changeDisplay.bind(this);
        this.changeSound = this.changeSound.bind(this);
        this.changePower = this.changePower.bind(this);
    }
    changeDisplay(soundId){
        this.setState({
            currentDisplay: soundId,
        })
    }
    changeSound(){
        this.setState(state =>{ return{
            soundBoard1: !state.soundBoard1,
        }})
    }
    changePower(){
        this.setState(state =>{ return{
            power: !state.power,
        }})
        
    }
    render(){
        return(
            <div id="drum-machine" className="container-fluid vh-100 d-flex justify-content-around align-items-center ">
                <PadBank objArray={this.state.soundBoard1? soundBoard1: soundBoard2} 
                power={this.state.power}
                changeDisplay={this.changeDisplay}
                />
                <DisplayUI display={this.state.currentDisplay} 
                power={this.state.power}
                changePower={this.changePower} 
                changeSound={this.changeSound} 
                soundBoard1={this.state.soundBoard1}
                />
            </div>
        )
    }
}

export default App;