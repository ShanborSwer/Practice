import React from "react";
import employees from './data'
class Employees extends React.Component{
    render(){
        return <div>
            <pre>{JSON.stringify(employees)}</pre>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {employees.map((employee)=>{
                                    return <tr key ={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.first_name}</td>
                                        <td>{employee.last_name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.gender}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Employees