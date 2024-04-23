import React from 'react'
import Navbar from '../../react22/src/Navbar/Navbar'
import Employee from './List Rendering/Employee'
//import Salary from '../../Backup/Statebind/Salary/salary'

class App extends React.Component{
    render(){
        return <>
            <Navbar />
            <Employee />

        </>
    }
}

export default App