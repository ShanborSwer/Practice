def outer():
    print("Outer Function")
    
    def inner():
        print("Inner Function")
        
        print(type(inner))
        print(id(inner))

outer()
        
