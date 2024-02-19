class Account{
    acc_Name;
    acc_Id;
    constructor(id,name){
        this.name=name;
        this.id=id;
    }
}
class SA extends Account{
    acc_Email;
    acc_Bal;
    min_Bal=500;
    constructor(id,name,email,amount){
        super(id,name);
        this.acc_Bal=amount;
        this.acc_Email=email;
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal;
    }
}
s1 = new SA(101,"Shanbor","SS@gmail.com",45000)
console.log(s1);
console.log(s1.get_Bal())