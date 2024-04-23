def emp(admin,*employees):
    print("Admin name:",admin , "Employee names:", employees)
    for employee in employees:
        print(employee)
        
emp ("Shanbor", "Sunil","Rajesh","Fahad")