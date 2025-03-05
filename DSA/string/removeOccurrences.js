// Remove All Occurrences of a Substring

// Given two strings s and part, perform the following operation on s until all occurrences of
//  the substring part are removed:

// Find the leftmost occurrence of the substring part and remove it from s.
// Return s after removing all occurrences of part.

// A substring is a contiguous sequence of characters in a string.



function removeOccurrences(s, part) {
    while(s.includes(part)){
        s=s.replace(part,'')
    }
    return s;
}

let s = "daabcbaabcbc";
let part = "abc"
let s1 = "axxxxyyyyb";
let  part1 = "xy";


console.log(removeOccurrences(s, part))
console.log(removeOccurrences(s1, part1))