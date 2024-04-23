import React from "react";

class Comp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentTime : new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({currentTime:new Date().toLocaleTimeString()})
        },1000)
    }

    render(){
        return <>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="header bg-primary text-white">
                            <h3>Time -- {this.state.currentTime}</h3>
                        </div>
                        <div className="body"></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    }
}

export default Comp