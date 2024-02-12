class Account{
    acc_Id=101
    acc_Name="Rahul Gandhi"
    acc_Bal = 5000

    deposit_Amount(amount){
        console.log(amount +" Deposited Succesfully")
    }
}

let a1= new Account()
a1.deposit_Amount(5000)