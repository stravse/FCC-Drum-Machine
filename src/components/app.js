import React from "react";
import PadBank from "./padbank"
import DisplayUI from "./displayUI";
import { soundBoard1, soundBoard2 } from "./soundBoards";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/index.scss";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            soundBoard1: true,
            currentDisplay: "MIXER ON",
            power: true,
            volume: 30,
        }
        this.changeDisplay = this.changeDisplay.bind(this);
        this.changeSound = this.changeSound.bind(this);
        this.changePower = this.changePower.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
    }
    changeDisplay(soundId){
        this.setState({
            currentDisplay: soundId,
        })
    }
    changeSound(){
        this.setState(state =>{ return{
            soundBoard1: !state.soundBoard1,
            currentDisplay: state.soundBoard1? soundBoard2.name: soundBoard1.name,
        }})
    }
    changePower(){
        this.setState(state =>{ return{
            power: !state.power,
        }})
    }
    changeVolume(event){
        this.setState(state =>{ return{
            volume: event.target.value,
            currentDisplay: "Volume: " + event.target.value,
        }})
        setTimeout(()=> {this.clearDisplay()}, 1000);
    }
    clearDisplay(){
        this.setState({currentDisplay: String.fromCharCode(160)});
    }

    render(){
        const clips = document.getElementsByClassName("clip");
        const drumPad = document.getElementsByClassName("drum-pad")
        clips.forEach(sound => {
            sound.volume = this.state.volume/100;
        });
        if (!this.state.power){
            drumPad.forEach(drum => {
                drum.classList.replace("btn-neon-blue", "btn-neon-blue-active")
            })
        } else {
            drumPad.forEach(drum =>{
                drum.classList.replace("btn-neon-blue-active","btn-neon-blue");
            })
        }
        return(
            <div id="drum-machine" className="wrapper">
                <PadBank objArray={this.state.soundBoard1? soundBoard1.clips: soundBoard2.clips} 
                power={this.state.power}
                changeDisplay={this.changeDisplay}
                />
                <DisplayUI display={this.state.currentDisplay} 
                power={this.state.power}
                changePower={this.changePower} 
                changeSound={this.changeSound} 
                changeVolume={this.changeVolume}
                soundBoard1={this.state.soundBoard1}
                volume={this.state.volume}
                />
            </div>
        )
    }
}

export default App;