function makeFancyString(s) {
    let count = 0;
    let ans = '';
    for (let i = 0; i < s.length; i++) {
        if (i > 0 && s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1
        }

        if (count <= 2) {
            ans += s[i]
        }
    }
    return ans;

};


let s="aaabeeecc";
console.log(makeFancyString(s))