/* class Account{
   

    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;
    }

    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount;
    }

}

var r1 = new Account(101,"Shanbor",10000)
console.log(r1);

var r2 = new Account(102,"Yunus",20000)
console.log(r2)

console.log("*************");

r1.deposit_Amount(1000)
console.log(r1);

r2.deposit_Amount(3000)
console.log(r2);   */

class Car{
    constructor(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    upPrice(price){
        this.price = this.price+price;
    }
}

let out = new Car(1,"Thar",250000);
console.log(out)

let out2 = new Car(2,"Swift",400000)

out.upPrice(5000)
console.log(out);

out2.upPrice(50000);
console.log(out2);