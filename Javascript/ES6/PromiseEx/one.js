let goToGoa =(success,failure)=>{
    let acc_Bal = 51000;
    acc_Bal>5000 ? success("Go to Goa"):failure("Go to Pg, sleep")
}
goToGoa((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})