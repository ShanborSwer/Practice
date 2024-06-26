import React from "react"
class Navbar extends React.Component{
    render(){
        return <div className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a href="#" className="navbar-brand">React Life Cycle Method</a>
            <div className="ml-auto">
                <ul className="navbar nav">
                    <li className="nav-list">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-list">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-list">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    }
}
export default Navbar