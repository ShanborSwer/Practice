let emp={ id:101,name:"Rahul", email:"Rahul@gmail.com"}

let details={loc:"Wayanad",sal:45000,email:"Rahul@ibm.com"}

let empDetails = {...emp , ...details}

console.log(empDetails);