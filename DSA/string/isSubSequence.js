// Is Subsequence
// 🔹 Problem:
// Check if string s is a subsequence of string t.



function isSubSequence(s, t) {
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;

        }
        j++;

    } return i === s.length
}


let s1 = "abc", t1 = "ahbgdc"
let s2 = "axc", t2 = "ahbgdc"

console.log(isSubSequence(s1, t1))
console.log(isSubSequence(s2, t2))