let emp = {
    id:101,
    name:"Rahul",
    email:"Rahul@gmail.com"
}

let newEmp = {}

for (prop in emp){
    newEmp[prop]=emp[prop]
}

console.log(newEmp);