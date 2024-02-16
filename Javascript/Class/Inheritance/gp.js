class GP{
    constructor(){
        console.log("GP Constructor");
    }
    m1(){
        console.log("GP m1 method");
    }
}
class Parent extends GP{
    constructor(){
        super()
        console.log("Parent Class Constructor");
    }
    m2(){
        console.log("Parent m2 method");
    }
}

class Child extends GP{
    constructor(){
        super()
        console.log("Child Class Constructor")
    }
    m3(){
        console.log("Child m3 method")
    }
}

let c1 = new Child()
let p1 = new Parent()


c1.m1();
c1.m3();
p1.m2();
