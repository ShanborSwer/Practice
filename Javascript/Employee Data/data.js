let employees = [
    {id:101,name:"Shanbor",salary:80000},
    {id:102,name:"Sunil",salary:35000},
    {id:103,name:"Rajesh",salary:35000},
    {id:104,name:"Ashish",salary:35000}
]

function data(){
    let rows = ''
    for (emp of employees){
    rows+= `<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.salary}</td>
    </tr>`
    }
    document.getElementById('abc').innerHTML=rows;
    
   
}