import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const activeStyle = {
    backgroundColor: "#5c636a",
    borderColor: "#565e64",
    boxShadow: "",
}
const inActiveStyle = {
    boxShadow: "5px 5px 7px grey",
}
/*
keyCode
keyTrigger
url
onClick
*/

class Drumpad extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            active: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleActive = this.handleActive.bind(this);
    }
    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    handleClick(){
        this.props.onClick(); // will handle the changing of the display
        this.handleActive();
        setTimeout(()=> {this.handleActive()},100);
    }
    handleKeyPress(e){
        if (e.keyCode === this.props.keyCode){
            this.handleClick();
        }
    }
    handleActive(){
        this.setState(state =>{return{
            active: !state.active,
        }});
    }
    render(){
        return(
            <div className="btn btn-secondary" onClick={this.handleClick} style={this.state.active? activeStyle: inActiveStyle} >
                <audio className="clip" id={this.props.keyTrigger} src={this.props.url} />
                {this.props.keyTrigger}
            </div>
        )
    }
}

export default Drumpad;