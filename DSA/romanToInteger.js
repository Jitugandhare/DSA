var romanToInt = function (s) {
    let obj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let sum=0;
    for(let i=0;i<s.length;i++){
        sum+=obj[s[i]]
    }
    return +sum;

};

let s="III"
console.log(romanToInt(s))

let str="MCMXCIV";
console.log(romanToInt(str))