class Account {
    open_Account(){
        console.log("Account Opened Successfully");
    }
}

class Savings_Account extends Account {
    deposit(){
        console.log("Amount Deposited")
    }
}
let c1 = new Savings_Account();
c1.open_Account()
c1.deposit()
class CC_Account{}