let state = {
    product:{
        id : 101,
        name : "iPhone",
        price : 85000,
        colors : ['White','Black','Blue']
    },
    status : true,
    count : 100
}

let {product,count,status} = state;
console.log(status);
console.log(product);
console.log(count)