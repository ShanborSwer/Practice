import React from "react";

class Message extends React.Component{
   state = {
        message: "Hello"
   }

   gmHandler = () =>{
    console.log("Test Case Two")
    this.setState({ message : "Hello, Good Morning" })
   }

   gaHandler = () =>{
    this.setState({message : "Hello, Good Afternoon"})
   }
   gnHandler = () =>{
    this.setState({message : "Hello, Good Night"})
   }
    render(){
        console.log("Test Case one")
        return <>
        <h1>Message Component</h1>
        <h3>Message : {this.state.message}</h3>
        <button onClick={this.gmHandler}>Good Morning</button>
        <button onClick={this.gaHandler}>Good Afternoon</button>
        <button onClick={this.gnHandler}>Good Night</button>
        </>
    }
}

export default Message