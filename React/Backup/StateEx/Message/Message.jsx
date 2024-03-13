import React from "react";

class Message extends React.Component{
    message = "Hello";
    changeMessageHandler = () => {
        console.log("Test Case")
        this.message = "Good Morning";
        console.log(this.message)
        this.forceUpdate()
    }
    render(){
        return <>
        <h1>Message Component</h1>
        <h3>Message : {this.message}</h3>
        <button onClick={this.changeMessageHandler}>Change Message to Good Morning</button>
        <button >Change Message to Good Night</button>
        </>
    }
}

export default Message