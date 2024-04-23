def outer():
    print("Outer Function")
    
    def inner1():
        print("inner Function 1")
        inner1()
        
    def inner2():
        print("inner Function 2")
        inner2()
        
outer()

