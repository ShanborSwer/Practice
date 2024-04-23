def outer():
    print("Outer Function")
    
    def inner():
        print("Inner Function")
        
        return 100

result = outer()
print(result)