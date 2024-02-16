class Account{
    acc_Name;
    acc_Email;
    constructor(name,email){
        this.acc_Email=email;
        this.acc_Name=name;
    }
}
class SA extends Account{
    acc_Id;
    acc_Bal;
    min_bal=500;
    constructor(id,name,email,amount){
        super(name,email)
        this.acc_Id=id;
        this.acc_Bal=amount;
    }
    get_Bal(){
        return this.acc_Bal-this.min_bal;
    }
}

class CA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=20000;
    constructor(id,name,email,amount){
        super(name,email)
        this.acc_Id=id;
        this.acc_Bal=amount;
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal
    }
}

let sa1 = new SA(101,"RG","rg@gmail.com",50000)
console.log(sa1);
console.log(sa1.get_Bal());

console.log("***************************")

let ca1 = new CA(102,"PG","pg@gmail.com",60000)
console.log(ca1);
console.log(ca1.get_Bal());