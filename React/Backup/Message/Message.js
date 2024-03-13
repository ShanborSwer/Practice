import React from "react";

class Message extends React.Component{
    message = "Good Morning"
    ename = "Shanbor"
    emp= {id:101,name:"Shanbor",salary:80000}
    render(){
        return <div>
                <h2>Message Component</h2>
                <hr/>
                <h4>Message : {this.message}</h4>
                <h3>Employee Name : {this.ename}</h3>
                <hr/>
                <h4>Employee Id : {this.emp.id} and Salary : {this.emp.salary}</h4>
        </div>
    }
}
export default Message