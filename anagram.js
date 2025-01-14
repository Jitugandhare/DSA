function isAnagram(s,t) {
    s = s.replace(/\s/g, " ").toLowerCase();
    t=t.replace(/\s/g," ").toLowerCase();
    let S1=s.split("").sort().join('');
    let S2=t.split("").sort().join('');
    
    return S1===S2
}









let s = "anagram";
let t = "nagar"
let ans = isAnagram(s,t);
console.log(ans)