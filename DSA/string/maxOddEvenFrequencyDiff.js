function maxDifference(s)  {
    let obj={};
    let maxEven=0;
    let maxOdd=0;
    for(let char of s){
        if(obj[char]===undefined){
            obj[char]=1;
        }else{
            obj[char]++;
        }

    }
    for(let key in obj){
        if(obj[key]%2!==0){
            maxOdd=Math.max(maxOdd,obj[key])
        }else{
             maxEven=Math.max(maxEven,obj[key])
        }
    }
    return Math.abs(maxOdd-maxEven)
};

let s="aaaaabbc";
console.log(maxDifference(s))

let s1 = "abcabcab";
console.log(maxDifference(s1))