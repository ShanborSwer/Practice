 import React from 'react'

class Employee extends React.Component{
    render(){
        return <React.Fragment>
            <h3>Employee Component</h3>
            <hr/>
            { <pre>{JSON.stringify(this.props)}</pre>}
            <h4>Employee Name : {this.props.user_Data[0].name}</h4>
            <h4>Employee Name : {this.props.user_Data[1].name}</h4>
            
        </React.Fragment>
    }
}
export default Employee 

/* import User from "../User/User"

let Employee = (props)=>{
    return <div>
        <h2>Employee Component</h2>
        <hr/>
        
        <h4>Employee Name : {props.user_Data[0].name}</h4>
        <h3>Employee Salary : {props.user_Data[0].salary}</h3>
        <h4>Employee Name : {props.user_Data[1].name}</h4>
        <h3>Employee Salary : {props.user_Data[1].salary}</h3>
    </div>
}
export default Employee */