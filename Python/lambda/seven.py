prices = [99,199,999,699,499,459,899]

filter_obj = filter(lambda price:price<500, prices)

new_prices = list(filter_obj)
print(new_prices)