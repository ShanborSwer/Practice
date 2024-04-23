import React from 'react'

class Login extends React.Component{
    state = {
        email : "",
        password : ""
    }

    emailHandler = (event)=>{
        this.setState({email : event.target.value})
    }
    passwordHandler = (event)=>{
        this.setState({password : event.target.value})
    }

    submitHandler = (event) =>{
        event.preventDefault()
    }
   
    render(){
        return <>
        <h2>Login Page</h2> 
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
        <label>Email</label>
        <input type="text"  onChange={this.emailHandler}/>
        <br /><br />
        <label>Password</label>
        <input type="text" onChange={this.passwordHandler}/>
        <br /><br />
        <input type="submit" value="Login" />
        </form>
        </>
    }
}

export default Login