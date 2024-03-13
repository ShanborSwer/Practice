import CompB from "./CompBfun"
let CompA = ()=>{
    let ename="Shanbor"
    let salary = 50000
    return <>
        <h1>Component A</h1>
       <hr/>
        {/* <CompB one={"Good Morning "} emp_Name={ename} e_sal={salary} /> */}
        <CompB movie = {"TASM"}/>
        
    </>
}
export default CompA