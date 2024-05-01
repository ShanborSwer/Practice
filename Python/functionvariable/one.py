min_bal = 500  # global variable, scope the entire file

def account():
    acc_bal = 5000 #local variable , scope within the file
    print(acc_bal)
    print(min_bal)
    
account()
print(min_bal)