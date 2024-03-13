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
        return <React.Fragment>
                <div className="Container mt-5">
                </div>
                    <div className="row">
                    </div>
                        <div className="col-md-6">
                        </div>
                            <div className="card">
                           
                                <div className="card-header">
                                    <h4>Quantity : {this.state.quantity}</h4>
                                </div>
                                    <div className="card-body">
                                        <button className="btn btn-success mr-5" onClick={this.decrHandler}>Decr</button>
                                        <button className="btn btn-warning" onClick={this.incrHandler}>Incr</button>
                                    </div>
                            </div>
                            
                        

                    
              
                 </React.Fragment>
    }   
}
export default Counter