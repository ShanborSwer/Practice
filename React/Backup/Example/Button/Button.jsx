import React from "react";

class Button extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            number : 0
        }
    }

    btnHandler = () =>{
      this.setState({number : this.state.number+1})
    }

    render(){
        return <div>
            <h2>Number : {this.state.number}</h2>
            <button onClick={this.btnHandler}>Increment</button>
        </div>
    }
}

export default Button