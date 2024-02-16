class Parent {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    details(){
        console.log("Child name :", this.name)
        console.log("Child age: ", this.age)
    }

}

class Child extends Parent {}

let a1 = new Child("Shanbor",25)
console.log(a1.details());