const myPromise=()=>Promise.resolve("I have resolved");


function first(){
    myPromise().then((res)=>console.log(res));
    console.log("second");
}
async function second(){
    console.log(await myPromise());
    console.log('second')
}
first()
second()