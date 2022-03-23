import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/index.scss";

class Drumpad extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    handleClick(){
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.play();
        this.props.onClick(this.props.soundId); // will handle the changing of the display
        sound.parentElement.classList.replace("btn-neon-blue", "btn-neon-blue-active")
        setTimeout(()=> {sound.parentElement.classList.replace("btn-neon-blue-active", "btn-neon-blue")}, 150);
    }
    handleKeyPress(e){
        if (e.keyCode === this.props.keyCode){
            this.handleClick();
        }
    }

    render(){
        return(
            <div id={this.props.soundId} className="drum-pad btn-neon btn-neon-blue" onClick={this.handleClick}>
                <audio className="clip" id={this.props.keyTrigger} src={this.props.url} />
                {this.props.keyTrigger}
            </div>
        )
    }
}

export default Drumpad;