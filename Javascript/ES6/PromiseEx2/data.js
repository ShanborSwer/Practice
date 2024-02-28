let employees = [
    {id:101,name:"Shanbor",salary:45000},
    {id:102,name:"Sunil",salary:55000}
]

let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let dbstatus = false  
            if(dbstatus){
                resolve("Data inserted")
                employees.push(emp)
            }
            else{
                reject("Failed")
            }
        },4000)
    })
}

let getEmployees=()=>{
    setTimeout(()=>{
        let rows = ""
        employees.forEach((employee)=>{
            rows = rows + `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.salary}</td>`
        })
        document.getElementById("abc").innerHTML = rows;
    },2000)
}

createEmployee({id:103,name:Rajesh,salary:65000})
.then((msg)=>{
    console.log(msg)
    getEmployees()
})
.catch((err)=>{
    console.log(err)
})