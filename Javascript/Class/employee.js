class Employee{
    eid=101;
    ename;
    get_Details(ename){
        this.ename = ename;
    }
}

let e1= new Employee;
let e2 = new Employee;
let e3 = new Employee;

console.log(e1);
console.log(e2);
console.log(e3);

e1.get_Details("Shanbor");
console.log(e1)