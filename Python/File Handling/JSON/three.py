import  json
emp = {
    'id':101,
    'name':'Shanbor',
    'avail' : True,
    'Location' : None
}

emp_json = json.dumps(emp)

print(emp_json)

print(type(emp_json))