function longestSubStrWithnoduplicate(s) {
    let n = s.length;
    let max = 0;
    let char = new Set();
    let l = 0; // l pointer for the sliding window
    
    for (let r = 0; r < n; r++) {
        // If the character at `r` is already in the set, move `l` pointer
        while (char.has(s[r])) {
            char.delete(s[l]);
            l++;
        }
        
        // Add the character at `r` to the set
        char.add(s[r]);
        
        // Update the maximum length of the substring without duplicates
        max = Math.max(max, r - l + 1);
    }
    
    return max;
}

let s = 'abcabcbb';
console.log(longestSubStrWithnoduplicate(s)); // 3

let s1 = 'pwwkew';
console.log(longestSubStrWithnoduplicate(s1)); // 3
