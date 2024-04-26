from functools import reduce

marks = [45,48,49,40,50]

total = reduce(lambda mark1,mark2:mark1+mark2 , marks)

print(total)