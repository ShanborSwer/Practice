import React from 'react'
import Navbar from '../../react22/src/Navbar/Navbar'
import Message from './Message/Message'
import Salary from '../../react22/src/Salary/salary'
class App extends React.Component{

    render(){
        return <>
            <Navbar />
            <Salary />

        </>
    }
}

export default App