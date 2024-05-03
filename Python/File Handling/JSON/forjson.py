import json

fp1 = open('user.json','r')
users = json.load(fp1)
print(type(fp1))

male_data = []
female_data = []

for user in users:
    if user['gender'] == 'Male':
        male_data.append(user)
    elif user['gender'] == "Female":
        female_data.append(user)

fp2 = open('male.json','w')
fp3 = open("female.json",'w')
json.dump(male_data,fp2)
json.dump(female_data,fp3)

fp1.close()
fp2.close()
fp3.close()