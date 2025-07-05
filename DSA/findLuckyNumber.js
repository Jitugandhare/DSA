var findLuckyNumber=function(arr,n){
    let obj={};
    for(let num of arr){
        if(obj[num]===undefined){
            obj[num]=1;

        }else{
            obj[num]++;
        }
    }
    let max=-1;
    for(let key in obj){
        if(Number(key)===obj[key]){
           max=key;
           max=Math.max(max,key)
            
        }
        
    }
    return max
}



let n=4;
let arr=[2,2,3,4];
console.log(findLuckyNumber(arr,n))
// findLuckyNumber(arr,n)
let n1=6;
let arr1 = [1,2,2,3,3,3];
console.log(findLuckyNumber(arr1,n1))


let n2=5;
let arr2=[2,2,2,3,3];
console.log(findLuckyNumber(arr2,n2))