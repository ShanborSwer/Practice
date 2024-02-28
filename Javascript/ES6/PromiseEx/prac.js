let doTask =(success,failure)=>{
    let flag = true
    if (flag == false){
        success("Successful")
    }
    else{
        failure("Failure")
    }
}

doTask((msg)=>{
    console.log(msg)
},
(err)=>{
    console.log(err)
})