prices = [99,199,299,399,499,599,699]

def add_one(price):
    return price+1

new_prices = list(map(add_one,prices))
print(prices)
print(new_prices)