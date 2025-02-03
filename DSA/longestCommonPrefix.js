function longestCommonPrefix(strs) {
    if (!strs.length) {
        return "";
    }

    strs.sort();
    let f = strs[0];
    let l = strs[strs.length - 1];
    let i = 0;
    while (i < f.length && f[i] === l[i]) {
        i++;
    }

    return f.substring(0,i)
};

let strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs))