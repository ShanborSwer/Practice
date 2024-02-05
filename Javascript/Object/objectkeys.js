let emp = {
    id : 101,
    eName : "Shanbor",
    eSal : 45000
}

let person={}
console.log(Object.keys(emp));
console.log(Object.values(emp));
console.log("*********************");

console.log(Object.keys(emp).length);
console.log(Object.values(emp).length);
console.log("*****************")

console.log(Object.keys(emp).length>0);
console.log(Object.values(emp).length>0)
console.log("*******************");

console.log(Object.keys(person).length>0)
console.log("******************")

for (key in emp){
    console.log (key,":",emp[key]);
}