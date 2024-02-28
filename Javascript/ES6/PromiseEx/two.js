let conditions = false;
const greet = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(conditions){
            resolve("Hello")
        }
        else{
            reject("Failed")
        }
    },2000);
});

greet.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})