import React from "react";

class Counter extends React.Component{
    state = {
        quantity : 1
    }
    incrHandler = () =>{
        this.setState({quantity: this.state.quantity + 1})
    }

    decrHandler = () =>{
        this.setState({quantity: this.state.quantity - 1})
    }
    render(){
        return <><h2>Counter Component</h2>
        <h2>Quantity : {this.state.quantity}</h2>
        <button onClick={this.decrHandler}>Decr</button>
        <button onClick={this.incrHandler}>Incr</button>
        </>
    }
}
export default Counter