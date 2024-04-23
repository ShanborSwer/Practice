import React from "react";

class Registration extends React.Component{
    state = {
        email : "",
        username : "",
        password : "",
        mobile : "",
        termsconditions : false
    }

    updateFormHandler = (event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
       
    }

    submitHandler =(event) =>{
        event.preventDefault()
        console.log(this.state)
    }
    render(){
      
        return(
            <div className="container mt-5">
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <input type="text" name="username" className="form-control" placeholder="Username" onChange={this.updateFormHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" placeholder="Email Id"  onChange={this.updateFormHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" className="form-control" placeholder="Password"  onChange={this.updateFormHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" name="number" className="form-control" placeholder="Mobile Number"  onChange={this.updateFormHandler}/>
                                    </div>
                                    <div>
                                        <input type="checkbox"  /> Please accept Terms&Conditions
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-primary" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration