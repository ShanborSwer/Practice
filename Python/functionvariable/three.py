a = 10 
def f1():
    global b
    b=20
    
f1()
print(a)
print(b)