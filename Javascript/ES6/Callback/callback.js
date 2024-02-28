let sum = (a,b)=>{
    return a+b;
}

let multi = (a,b)=>{
    return a*b;
}

let calculate = (a,b,callback)=>{
    return callback(a,b)
}

let result = calculate(10,20,sum)
console.log(result)

let result1 = calculate(19,20,multi)
console.log(result1)