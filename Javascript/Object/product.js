let product = {
    pid : 101,
    pname : "IPhone 14",
    price : 65000,
    color : ['grey', 'black', 'red']
}

for (prop in product){
    console.log(product[prop]);
}

console.log (product.color[1])