def outer():
    print("Outer Function")
    
    def inner():
        print("inner Function")
        
        print(id(inner))
    
    return inner

x = outer()
print(id(x))