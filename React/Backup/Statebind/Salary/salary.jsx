import React from 'react'

class Salary extends React.Component{
    state = {
        salary : 30000
    }

    btnHandler = (value) => {
        console.log("Reading Button data",value)
        this.setState ({salary : 30000 +value})
    }
    render(){
       
        return <>
            <h2>Salary: {this.state.salary}</h2>
            <button onClick={this.btnHandler.bind(".this",50000)}>Hike 50k</button>
            <hr />
            <button onClick={this.btnHandler.bind(".this",100000)}> Hike 100k</button>
            <hr />
            <button onClick={this.btnHandler.bind(".this",0)}>Hike 0</button>
        </>
    }
}
export default Salary