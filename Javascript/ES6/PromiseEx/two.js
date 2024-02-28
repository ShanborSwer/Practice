let greet = new Promise((resolve,reject)=>{
    let greetings = false;
    setTimeout(()=>{
        if(greetings){
            resolve("Hello")
        }
        else{
            reject("Failed")
        }
    },3000);
});

greet.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})