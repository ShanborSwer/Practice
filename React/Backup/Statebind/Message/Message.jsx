import React from 'react'

class Message extends React.Component{
    state = {
        msg :  "Hello"
     }

    messageHandler = (msg) =>{
        
        this.setState({msg : msg})
    }

    render(){
        return <>
         <h2>Wish Message : {this.state.msg}</h2>
         <button onClick={this.messageHandler.bind(this, "Good Morning")}>GM</button>
         <button onClick={this.messageHandler.bind(this, "Good Afternoon")}>GA</button>
         <button onClick={this.messageHandler.bind(this, "Good Night")}>GN</button>
        </>
    }
}

export default Message