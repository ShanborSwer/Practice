import React from 'react'
import Employee from '../Employee/Employee'
class User extends React.Component{
    users = [{id:101,name:"Shanbor",salary:45000},
             {id:102,name:"Yunus",salary:50000}]
    render(){
        return <React.Fragment>
            <h2>User Component</h2>
            <hr/>
            <Employee user_Data = {this.users}/> 
        </React.Fragment>
    }
}
export default User 

/* import React from "react";
import Employee from '../Employee/Employee'

let User = ()=>{
   let users = [{id:101,name:"Shanbor",salary:50000},
             {id:102,name:"Yunus",salary:60000}]
    return <div>
        <h2>User Component</h2>
        <hr/>
        
        <Employee user_Data={users}/>
    </div>
}
export default User */