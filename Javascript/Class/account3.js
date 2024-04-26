/* class Account{
    acc_Bal = 0;
    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount;
    }

    get_Bal(){
        return this.acc_Bal;
    }

}

let r1 = new Account();


r1.deposit_Amount(5000);
r1.deposit_Amount(1000);
r1.deposit_Amount(4000);
console.log(r1.get_Bal()) */

class Account{
    acc_Bal = 0;

    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount
    }

    get_Bal(){
        return this.acc_Bal
    }

    withdraw_Amount(amount){
        this.acc_Bal=this.acc_Bal-amount
    }
}

let a1 = new Account

a1.deposit_Amount(5000)
a1.deposit_Amount(2000)
a1.withdraw_Amount(6000)
a1.deposit_Amount(4000)
console.log(a1.get_Bal())
