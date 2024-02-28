let goToGoa =(success,failure)=>{
    let acc_Bal = 10000;
    if (acc_Bal > 50000){
        success("Lets go to Goa")
    }
    else{
        failure("Trip failed")
    }
}
goToGoa((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})