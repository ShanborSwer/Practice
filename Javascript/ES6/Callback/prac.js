let employees = [
    {id:1,name:"Shanbor",sal:50000},
    {id:2,name:"Sunil",sal:60000}
]

let createEmployee = (emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback()
    },3000)
}

let getEmployees = ()=>{
    setTimeout(()=>{
        let rows = "";
        for (employee of employees){
            rows = rows +  `<tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.sal}</td>
            </tr>`
        }
        document.getElementById('abc').innerHTML=rows;
    })
}

createEmployee({id:3,name:"Rajesh",sal:70000},getEmployees)