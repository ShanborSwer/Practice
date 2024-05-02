# print all file pointer members

fp = open('user.txt','r')

print(dir(fp))

fp.close()