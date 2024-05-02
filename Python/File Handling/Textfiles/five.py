# print all file pointer members

fp = open('user.txt','r')

print(fp.mode)
print(fp.name)
print(fp.closed)
print(fp.readable())
print(fp.writable())

fp.close()
