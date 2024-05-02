fp1 = open('user.txt','r')
data = fp1.read()
print(data)

fp2 = open('data.txt','w')
fp2.write(data)
print('Written Succesfully')

fp1.close()
fp2.close()