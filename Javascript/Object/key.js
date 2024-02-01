let product = {
    pid : 101,
    pname : "iPhone 13",
    price :  65000,
    color : ['grey','black','blue','white']
}

for (key in product){
    console.log(key,":", product[key]);
}

console.log (product.color[2]);