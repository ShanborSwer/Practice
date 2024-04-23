import React, { Component } from 'react'
import Axios from 'axios'
class User extends Component {
  state={
    users:[]
  }  
 
  componentDidMount(){
     Axios.get('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>{
        console.log(resp.data)
        this.setState({ users:resp.data })
    })
    .catch((err)=>{
        console.log(Error)
    })
  }
  render() {
    return (
      <div>
        <h2>User Component</h2>
        <pre>{JSON.stringify(this.state.users)}</pre>
        <>
          <table border="2" width="100%">
            <thead>
              <tr>
                <th>Id</th> 
                <th>Name</th> 
                <th>Email</th> 
              </tr>
              </thead>
              <tbody>
                {
                this.state.users.map((user)=>{
                  return <tr key = {user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  </tr>
                 
                })}
              </tbody>
            
          </table>
        </>
       
      </div>
    )
  }
}

export default User